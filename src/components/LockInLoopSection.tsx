import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Quote, Sparkles } from "lucide-react";

/**
 * Highlights "EVERY. SINGLE. WEEK." visually without altering any text.
 */
function renderProminentLoopBody(body: string): React.ReactNode {
  const target = "EVERY. SINGLE. WEEK.";
  if (!body.includes(target)) {
    return body;
  }

  const parts = body.split(target);

  return (
    <>
      {parts[0]}
      <span className="inline-block mx-1 my-1 px-3 py-1 rounded-xl bg-white text-magenta font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl tracking-wide shadow-2xs border border-accent/20">
        {target}
      </span>
      {parts[1]}
    </>
  );
}

export function LockInLoopSection() {
  const photo = siteContent.lockInLoop.photo;

  return (
    <section id="loop" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-blush text-deep border border-accent/25 shadow-xs max-w-5xl mx-auto p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* App & Accountability Mockup */}
            {photo && (
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="relative aspect-square w-full max-w-md rounded-3xl overflow-hidden shadow-xs border border-white/80 bg-white p-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={photo}
                      alt="Coach Ash custom coaching app mockup — Weekly check-ins and progress tracking"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 420px"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs rounded-xl py-2 px-3 text-center border border-blush shadow-2xs">
                    <p className="text-xs font-bold uppercase tracking-wider text-deep">
                      Weekly Accountability &bull; In-App Tracking
                    </p>
                    <p className="text-2xs text-muted">Personalized workouts, nutrition &amp; progress check-ins</p>
                  </div>
                </div>
              </div>
            )}

            {/* Quote content */}
            <div className={`space-y-6 text-center ${photo ? "lg:col-span-7 lg:text-left" : "max-w-3xl mx-auto"} order-1 lg:order-2`}>
              {/* Pill Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-magenta text-xs sm:text-sm font-semibold uppercase tracking-widest border border-accent/30 shadow-2xs">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>The Lock-In Loop</span>
              </div>

              {/* Decorative Quote Icon */}
              <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center text-magenta shadow-2xs border border-accent/20 ${photo ? "mx-auto lg:mx-0" : "mx-auto"}`}>
                <Quote className="w-6 h-6" aria-hidden="true" />
              </div>

              {/* Pull-quote text */}
              <blockquote className="text-lg sm:text-2xl md:text-3xl font-semibold sm:font-bold leading-relaxed sm:leading-relaxed text-deep break-words">
                &ldquo;{renderProminentLoopBody(siteContent.lockInLoop.body)}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
