import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Plumbline MK",
  description: "Privacy policy for Plumbline MK. Learn how we collect, use, and protect your personal data in accordance with UK GDPR and Data Protection Act 2018.",
  alternates: { canonical: "https://www.plumblinemk.co.uk/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              How we collect, use, and protect your personal information
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
              At Plumbline MK, we are committed to protecting your privacy and ensuring your personal data is handled securely and transparently. This Privacy Policy explains how we collect, use, store, and protect your information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p className="text-text-secondary leading-relaxed">
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
                  1. Information We Collect
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed pl-14">
              <p>We may collect and process the following personal information:</p>

              <div className="bg-light-grey p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-3">Personal Details:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Name and contact information (address, email, phone number)</li>
                  <li>Property details (for service delivery)</li>
                  <li>Payment and billing information</li>
                </ul>
              </div>

              <div className="bg-light-grey p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-3">Service Information:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Boiler and heating system details</li>
                  <li>Service history and maintenance records</li>
                  <li>Appointment and scheduling information</li>
                  <li>Gas safety certificates and compliance documentation</li>
                </ul>
              </div>

              <div className="bg-light-grey p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-3">Technical Data:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Website usage data (via cookies)</li>
                  <li>IP address and browser information</li>
                  <li>Device type and operating system</li>
                </ul>
              </div>

              <div className="bg-light-grey p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-3">Communications:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Correspondence via email, phone, or contact forms</li>
                  <li>Customer feedback and reviews</li>
                  <li>Marketing preferences</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Eye className="w-5 h-5 text-teal" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                  2. How We Use Your Information
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed pl-14">
              <p>We use your personal data for the following purposes:</p>

              <ul className="list-disc list-inside space-y-3">
                <li><strong>Service Delivery:</strong> To provide boiler installation, repair, servicing, and other heating services</li>
                <li><strong>Communication:</strong> To respond to enquiries, send appointment reminders, and provide service updates</li>
                <li><strong>Compliance:</strong> To meet legal obligations including Gas Safe regulations and health & safety requirements</li>
                <li><strong>Administration:</strong> To process payments, manage accounts, and maintain service records</li>
                <li><strong>Marketing:</strong> To send promotional offers and newsletters (only with your consent)</li>
                <li><strong>Improvement:</strong> To analyze service performance and improve our offerings</li>
                <li><strong>Legal Requirements:</strong> To comply with legal obligations and protect our legal interests</li>
              </ul>

              <div className="bg-cream p-6 rounded-lg mt-6">
                <h3 className="font-semibold text-primary mb-2">Legal Basis for Processing</h3>
                <p>We process your data under the following legal bases:</p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li><strong>Contract Performance:</strong> To fulfill our service obligations to you</li>
                  <li><strong>Legal Obligation:</strong> To comply with Gas Safe and other regulatory requirements</li>
                  <li><strong>Legitimate Interest:</strong> To operate and improve our business</li>
                  <li><strong>Consent:</strong> For marketing communications (you can withdraw consent at any time)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Lock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                  3. Data Sharing and Disclosure
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed pl-14">
              <p>We do not sell your personal data to third parties. We may share your information with:</p>

              <ul className="list-disc list-inside space-y-3">
                <li><strong>Service Providers:</strong> Payment processors, email service providers, and booking systems</li>
                <li><strong>Manufacturers:</strong> For warranty registration and product support</li>
                <li><strong>Regulatory Bodies:</strong> Gas Safe Register, local authorities, and building control when legally required</li>
                <li><strong>Insurance Providers:</strong> For insurance-backed guarantees and claims</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our legal rights</li>
              </ul>

              <p className="mt-4">
                All third parties are required to maintain the confidentiality and security of your data and use it only for the specified purposes.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              4. Cookies and Website Analytics
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                We use cookies and similar technologies to improve your experience on our website. Cookies are small text files stored on your device that help us:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve website functionality and performance</li>
                <li>Provide relevant content and marketing</li>
              </ul>

              <p>
                You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality. For more information, see our Cookie Policy.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              5. Your Rights Under UK GDPR
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>You have the following rights regarding your personal data:</p>

              <div className="bg-light-grey p-6 rounded-lg space-y-3">
                <div>
                  <h3 className="font-semibold text-primary">Right to Access</h3>
                  <p className="text-sm mt-1">Request a copy of the personal data we hold about you</p>
                </div>

                <div>
                  <h3 className="font-semibold text-primary">Right to Rectification</h3>
                  <p className="text-sm mt-1">Request corrections to inaccurate or incomplete data</p>
                </div>

                <div>
                  <h3 className="font-semibold text-primary">Right to Erasure</h3>
                  <p className="text-sm mt-1">Request deletion of your personal data (subject to legal requirements)</p>
                </div>

                <div>
                  <h3 className="font-semibold text-primary">Right to Restrict Processing</h3>
                  <p className="text-sm mt-1">Request limitation on how we use your data</p>
                </div>

                <div>
                  <h3 className="font-semibold text-primary">Right to Data Portability</h3>
                  <p className="text-sm mt-1">Receive your data in a structured, commonly used format</p>
                </div>

                <div>
                  <h3 className="font-semibold text-primary">Right to Object</h3>
                  <p className="text-sm mt-1">Object to processing based on legitimate interests or direct marketing</p>
                </div>

                <div>
                  <h3 className="font-semibold text-primary">Right to Withdraw Consent</h3>
                  <p className="text-sm mt-1">Withdraw consent for marketing communications at any time</p>
                </div>
              </div>

              <p className="mt-4">
                To exercise any of these rights, please contact us using the details below. We will respond within one month of your request.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              6. Data Retention
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>We retain your personal data only for as long as necessary:</p>

              <ul className="list-disc list-inside space-y-2">
                <li><strong>Service Records:</strong> 6 years (in line with Gas Safe requirements and legal obligations)</li>
                <li><strong>Customer Accounts:</strong> Duration of relationship plus 6 years</li>
                <li><strong>Financial Records:</strong> 7 years (HMRC requirements)</li>
                <li><strong>Marketing Data:</strong> Until consent is withdrawn or 3 years of inactivity</li>
                <li><strong>Website Analytics:</strong> 26 months</li>
              </ul>

              <p className="mt-4">
                After retention periods expire, we securely delete or anonymize your data in accordance with our data retention policy.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              7. Data Security
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                We take data security seriously and implement appropriate technical and organizational measures to protect your personal information:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Secure encrypted connections (SSL/TLS) on our website</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and staff training</li>
                <li>Secure backup and disaster recovery procedures</li>
                <li>Third-party security audits</li>
              </ul>

              <p className="mt-4">
                While we take all reasonable steps to protect your data, no internet transmission is completely secure. We cannot guarantee absolute security but will notify you of any data breaches as required by law.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              8. Third-Party Links
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Our website may contain links to third-party websites (e.g., manufacturer websites, review platforms). We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              9. Children's Privacy
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Our services are not directed at children under 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              10. Changes to This Privacy Policy
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting a notice on our website or by email. The "Last Updated" date at the top of this page indicates when the policy was last revised.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-primary/5 to-teal/5 rounded-2xl p-8 border-2 border-primary/10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Contact Us
            </h2>

            <div className="space-y-4 text-text-secondary">
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:
              </p>

              <div className="space-y-3">
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
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Phone:</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-accent hover:underline">
                      {siteConfig.phone}
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

              <div className="mt-6 pt-6 border-t border-primary/10">
                <p className="text-sm">
                  You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe your data has been mishandled:
                </p>
                <p className="text-sm mt-2">
                  <strong>ICO:</strong> <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.ico.org.uk</a> | Tel: 0303 123 1113
                </p>
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
