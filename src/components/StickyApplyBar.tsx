"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function StickyApplyBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isHeroIntersecting, setIsHeroIntersecting] = useState(true);
  const [isApplyIntersecting, setIsApplyIntersecting] = useState(false);
  const [isFooterIntersecting, setIsFooterIntersecting] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const heroEl = document.getElementById("hero");
    const applyEl = document.getElementById("apply");
    const footerEl = document.querySelector("footer");

    if (!heroEl && !applyEl && !footerEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "hero") {
            setIsHeroIntersecting(entry.isIntersecting);
          } else if (entry.target.id === "apply") {
            setIsApplyIntersecting(entry.isIntersecting);
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
    if (applyEl) observer.observe(applyEl);
    if (footerEl) observer.observe(footerEl);

    return () => {
      observer.disconnect();
    };
  }, [isHome]);

  if (!isHome) {
    return null;
  }

  const shouldShow =
    !isHeroIntersecting && !isApplyIntersecting && !isFooterIntersecting;

  const handleApplyClick = (e: React.MouseEvent<HTMLElement>) => {
    const applySection = document.getElementById("apply");
    if (applySection) {
      e.preventDefault();
      applySection.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#apply");
    }
  };

  return (
    <aside
      aria-label="Quick application bar"
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
        <Button
          variant="primary"
          size="md"
          fullWidth
          href="#apply"
          onClick={handleApplyClick}
          className="shadow-xs tracking-wider uppercase font-bold text-sm py-3.5"
        >
          {siteContent.nav.mobileStickyCta}
        </Button>
      </div>
    </aside>
  );
}
