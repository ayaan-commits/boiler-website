import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Scale, ShieldCheck, CreditCard, AlertTriangle, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms & Conditions | BoilerPro",
  description: "Terms and conditions for BoilerPro heating and boiler services. Our service terms, payment conditions, warranties, and customer obligations.",
  alternates: { canonical: "https://www.boilerpro.co.uk/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Our service terms, warranties, and customer obligations
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-text-secondary leading-relaxed mb-4">
              These Terms and Conditions govern the provision of heating, boiler, and plumbing services by BoilerPro ("we", "us", "our") to customers ("you", "your"). By engaging our services, you agree to be bound by these terms.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong>Company Details:</strong><br />
              BoilerPro<br />
              {siteConfig.address.full}<br />
              Company Registration Number: {siteConfig.companyNumber}<br />
              Gas Safe Registration: {siteConfig.gasSafeNumber}
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              <strong>Last updated:</strong> February 2024
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                  1. General Terms
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed pl-14">
              <div>
                <h3 className="font-semibold text-primary mb-2">1.1 Acceptance of Terms</h3>
                <p>
                  By requesting a quote, booking a service, or accepting our written estimate, you agree to these Terms and Conditions. These terms apply to all services including boiler installation, repair, servicing, gas safety certificates, and emergency callouts.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">1.2 Variations</h3>
                <p>
                  We reserve the right to update these terms at any time. Changes will be posted on our website and apply to future bookings. Your continued use of our services constitutes acceptance of revised terms.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">1.3 Entire Agreement</h3>
                <p>
                  These Terms and Conditions, together with any written quotation or contract, constitute the entire agreement between you and BoilerPro. No verbal representations or promises are binding unless confirmed in writing.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <ShieldCheck className="w-5 h-5 text-teal" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                  2. Our Services
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed pl-14">
              <div>
                <h3 className="font-semibold text-primary mb-2">2.1 Service Description</h3>
                <p>We provide the following services:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Boiler installation (combi, system, and conventional boilers)</li>
                  <li>Boiler repairs and fault diagnosis</li>
                  <li>Annual boiler servicing</li>
                  <li>Gas safety certificates (CP12)</li>
                  <li>Emergency plumbing and heating repairs</li>
                  <li>Underfloor heating installation</li>
                  <li>General plumbing and heating work</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">2.2 Gas Safe Compliance</h3>
                <p>
                  All gas work is carried out by Gas Safe registered engineers in accordance with current Gas Safety (Installation and Use) Regulations 1998 and relevant British Standards. We will provide Gas Safe certification upon completion of gas work.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">2.3 Service Standards</h3>
                <p>
                  We aim to provide high-quality workmanship and professional service. All work will be carried out with reasonable skill and care in accordance with industry best practices and manufacturer guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                  3. Quotations & Pricing
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed pl-14">
              <div>
                <h3 className="font-semibold text-primary mb-2">3.1 Free Quotations</h3>
                <p>
                  We provide free, no-obligation quotations for most services. Quotations are valid for 30 days from the date of issue unless otherwise stated. Site surveys may be required for accurate quotes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">3.2 Fixed Price Quotes</h3>
                <p>
                  Where a fixed price quote is provided, this price is binding unless additional work is required due to unforeseen circumstances (see section 3.4). Fixed quotes include all labor, materials, and VAT unless specified otherwise.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">3.3 Diagnostic Fees</h3>
                <p>
                  For repairs and fault finding, a diagnostic fee may apply. This covers the engineer's time to assess the problem. If you proceed with the repair, the diagnostic fee is typically deducted from the final invoice.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">3.4 Additional Work</h3>
                <p>
                  If additional work is required beyond the original quote (e.g., corrective work to meet regulations, hidden defects, customer requests), we will inform you before proceeding. Additional work will be charged separately and requires your authorization.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">3.5 Price Increases</h3>
                <p>
                  Prices are subject to change without notice. However, price increases will not affect confirmed bookings or accepted quotations.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <CreditCard className="w-5 h-5 text-success" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                  4. Payment Terms
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed pl-14">
              <div>
                <h3 className="font-semibold text-primary mb-2">4.1 Payment Methods</h3>
                <p>We accept payment by:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Cash</li>
                  <li>Bank transfer (BACS)</li>
                  <li>Credit/Debit card</li>
                  <li>Finance (subject to approval)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">4.2 Payment Schedule</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Repairs & Servicing:</strong> Payment due upon completion of work</li>
                  <li><strong>Installations under £2,000:</strong> Payment due upon completion</li>
                  <li><strong>Installations over £2,000:</strong> 25% deposit required to book installation, balance due upon completion</li>
                  <li><strong>Emergency Callouts:</strong> Payment due at time of service</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">4.3 Late Payment</h3>
                <p>
                  Payment is due within 7 days of invoice date unless alternative terms are agreed. Late payments may incur interest charges at 8% above Bank of England base rate per annum in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">4.4 Deposits</h3>
                <p>
                  Where a deposit is required, it is non-refundable if you cancel within 7 days of the scheduled installation date (unless we cannot fulfill the booking). Deposits secure materials and booking slots.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">4.5 Finance Options</h3>
                <p>
                  Finance is available subject to credit approval from our finance partner. Terms and conditions of the finance agreement are provided separately and are subject to the lender's requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              5. Guarantees & Warranties
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <div>
                <h3 className="font-semibold text-primary mb-2">5.1 Workmanship Guarantee</h3>
                <p>
                  We provide a 12-month guarantee on all workmanship. This covers faults arising from our installation or repair work. The guarantee does not cover general wear and tear, misuse, or work carried out by third parties.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">5.2 Parts Warranty</h3>
                <p>
                  Parts supplied by us carry the manufacturer's warranty (typically 1-12 years depending on the product). We will facilitate warranty claims where applicable.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">5.3 Boiler Warranties</h3>
                <p>
                  New boilers come with manufacturer warranties ranging from 2-12 years. Warranty terms are subject to annual servicing by a Gas Safe engineer (can be with us or another qualified provider). We will register your boiler warranty on your behalf.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">5.4 Insurance-Backed Guarantee</h3>
                <p>
                  For boiler installations over £500, we provide an optional insurance-backed guarantee for an additional fee. This protects you if we cease trading during the guarantee period.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">5.5 Exclusions</h3>
                <p>Guarantees and warranties do not cover:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Faults caused by misuse, neglect, or unauthorized modifications</li>
                  <li>Damage from external factors (e.g., power surges, freezing, flooding)</li>
                  <li>Normal wear and tear</li>
                  <li>Failure to maintain the system as recommended</li>
                  <li>Work carried out by third parties after our installation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              6. Appointments & Cancellations
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <div>
                <h3 className="font-semibold text-primary mb-2">6.1 Appointment Booking</h3>
                <p>
                  Appointments are booked subject to availability. We will confirm your appointment date and time window via email or SMS. Please ensure someone aged 18+ is present during the appointment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">6.2 Cancellation by Customer</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>More than 48 hours notice:</strong> No charge, full refund of deposit (if applicable)</li>
                  <li><strong>24-48 hours notice:</strong> £50 cancellation fee</li>
                  <li><strong>Less than 24 hours notice:</strong> £100 cancellation fee or loss of deposit</li>
                  <li><strong>Same-day cancellation:</strong> Full callout charge applies</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">6.3 Cancellation by BoilerPro</h3>
                <p>
                  We reserve the right to cancel or reschedule appointments due to emergencies, illness, adverse weather, or other unforeseen circumstances. We will provide as much notice as possible and offer alternative dates. No cancellation fees apply when we cancel.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">6.4 Rescheduling</h3>
                <p>
                  You may reschedule once free of charge with at least 48 hours notice. Subsequent rescheduling may incur a £25 administration fee.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">6.5 Access Issues</h3>
                <p>
                  If our engineer arrives at the scheduled time and cannot access the property, a £75 wasted visit charge applies. Please ensure clear access and that pets are secured.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-alert/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-5 h-5 text-alert" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                  7. Liability & Insurance
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed pl-14">
              <div>
                <h3 className="font-semibold text-primary mb-2">7.1 Public Liability Insurance</h3>
                <p>
                  We maintain public liability insurance of £5 million covering damage to property and injury to persons arising from our work. A copy of our insurance certificate is available on request.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">7.2 Professional Indemnity</h3>
                <p>
                  We carry professional indemnity insurance covering errors and omissions in our design and advisory work.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">7.3 Limitation of Liability</h3>
                <p>
                  Our liability is limited to the value of the work undertaken or £5 million (whichever is lower). We are not liable for indirect or consequential losses including but not limited to loss of earnings, business interruption, or alternative accommodation costs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">7.4 Customer Responsibilities</h3>
                <p>
                  You are responsible for ensuring the property is properly insured and for reporting any damage claims to your insurer where appropriate. We recommend customers have buildings and contents insurance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">7.5 Existing System Condition</h3>
                <p>
                  We are not liable for pre-existing faults, hidden defects, or issues with existing systems unless we have been specifically contracted to repair them. We will advise on any concerns identified during our work.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              8. Customer Obligations
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate information about the property and existing systems</li>
                <li>Ensure safe access to work areas and clear the working space of personal items</li>
                <li>Secure pets during our visit</li>
                <li>Arrange for electricity, gas, and water supply to be available</li>
                <li>Notify us of any known asbestos or hazardous materials</li>
                <li>Obtain necessary permissions (e.g., landlord consent if you are a tenant)</li>
                <li>Have annual boiler servicing to maintain warranties</li>
                <li>Maintain adequate heating system pressure and inhibitor levels</li>
                <li>Report any issues with our work within 7 days</li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              9. Complaints & Dispute Resolution
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <div>
                <h3 className="font-semibold text-primary mb-2">9.1 Complaints Procedure</h3>
                <p>
                  We are committed to customer satisfaction. If you are unhappy with our service, please contact us immediately. We aim to resolve complaints within 14 working days.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">9.2 Formal Complaints</h3>
                <p>
                  Formal complaints should be submitted in writing to: {siteConfig.email}. We will acknowledge receipt within 48 hours and provide a full response within 14 days.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">9.3 Alternative Dispute Resolution</h3>
                <p>
                  If we cannot resolve your complaint internally, you may refer the matter to an independent dispute resolution service such as:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>The Gas Safe Register (for gas safety concerns)</li>
                  <li>Trading Standards</li>
                  <li>Citizens Advice Consumer Service</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">9.4 Right to Remedy</h3>
                <p>
                  Under the Consumer Rights Act 2015, you have the right to have faulty work remedied free of charge within a reasonable timeframe. We will return to fix any issues arising from our workmanship at no additional cost during the guarantee period.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              10. Consumer Rights
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <div>
                <h3 className="font-semibold text-primary mb-2">10.1 Consumer Rights Act 2015</h3>
                <p>
                  Your statutory rights under the Consumer Rights Act 2015 are not affected by these terms. Services must be provided with reasonable care and skill, and goods must be of satisfactory quality.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">10.2 Cooling-Off Period</h3>
                <p>
                  If you book services online or by phone (off-premises), you have a 14-day cooling-off period to cancel under the Consumer Contracts Regulations 2013. However, if you request we start work within this period, you waive your right to cancel once work commences.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">10.3 Emergency Services Exemption</h3>
                <p>
                  Emergency callout services are exempt from the 14-day cooling-off period as they are performed at your specific request for urgent repairs.
                </p>
              </div>
            </div>
          </div>

          {/* Section 11 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              11. Data Protection & Privacy
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                We process your personal data in accordance with UK GDPR and the Data Protection Act 2018. Please refer to our <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link> for full details on how we collect, use, and protect your information.
              </p>
            </div>
          </div>

          {/* Section 12 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              12. Governing Law & Jurisdiction
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                These Terms and Conditions are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </div>

          {/* Section 13 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              13. Severability
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-primary/5 to-teal/5 rounded-2xl p-8 border-2 border-primary/10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Questions About Our Terms?
            </h2>

            <div className="space-y-4 text-text-secondary">
              <p>
                If you have any questions about these Terms and Conditions, please don't hesitate to contact us:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Phone:</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-accent hover:underline">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Email:</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Address:</p>
                    <p>{siteConfig.address.full}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="mt-12 text-center">
            <Link href="/" className="text-accent hover:text-accent-dark font-semibold inline-flex items-center gap-2">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
