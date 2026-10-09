import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function CollectiveSection() {
  const progressPhotos = siteContent.collective.progressPhotoImages ?? [];

  return (
    <section id="collective" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-magenta mb-3">
            The Movement
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold sm:font-bold uppercase tracking-wide text-deep leading-snug break-words">
            {siteContent.collective.heading}
          </h2>
        </div>

        {/* Stacked RRR Statements in soft blush card */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-blush/35 border border-blush p-5 sm:p-10 lg:p-14 shadow-2xs my-8">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6 text-center">
            {siteContent.collective.rrr.map((statement, index) => (
              <div
                key={index}
                className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/95 border border-blush/80 shadow-2xs hover:border-accent/40 transition-all flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blush text-magenta text-xs sm:text-sm font-bold shrink-0 border border-accent/30">
                  0{index + 1}
                </span>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold sm:font-bold uppercase tracking-wide text-deep break-words">
                  {statement}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Subline */}
        <div className="max-w-2xl mx-auto text-center my-10 sm:my-14">
          <p className="text-base sm:text-xl font-normal text-deep/90 leading-relaxed break-words">
            {siteContent.collective.subline}
          </p>
        </div>

        {/* Progress Photo Grid */}
        {progressPhotos.length > 0 && (
          <div className="max-w-4xl mx-auto mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {progressPhotos.map((src, i) => (
                <div
                  key={src}
                  className="group bg-white rounded-3xl border border-blush p-3 shadow-2xs hover:shadow-xs transition-all overflow-hidden"
                >
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-blush/20">
                    <Image
                      src={src}
                      alt={`Community member transformation ${i + 1}`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <p className="text-center text-2xs text-muted mt-2.5 pb-0.5">Community member · Results vary</p>
                </div>
              ))}
            </div>

            {/* Testimonial disclaimer */}
            <p className="text-2xs sm:text-xs text-muted text-center mt-6 max-w-lg mx-auto">
              {siteContent.legal.testimonialDisclaimer}
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
