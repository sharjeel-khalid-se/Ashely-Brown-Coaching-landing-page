import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Trophy, Sparkles, ArrowRight } from "lucide-react";

export function ChallengeSection() {
  return (
    <section id="challenge" className="py-14 sm:py-20 bg-cream border-t border-blush/60 relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto bg-white/95 rounded-3xl border border-blush/80 shadow-2xs p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center">
            {/* Challenge Cover with Photo #16 */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative aspect-[3/4] w-60 sm:w-64 rounded-3xl overflow-hidden border border-blush shadow-sm bg-white">
                <Image
                  src={siteContent.challenge.coverPhoto}
                  alt={`${siteContent.challenge.title} — Coach Ash`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 260px"
                />
                {/* Sleek single top badge */}
                <div className="absolute top-3 inset-x-3 flex justify-center z-10">
                  <span className="text-2xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-blush text-magenta shadow-2xs whitespace-nowrap">
                    6-Week Guide &bull; $97
                  </span>
                </div>
                {/* Bottom subtle gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-deep/90 via-deep/50 to-transparent text-white pt-10 text-center z-10">
                  <p className="text-xs font-bold uppercase tracking-wide text-white drop-shadow-xs">
                    {siteContent.challenge.title}
                  </p>
                  <p className="text-2xs text-cream/90 mt-0.5 font-medium">
                    Restore &bull; Rehab &bull; Rebuild
                  </p>
                </div>
              </div>
            </div>

            {/* Content & Action */}
            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush text-magenta text-xs font-semibold uppercase tracking-widest border border-accent/20">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>{siteContent.challenge.eyebrow}</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold uppercase tracking-wide text-deep">
                Not ready for coaching? Start here.
              </h2>

              {/* Title & Intro */}
              <div className="space-y-1">
                <p className="text-base sm:text-lg font-semibold text-deep/90">
                  {siteContent.challenge.title}
                </p>
                <p className="text-xs sm:text-sm text-muted font-normal">
                  {siteContent.challenge.intro}
                </p>
              </div>

              {/* Price & CTA linking to dedicated /challenge page */}
              <div className="pt-2 flex flex-col sm:flex-row items-center md:items-baseline gap-4 sm:gap-6">
                <div className="text-3xl sm:text-4xl font-bold text-magenta tracking-tight">
                  {siteContent.challenge.price}
                </div>

                <div>
                  <Button
                    variant="primary"
                    size="lg"
                    href="/challenge"
                    className="w-full sm:w-auto shadow-xs hover:shadow-sm"
                  >
                    <span>{siteContent.challenge.buttonLabel}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </div>

              <p className="text-2xs text-muted font-normal">
                {siteContent.challenge.note}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
