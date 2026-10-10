import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Emphasizes words that are in ALL CAPS by leaving them as written
 * with a slightly heavier font weight (e.g. font-extrabold).
 */
function renderEmphasizedCaps(text: string): React.ReactNode {
  // Regex matches words of 2 or more uppercase letters (e.g. MONTHS, JUST, WORSE, HAVE, STRONG CORE AFTER BABIES!)
  const regex = /(\b[A-Z]{2,}(?:[ '’\-][A-Z]{2,})*!*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const lettersOnly = part.replace(/[^A-Za-z]/g, "");
    const isAllCaps =
      lettersOnly.length >= 2 && lettersOnly === lettersOnly.toUpperCase();

    if (isAllCaps) {
      return (
        <span
          key={index}
          className="font-extrabold text-deep"
        >
          {part}
        </span>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export function ProblemSection() {
  const photo = siteContent.problem.photo;

  return (
    <section id="problem" className="py-20 sm:py-28 bg-cream">
      <Container>
        <SectionHeading
          eyebrow="The Root Cause"
          heading="Why nothing else has worked"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-10 sm:mt-14 max-w-6xl mx-auto">
          {/* Text Paragraphs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {siteContent.problem.paragraphs.map((paragraph, index) => (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-200 ${
                  index === 2
                    ? "bg-white border-2 border-accent/30 shadow-xs"
                    : "bg-white/90 border border-blush/80 shadow-2xs"
                }`}
              >
                <p className="text-base sm:text-lg font-normal text-deep/90 leading-relaxed break-words">
                  {renderEmphasizedCaps(paragraph)}
                </p>
              </div>
            ))}
          </div>

          {/* Photo #14: Anatomy model & fat replica */}
          {photo && (
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-blush/80 bg-white">
                <Image
                  src={photo}
                  alt="Coach Ash explaining the difference between pelvic floor dysfunction and fat"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded-2xl p-3 border border-blush text-center shadow-xs">
                  <p className="text-xs font-semibold text-deep uppercase tracking-wide">
                    Anatomy First &bull; Rebuilding Dysfunction
                  </p>
                  <p className="text-2xs text-muted mt-0.5">
                    Not just cardio or dieting
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

