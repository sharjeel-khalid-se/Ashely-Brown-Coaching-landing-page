import React from "react";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { DevPlaceholder } from "@/components/ui/DevPlaceholder";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Camera } from "lucide-react";

export function MethodSection() {
  const isProduction = process.env.NODE_ENV === "production";
  // Hide photo-card section in production when there are no real images
  const hasRealMethodPhotos = false;
  const shouldShowPhotoCards = !isProduction || hasRealMethodPhotos;

  return (
    <section id="method" className="py-20 sm:py-28 bg-cream border-y border-blush/60">
      <Container>
        {/* Intro line as a big heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-magenta mb-3">
            The Method
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold sm:font-bold uppercase tracking-wide text-deep leading-snug sm:leading-tight">
            {siteContent.method.intro}
          </h2>
        </div>

        {/* Progress Photo Grid: hidden in production build if no real images */}
        {shouldShowPhotoCards && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group relative bg-white rounded-3xl border border-blush/80 p-4 shadow-2xs hover:shadow-xs transition-all"
                >
                  <div className="relative aspect-[3/4] w-full rounded-2xl bg-gradient-to-b from-blush/40 to-blush/10 border-2 border-dashed border-accent/30 flex flex-col items-center justify-between p-6 text-center select-none overflow-hidden">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-semibold uppercase tracking-wider text-magenta shadow-2xs">
                      Client Transformation #{item}
                    </span>

                    <div className="w-14 h-14 rounded-full bg-blush flex items-center justify-center text-magenta shadow-2xs">
                      <Camera className="w-7 h-7" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-deep block uppercase tracking-wide">
                        Core Rehab & Tone
                      </span>
                      <span className="text-2xs text-muted block">
                        Individual Results Vary
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dev-only placeholder notice */}
            <div className="text-center mt-6">
              <DevPlaceholder label="client progress photos, need written permission" />
            </div>

            {/* Testimonial disclaimer */}
            <p className="text-2xs sm:text-xs text-muted text-center mt-4 max-w-lg mx-auto">
              {siteContent.legal.testimonialDisclaimer}
            </p>
          </div>
        )}

        {/* Testimonial Carousel: renders NOTHING if testimonials array is empty */}
        <TestimonialCarousel testimonials={siteContent.method.testimonials} />
      </Container>
    </section>
  );
}
