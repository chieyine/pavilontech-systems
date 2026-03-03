import { Container } from "@/components/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

const outcomes = [
  {
    label: "Reporting time",
    value: "↓ 60%",
    note: "from data collection to leadership-ready views",
  },
  {
    label: "Data completeness",
    value: "↑ 25%",
    note: "by cleaning, validation, and feedback loops",
  },
  {
    label: "Decisions",
    value: "Real-time",
    note: "instead of backwards-looking quarterly summaries",
  },
];

const partners = [
  "INGO programs",
  "Government MDAs",
  "Donor-funded initiatives",
  "Field partners",
];

export function ResultsStrip() {
  return (
    <section className="border-y border-[color:var(--border)] bg-[color-mix(in_oklch,var(--background)_90%,var(--muted)_10%)] py-10 sm:py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Reveal className="max-w-xl">
            <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
              Results we aim for
            </div>
            <p className="mt-3 text-pretty text-sm leading-6 text-[color:var(--muted-foreground)] sm:text-base">
              Every engagement is different. But over time, the patterns repeat:
              cleaner data, faster reporting, and decisions made with more
              confidence and less noise.
            </p>
          </Reveal>

          <RevealStagger className="grid flex-1 gap-4 sm:grid-cols-3">
            {outcomes.map((o) => (
              <RevealItem key={o.label}>
                <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] px-5 py-4 shadow-[var(--shadow)]">
                  <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
                    {o.label}
                  </div>
                  <div className="mt-2 font-serif text-2xl font-semibold tracking-tight">
                    {o.value}
                  </div>
                  <div className="mt-1 text-[0.72rem] leading-5 text-[color:var(--muted-foreground)]">
                    {o.note}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        <div className="mt-7 overflow-hidden">
          <div className="flex gap-6 whitespace-nowrap text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
            {partners.map((p) => (
              <div
                key={p}
                className="flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color-mix(in_oklch,var(--background)_85%,var(--muted)_15%)] px-4 py-2"
              >
                <span className="h-1 w-1 rounded-full bg-[color:var(--brand)]" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

