import React from "react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Plus } from "lucide-react";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream border-b border-blush/60 relative overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Questions & Answers"
          heading={siteContent.faq.heading}
          align="center"
          className="mb-10 sm:mb-14"
        />

        <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          {siteContent.faq.items.map((item, index) => (
            <details
              key={index}
              name="faq"
              className="group bg-blush/60 hover:bg-blush/80 border border-accent/25 rounded-full open:rounded-3xl open:bg-blush/70 open:border-accent/40 shadow-2xs motion-safe:transition-[border-color,background-color,border-radius] motion-safe:duration-300"
            >
              <summary className="cursor-pointer list-none select-none px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-deep focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-magenta focus-visible:ring-offset-2 rounded-full [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-3.5 sm:gap-4 text-left">
                  <span
                    aria-hidden="true"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-magenta flex items-center justify-center shrink-0 text-xs sm:text-sm font-bold border border-accent/25"
                  >
                    Q
                  </span>
                  <span className="leading-snug">{item.q}</span>
                </span>

                <span
                  aria-hidden="true"
                  className="w-8 h-8 rounded-full bg-white shadow-2xs border border-blush flex items-center justify-center shrink-0 text-magenta motion-safe:transition-transform motion-safe:duration-300 group-open:rotate-45"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                </span>
              </summary>

              {/* Smooth CSS-only accordion reveal */}
              <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] motion-safe:transition-[grid-template-rows] motion-safe:duration-300 motion-reduce:transition-none">
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2 sm:px-8 sm:pb-7 text-sm sm:text-base text-deep/90 font-normal leading-relaxed border-t border-accent/20">
                    <div className="pl-10 sm:pl-12">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
