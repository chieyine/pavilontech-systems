"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const base =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-tight transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-[color:var(--foreground)] text-[color:var(--background)] shadow-[var(--shadow)] hover:translate-y-[-1px] hover:bg-[color-mix(in_oklch,var(--foreground)_88%,var(--brand)_12%)] active:translate-y-[0px] after:pointer-events-none after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-300 after:[background:radial-gradient(80%_120%_at_20%_0%,color-mix(in_oklch,var(--background)_35%,transparent),transparent_60%)] hover:after:opacity-100",
  secondary:
    "bg-[color:var(--muted)] text-[color:var(--foreground)] ring-1 ring-inset ring-[color:var(--border)] hover:translate-y-[-1px] hover:bg-[color-mix(in_oklch,var(--muted)_75%,var(--brand)_25%)] active:translate-y-[0px] after:pointer-events-none after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-300 after:[background:radial-gradient(90%_120%_at_20%_0%,color-mix(in_oklch,var(--brand)_18%,transparent),transparent_60%)] hover:after:opacity-100",
  ghost:
    "bg-transparent text-[color:var(--foreground)] hover:bg-[color:var(--muted)]",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & CommonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: React.ComponentProps<typeof Link> &
  CommonProps & {
    href: string;
  }) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

