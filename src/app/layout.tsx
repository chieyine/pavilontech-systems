import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AwardCursor } from "@/components/award-cursor";
import { Noise } from "@/components/noise";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const fontSans = Instrument_Sans({
  variable: "--font-sans-font",
  subsets: ["latin"],
});

const fontSerif = Fraunces({
  variable: "--font-serif-font",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pavilontechsystems.org"),
  title: {
    default: "PavilonTech Systems",
    template: "%s · PavilonTech Systems",
  },
  description:
    "Turning data into action. We build stronger systems through strategic information, digital solutions, and MEAL support.",
  openGraph: {
    type: "website",
    siteName: "PavilonTech Systems",
    title: "PavilonTech Systems",
    description:
      "Turning data into action. Building stronger systems through strategic information & digital systems, MEAL, and research.",
    url: "https://pavilontechsystems.org",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        <div className="relative min-h-dvh bg-[color:var(--background)]">
          <Noise />
          <AwardCursor />
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
