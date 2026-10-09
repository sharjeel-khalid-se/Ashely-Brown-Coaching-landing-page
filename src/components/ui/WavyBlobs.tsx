import React from "react";

export type WavyBlobsVariant = "divider" | "banner" | "accent";

export interface WavyBlobsProps extends React.SVGAttributes<SVGSVGElement> {
  variant?: WavyBlobsVariant;
  flip?: boolean;
  className?: string;
}

export function WavyBlobs({
  variant = "divider",
  flip = false,
  className = "",
  ...props
}: WavyBlobsProps) {
  const flipClass = flip ? "rotate-180" : "";

  if (variant === "accent") {
    return (
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={`w-full max-w-sm pointer-events-none select-none ${className}`}
        {...props}
      >
        {/* Layer 1: Hot pink soft organic wave */}
        <path
          d="M480 180C540 260 520 370 450 440C380 510 260 540 180 480C100 420 60 270 120 180C180 90 320 60 410 100C440 115 460 145 480 180Z"
          fill="#FF7FAF"
          fillOpacity="0.25"
        />
        {/* Layer 2: Crimson ribbon curve */}
        <path
          d="M420 220C470 280 450 360 390 410C330 460 230 470 170 420C110 370 100 270 150 200C200 130 310 110 370 150C390 165 410 190 420 220Z"
          fill="#C8083F"
          fillOpacity="0.18"
        />
      </svg>
    );
  }

  if (variant === "banner") {
    return (
      <svg
        viewBox="0 0 1440 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={`w-full block pointer-events-none select-none ${flipClass} ${className}`}
        {...props}
      >
        {/* Base Crimson Field */}
        <rect width="1440" height="280" fill="#C8083F" />

        {/* Hot Pink Undulating Ribbon 1 */}
        <path
          d="M-20 40C180 160 380 -40 620 90C860 220 1100 20 1320 140C1420 190 1480 160 1500 140V0H-20V40Z"
          fill="#FF7FAF"
        />

        {/* Crimson Overlay Ribbon */}
        <path
          d="M-20 100C220 -20 440 180 700 80C960 -20 1180 160 1460 70V0H-20V100Z"
          fill="#C8083F"
        />

        {/* Hot Pink Undulating Wave 2 */}
        <path
          d="M0 190C160 260 340 160 540 240C740 320 980 180 1200 260C1320 300 1400 260 1460 240V280H0V190Z"
          fill="#FF7FAF"
          fillOpacity="0.85"
        />

        {/* Coral-Pink accent ribbon */}
        <path
          d="M0 240C200 190 440 270 720 220C1000 170 1240 250 1440 210V280H0V240Z"
          fill="#F23A62"
        />
      </svg>
    );
  }

  // Default: Section top divider with layered hot-pink and crimson waves
  return (
    <svg
      viewBox="0 0 1440 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`w-full block pointer-events-none select-none ${flipClass} ${className}`}
      {...props}
    >
      {/* Layer 1: Hot Pink wavy ribbon behind */}
      <path
        d="M0 35C240 95 480 5 720 55C960 105 1200 15 1440 45V110H0V35Z"
        fill="#FF7FAF"
      />
      {/* Layer 2: Coral-pink ribbon flow */}
      <path
        d="M0 58C300 18 580 92 880 48C1160 8 1340 78 1440 62V110H0V58Z"
        fill="#F23A62"
        fillOpacity="0.4"
      />
      {/* Layer 3: Crimson wave foreground */}
      <path
        d="M0 72C280 28 540 98 820 54C1100 12 1300 82 1440 68V110H0V72Z"
        fill="#C8083F"
      />
    </svg>
  );
}
