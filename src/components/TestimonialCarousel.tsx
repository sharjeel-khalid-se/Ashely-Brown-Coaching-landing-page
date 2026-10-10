"use client";

import React, { useState } from "react";
import { siteContent } from "@/content/site";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export interface TestimonialItem {
  quote: string;
  author?: string;
  role?: string;
  image?: string;
}

export interface TestimonialCarouselProps {
  testimonials?: TestimonialItem[] | string[];
}

export function TestimonialCarousel({
  testimonials = [],
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 45;

  // CRITICAL REQUIREMENT: Render NOTHING if siteContent.method.testimonials is empty
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const current = testimonials[currentIndex];
  const quoteText = typeof current === "string" ? current : current.quote;
  const authorText = typeof current === "string" ? "" : current.author;
  const roleText = typeof current === "string" ? "" : current.role;

  return (
    <div
      role="region"
      aria-label="Client Testimonials"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative max-w-3xl mx-auto my-12 bg-white/95 p-6 sm:p-12 rounded-3xl border border-blush/80 shadow-2xs text-center flex flex-col justify-between min-h-[500px] sm:min-h-[420px] touch-pan-y select-none"
    >
      {/* Top Quote Icon */}
      <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center mx-auto mb-4 text-magenta border border-accent/20 shrink-0">
        <Quote className="w-6 h-6" />
      </div>

      {/* Middle Content Wrapper: Centered vertically so button position is strictly locked */}
      <div className="flex-1 flex flex-col justify-center items-center py-3">
        <blockquote className="text-base sm:text-xl font-medium sm:font-semibold text-deep leading-relaxed max-w-2xl mx-auto mb-5">
          &ldquo;{quoteText}&rdquo;
        </blockquote>

        {authorText && (
          <div className="font-bold text-xs sm:text-sm uppercase tracking-wider text-magenta">
            {authorText}
            {roleText && (
              <span className="text-muted font-normal block text-xs mt-0.5">
                {roleText}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Controls Area: Pinned at the bottom so buttons never jump */}
      <div className="mt-4 shrink-0">
        {testimonials.length > 1 && (
          <div className="flex items-center justify-center gap-4 h-10 mb-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 shrink-0 rounded-full border border-blush bg-white hover:bg-blush active:scale-95 text-deep flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-1.5 w-36 shrink-0">
              {testimonials.map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "bg-magenta w-6"
                      : "bg-blush hover:bg-accent/40 w-2.5"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 shrink-0 rounded-full border border-blush bg-white hover:bg-blush active:scale-95 text-deep flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Testimonial disclaimer in small text */}
        <p className="text-2xs sm:text-xs text-muted text-center max-w-lg mx-auto">
          {siteContent.legal.testimonialDisclaimer}
        </p>
      </div>
    </div>
  );
}

