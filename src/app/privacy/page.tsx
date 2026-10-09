import React from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, ArrowLeft, AlertCircle } from "lucide-react";

export const metadata = {
  title: `Privacy Policy | ${siteContent.brand.name}`,
  description: `Privacy policy and health data protection statement for ${siteContent.brand.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream text-deep py-12 sm:py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Navigation back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-magenta hover:text-magenta/80 transition-colors mb-8 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-magenta rounded-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* DRAFT REVIEW NOTICE BANNER */}
          {/* TO REMOVE THIS NOTICE: Delete or comment out the div block below after legal counsel review */}
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-50 border-2 border-dashed border-amber-400 text-amber-900 flex items-start gap-3.5 shadow-2xs">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm font-medium leading-relaxed">
              <strong className="font-bold uppercase tracking-wide block text-amber-800">
                [DRAFT: client and a professional should review]
              </strong>
              This policy is a preliminary template created for website development. It should be reviewed and customized with your legal and compliance counsel prior to accepting production user submissions.
            </div>
          </div>

          <article className="bg-white/95 p-6 sm:p-12 rounded-3xl shadow-2xs border border-blush/80 space-y-8">
            {/* Header */}
            <header className="border-b border-blush/60 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush text-magenta text-xs font-semibold uppercase tracking-widest mb-3 border border-accent/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Data Protection & Privacy</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-semibold sm:font-bold uppercase tracking-wide text-deep">
                Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-muted mt-2">
                Effective Date: October 2026 &middot; {siteContent.brand.name}
              </p>
            </header>

            {/* Sections */}
            <div className="space-y-8 text-sm sm:text-base text-deep/85 leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-extrabold uppercase text-deep tracking-tight">
                  1. Information We Collect
                </h2>
                <p>
                  When you submit a coaching application on this website, we collect personal and postpartum-related health information that you voluntarily provide through our multi-step application form, including:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 marker:text-crimson">
                  <li><strong>Contact Details:</strong> Full name, email address, and optional Instagram handle.</li>
                  <li><strong>Postpartum Timeline:</strong> Time elapsed since giving birth (e.g., under 6 months, 6&ndash;12 months, 1&ndash;2 years, 2+ years).</li>
                  <li><strong>Delivery Type:</strong> Method of delivery (C-section, Vaginal, or Both for multiple births).</li>
                  <li><strong>Medical Clearance:</strong> Confirmation of whether your physician or healthcare provider has cleared you to exercise.</li>
                  <li><strong>Breastfeeding Status:</strong> Whether you are actively nursing or pumping (to tailor safe nutritional guidelines).</li>
                  <li><strong>Goals & Struggles:</strong> Your primary transformation goals (core rehab, belly shelf, fat loss, confidence) and your self-reported struggles and workout routine constraints.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-extrabold uppercase text-deep tracking-tight">
                  2. Why We Collect This Information & Health Privacy
                </h2>
                <p>
                  Because postpartum recovery and exercise clearance involve sensitive health-related details, we treat your submissions as private and confidential.
                </p>
                <p>
                  Your information is used <strong>solely to evaluate your fit for coaching</strong>, assess postpartum readiness, customize your initial consultation, and communicate directly with you regarding your application.
                </p>
                <div className="p-4 rounded-xl bg-blush/40 border border-coral-pink/20 font-medium text-deep">
                  We do <strong>not</strong> sell, rent, monetize, or disclose your health details or contact information to any third-party advertisers, data brokers, or marketing networks.
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-extrabold uppercase text-deep tracking-tight">
                  3. Transmission & Email Delivery
                </h2>
                <p>
                  When you submit your application form, applications are emailed through Resend to the coach&apos;s email inbox. We do not store applicant data in a public database.
                </p>
                <p>
                  Resend processes this data solely to deliver the email notification to Coach Ash.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-extrabold uppercase text-deep tracking-tight">
                  4. Data Retention
                </h2>
                <p>
                  We retain submitted application records only for as long as reasonably required to evaluate your application, contact you for onboarding, or support an active coaching relationship. Inquiries that do not proceed into active coaching are periodically cleared from our inbox archives.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-extrabold uppercase text-deep tracking-tight">
                  5. Your Rights & Deletion Requests
                </h2>
                <p>
                  You have the right to request access to, correction of, or permanent deletion of your application data at any time.
                </p>
                {/* REVIEW: client must confirm 30-day deletion commitment */}
                <p className="font-semibold text-deep">
                  We will delete your data within 30 days of your request.
                </p>
                <p>
                  To request deletion of your information, please send an email to:
                </p>
                <p className="font-bold text-crimson">
                  <a
                    href={`mailto:${siteContent.brand.contactEmail}?subject=Privacy%20Data%20Deletion%20Request`}
                    className="hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-crimson rounded-sm"
                  >
                    {siteContent.brand.contactEmail}
                  </a>
                </p>
                <p className="text-xs text-muted">
                  Please include your full name and the email address used during submission.
                </p>
              </section>

              <section className="space-y-3 pt-4 border-t border-blush">
                <h2 className="text-lg sm:text-xl font-extrabold uppercase text-deep tracking-tight">
                  6. Contact
                </h2>
                <p>
                  For any privacy questions or security inquiries regarding this website, reach out to {siteContent.brand.name} at{" "}
                  <a
                    href={`mailto:${siteContent.brand.contactEmail}`}
                    className="text-crimson font-bold hover:underline"
                  >
                    {siteContent.brand.contactEmail}
                  </a>.
                </p>
              </section>
            </div>
          </article>
        </div>
      </Container>
    </main>
  );
}
