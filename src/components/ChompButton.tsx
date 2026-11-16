import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

interface ChompButtonBase {
  variant?: "lime" | "pink" | "dark";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

type ChompButtonProps =
  | (ChompButtonBase & {
      as?: "button";
      type?: "button" | "submit" | "reset";
      onClick?: () => void;
      disabled?: boolean;
    })
  | (ChompButtonBase & {
      as: "a";
      href: string;
      target?: string;
      rel?: string;
    })
  | (ChompButtonBase & {
      as: "link";
      to: string;
    });

function TeethStrip({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 120 8"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <polyline
        points="0,0 10,8 20,0 30,8 40,0 50,8 60,0 70,8 80,0 90,8 100,0 110,8 120,0"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ChompButton(props: ChompButtonProps) {
  const { variant = "lime", size = "md", className, children } = props;

  const variantStyles = {
    lime: "bg-[#A6F31B] text-[#0B0B0D] border-2 border-[#0B0B0D] shadow-[4px_4px_0_#FFFFFF] hover:shadow-[6px_6px_0_#FF2E93] hover:bg-[#b8ff38]",
    pink: "bg-[#FF2E93] text-white border-2 border-[#0B0B0D] shadow-[4px_4px_0_#A6F31B] hover:shadow-[6px_6px_0_#FFFFFF] hover:bg-[#ff47a1]",
    dark: "bg-[#16161A] text-[#F4F4F0] border-2 border-[#A6F31B] shadow-[4px_4px_0_#A6F31B] hover:bg-[#202026]",
  }[variant];

  const sizeStyles = {
    md: "min-h-[48px] px-6 py-3 text-sm sm:text-base",
    lg: "min-h-[54px] px-7 py-3.5 text-base sm:text-lg",
  }[size];

  const classes = cn(
    "chomp-btn inline-flex items-center justify-center gap-2.5 rounded-xl font-sub font-bold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6F31B]",
    variantStyles,
    sizeStyles,
    className
  );

  const inner = (
    <>
      <TeethStrip className="chomp-teeth-top w-full" />
      <span className="relative z-10 inline-flex items-center gap-2.5">{children}</span>
      <TeethStrip className="chomp-teeth-bottom w-full rotate-180" />
    </>
  );

  if (props.as === "a") {
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={classes}>
        {inner}
      </a>
    );
  }

  if (props.as === "link") {
    return (
      <Link to={props.to} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {inner}
    </button>
  );
}
