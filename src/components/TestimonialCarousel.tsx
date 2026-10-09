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

  const current = testimonials[currentIndex];
  const quoteText = typeof current === "string" ? current : current.quote;
  const authorText = typeof current === "string" ? "" : current.author;
  const roleText = typeof current === "string" ? "" : current.role;

  return (
    <div
      role="region"
      aria-label="Client Testimonials"
      className="relative max-w-3xl mx-auto my-12 bg-white/95 p-8 sm:p-12 rounded-3xl border border-blush/80 shadow-2xs text-center"
    >
      <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center mx-auto mb-6 text-magenta border border-accent/20">
        <Quote className="w-6 h-6" />
      </div>

      <blockquote className="text-lg sm:text-2xl font-semibold text-deep leading-relaxed mb-6">
        &ldquo;{quoteText}&rdquo;
      </blockquote>

      {authorText && (
        <div className="font-bold text-sm uppercase tracking-wider text-magenta">
          {authorText}
          {roleText && (
            <span className="text-muted font-normal block text-xs mt-1">
              {roleText}
            </span>
          )}
        </div>
      )}

      {/* Carousel Controls */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-blush bg-white hover:bg-blush text-deep flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-magenta w-6"
                    : "bg-blush hover:bg-accent/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-blush bg-white hover:bg-blush text-deep flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Testimonial disclaimer in small text */}
      <p className="text-2xs sm:text-xs text-muted text-center mt-4 max-w-lg mx-auto">
        {siteContent.legal.testimonialDisclaimer}
      </p>
    </div>
  );
}
