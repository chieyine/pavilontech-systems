import type { Metadata } from "next";

import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
            Legal
          </div>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-[color:var(--muted-foreground)]">
            <p>
              This page is a placeholder for your full privacy policy. If you’d
              like, I can import the exact text from your previous WordPress site
              or generate a policy tailored to your data practices (cookies,
              analytics, contact forms, and third-party providers).
            </p>

            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--muted)] p-6 text-[color:var(--foreground)]">
              <div className="text-sm font-semibold tracking-tight">
                Next step
              </div>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                Tell me whether you use Google Analytics, Meta Pixel, a
                newsletter tool, and whether the contact form should send email
                (Resend/SendGrid) or remain Netlify-only.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

