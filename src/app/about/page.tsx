import type { Metadata } from "next";

import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { Magnetic } from "@/components/magnetic";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are a strategic information, systems strengthening, and digital solutions firm supporting NGOs, Government MDAs, and development partners.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
              Who we are
            </div>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A systems-first partner for data, learning, and delivery.
            </h1>
            <p className="mt-5 text-pretty text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg">
              We support NGOs, Government MDAs, donor agencies, and development
              partners to design and maintain strong data ecosystems where
              information is not just collected, but cleaned, analyzed,
              visualized, and used to drive action, learning, and measurable
              impact.
            </p>
            <p className="mt-4 text-pretty font-serif text-lg leading-7 tracking-tight text-[color:var(--foreground)] sm:text-xl">
              In short: we turn messy, fragmented information into calm,
              decision-grade insight your team can actually use.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Magnetic className="w-full sm:w-auto">
                <ButtonLink href="/contact" size="lg" className="w-full">
                  Work with us
                </ButtonLink>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <ButtonLink href="/" size="lg" variant="secondary" className="w-full">
                  View services
                </ButtonLink>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <RevealStagger className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Our approach",
                body: "Real transformation goes beyond delivering tools. We build systems that work, grow, and deliver results—designed for sustainability and ownership.",
              },
              {
                title: "Why us",
                body: "Deep technical expertise + practical, context-driven delivery. Secure, scalable solutions that institutions can manage and scale over time.",
              },
              {
                title: "What you get",
                body: "Clear reporting, improved efficiency, better accountability, and measurable impact—backed by training and operational integration.",
              },
            ].map((b) => (
              <RevealItem key={b.title}>
                <div className="rounded-3xl border border-[color:var(--border)] bg-[color-mix(in_oklch,var(--background)_75%,var(--muted)_25%)] p-7 shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-1">
                  <h2 className="text-base font-semibold tracking-tight">
                    {b.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                    {b.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>
    </div>
  );
}

