"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { Magnetic } from "@/components/magnetic";
import { cn } from "@/lib/utils";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const ref = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const blobY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const fadeOut = useTransform(scrollYProgress, [0.65, 1], [1, 0]);
  const blur = useTransform(scrollYProgress, [0.65, 1], ["blur(0px)", "blur(10px)"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const accentRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_55%_at_50%_20%,black,transparent)]"
      >
        <motion.div
          style={{
            y: prefersReducedMotion ? 0 : blobY,
            scale: prefersReducedMotion ? 1 : bgScale,
          }}
          className="absolute -top-24 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[color:var(--brand)] opacity-20 blur-3xl"
        />
        <motion.div
          style={{
            y: prefersReducedMotion ? 0 : blobY,
            rotate: prefersReducedMotion ? 0 : accentRotate,
          }}
          className="absolute top-24 left-[15%] h-[520px] w-[520px] rounded-full bg-[color:var(--brand-2)] opacity-[0.18] blur-3xl"
        />
        <motion.div
          style={{
            y: prefersReducedMotion ? 0 : blobY,
            rotate: prefersReducedMotion ? 0 : accentRotate,
          }}
          className="absolute top-44 right-[10%] h-[560px] w-[560px] rounded-full bg-[color:var(--brand)] opacity-[0.12] blur-3xl"
        />
      </div>

      <div className="relative h-[120svh]">
        <div className="sticky top-0">
          <Container className="relative py-20 sm:py-28">
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              style={{
                opacity: prefersReducedMotion ? 1 : fadeOut,
                filter: prefersReducedMotion ? "none" : blur,
              }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color-mix(in_oklch,var(--background)_75%,var(--muted)_25%)] px-4 py-2 text-xs text-[color:var(--muted-foreground)] shadow-[var(--shadow)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]" />
                Turning data into action.
              </div>

              <motion.h1
                style={{ y: prefersReducedMotion ? 0 : titleY }}
                className="mt-6 text-balance font-semibold tracking-tight text-[clamp(2.4rem,4.2vw,4.0rem)] leading-[1.05]"
              >
                Building stronger systems with{" "}
                <span className="font-serif font-semibold tracking-tight">
                  decision-grade
                </span>{" "}
                data.
              </motion.h1>

              <motion.p
                style={{ y: prefersReducedMotion ? 0 : subtitleY }}
                className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg"
              >
                We support NGOs, Government MDAs, donors, and development partners
                with secure digital platforms, MEAL frameworks, and research that
                improves tracking, reporting, and real-time decision-making.
              </motion.p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Magnetic className="w-full sm:w-auto">
                  <ButtonLink href="/contact" size="lg" className="w-full">
                    Start a project
                  </ButtonLink>
                </Magnetic>
                <Magnetic className={cn("w-full sm:w-auto")}>
                  <ButtonLink
                    href="/about"
                    size="lg"
                    variant="secondary"
                    className={cn("w-full sm:w-auto")}
                  >
                    Learn more
                  </ButtonLink>
                </Magnetic>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}

