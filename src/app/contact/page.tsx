import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact PavilonTech Systems for consulting and technical support.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <Reveal>
                <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
                  Reach out
                </div>
                <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let’s build a system your team can own.
                </h1>
                <p className="mt-5 text-pretty text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg">
                  Share a short brief and we’ll respond with next steps. If
                  you’re deploying on Vercel, use email/phone. If you deploy on
                  Netlify, this form can be enabled as a Netlify Form with no
                  backend.
                </p>
              </Reveal>

              <RevealStagger className="mt-8 space-y-6">
                <RevealItem>
                  <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--muted)] p-6">
                    <div className="text-sm font-semibold tracking-tight">
                      Email
                    </div>
                    <a
                      className="mt-2 block text-sm text-[color:var(--muted-foreground)] hover:underline"
                      href="mailto:info@pavilontechsystems.org"
                    >
                      info@pavilontechsystems.org
                    </a>
                  </div>
                </RevealItem>
                <RevealItem>
                  <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--muted)] p-6">
                    <div className="text-sm font-semibold tracking-tight">
                      Phone
                    </div>
                    <a
                      className="mt-2 block text-sm text-[color:var(--muted-foreground)] hover:underline"
                      href="tel:+2347077577178"
                    >
                      +234 7077 5771 78
                    </a>
                  </div>
                </RevealItem>
                <RevealItem>
                  <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--muted)] p-6">
                    <div className="text-sm font-semibold tracking-tight">
                      Addresses
                    </div>
                    <div className="mt-2 space-y-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                      <div>
                        Abuja: No 5 Yusuf Haliru street, Old Kutunku, Gwagwalada,
                        FCT
                      </div>
                      <div>
                        Maiduguri: i-12 State low cost, Jere LGA, Maiduguri,
                        Borno
                      </div>
                    </div>
                  </div>
                </RevealItem>
              </RevealStagger>
            </div>

            <Reveal className="rounded-[2.2rem] border border-[color:var(--border)] bg-[color-mix(in_oklch,var(--background)_75%,var(--muted)_25%)] p-8 shadow-[var(--shadow)] sm:p-10">
              <h2 className="text-lg font-semibold tracking-tight">
                Send a message
              </h2>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                Use this form to send us a brief. We’ll reply by email with next
                steps and suggested timelines.
              </p>

              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}

