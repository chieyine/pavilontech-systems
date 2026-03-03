"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

function hasFinePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(pointer: fine)").matches ?? false;
}

export function AwardCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = React.useState(false);
  const [pos, setPos] = React.useState({ x: -100, y: -100 });
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (prefersReducedMotion) return;
    if (!hasFinePointer()) return;
    setEnabled(true);
  }, [prefersReducedMotion]);

  React.useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      setPos({ x: e.clientX, y: e.clientY });
    };
    const onDown = () => setActive(true);
    const onUp = () => setActive(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
    >
      <div
        className={cn(
          "absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:color-mix(in_oklch,var(--foreground)_25%,transparent)] bg-[color:color-mix(in_oklch,var(--background)_35%,transparent)] backdrop-blur-md transition-[transform,opacity] duration-200",
          active && "scale-90",
        )}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={cn(
          "absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--foreground)] opacity-80",
          active && "opacity-100",
        )}
        style={{ left: pos.x, top: pos.y }}
      />
    </div>
  );
}

