import Link from "next/link";

import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";

export default function ContactSuccessPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[2.2rem] border border-[color:var(--border)] bg-[color-mix(in_oklch,var(--background)_75%,var(--muted)_25%)] p-10 text-center shadow-[var(--shadow)]">
          <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
            Message sent
          </div>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Thanks — we’ll get back to you soon.
          </h1>
          <p className="mt-4 text-pretty text-sm leading-6 text-[color:var(--muted-foreground)] sm:text-base">
            If you need to follow up urgently, email{" "}
            <a
              className="underline underline-offset-4"
              href="mailto:info@pavilontechsystems.org"
            >
              info@pavilontechsystems.org
            </a>
            .
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" variant="secondary" size="lg">
              Back to home
            </ButtonLink>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium tracking-tight text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

