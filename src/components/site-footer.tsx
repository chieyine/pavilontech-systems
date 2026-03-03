import Link from "next/link";

import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)]">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-3">
          <div className="text-sm font-semibold tracking-tight">
            PavilonTech Systems
          </div>
          <p className="max-w-sm text-sm leading-6 text-[color:var(--muted-foreground)]">
            We build secure, scalable, and interoperable digital systems that
            turn information into decision-grade intelligence.
          </p>
          <p className="text-xs text-[color:var(--muted-foreground)]">
            Copyright © {new Date().getFullYear()} PavilonTech Systems. All
            rights reserved.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
            Services
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Strategic Information & Digital Systems
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                MEAL
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Surveys, Research & Data Quality Assurance
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-medium uppercase tracking-wider text-[color:var(--muted-foreground)]">
            Company
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li className="flex gap-4">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="hover:underline">
                Terms Of Use
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

