import React from "react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DevPlaceholder } from "@/components/ui/DevPlaceholder";
import { Trophy, Sparkles, ArrowRight } from "lucide-react";

export function ChallengeSection() {
  return (
    <section id="challenge" className="py-14 sm:py-20 bg-cream border-t border-blush/60 relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto bg-white/95 rounded-3xl border border-blush/80 shadow-2xs p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center">
            {/* Challenge Cover Mockup Placeholder */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative aspect-[3/4] w-44 sm:w-52 rounded-2xl bg-gradient-to-br from-blush/60 via-white to-blush/40 border border-accent/25 text-deep shadow-2xs flex flex-col justify-between p-5 overflow-hidden select-none">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-2xs font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/90 border border-blush text-muted">
                    Challenge
                  </span>
                  <Trophy className="w-4 h-4 text-magenta" />
                </div>

                <div className="relative z-10 text-center py-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-blush border border-accent/30 flex items-center justify-center mb-2 text-magenta shadow-2xs">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Coach Ash
                  </p>
                  <p className="text-sm font-bold uppercase tracking-tight text-deep mt-0.5">
                    {siteContent.challenge.title}
                  </p>
                </div>

                <div className="relative z-10 text-center">
                  <DevPlaceholder label="challenge cover" />
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
