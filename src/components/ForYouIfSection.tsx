"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export function ForYouIfSection() {
  const handleScrollToApply = (e: React.MouseEvent<HTMLElement>) => {
    const applyEl = document.getElementById("apply");
    if (applyEl) {
      e.preventDefault();
      applyEl.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#apply");
    }
  };

  const backgroundPhoto = siteContent.forYouIf.backgroundPhoto;

  return (
    <section id="for-you" className="relative py-20 sm:py-28 bg-cream border-y border-blush/60 overflow-hidden">
      {/* Embedded gym photo background per Coach Ash's request */}
      {backgroundPhoto && (
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <Image
            src={backgroundPhoto}
            alt=""
            fill
            className="object-cover object-[85%_center] sm:object-right opacity-30 sm:opacity-35 filter contrast-110"
            sizes="100vw"
          />
          {/* Subtle top and bottom edge transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream opacity-60" />
          {/* Soft gradient to keep left content area crisp while photo is clearly visible on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/50 to-transparent" />
        </div>
      )}

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Are We A Fit?"
          heading={siteContent.forYouIf.heading}
          highlightWords={["for you"]}
          align="center"
        />

        {/* Checkbox-style cards with decorative circles */}
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5 mt-8 sm:mt-12">
          {siteContent.forYouIf.items.map((item, index) => (
            <div
              key={index}
              className="group p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xs border border-blush/90 hover:border-accent/40 transition-all duration-200 shadow-2xs hover:shadow-xs flex items-start gap-4 sm:gap-5"
            >
              {/* Decorative checkbox circle (not a form input) */}
              <div
                aria-hidden="true"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-accent/40 bg-blush flex items-center justify-center shrink-0 mt-0.5 shadow-2xs transition-transform group-hover:scale-105"
              >
                <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-magenta stroke-[2.5]" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-base sm:text-lg font-normal text-deep/90 leading-relaxed break-words">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button to #apply */}
        <div className="text-center mt-10 sm:mt-14">
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
      </Container>
    </section>
  );
}
