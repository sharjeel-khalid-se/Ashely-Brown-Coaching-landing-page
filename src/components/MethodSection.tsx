import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Sparkles } from "lucide-react";

/**
 * Highlights "Muscle Mommy Method" in brand magenta to match the logo.
 */
function renderIntroTitle(intro: string) {
  const brandName = "Muscle Mommy Method";
  if (intro.includes(brandName)) {
    const parts = intro.split(brandName);
    return (
      <>
        {parts[0]}
        <span className="text-magenta font-black">{brandName}</span>
        {parts[1]}
      </>
    );
  }
  return intro;
}

export function MethodSection() {
  const progressPhotos = siteContent.method.progressPhotoImages ?? [];
  const introPhoto = siteContent.method.introPhoto;
  const screenshotTestimonials = siteContent.method.screenshotTestimonials ?? [];
  const isProduction = process.env.NODE_ENV === "production";
  const shouldShowPhotos = progressPhotos.length > 0 && (!isProduction || progressPhotos.length > 0);

  return (
    <section id="method" className="py-20 sm:py-28 bg-cream border-y border-blush/60">
      <Container>
        {/* Intro block: Styled to match the Muscle Mommy Method logo */}
        <div className="max-w-5xl mx-auto mb-14 sm:mb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-blush/35 to-white p-6 sm:p-10 lg:p-12 border-2 border-blush shadow-xs">
            {/* Top accent bar matching logo's signature magenta/pink */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-magenta via-pink-400 to-magenta" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5 text-center md:text-left">
                {/* Branded Eyebrow Pill */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blush text-magenta text-xs font-bold uppercase tracking-widest border border-magenta/20 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>The Method</span>
                </div>

                {/* MMM Logo — hero brand emblem */}
                <div className="flex justify-center md:justify-start pt-1">
                  <div className="relative w-56 sm:w-72 h-20 sm:h-24">
                    <Image
                      src={siteContent.brand.logo}
                      alt="Muscle Mommy Method logo"
                      fill
                      className="object-contain object-center md:object-left drop-shadow-sm"
                      priority
                      sizes="(max-width: 640px) 224px, 288px"
                    />
                  </div>
                </div>

                {/* Headline matched with the logo branding */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-deep leading-snug">
                  {renderIntroTitle(siteContent.method.intro)}
                </h2>

                <p className="text-base sm:text-lg text-deep/80 font-normal leading-relaxed max-w-lg">
                  Rebuilding postpartum strength with clinical nursing precision and real-world mom empathy.
                </p>
              </div>

              {introPhoto && (
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative aspect-[4/5] w-full max-w-xs rounded-2xl overflow-hidden shadow-xs border-2 border-white bg-blush/20">
                    <Image
                      src={introPhoto}
                      alt="Coach Ash reading the Muscle Mommy Method newspaper"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl py-2 px-3 text-center border border-blush shadow-2xs">
                      <p className="text-xs font-bold uppercase tracking-wider text-magenta">
                        Muscle Mommy Method
                      </p>
                      <p className="text-2xs text-muted">Restore &bull; Rehab &bull; Rebuild</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
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

        {/* Client Message Screenshots — Infinite Moving Ticker */}
        {screenshotTestimonials.length > 0 && (
          <div className="mt-16 sm:mt-24">
            <div className="text-center mb-8 sm:mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-magenta">
                Unfiltered DMs &amp; Check-ins
              </span>
              <h3 className="text-xl sm:text-3xl font-bold uppercase tracking-tight text-deep mt-1">
                Inside The Coaching Community
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-2">
                Real weekly check-in messages from moms inside the program (hover to pause)
              </p>
            </div>

            {/* Infinite Marquee Track (Moving right to left) */}
            <div className="relative w-full overflow-hidden py-3">
              {/* Left and right gradient fade overlays */}
              <div
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-cream via-cream/80 to-transparent z-10"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-cream via-cream/80 to-transparent z-10"
                aria-hidden="true"
              />

              <div className="animate-marquee flex items-center">
                {[...screenshotTestimonials, ...screenshotTestimonials].map((src, idx) => (
                  <div
                    key={`${src}-${idx}`}
                    className="shrink-0 w-[280px] sm:w-[330px] bg-white rounded-3xl border border-blush/80 p-3 sm:p-4 shadow-2xs hover:shadow-md hover:border-accent/40 transition-all flex flex-col justify-between mx-2.5 sm:mx-3 select-none"
                  >
                    <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden bg-blush/10 p-2 flex items-center justify-center">
                      <Image
                        src={src}
                        alt={`Client check-in message ${idx + 1}`}
                        fill
                        className="object-contain p-1"
                        sizes="(max-width: 640px) 280px, 330px"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-3 px-1">
                      <span className="text-[11px] font-bold text-deep/70 uppercase tracking-wider">
                        Verified Client DM
                      </span>
                      <span className="text-[11px] font-bold text-magenta">
                        Coach Ash
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
