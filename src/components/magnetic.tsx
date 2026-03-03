"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type MagneticProps = React.HTMLAttributes<HTMLDivElement> & {
  strength?: number;
  active?: boolean;
};

export function Magnetic({
  className,
  strength = 14,
  active = true,
  ...props
}: MagneticProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [xy, setXy] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const el = ref.current;
    if (!el || !active) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      setXy({ x: (relX / rect.width) * strength, y: (relY / rect.height) * strength });
    };

    const onLeave = () => setXy({ x: 0, y: 0 });

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [active, strength]);

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        transform: `translate3d(${xy.x}px, ${xy.y}px, 0)`,
        transition: xy.x === 0 && xy.y === 0 ? "transform 450ms cubic-bezier(.2,.8,.2,1)" : "transform 80ms linear",
      }}
      {...props}
    />
  );
}

