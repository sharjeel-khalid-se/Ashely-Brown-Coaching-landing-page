"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const applyHref = isHome ? "#apply" : "/#apply";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleApplyClick = (e: React.MouseEvent<HTMLElement>) => {
    // If on homepage, smooth-scroll to #apply
    if (isHome) {
      const applySection = document.getElementById("apply");
      if (applySection) {
        e.preventDefault();
        applySection.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#apply");
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-blush/60 shadow-2xs py-2.5 sm:py-3"
          : "bg-cream/80 backdrop-blur-xs border-b border-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Text Logo */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta rounded-md"
        >
          <span className="text-lg sm:text-xl font-bold uppercase tracking-wider text-deep transition-colors group-hover:text-magenta">
            {siteContent.nav.logoText}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        </Link>

        {/* Right: Apply Now Pill Button */}
        <div>
          <Button
            variant="primary"
            size="sm"
            href={applyHref}
            onClick={handleApplyClick}
            className="text-xs sm:text-sm px-4 sm:px-5 py-2 font-semibold"
          >
            {siteContent.nav.applyCta}
          </Button>
        </div>
      </div>
    </header>
  );
}
