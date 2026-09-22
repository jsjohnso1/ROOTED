import type { Metadata } from "next";
import Link from "next/link";
import { QrCode } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResourcesGate } from "@/components/ResourcesGate";

export const metadata: Metadata = {
  title: "Free Supplemental Resources & Printables",
  description:
    "Download free ROOTED supplemental resources: printable Scripture memory cards and more for your youth ministry.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <QrCode size={14} aria-hidden />
          Scanned the QR code in the book?
        </span>
        <SectionHeading
          title="Supplemental Resources"
          description="Everything referenced inside ROOTED lives here — printables and more — free to download and use with your ministry."
        />
      </div>

      <ResourcesGate />

      <div className="mt-16 rounded-2xl border border-white/10 bg-ink-2/50 p-6 text-center text-sm text-muted">
        Looking for the full curriculum instead of supplemental extras? See
        the{" "}
        <Link href="/scope-and-sequence" className="font-semibold text-gold hover:underline">
          complete 52-week scope and sequence
        </Link>{" "}
        or{" "}
        <Link href="/" className="font-semibold text-gold hover:underline">
          learn more about the book
        </Link>
        .
      </div>
    </div>
  );
}
