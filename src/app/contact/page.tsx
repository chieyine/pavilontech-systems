import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

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
                This form is ready for Netlify Forms. On Vercel, it will still
                validate inputs but won’t deliver without wiring an email
                provider.
              </p>

              <form
                name="contact"
                method="POST"
                action="/contact/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="mt-8 space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      name="name"
                      required
                      className="h-11 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 text-sm outline-none focus:border-[color:var(--brand)]"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="h-11 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 text-sm outline-none focus:border-[color:var(--brand)]"
                      placeholder="you@company.org"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <input
                    name="subject"
                    className="h-11 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 text-sm outline-none focus:border-[color:var(--brand)]"
                    placeholder="What should we focus on?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full resize-none rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 text-sm leading-6 outline-none focus:border-[color:var(--brand)]"
                    placeholder="Tell us about your program, context, timeline, and deliverables."
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" size="lg" className="w-full">
                    Send message
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}

