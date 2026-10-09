import { siteContent } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui";

import fs from "fs";
import path from "path";
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
