"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type MotionDivProps = React.ComponentPropsWithoutRef<typeof motion.div>;
type PlainDivProps = React.ComponentPropsWithoutRef<"div">;

type RevealProps = MotionDivProps & {
  delay?: number;
};

export function Reveal({ className, delay = 0, ...props }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const rest = props as unknown as PlainDivProps;
    return <div ref={ref} className={className} {...rest} />;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
      animate={
        isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined
      }
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
      {...props}
    />
  );
}

export function RevealStagger({
  className,
  ...props
}: MotionDivProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const rest = props as unknown as PlainDivProps;
    return <div ref={ref} className={className} {...rest} />;
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
      {...props}
    />
  );
}

export function RevealItem({
  className,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
        },
      }}
      {...props}
    />
  );
}

