import Link from "next/link";

import { caseStudies } from "@/content/case-studies";
import { Container } from "@/components/container";
import { Magnetic } from "@/components/magnetic";
import { RevealItem, RevealStagger } from "@/components/reveal";

export function CaseStudies() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
              Featured work
            </div>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Systems that ship. Evidence that moves decisions.
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-sm leading-6 text-[color:var(--muted-foreground)] sm:text-base">
              A snapshot of the kind of engagements we deliver—built for
              security, usability, and long-term ownership.
            </p>
          </div>
          <div className="hidden md:block">
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-5 text-sm font-medium tracking-tight hover:-translate-y-0.5 transition-transform"
              >
                Request a portfolio call
              </Link>
            </Magnetic>
          </div>
        </div>

        <RevealStagger className="mt-10 grid gap-4">
          {caseStudies.map((cs, i) => (
            <RevealItem key={cs.slug}>
              <div className="group relative overflow-hidden rounded-[2.2rem] border border-[color:var(--border)] bg-[color-mix(in_oklch,var(--background)_74%,var(--muted)_26%)] shadow-[var(--shadow)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <div className="absolute -top-28 left-[10%] h-72 w-72 rounded-full bg-[color:var(--brand)] opacity-18 blur-3xl" />
                  <div className="absolute -bottom-28 right-[10%] h-72 w-72 rounded-full bg-[color:var(--brand-2)] opacity-14 blur-3xl" />
                  <div className="absolute inset-0 [background:linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="relative grid gap-8 p-8 md:grid-cols-[1.3fr_1fr] md:p-10">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1 text-xs text-[color:var(--muted-foreground)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-5 text-balance text-xl font-semibold tracking-tight sm:text-2xl">
                      {cs.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)] sm:text-base">
                      {cs.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
                      {cs.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <Magnetic>
                        <Link
                          href="/contact"
                          className="inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--foreground)] px-5 text-sm font-medium tracking-tight text-[color:var(--background)] shadow-[var(--shadow)] hover:-translate-y-0.5 transition-transform"
                        >
                          Discuss a similar build
                        </Link>
                      </Magnetic>
                      <Link
                        href="/about"
                        className="text-sm font-medium tracking-tight text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
                      >
                        How we work →
                      </Link>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
                    {cs.outcomes.map((o) => (
                      <div
                        key={o.label}
                        className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] p-5"
                      >
                        <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
                          {o.label}
                        </div>
                        <div className="mt-2 font-serif text-2xl font-semibold tracking-tight">
                          {o.value}
                        </div>
                      </div>
                    ))}
                    <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] p-5 sm:col-span-3 md:col-span-1">
                      <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
                        Engagement
                      </div>
                      <div className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                        Discovery → system design → implementation → training →
                        handover.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between border-t border-[color:var(--border)] px-8 py-5 text-xs text-[color:var(--muted-foreground)] md:px-10">
                  <span>Case study #{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-mono">pavilontech/engagement</span>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <div className="mt-10 md:hidden">
          <Magnetic>
            <Link
              href="/contact"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-5 text-sm font-medium tracking-tight"
            >
              Request a portfolio call
            </Link>
          </Magnetic>
        </div>
      </Container>
    </section>
  );
}

