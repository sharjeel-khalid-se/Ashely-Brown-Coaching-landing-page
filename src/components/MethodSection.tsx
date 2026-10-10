import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export function MethodSection() {
  const progressPhotos = siteContent.method.progressPhotoImages ?? [];
  const introPhoto = siteContent.method.introPhoto;
  const screenshotTestimonials = siteContent.method.screenshotTestimonials ?? [];
  const isProduction = process.env.NODE_ENV === "production";
  const shouldShowPhotos = progressPhotos.length > 0 && (!isProduction || progressPhotos.length > 0);

  return (
    <section id="method" className="py-20 sm:py-28 bg-cream border-y border-blush/60">
      <Container>
        {/* Intro block with Photo #17 (Couch reading newspaper) */}
        <div className="max-w-5xl mx-auto mb-14 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-blush/80 shadow-2xs">
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-magenta">
                The Method
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold sm:font-bold uppercase tracking-wide text-deep leading-snug sm:leading-tight">
                {siteContent.method.intro}
              </h2>
              <p className="text-base sm:text-lg text-deep/80 font-normal leading-relaxed">
                Rebuilding postpartum strength with clinical nursing precision and real-world mom empathy.
              </p>
            </div>

            {introPhoto && (
              <div className="md:col-span-5 flex justify-center">
                <div className="relative aspect-[4/5] w-full max-w-xs rounded-2xl overflow-hidden shadow-xs border border-blush">
                  <Image
                    src={introPhoto}
                    alt="Coach Ash reading the Muscle Mommy Method newspaper"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs rounded-xl py-1.5 px-3 text-center border border-blush">
                    <span className="text-2xs font-bold uppercase tracking-wider text-magenta">
                      Muscle Mommy Method
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Progress Photo Grid (T4, T6, T10) */}
        {shouldShowPhotos && (
          <div className="max-w-5xl mx-auto mb-16 sm:mb-24">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                Proven Client Transformations
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-deep mt-1">
                Real Moms &bull; Real Results
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {progressPhotos.map((src, i) => (
                <div
                  key={src}
                  className="group relative bg-white rounded-3xl border border-blush/80 p-3 shadow-2xs hover:shadow-xs transition-all overflow-hidden"
                >
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-cream/40 p-1">
                    {/* Before & After Badges */}
                    <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                      <span className="px-2 py-0.5 rounded-md bg-deep/80 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                        Before
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                      <span className="px-2 py-0.5 rounded-md bg-magenta/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                        After
                      </span>
                    </div>

                    <Image
                      src={src}
                      alt={`Client transformation ${i + 1} — Community member`}
                      fill
                      className="object-contain object-center"
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

        {/* Testimonial Carousel */}
        <TestimonialCarousel testimonials={siteContent.method.testimonials} />

        {/* Client Message Screenshots */}
        {screenshotTestimonials.length > 0 && (
          <div className="max-w-5xl mx-auto mt-16 sm:mt-24">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-magenta">
                Unfiltered DMs &amp; Check-ins
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-deep mt-1">
                Inside The Coaching Community
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {screenshotTestimonials.map((src, idx) => (
                <div
                  key={src}
                  className="bg-white rounded-3xl border border-blush/80 p-3 shadow-2xs overflow-hidden flex flex-col justify-center"
                >
                  <div className="relative aspect-[9/16] max-h-96 w-full rounded-2xl overflow-hidden bg-blush/10">
                    <Image
                      src={src}
                      alt={`Client check-in message screenshot ${idx + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-center text-2xs text-muted mt-2">Verified Client DM</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
