import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "white";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blush text-magenta border border-accent/40 hover:bg-magenta hover:text-white hover:border-magenta shadow-xs hover:shadow-sm focus-visible:ring-magenta",
  secondary:
    "border border-magenta/40 text-magenta bg-transparent hover:bg-blush hover:border-magenta focus-visible:ring-magenta",
  white:
    "bg-white text-magenta hover:bg-blush border border-blush shadow-xs hover:shadow-sm focus-visible:ring-magenta",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide",
  md: "px-7 py-3 text-sm sm:text-base font-semibold tracking-wide",
  lg: "px-8 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  fullWidth = false,
  className = "",
  onClick,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full text-center cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
