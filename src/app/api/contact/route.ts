import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not configured");
  }
  return new Resend(apiKey);
}

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;
const requestLog = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = requestLog.get(ip);

  if (!record || now > record.resetTime) {
    requestLog.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Send email to business
    const resend = getResend();
    const { error: sendError } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Plumbline MK Website <onboarding@resend.dev>",
      to: process.env.EMAIL_TO || "enquiries@plumblinemk.co.uk",
      replyTo: email,
      subject: `New Enquiry: ${service || "General"} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0B356D; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Website Enquiry</h1>
          </div>
          <div style="padding: 24px; background-color: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px; vertical-align: top;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone.replace(/\s/g, "")}">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Service:</td>
                <td style="padding: 8px 0;">${service || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 8px 0;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px; text-align: center; color: #666; font-size: 12px;">
            Sent from plumblinemk.co.uk contact form
          </div>
        </div>
      `,
    });

    if (sendError) {
      console.error("Email send error:", sendError);
      return NextResponse.json(
        { error: "Failed to send your enquiry. Please try calling us instead." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try calling us instead." },
      { status: 500 }
    );
  }
}
