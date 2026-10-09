import React from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FileText, ArrowLeft, AlertCircle, AlertTriangle } from "lucide-react";

export const metadata = {
  title: `Terms & Conditions | ${siteContent.brand.name}`,
  description: `Terms and conditions, medical disclaimer, and coaching agreements for ${siteContent.brand.name}.`,
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream text-deep py-12 sm:py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
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
              These terms are a preliminary template created for website development. They should be formally reviewed and tailored with your legal counsel before launching commercial coaching or sales.
            </div>
          </div>

          <article className="bg-white/95 p-6 sm:p-12 rounded-3xl shadow-2xs border border-blush/80 space-y-8">
            {/* Header */}
            <header className="border-b border-blush/60 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush text-magenta text-xs font-semibold uppercase tracking-widest mb-3 border border-accent/20">
                <FileText className="w-3.5 h-3.5" />
                <span>Agreement & Disclaimers</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-semibold sm:font-bold uppercase tracking-wide text-deep">
                Terms & Conditions
              </h1>
              <p className="text-xs sm:text-sm text-muted mt-2">
                Effective Date: October 2026 &middot; {siteContent.brand.name}
              </p>
            </header>

            {/* Sections */}
            <div className="space-y-8 text-sm sm:text-base text-deep/85 leading-relaxed">
              {/* Health Disclaimer */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 text-magenta font-bold uppercase text-xs tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Important Medical Notice</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold uppercase text-deep tracking-wide">
                  1. Health & Medical Disclaimer
                </h2>
                <div className="p-5 rounded-2xl bg-blush/40 border-l-4 border-magenta space-y-3 text-deep">
                  <p className="font-bold leading-relaxed">
                    {siteContent.legal.disclaimer}
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed text-deep/90">
                    All fitness programs, postpartum rehabilitation guidelines, core exercises, nutritional coaching, meal suggestions, and educational resources provided by {siteContent.brand.name} (&ldquo;Coach Ash&rdquo;) are intended for general educational, fitness, and informational purposes only. They do not constitute medical advice, diagnosis, physical therapy, or medical treatment.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-2 marker:text-crimson">
                  <li>
                    <strong>Physician Clearance Required:</strong> You must consult your OB-GYN, midwife, primary care physician, or licensed healthcare provider before beginning any workout or nutrition regimen, especially following childbirth, surgical operations (including C-sections), or while breastfeeding.
                  </li>
                  <li>
                    <strong>Results Vary:</strong> Individual results will vary significantly based on genetics, personal consistency, starting physical condition, medical history, metabolic profile, and adherence to prescribed routines. No representations or guarantees of specific fat loss, abdominal closing, or body composition results are made.
                  </li>
                  <li>
                    <strong>Assumption of Risk:</strong> Participation in physical training and dietary changes carries inherent physical risk. By enrolling or following any guidelines, you voluntarily assume all risk of injury.
                  </li>
                </ul>
              </section>

              {/* Programs and Consultations */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-extrabold uppercase text-deep tracking-tight">
                  2. Coaching Applications & Services
                </h2>
                <p>
                  Submission of an application via this website expresses interest in coaching but does not guarantee acceptance or create a binding coach-client contract.
                </p>
                <p>
                  Formal 1-on-1 coaching agreements, onboarding terms, payment schedules, and communication channels (e.g., Slack, iMessage) are established separately upon mutual acceptance following your VIP assessment consultation.
                </p>
              </section>

              {/* Digital Programs, Challenges & External Links */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-extrabold uppercase text-deep tracking-tight">
                  3. Digital Programs, Challenges & Third-Party Platforms
                </h2>
                <p>
                  Digital downloads and self-paced digital programs and challenges (such as the {siteContent.challenge.price} {siteContent.challenge.title}) are purchased and delivered via third-party checkout platforms (such as Stan Store). Transactions, refund policies, and delivery terms for those purchases are governed by the respective store checkout policies.
                </p>
              </section>

              {/* Intellectual Property */}
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-extrabold uppercase text-deep tracking-tight">
                  4. Intellectual Property
                </h2>
                <p>
                  All content, text, branding, logos, methodology (including the &ldquo;Muscle Mommy Method&rdquo; and &ldquo;Muscle Mommy Collective&rdquo;), exercise combinations, and digital materials are the intellectual property of {siteContent.brand.name} and may not be reproduced, republished, or redistributed without prior written consent.
                </p>
              </section>

              {/* Contact */}
              <section className="space-y-3 pt-4 border-t border-blush">
                <h2 className="text-lg sm:text-xl font-extrabold uppercase text-deep tracking-tight">
                  5. Contact
                </h2>
                <p>
                  If you have questions regarding these terms, contact us at:{" "}
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
