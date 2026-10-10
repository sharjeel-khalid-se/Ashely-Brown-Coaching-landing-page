"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DevPlaceholder } from "@/components/ui/DevPlaceholder";
import { Sparkles, HeartPulse } from "lucide-react";

export interface AboutSectionProps {
  hasAboutPhoto?: boolean;
}

export function AboutSection({ hasAboutPhoto = false }: AboutSectionProps) {
  const handleScrollToApply = (e: React.MouseEvent<HTMLElement>) => {
    const applyEl = document.getElementById("apply");
    if (applyEl) {
      e.preventDefault();
      applyEl.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#apply");
    }
  };

  const hasParagraphs =
    siteContent.about.paragraphs && siteContent.about.paragraphs.length > 0;

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-warm-beige border-y border-blush/60 relative overflow-hidden"
    >
      <Container className="max-w-6xl xl:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Photo Column — enlarged on large screens */}
          <div className="lg:col-span-5 xl:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {hasAboutPhoto ? (
                <div className="relative aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] xl:min-h-[680px] overflow-hidden rounded-3xl lg:rounded-4xl shadow-md border-4 border-white bg-blush/20">
                  <Image
                    src={siteContent.about.photo}
                    alt={`${siteContent.brand.name} - Nurse Nutritionist and Transformation Specialist`}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 50vw"
                  />
                </div>
              ) : (
                /* Elegant, soft minimal placeholder card */
                <div className="relative aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] xl:min-h-[680px] overflow-hidden rounded-3xl lg:rounded-4xl shadow-xs border border-blush bg-white flex flex-col items-center justify-between p-7 sm:p-8 text-deep select-none">
                  {/* Header Badge */}
                  <div className="w-full flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted">
                    <span className="px-3 py-1 bg-blush/60 rounded-full border border-blush">
                      Meet Coach Ash
                    </span>
                    <span className="px-3 py-1 bg-blush/60 rounded-full border border-blush">
                      RN · Nutritionist
                    </span>
                  </div>

                  {/* Graphic Center */}
                  <div className="text-center space-y-3.5 my-auto">
                    <div className="w-20 h-20 mx-auto rounded-full bg-blush border border-accent/30 flex items-center justify-center text-magenta shadow-2xs">
                      <HeartPulse className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-deep">
                        {siteContent.brand.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-normal text-muted mt-1 max-w-xs mx-auto leading-relaxed">
                        {siteContent.brand.credentialsLine}
                      </p>
                    </div>
                  </div>

                  {/* Dev-only Note */}
                  <div className="w-full text-center">
                    <DevPlaceholder label="photoshoot image: /public/images/about.jpg" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 xl:col-span-6 order-1 lg:order-2 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 text-magenta text-xs sm:text-sm font-semibold uppercase tracking-widest border border-accent/20 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>{siteContent.about.eyebrow}</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold sm:font-bold uppercase tracking-wide text-deep leading-snug sm:leading-tight break-words">
              {siteContent.about.heading}
            </h2>

            {/* Credential feature cards: The trio you never knew you needed */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-2">
              {/* 1. Nurse Nutritionist */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-blush/80 shadow-2xs flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-2.5">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-blush shadow-2xs shrink-0">
                  <Image
                    src={siteContent.about.credentialPhoto}
                    alt="Coach Ash holding anatomical muscle model — Nurse Nutritionist"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 56px, 64px"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-deep leading-snug">
                    Nurse Nutritionist
                  </h4>
                  <p className="text-2xs text-muted mt-0.5">Clinical care &amp; macro design</p>
                </div>
              </div>

              {/* 2. Transformation Expert */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-blush/80 shadow-2xs flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-2.5">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-blush shadow-2xs shrink-0">
                  <Image
                    src={siteContent.about.transformationPhoto}
                    alt="Coach Ash in Muscle Mommy Method gear — Transformation Expert"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 56px, 64px"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-deep leading-snug">
                    Transformation Expert
                  </h4>
                  <p className="text-2xs text-muted mt-0.5">13+ years postpartum results</p>
                </div>
              </div>

              {/* 3. Glute Specialist */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-blush/80 shadow-2xs flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-2.5">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-blush shadow-2xs shrink-0">
                  <Image
                    src={siteContent.about.glutePhoto}
                    alt="Coach Ash training glutes in the gym — Glute Specialist"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 56px, 64px"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-deep leading-snug">
                    Glute Specialist
                  </h4>
                  <p className="text-2xs text-muted mt-0.5">Bye mom-butt, build curves</p>
                </div>
              </div>
            </div>

            {/* Paragraphs: Render array if content exists, otherwise dev-only placeholder */}
            {hasParagraphs ? (
              <div className="space-y-4 text-base sm:text-lg text-deep/90 font-normal leading-relaxed">
                {siteContent.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            ) : (
              <div className="py-2">
                <DevPlaceholder label="Coach Ash's story, not provided yet" />
              </div>
            )}

            {/* Apply Now button to #apply */}
            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                href="#apply"
                onClick={handleScrollToApply}
                className="w-full sm:w-auto shadow-xs hover:shadow-sm"
              >
                {siteContent.nav.applyCta} &rarr;
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
