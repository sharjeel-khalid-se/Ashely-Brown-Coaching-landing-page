"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const applyHref = isHome ? "#apply" : "/#apply";

  const handleScrollToApply = (e: React.MouseEvent<HTMLElement>) => {
    if (isHome) {
      const applyEl = document.getElementById("apply");
      if (applyEl) {
        e.preventDefault();
        applyEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#apply");
      }
    }
  };

  const hasInstagram = Boolean(
    siteContent.brand.instagram && siteContent.brand.instagram.trim().length > 0
  );
  const hasTikTok = Boolean(
    siteContent.brand.tiktok && siteContent.brand.tiktok.trim().length > 0
  );

  return (
    <footer className="bg-dark-brown text-cream py-14 sm:py-16 border-t border-dark-brown/20 relative">
      <Container>
        {/* Top bar: Brand + CTA + Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logo & credentials */}
          <div className="text-center md:text-left space-y-1">
            <Link
              href="/"
              className="text-2xl font-bold uppercase tracking-wider text-cream hover:text-blush transition-colors inline-block"
            >
              {siteContent.brand.name}
            </Link>
            <p className="text-xs sm:text-sm text-cream/70 max-w-sm font-normal">
              {siteContent.brand.credentialsLine}
            </p>
          </div>

          {/* Soft pink pill button to apply */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Button
              variant="primary"
              size="md"
              href={applyHref}
              onClick={handleScrollToApply}
              className="px-8 py-3.5 font-bold uppercase tracking-wider text-sm shadow-xs hover:shadow-sm"
            >
              {siteContent.nav.footerCta}
            </Button>

            {/* Social & Contact links */}
            <div className="flex items-center gap-4 text-sm">
              {hasInstagram && (
                <a
                  href={siteContent.brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              )}

              {hasTikTok && (
                <a
                  href={siteContent.brand.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.1 15.68a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.86-4.5V8.52a8.27 8.27 0 0 0 4.81 1.55v-3.38z" />
                  </svg>
                </a>
              )}

              {siteContent.brand.contactEmail && (
                <a
                  href={`mailto:${siteContent.brand.contactEmail}`}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label={`Email ${siteContent.brand.contactEmail}`}
                  title={siteContent.brand.contactEmail}
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom details: Legal disclaimer, links, copyright */}
        <div className="pt-8 space-y-6 text-xs text-cream/80">
          <p className="max-w-3xl leading-relaxed text-cream/70">
            {siteContent.legal.disclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-cream/85">
            <p>&copy; 2026 Coach Ash. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/privacy"
                className="hover:text-cream transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-cream transition-colors underline-offset-4 hover:underline"
              >
                Terms & Conditions
              </Link>
              <a
                href={`mailto:${siteContent.brand.contactEmail}`}
                className="hover:text-cream transition-colors underline-offset-4 hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
