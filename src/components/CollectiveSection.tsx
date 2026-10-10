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

        {/* RRR Strip — Three across photo cards — full-width layout */}
        <div className="my-10 sm:my-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* 01 RESTORE THE CORE - #4 */}
            <div className="group bg-white rounded-3xl border border-blush/80 p-4 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-blush/20 mb-4">
                <Image
                  src={siteContent.method.rrrPhotos.restore}
                  alt="Restore the core — Coach Ash mat kneeling stretch"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-xs rounded-full text-xs font-bold text-magenta border border-blush shadow-2xs">
                  01 RESTORE
                </span>
              </div>
              <div className="text-center pb-2">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-deep">
                  {siteContent.collective.rrr[0]}
                </h3>
                <p className="text-xs text-muted mt-1">Re-activate deep abdominal &amp; pelvic floor connection</p>
              </div>
            </div>

            {/* 02 REHAB THE ABS - #18 */}
            <div className="group bg-white rounded-3xl border border-blush/80 p-4 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-blush/20 mb-4">
                <Image
                  src={siteContent.method.rrrPhotos.rehab}
                  alt="Rehab the abs — Coach Ash bird-dog reach"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-xs rounded-full text-xs font-bold text-magenta border border-blush shadow-2xs">
                  02 REHAB
                </span>
              </div>
              <div className="text-center pb-2">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-deep">
                  {siteContent.collective.rrr[1]}
                </h3>
                <p className="text-xs text-muted mt-1">Heal diastasis recti separation &amp; rebuild stability</p>
              </div>
            </div>

            {/* 03 REBUILD THE BODY - #22 (cropped out man on right) */}
            <div className="group bg-white rounded-3xl border border-blush/80 p-4 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-blush/20 mb-4">
                <Image
                  src={siteContent.method.rrrPhotos.rebuild}
                  alt="Rebuild the body — Coach Ash overhead press"
                  fill
                  className="object-cover object-[25%_center] group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-xs rounded-full text-xs font-bold text-magenta border border-blush shadow-2xs">
                  03 REBUILD
                </span>
              </div>
              <div className="text-center pb-2">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-deep">
                  {siteContent.collective.rrr[2]}
                </h3>
                <p className="text-xs text-muted mt-1">Build lean glutes, sculpt muscle &amp; burn stubborn fat</p>
              </div>
            </div>
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
                      alt={`Community member transformation ${i + 1}`}
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
      </Container>
    </section>
  );
}
