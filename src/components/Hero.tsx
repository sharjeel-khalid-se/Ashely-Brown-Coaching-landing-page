"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DevPlaceholder } from "@/components/ui/DevPlaceholder";
import { Sparkles, UserCheck } from "lucide-react";

export interface HeroProps {
  hasHeroPhoto?: boolean;
}

/**
 * Splits the headline and wraps highlightWords in magenta spans.
 */
function renderHighlightedHeadline(
  headline: string,
  highlightWords: string[]
): React.ReactNode {
  if (!highlightWords || highlightWords.length === 0) {
    return headline;
  }

  // Create patterns that handle quotes and exact word matches
  const patterns = highlightWords.map((word) => {
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return `[“"]?${escaped}[”"]?|${escaped}`;
  });

  const regex = new RegExp(`(${patterns.join("|")})`, "gi");
  const parts = headline.split(regex);

  return parts.map((part, index) => {
    const isHighlight = highlightWords.some((word) => {
      const cleanPart = part.replace(/[“”"]/g, "").trim().toLowerCase();
      const cleanWord = word.replace(/[“”"]/g, "").trim().toLowerCase();
      return cleanPart === cleanWord;
    });

    if (isHighlight) {
      return (
        <span key={index} className="text-magenta font-bold">
          {part}
        </span>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export function Hero({ hasHeroPhoto = false }: HeroProps) {
  const handleScrollTo =
    (id: string) => (e: React.MouseEvent<HTMLElement>) => {
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    };

  return (
    <div className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT COLUMN: Large rounded photo card */}
          <div className="lg:col-span-5 order-2 lg:order-1 animate-fade-up">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {hasHeroPhoto ? (
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:rounded-4xl shadow-sm border border-blush/80">
                  <Image
                    src={siteContent.hero.photo}
                    alt={`${siteContent.brand.name} - Online Postpartum Fat-Loss & Core Coach`}
                    priority
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                  />
                </div>
              ) : (
                /* Elegant, soft minimal placeholder card */
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:rounded-4xl shadow-xs border border-blush bg-gradient-to-b from-blush/40 via-white to-blush/20 flex flex-col items-center justify-between p-7 sm:p-9 text-deep select-none">
                  {/* Top pill badge */}
                  <div className="w-full flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted">
                    <span className="px-3 py-1 bg-white/90 rounded-full border border-blush shadow-2xs">
                      {siteContent.brand.name}
                    </span>
                    <span className="px-3 py-1 bg-white/90 rounded-full border border-blush shadow-2xs">
                      Photoshoot
                    </span>
                  </div>

                  {/* Center graphic frame */}
                  <div className="text-center space-y-3.5 my-auto">
                    <div className="w-20 h-20 mx-auto rounded-full bg-blush border border-accent/30 flex items-center justify-center text-magenta shadow-2xs">
                      <UserCheck className="w-10 h-10" />
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

                  {/* Bottom dev-only note */}
                  <div className="w-full text-center">
                    <DevPlaceholder label="hero photoshoot photo (place in /public/images/hero.jpg)" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Eyebrow, Headline, Credentials, Soft Pink Pill Buttons */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 animate-fade-up animation-delay-100 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush text-magenta text-xs sm:text-sm font-semibold uppercase tracking-widest border border-accent/20">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>
                {siteContent.brand.name} · {siteContent.brand.tagline}
              </span>
            </div>

            {/* Headline with lighter weight and generous spacing */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold sm:font-bold uppercase tracking-wide text-deep leading-snug sm:leading-tight">
              {renderHighlightedHeadline(
                siteContent.hero.headline,
                siteContent.hero.highlightWords
              )}
            </h1>

            {/* Credentials / Subtitle */}
            <p className="text-base sm:text-lg text-muted font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {siteContent.brand.credentialsLine}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <Button
                variant="primary"
                size="lg"
                href="#apply"
                onClick={handleScrollTo("apply")}
                className="w-full sm:w-auto shadow-xs hover:shadow-sm"
              >
                {siteContent.hero.ctaPrimary}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
