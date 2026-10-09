import React from "react";

export interface DevPlaceholderProps {
  label: string;
  className?: string;
}

export function DevPlaceholder({
  label,
  className = "",
}: DevPlaceholderProps) {
  // Never show placeholders in production builds
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium bg-blush text-crimson border border-dashed border-coral-pink select-none ${className}`}
      title="Placeholder content (hidden in production)"
    >
      [PLACEHOLDER: {label}]
    </span>
  );
}
