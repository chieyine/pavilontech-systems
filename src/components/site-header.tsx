"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color-mix(in_oklch,var(--background)_82%,transparent)] backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-baseline gap-2">
          <span className="font-semibold tracking-tight">PavilonTech</span>
          <span className="font-serif text-sm tracking-tight text-[color:var(--muted-foreground)] group-hover:text-[color:var(--foreground)]">
            Systems
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-tight text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--foreground)]",
                  active && "text-[color:var(--foreground)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="/contact"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Let’s talk
          </ButtonLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] text-[color:var(--foreground)] sm:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.22,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            className="fixed inset-0 z-[60] sm:hidden"
          >
            <div
              className="absolute inset-0 bg-[color-mix(in_oklch,var(--background)_55%,black_45%)] backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ y: 18, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: 18, opacity: 0, filter: "blur(10px)" }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.32,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="absolute inset-x-0 top-0 border-b border-[color:var(--border)] bg-[color:var(--background)]"
            >
              <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="group inline-flex items-baseline gap-2">
                  <span className="font-semibold tracking-tight">PavilonTech</span>
                  <span className="font-serif text-sm tracking-tight text-[color:var(--muted-foreground)] group-hover:text-[color:var(--foreground)]">
                    Systems
                  </span>
                </Link>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--muted)]"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </Container>
              <Container className="pb-10 pt-8">
                <div className="space-y-6">
                  <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
                    Menu
                  </div>
                  <div className="grid gap-3">
                    {nav.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "rounded-3xl border border-[color:var(--border)] bg-[color-mix(in_oklch,var(--background)_75%,var(--muted)_25%)] px-6 py-5 text-xl font-semibold tracking-tight",
                            active &&
                              "border-[color:color-mix(in_oklch,var(--brand)_45%,var(--border))]",
                          )}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--foreground)] p-6 text-[color:var(--background)] shadow-[var(--shadow)]">
                    <div className="text-sm font-semibold tracking-tight">
                      Start a project
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[color-mix(in_oklch,var(--background)_70%,transparent)]">
                      Tell us what you’re building and what decisions you want to
                      improve.
                    </p>
                    <div className="mt-5">
                      <ButtonLink
                        href="/contact"
                        size="lg"
                        variant="secondary"
                        className="w-full"
                      >
                        Contact us
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </Container>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

