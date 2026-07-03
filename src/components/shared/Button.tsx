"use client";

import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#41C717] hover:bg-[#3aa914] text-white",
  secondary:
    "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm",
  outline:
    "border border-[#DDDDDD] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
