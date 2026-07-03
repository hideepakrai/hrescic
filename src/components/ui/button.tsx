import * as React from "react";

type ButtonVariant = "default" | "primary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "default", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#41C717] disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";

  const variants: Record<ButtonVariant, string> = {
    default: "bg-[#41C717] text-white hover:bg-[#3aa914]",
    primary: "bg-[#41C717] text-white hover:bg-[#3aa914]",
    outline: "border border-[#DDDDDD] text-[#1F1F1F] hover:bg-[#F8F8F8]",
    ghost: "hover:bg-[#F8F8F8] text-[#1F1F1F]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
