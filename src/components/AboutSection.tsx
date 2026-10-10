"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DevPlaceholder } from "@/components/ui/DevPlaceholder";
import { Sparkles, HeartPulse, Award, Dumbbell } from "lucide-react";

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
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {hasAboutPhoto ? (
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-sm border-2 border-white">
                  <Image
                    src={siteContent.about.photo}
                    alt={`${siteContent.brand.name} - Nurse Nutritionist and Transformation Specialist`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                  />
                </div>
              ) : (
                /* Elegant, soft minimal placeholder card */
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xs border border-blush bg-white flex flex-col items-center justify-between p-7 sm:p-8 text-deep select-none">
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
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 text-magenta text-xs sm:text-sm font-semibold uppercase tracking-widest border border-accent/20 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>{siteContent.about.eyebrow}</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold sm:font-bold uppercase tracking-wide text-deep leading-snug sm:leading-tight break-words">
              {siteContent.about.heading}
            </h2>

            {/* Credential feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/95 border border-blush/80 shadow-2xs flex items-center gap-3">
                {siteContent.about.credentialPhoto ? (
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-blush shadow-2xs">
                    <Image
                      src={siteContent.about.credentialPhoto}
                      alt="Coach Ash with anatomical muscle model"
                      fill
                      className="object-cover object-top"
                      sizes="48px"
                    />
                  </div>
                ) : (
                  <HeartPulse className="w-5 h-5 text-magenta mb-1.5" />
                )}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-deep">
                    Nurse Nutritionist
                  </h4>
                  <p className="text-2xs text-muted">Clinical care</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/95 border border-blush/80 shadow-2xs flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blush/50 border border-accent/20 flex items-center justify-center shrink-0 text-magenta">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-deep">
                    Transformation Expert
                  </h4>
                  <p className="text-2xs text-muted">13+ years coaching</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/95 border border-blush/80 shadow-2xs flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blush/50 border border-accent/20 flex items-center justify-center shrink-0 text-magenta">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-deep">
                    Glute Specialist
                  </h4>
                  <p className="text-2xs text-muted">Targeted rebuild</p>
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
