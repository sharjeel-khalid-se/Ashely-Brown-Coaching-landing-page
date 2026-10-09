import React from "react";
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
  return (
    <section id="problem" className="py-20 sm:py-28 bg-cream">
      <Container>
        <SectionHeading
          eyebrow="The Root Cause"
          heading="Why nothing else has worked"
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 mt-8 sm:mt-12">
          {siteContent.problem.paragraphs.map((paragraph, index) => (
            <div
              key={index}
              className={`p-6 sm:p-10 rounded-2xl sm:rounded-3xl transition-all duration-200 ${
                index === 2
                  ? "bg-white border-2 border-accent/30 shadow-xs"
                  : "bg-white/90 border border-blush/80 shadow-2xs"
              }`}
            >
              <p className="text-base sm:text-xl font-normal text-deep/90 leading-relaxed sm:leading-loose break-words">
                {renderEmphasizedCaps(paragraph)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
