import { NextResponse } from "next/server";

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

    // Send to n8n webhook (handles email + Google Sheets)
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("N8N_WEBHOOK_URL environment variable is not configured");
      return NextResponse.json(
        { error: "Failed to send your enquiry. Please try calling us instead." },
        { status: 500 }
      );
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        service: service || "Not specified",
        message: message.trim(),
        submittedAt: new Date().toISOString(),
        source: "plumblinemk.co.uk",
      }),
    });

    if (!webhookResponse.ok) {
      console.error("n8n webhook error:", webhookResponse.status, await webhookResponse.text());
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
