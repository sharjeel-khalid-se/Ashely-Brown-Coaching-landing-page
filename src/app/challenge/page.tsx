import React from "react";
import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DevPlaceholder } from "@/components/ui/DevPlaceholder";
import { Footer } from "@/components/Footer";
import { StickyChallengeBar } from "@/components/StickyChallengeBar";
import {
  Sparkles,
  Trophy,
  ExternalLink,
  CheckCircle2,
  Check,
  Camera,
  ArrowRight,
  Flame,
} from "lucide-react";

export const metadata: Metadata = {
  title: `${siteContent.challenge.title} | ${siteContent.brand.name}`,
  description: `${siteContent.challenge.eyebrow} — ${siteContent.challenge.intro}`,
  openGraph: {
    title: `${siteContent.challenge.title} | ${siteContent.brand.name}`,
    description: `${siteContent.challenge.eyebrow} — ${siteContent.challenge.intro}`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/challenge`,
    siteName: siteContent.brand.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteContent.challenge.title} — ${siteContent.brand.name}`,
      },
    ],
  },
};

export default function ChallengePage() {
  const stanStoreUrl = process.env.NEXT_PUBLIC_STAN_STORE_URL;
  const isUrlConfigured = Boolean(
    stanStoreUrl && stanStoreUrl.trim().length > 0
  );

  // Results area: hidden in production if empty
  const isProduction = process.env.NODE_ENV === "production";
  // Currently no approved real challenge progress photos exist yet
  const hasChallengeResults = false;
  const shouldShowResultsArea = !isProduction || hasChallengeResults;

  return (
    <main className="min-h-screen bg-cream text-deep">
      {/* 1. CHALLENGE HERO */}
      <section
        id="challenge-hero"
        className="py-16 sm:py-24 bg-cream border-b border-blush/60 relative overflow-hidden"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush text-magenta text-xs sm:text-sm font-semibold uppercase tracking-widest border border-accent/20">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>{siteContent.challenge.eyebrow}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold sm:font-bold uppercase tracking-wide text-deep leading-snug sm:leading-tight break-words">
                {siteContent.challenge.title}
              </h1>

              {/* Intro */}
              <p className="text-base sm:text-lg text-deep/85 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {siteContent.challenge.intro}
              </p>

              {/* Price & CTA */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 sm:gap-8">
                <div className="text-3xl sm:text-4xl font-bold text-magenta tracking-tight">
                  {siteContent.challenge.price}
                </div>

                <div>
                  {isUrlConfigured ? (
                    <Button
                      variant="primary"
                      size="lg"
                      href={stanStoreUrl}
                      isExternal
                      className="w-full sm:w-auto shadow-xs hover:shadow-sm uppercase tracking-wider text-sm sm:text-base font-bold px-9 py-4"
                    >
                      <span>{siteContent.challenge.buttonLabel}</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <button
                        type="button"
                        disabled
                        className="inline-flex items-center justify-center rounded-full font-bold uppercase tracking-wider text-sm px-9 py-4 bg-gray-200 text-gray-500 cursor-not-allowed shadow-none"
                      >
                        {siteContent.challenge.buttonLabel}
                      </button>
                      <div>
                        <DevPlaceholder label="WARNING: NEXT_PUBLIC_STAN_STORE_URL is missing. Button is disabled." />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Note */}
              <p className="text-xs sm:text-sm text-muted font-normal">
                {siteContent.challenge.note}
              </p>
            </div>

            {/* Visual Column / Cover Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[3/4] w-64 sm:w-80 rounded-3xl bg-gradient-to-br from-blush/60 via-white to-blush/40 text-deep shadow-xs flex flex-col justify-between p-6 sm:p-8 overflow-hidden select-none border border-accent/25">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-white/90 border border-blush text-muted">
                    6-Week Plan
                  </span>
                  <Trophy className="w-5 h-5 text-magenta" />
                </div>

                <div className="relative z-10 text-center py-6 space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blush border border-accent/30 flex items-center justify-center text-magenta shadow-2xs">
                    <Flame className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                      Coach Ash Presents
                    </p>
                    <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-deep mt-1">
                      {siteContent.challenge.title}
                    </h2>
                  </div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-magenta border border-blush shadow-2xs">
                    Restore &bull; Rehab &bull; Rebuild
                  </span>
                </div>

                <div className="relative z-10 text-center">
                  <DevPlaceholder label="challenge cover" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. FOR YOU IF SECTION */}
      <section
        id="challenge-for-you"
        className="py-20 sm:py-28 bg-cream relative"
      >
        <Container>
          <SectionHeading
            eyebrow="Targeted Transformation"
            heading="This challenge is for you if…"
            align="center"
          />

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
            {siteContent.challenge.forYouIf.map((item, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 border border-blush/80 shadow-2xs hover:border-accent/40 transition-all flex items-start gap-4 sm:gap-5"
              >
                {/* Decorative Checkbox Circle */}
                <div
                  aria-hidden="true"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blush border border-accent/40 text-magenta flex items-center justify-center shrink-0 transition-colors shadow-2xs mt-0.5"
                >
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>

                {/* Requirement statement */}
                <p className="text-base sm:text-lg font-normal text-deep/90 leading-relaxed pt-0.5">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Mid CTA Button */}
          <div className="text-center mt-10 sm:mt-12">
            {isUrlConfigured ? (
              <Button
                variant="primary"
                size="md"
                href={stanStoreUrl}
                isExternal
                className="shadow-xs hover:shadow-sm"
              >
                <span>{siteContent.challenge.buttonLabel}</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            ) : null}
          </div>
        </Container>
      </section>

      {/* 3. WHAT'S INSIDE SECTION */}
      <section
        id="challenge-inside"
        className="py-20 sm:py-28 bg-cream border-y border-blush/60 relative overflow-hidden"
      >
        <Container>
          <SectionHeading
            eyebrow="The Full Breakdown"
            heading="Here's what you get inside:"
            align="center"
          />

          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4 sm:gap-5">
            {siteContent.challenge.inside.map((item, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/95 border border-blush/80 flex items-start gap-4 sm:gap-5 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-full bg-blush border border-accent/30 text-magenta flex items-center justify-center shrink-0 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="pt-1">
                  <h3 className="text-base sm:text-lg font-semibold text-deep leading-snug">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Box Callout */}
          <div className="max-w-md mx-auto mt-12 p-8 rounded-3xl bg-blush/40 border border-accent/25 text-center shadow-xs space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-magenta px-3 py-1 rounded-full bg-white border border-blush shadow-2xs">
              Instant Digital Access
            </span>
            <div className="text-4xl sm:text-5xl font-bold text-magenta">
              {siteContent.challenge.price}
            </div>
            <p className="text-xs sm:text-sm text-muted font-normal">
              {siteContent.challenge.note}
            </p>

            {isUrlConfigured ? (
              <Button
                variant="primary"
                size="lg"
                href={stanStoreUrl}
                isExternal
                fullWidth
                className="shadow-xs hover:shadow-sm uppercase tracking-wider text-sm sm:text-base font-bold py-4"
              >
                <span>{siteContent.challenge.buttonLabel}</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <button
                type="button"
                disabled
                className="w-full inline-flex items-center justify-center rounded-full font-bold uppercase tracking-wider text-sm px-6 py-4 bg-gray-200 text-gray-500 cursor-not-allowed"
              >
                {siteContent.challenge.buttonLabel}
              </button>
            )}
          </div>
        </Container>
      </section>

      {/* 4. RESULTS AREA (Hidden in production if empty) */}
      {shouldShowResultsArea && (
        <section
          id="challenge-results"
          className="py-16 sm:py-24 bg-cream border-b border-blush/60"
        >
          <Container>
            <SectionHeading
              eyebrow="Results"
              heading="Challenge Transformations"
              align="center"
            />

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-white/95 rounded-3xl border border-blush/80 p-4 shadow-2xs"
                  >
                    <div className="relative aspect-[3/4] w-full rounded-2xl bg-blush/30 border-2 border-dashed border-accent/25 flex flex-col items-center justify-between p-6 text-center select-none overflow-hidden">
                      <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold uppercase tracking-wider text-magenta shadow-2xs">
                        6-Week Win #{item}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center text-magenta shadow-2xs border border-accent/20">
                        <Camera className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-deep uppercase block">
                        Core Restoration
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dev-only notice */}
              <div className="text-center mt-6">
                <DevPlaceholder label="client challenge progress photos, need written permission" />
              </div>

              {/* Testimonial disclaimer in small text */}
              <p className="text-2xs sm:text-xs text-muted text-center mt-4 max-w-lg mx-auto">
                {siteContent.legal.testimonialDisclaimer}
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* 5. FINAL CTA BAND: Want 1-on-1 coaching instead? (Soft blush block with dark text) */}
      <section
        id="coaching-cta"
        className="py-16 sm:py-20 bg-blush border-t border-accent/20 text-deep relative overflow-hidden"
      >
        <Container className="relative z-10 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-semibold sm:font-bold uppercase tracking-wide text-deep max-w-2xl mx-auto">
            Want 1-on-1 coaching instead?
          </h2>

          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              href="/#apply"
              className="shadow-xs hover:shadow-sm"
            >
              <span>Apply for 1-on-1 Coaching</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* 6. SHARED FOOTER */}
      <Footer />

      {/* STICKY MOBILE CHALLENGE BAR */}
      <StickyChallengeBar />
    </main>
  );
}
