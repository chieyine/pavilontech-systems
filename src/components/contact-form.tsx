"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";

export function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = new URLSearchParams();
    formData.forEach((value, key) => {
      data.append(key, value.toString());
    });

    try {
      // Submitting to the static `/__forms.html` bypasses Next.js App Router 404s
      // and lets the Netlify forms edge handler explicitly pick it up.
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      if (response.ok) {
        router.push("/contact/success");
      } else {
        const text = await response.text();
        console.error("Form submission failed:", response.status, text);
        setError("Form submission failed. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error("Form submission error", err);
      setError("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="mt-8 space-y-4"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      
      {error && (
        <div className="rounded-xl bg-red-500/10 p-4 text-sm font-medium text-red-500">
          {error}
        </div>
      )}

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
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
