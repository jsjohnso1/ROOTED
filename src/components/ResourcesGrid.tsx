"use client";

import { useMemo, useState } from "react";
import { ClipboardList, Download, Printer, Share2 } from "lucide-react";
import {
  resourceCategories,
  resources,
  type Resource,
} from "@/lib/resources-data";

const categoryIcons: Record<Resource["category"], typeof Printer> = {
  Printables: Printer,
  "Quarterly Supply Lists": ClipboardList,
  "Social Media Post Appendices": Share2,
};

type CategoryFilter = (typeof resourceCategories)[number];

export function ResourcesGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredResources = useMemo(() => {
    if (activeCategory === "All") return resources;
    return resources.filter(
      (resource) => resource.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {resourceCategories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "bg-gold text-white"
                  : "border border-white/10 bg-ink-2 text-muted hover:bg-white/10 hover:text-paper"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {filteredResources.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => {
            const Icon = categoryIcons[resource.category];
            return (
              <a
                key={resource.title}
                href={resource.href}
                download
                className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-ink-2 p-6 transition-colors hover:border-gold/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon size={20} aria-hidden />
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
                    {resource.category}
                  </span>
                </div>

                <h2 className="text-lg font-bold leading-snug text-paper group-hover:text-gold">
                  {resource.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted">
                  {resource.description}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-xs text-muted">
                  <span>{resource.fileSize}</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-gold">
                    <Download size={14} aria-hidden />
                    Download
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-white/15 py-14 text-center">
          <p className="text-sm text-muted">
            No resources in this category yet. Check back soon.
          </p>
        </div>
      )}
    </>
  );
}
