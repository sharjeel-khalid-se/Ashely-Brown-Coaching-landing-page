import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export function MethodSection() {
  const progressPhotos = siteContent.method.progressPhotoImages ?? [];
  const isProduction = process.env.NODE_ENV === "production";
  const shouldShowPhotos = progressPhotos.length > 0 && (!isProduction || progressPhotos.length > 0);

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

        {/* Progress Photo Grid */}
        {shouldShowPhotos && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {progressPhotos.map((src, i) => (
                <div
                  key={src}
                  className="group relative bg-white rounded-3xl border border-blush/80 p-3 shadow-2xs hover:shadow-xs transition-all overflow-hidden"
                >
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-blush/20">
                    <Image
                      src={src}
                      alt={`Client transformation ${i + 1} — Community member`}
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

        {/* Testimonial Carousel: renders NOTHING if testimonials array is empty */}
        <TestimonialCarousel testimonials={siteContent.method.testimonials} />
      </Container>
    </section>
  );
}
