"use client";

import React, { useEffect, useState } from "react";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";

export function StickyChallengeBar() {
  const [isHeroIntersecting, setIsHeroIntersecting] = useState(true);
  const [isFooterIntersecting, setIsFooterIntersecting] = useState(false);

  const stanStoreUrl = process.env.NEXT_PUBLIC_STAN_STORE_URL;
  const isUrlConfigured = Boolean(stanStoreUrl && stanStoreUrl.trim().length > 0);

  useEffect(() => {
    const heroEl = document.getElementById("challenge-hero");
    const footerEl = document.querySelector("footer");

    if (!heroEl && !footerEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "challenge-hero") {
            setIsHeroIntersecting(entry.isIntersecting);
          } else if (entry.target.tagName.toLowerCase() === "footer") {
            setIsFooterIntersecting(entry.isIntersecting);
          }
        });
      },
      {
        root: null,
        threshold: 0.05,
      }
    );

    if (heroEl) observer.observe(heroEl);
    if (footerEl) observer.observe(footerEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const shouldShow = !isHeroIntersecting && !isFooterIntersecting;

  return (
    <aside
      aria-label="Quick challenge purchase bar"
      className={`fixed bottom-0 inset-x-0 z-40 sm:hidden transition-all duration-300 ease-in-out ${
        shouldShow
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      } bg-cream/95 backdrop-blur-md border-t border-blush/60 shadow-[0_-4px_20px_rgba(46,36,56,0.08)] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]`}
      style={{
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="max-w-md mx-auto">
        {isUrlConfigured ? (
          <Button
            variant="primary"
            size="md"
            fullWidth
            href={stanStoreUrl}
            isExternal
            className="shadow-xs tracking-wider uppercase font-bold text-sm py-3.5"
          >
            <span>{siteContent.challenge.buttonLabel}</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <button
            type="button"
            disabled
            className="w-full inline-flex items-center justify-center rounded-full font-bold uppercase tracking-wider text-sm px-6 py-3.5 bg-gray-200 text-gray-500 cursor-not-allowed shadow-none"
          >
            {siteContent.challenge.buttonLabel}
          </button>
        )}
      </div>
    </aside>
  );
}
