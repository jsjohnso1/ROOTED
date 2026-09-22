import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/JsonLd";
import { ScopeSequenceExplorer } from "@/components/ScopeSequenceExplorer";
import { curriculum, totalWeeks } from "@/lib/curriculum-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Full 52-Week Scope & Sequence",
  description:
    "Browse or search every one of the 52 weekly lesson topics in ROOTED, organized across 12 months and four quarters: Identity, Character, Community, and Wisdom.",
  alternates: { canonical: "/scope-and-sequence" },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${siteConfig.shortTitle} — 52-Week Scope & Sequence`,
  description: siteConfig.description,
  numberOfItems: totalWeeks,
  itemListElement: curriculum.flatMap((quarter) =>
    quarter.months.flatMap((month) =>
      month.lessons.map((lesson) => ({
        "@type": "ListItem",
        position: lesson.week,
        name: lesson.title,
        item: {
          "@type": "CreativeWork",
          name: lesson.title,
          about: lesson.verse,
        },
      }))
    )
  ),
};

export default function ScopeAndSequencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <JsonLd data={itemListJsonLd} />

      <SectionHeading
        eyebrow={`${totalWeeks} Weeks · 12 Months · 4 Quarters`}
        title="Full Scope & Sequence"
        description="Every weekly lesson topic and memory verse in ROOTED, organized by quarter and month. Search by keyword or open a quarter to browse."
      />

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {curriculum.map((quarter) => (
          <span
            key={quarter.id}
            className="rounded-full border border-white/10 bg-ink-2 px-4 py-1.5 text-xs font-semibold text-muted"
          >
            Q{quarter.number} {quarter.theme}
            <span className="ml-1.5 text-gold">{quarter.weekRange}</span>
          </span>
        ))}
      </div>

      <div className="mt-10">
        <ScopeSequenceExplorer />
      </div>
    </div>
  );
}
