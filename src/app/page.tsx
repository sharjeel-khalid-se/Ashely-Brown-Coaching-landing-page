import { siteContent } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui";

import fs from "fs";
import path from "path";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { MethodSection } from "@/components/MethodSection";
import { CollectiveSection } from "@/components/CollectiveSection";
import { WantsSection } from "@/components/WantsSection";
import { LockInLoopSection } from "@/components/LockInLoopSection";
import { ForYouIfSection } from "@/components/ForYouIfSection";
import { ApplicationForm } from "@/components/ApplicationForm";
import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { Footer } from "@/components/Footer";

export default function LandingPage() {

  const heroPhotoPath = path.join(
    process.cwd(),
    "public",
    siteContent.hero.photo
  );
  const hasHeroPhoto = fs.existsSync(heroPhotoPath);

  const aboutPhotoPath = path.join(
    process.cwd(),
    "public",
    siteContent.about.photo
  );
  const hasAboutPhoto = fs.existsSync(aboutPhotoPath);

  return (
    <main className="min-h-screen bg-cream text-deep">
      {/* 1. HERO SECTION */}
      <section id="hero" className="bg-cream border-b border-blush/60">
        <Hero hasHeroPhoto={hasHeroPhoto} />
      </section>

      {/* 2. PROBLEM SECTION */}
      <ProblemSection />

      {/* 3. METHOD SECTION */}
      <MethodSection />

      {/* 4. COLLECTIVE SECTION */}
      <CollectiveSection />

      {/* 5. WANTS SECTION */}
      <WantsSection />

      {/* 6. LOOP SECTION */}
      <LockInLoopSection />

      {/* 7. FOR-YOU SECTION */}
      <ForYouIfSection />

      {/* 8. APPLY SECTION */}
      <section id="apply" className="py-20 sm:py-28 bg-blush/40 relative overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="Step 1: Your Application"
            heading={siteContent.apply.heading}
            highlightWords={["coaching"]}
            subline="Tell Coach Ash about your current routine, goals, and postpartum timeline."
            align="center"
          />

          {/* Above Application Form: Photo #11 + T8 Instagram Comment Card */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="bg-white rounded-3xl border border-blush/80 p-6 sm:p-8 shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Photo #11: Laughing between pedestals */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative aspect-[4/5] w-full max-w-[240px] rounded-2xl overflow-hidden bg-blush/20 border border-blush shadow-2xs">
                    <Image
                      src={siteContent.apply.aboveFormPhoto}
                      alt="Coach Ash — Laughing and welcoming you to apply"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 240px"
                    />
                  </div>
                </div>

                {/* T8 Quote Card */}
                <div className="md:col-span-7 space-y-4 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blush text-magenta text-xs font-semibold uppercase tracking-wider">
                    <span>3x C-Section Mom Win</span>
                  </div>
                  <blockquote className="text-base sm:text-lg font-medium text-deep leading-relaxed italic">
                    &ldquo;{siteContent.apply.aboveFormQuote}&rdquo;
                  </blockquote>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">
                    &mdash; {siteContent.apply.aboveFormQuoteAttribution}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ApplicationForm />
        </Container>
      </section>

      {/* 9. ABOUT SECTION */}
      <AboutSection hasAboutPhoto={hasAboutPhoto} />

      {/* 10. FAQ SECTION */}
      <FaqSection />

      {/* 11. CHALLENGE SECTION */}
      <ChallengeSection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
