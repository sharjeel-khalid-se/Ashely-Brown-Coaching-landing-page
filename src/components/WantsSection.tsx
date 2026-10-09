import React from "react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function WantsSection() {
  return (
    <section id="wants" className="py-20 sm:py-28 bg-cream border-y border-blush/60">
      <Container>
        <SectionHeading
          eyebrow="What you want"
          heading={siteContent.wants.heading}
          highlightWords={["ACTUALLY WANT…", "ACTUALLY WANT"]}
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5 mt-8 sm:mt-12">
          {siteContent.wants.bullets.map((bullet, index) => (
            <div
              key={index}
              className="group p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/95 border border-blush/80 hover:border-accent/40 transition-all duration-200 shadow-2xs hover:shadow-xs flex items-start gap-4 sm:gap-6"
            >
              {/* Check icon in branded blush circle */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blush text-magenta flex items-center justify-center shrink-0 mt-0.5 shadow-2xs border border-accent/20 transition-transform group-hover:scale-105">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:6" aria-hidden="true" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-base sm:text-lg font-normal text-deep/90 leading-relaxed break-words">
                  {bullet}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
