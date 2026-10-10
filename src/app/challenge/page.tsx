import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
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
  const stanStoreUrl =
    process.env.NEXT_PUBLIC_STAN_STORE_URL ||
    siteContent.challenge.stanStoreUrl;
  const isUrlConfigured = Boolean(
    stanStoreUrl && stanStoreUrl.trim().length > 0
  );

  // Results area: shows real client progress photos
  const progressPhotos = siteContent.challenge.progressPhotoImages ?? [];
  const isProduction = process.env.NODE_ENV === "production";
  const hasChallengeResults = progressPhotos.length > 0;
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

            {/* Visual Column / Cover Card with Photo #16 */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[3/4] w-72 sm:w-80 rounded-3xl overflow-hidden border border-blush shadow-md bg-white">
                <Image
                  src={siteContent.challenge.coverPhoto}
                  alt={`${siteContent.challenge.title} — Coach Ash`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                {/* Sleek top badge */}
                <div className="absolute top-4 inset-x-4 flex justify-center z-10">
                  <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-blush text-magenta shadow-2xs whitespace-nowrap">
                    6-Week Guide &bull; $97
                  </span>
                </div>
                {/* Bottom subtle gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-deep/90 via-deep/50 to-transparent text-white pt-10 text-center z-10">
                  <p className="text-sm font-bold uppercase tracking-wide text-white drop-shadow-xs">
                    {siteContent.challenge.title}
                  </p>
                  <p className="text-xs text-cream/90 mt-0.5 font-medium">
                    Restore &bull; Rehab &bull; Rebuild
                  </p>
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto mt-10">
            {/* Checklist */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {siteContent.challenge.forYouIf.map((item, index) => (
                <div
                  key={index}
                  className="group p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 border border-blush/80 shadow-2xs hover:border-accent/40 transition-all flex items-start gap-4 sm:gap-5"
                >
                  <div
                    aria-hidden="true"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blush border border-accent/40 text-magenta flex items-center justify-center shrink-0 transition-colors shadow-2xs mt-0.5"
                  >
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>

                  <p className="text-base sm:text-lg font-normal text-deep/90 leading-relaxed pt-0.5">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Photo #21: Pedestals, back view over shoulder */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-md rounded-3xl overflow-hidden shadow-xs border border-blush bg-white">
                <Image
                  src={siteContent.challenge.forYouPhoto}
                  alt="Coach Ash — Glute specialist and postpartum transformation"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl py-2 px-3 text-center border border-blush shadow-2xs">
                  <p className="text-xs font-bold uppercase tracking-wider text-magenta">
                    Grow Glutes &bull; Restore Core
                  </p>
                  <p className="text-2xs text-muted">Kick mom butt to the curb</p>
                </div>
              </div>
            </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto mt-10">
            {/* Features list */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
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

            {/* Photo #9: Mat, seated, smiling */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-md rounded-3xl overflow-hidden shadow-xs border border-blush bg-white">
                <Image
                  src={siteContent.challenge.insidePhoto}
                  alt="Coach Ash — Workouts for home or gym"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl py-2 px-3 text-center border border-blush shadow-2xs">
                  <p className="text-xs font-bold uppercase tracking-wider text-magenta">
                    Home OR Gym Friendly
                  </p>
                  <p className="text-2xs text-muted">Complete video demos included</p>
                </div>
              </div>
            </div>
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

      {/* 4. RESULTS AREA */}
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
              {hasChallengeResults ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {progressPhotos.map((src, idx) => (
                    <div
                      key={src}
                      className="group bg-white/95 rounded-3xl border border-blush/80 p-3.5 shadow-2xs hover:shadow-xs transition-all overflow-hidden"
                    >
                      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-cream/40 p-1">
                        {/* Before & After Badges */}
                        <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                          <span className="px-2 py-0.5 rounded-md bg-deep/80 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                            Before
                          </span>
                        </div>
                        <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                          <span className="px-2 py-0.5 rounded-md bg-magenta/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                            After
                          </span>
                        </div>

                        <Image
                          src={src}
                          alt={`Challenge Transformation Win #${idx + 1}`}
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      </div>
                      <div className="pt-3 pb-1 text-center">
                        <span className="inline-block px-3 py-1 bg-blush text-magenta rounded-full text-xs font-semibold uppercase tracking-wider shadow-2xs mb-1.5">
                          Transformation #{idx + 1}
                        </span>
                        <p className="text-2xs text-muted">Core Restoration · Results vary</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
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
              )}

              {/* Dev-only notice (only shown when no real photos exist) */}
              {!hasChallengeResults && (
                <div className="text-center mt-6">
                  <DevPlaceholder label="client challenge progress photos, need written permission" />
                </div>
              )}

              {/* Testimonial disclaimer in small text */}
              <p className="text-2xs sm:text-xs text-muted text-center mt-6 max-w-lg mx-auto">
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
