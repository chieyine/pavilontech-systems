import Link from "next/link";

import { ButtonLink } from "@/components/button";
import { CaseStudies } from "@/components/case-studies";
import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Magnetic } from "@/components/magnetic";
import { ResultsStrip } from "@/components/results-strip";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

const services = [
  {
    title: "Strategic Information & Digital Systems",
    description:
      "Secure, scalable, and interoperable platforms, dashboards, and pipelines that improve tracking and decision-making.",
  },
  {
    title: "Monitoring, Evaluation, Accountability & Learning (MEAL)",
    description:
      "Performance frameworks and accountability mechanisms that turn evidence into continuous improvement.",
  },
  {
    title: "Surveys, Research & Data Quality Assurance",
    description:
      "Scientifically robust surveys, assessments, and verifications that produce reliable and actionable insights.",
  },
];

export default function HomePage() {
  return (
    <div>
      <Hero />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
            <Reveal>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                What we do
              </h2>
              <p className="mt-3 text-pretty text-sm leading-6 text-[color:var(--muted-foreground)] sm:text-base">
                We help institutions design and maintain strong data ecosystems
                where information is not just collected, but cleaned, analyzed,
                visualized, and used to drive action.
              </p>
            </Reveal>
            <Reveal className="flex md:justify-end" delay={0.05}>
              <Magnetic>
                <ButtonLink href="/contact" variant="secondary">
                  Request a consultation
                </ButtonLink>
              </Magnetic>
            </Reveal>
          </div>

          <RevealStagger className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <RevealItem key={s.title}>
                <div className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color-mix(in_oklch,var(--background)_75%,var(--muted)_25%)] p-7 shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-1">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <div className="absolute -top-24 right-[-10%] h-56 w-56 rounded-full bg-[color:var(--brand)] opacity-20 blur-2xl" />
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)]" />
                  </div>
                  <div className="relative">
                    <h3 className="text-base font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                      {s.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <ResultsStrip />

      <CaseStudies />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--muted)] p-8 shadow-[var(--shadow)]">
                <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
                  Our approach
                </div>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Sustainable systems, owned by your team.
                </h2>
                <p className="mt-4 text-pretty text-sm leading-6 text-[color:var(--muted-foreground)] sm:text-base">
                  We emphasize sustainability, context-appropriate design, and
                  human-centered usability—solutions organizations can own,
                  manage, and scale independently.
                </p>
              </div>
            </Reveal>

            <RevealStagger className="space-y-4">
              {[
                {
                  k: "Secure by design",
                  v: "Role-based access, auditability, and clean operational workflows.",
                },
                {
                  k: "Interoperable",
                  v: "Built to integrate cleanly with existing tools and data sources.",
                },
                {
                  k: "Decision-ready",
                  v: "Dashboards and reporting that drive action—not just compliance.",
                },
              ].map((item) => (
                <RevealItem key={item.k}>
                  <div className="rounded-3xl border border-[color:var(--border)] bg-[color-mix(in_oklch,var(--background)_70%,var(--muted)_30%)] p-6">
                    <div className="text-sm font-semibold tracking-tight">
                      {item.k}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                      {item.v}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.2rem] border border-[color:var(--border)] bg-[color:var(--foreground)] p-9 text-[color:var(--background)] shadow-[var(--shadow)] sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(65%_70%_at_50%_0%,black,transparent)]"
              >
                <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[color:var(--brand)] opacity-50 blur-3xl" />
              </div>
              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                    Ready to build something that lasts?
                  </h2>
                  <p className="mt-3 max-w-2xl text-pretty text-sm leading-6 text-[color-mix(in_oklch,var(--background)_70%,transparent)] sm:text-base">
                    Tell us about your program, your reporting needs, and the
                    decisions you want to improve. We’ll propose a path from
                    data collection to insight to action.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Magnetic>
                    <ButtonLink href="/contact" size="lg" variant="secondary">
                      Contact us
                    </ButtonLink>
                  </Magnetic>
                  <Link
                    href="/about"
                    className="inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-medium tracking-tight text-[color-mix(in_oklch,var(--background)_85%,transparent)] hover:text-[color:var(--background)]"
                  >
                    About →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
