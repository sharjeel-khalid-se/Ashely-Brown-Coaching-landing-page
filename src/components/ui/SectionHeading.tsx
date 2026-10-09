import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  heading: string | React.ReactNode;
  highlightWords?: string[];
  subline?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  isUppercase?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  highlightWords = [],
  subline,
  align = "center",
  as: HeadingTag = "h2",
  isUppercase = false,
  className = "",
}: SectionHeadingProps) {
  // If heading is a string and highlightWords are provided, wrap matches in coral-pink span
  const renderHeadingContent = () => {
    if (typeof heading !== "string" || highlightWords.length === 0) {
      return heading;
    }

    // Escape regex characters
    const escapedWords = highlightWords.map((w) =>
      w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const regex = new RegExp(`(${escapedWords.join("|")})`, "gi");
    const parts = heading.split(regex);

    return parts.map((part, index) => {
      const isHighlighted = highlightWords.some(
        (w) => w.toLowerCase() === part.toLowerCase()
      );
      if (isHighlighted) {
        return (
          <span key={index} className="text-magenta font-bold">
            {part}
          </span>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  const alignClasses =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-8 sm:mb-12 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-magenta mb-2.5">
          {eyebrow}
        </span>
      )}
      <HeadingTag
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-snug text-deep tracking-wide break-words ${
          isUppercase ? "uppercase" : ""
        }`}
      >
        {renderHeadingContent()}
      </HeadingTag>
      {subline && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted font-normal leading-relaxed max-w-2xl mx-auto">
          {subline}
        </p>
      )}
    </div>
  );
}
