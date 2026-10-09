import React from "react";
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
  return (
    <section id="loop" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-blush text-deep border border-accent/25 shadow-xs max-w-4xl mx-auto p-6 sm:p-12 lg:p-16">
          <div className="relative z-10 text-center space-y-6 sm:space-y-8">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-magenta text-xs sm:text-sm font-semibold uppercase tracking-widest border border-accent/30 shadow-2xs">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>The Lock-In Loop</span>
            </div>

            {/* Decorative Quote Icon */}
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto text-magenta shadow-2xs border border-accent/20">
              <Quote className="w-6 h-6" aria-hidden="true" />
            </div>

            {/* Pull-quote text */}
            <blockquote className="text-lg sm:text-2xl md:text-3xl font-semibold sm:font-bold leading-relaxed sm:leading-relaxed text-deep max-w-3xl mx-auto break-words">
              &ldquo;{renderProminentLoopBody(siteContent.lockInLoop.body)}&rdquo;
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
