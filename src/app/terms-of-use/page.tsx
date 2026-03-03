import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsOfUsePage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
            Legal
          </div>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-[color:var(--muted-foreground)]">
            <p>
              This page is a placeholder for your Terms of Use. I can migrate
              the exact terms from your WordPress site and format it to match
              this new design.
            </p>

            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--muted)] p-6 text-[color:var(--foreground)]">
              <div className="text-sm font-semibold tracking-tight">
                Recommended
              </div>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                If you plan to publish reports, case studies, or downloadable
                documents, we should also add a short IP/copyright section and a
                disclaimer on reliance/accuracy.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

