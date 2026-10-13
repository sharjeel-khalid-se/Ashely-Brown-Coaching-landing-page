import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site";
import { Header } from "@/components/Header";
import { StickyApplyBar } from "@/components/StickyApplyBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.musclemommymethod.biz";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteContent.brand.name} | Muscle Mommy Method`,
    template: `%s | ${siteContent.brand.name}`,
  },
  description: `${siteContent.brand.credentialsLine} — ${siteContent.collective.rrr.join(" · ")}`,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-512x512.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: `${siteContent.brand.name} | Muscle Mommy Method`,
    description: `${siteContent.brand.credentialsLine} — ${siteContent.collective.rrr.join(" · ")}`,
    url: baseUrl,
    siteName: siteContent.brand.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteContent.brand.name} — Muscle Mommy Method`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.brand.name} | Muscle Mommy Method`,
    description: `${siteContent.brand.credentialsLine} — ${siteContent.collective.rrr.join(" · ")}`,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false",
    follow: process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false",
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Xixv6_4mn583M192Znpcgfn2kznh3A0hdEeCgWAKYSM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-off-white text-deep font-sans antialiased selection:bg-blush selection:text-crimson flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <StickyApplyBar />
      </body>
    </html>
  );
}
