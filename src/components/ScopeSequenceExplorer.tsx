"use client";

import { useMemo, useState } from "react";
import { Search, X, BookOpenText } from "lucide-react";
import { curriculum, type Lesson } from "@/lib/curriculum-data";

type FlatLesson = Lesson & {
  quarterTheme: string;
  quarterNumber: number;
  month: string;
};

const flatLessons: FlatLesson[] = curriculum.flatMap((quarter) =>
  quarter.months.flatMap((month) =>
    month.lessons.map((lesson) => ({
      ...lesson,
      quarterTheme: quarter.theme,
      quarterNumber: quarter.number,
      month: month.name,
    }))
  )
);

function matchesQuery(lesson: FlatLesson, query: string) {
  const haystack = `${lesson.week} ${lesson.title} ${lesson.verse} ${lesson.month} ${lesson.quarterTheme}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

export function ScopeSequenceExplorer() {
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!query.trim()) return null;
    return flatLessons.filter((lesson) => matchesQuery(lesson, query));
  }, [query]);

  return (
    <div>
      <div className="relative mx-auto max-w-xl">
        <Search
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search all 52 weeks by topic or verse (e.g. “forgiveness”, “Proverbs”)"
          aria-label="Search the ROOTED scope and sequence"
          className="w-full rounded-full border border-white/15 bg-ink-2 py-3 pl-11 pr-11 text-sm text-paper placeholder:text-muted focus:border-gold focus:outline-none"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-paper"
          >
            <X size={18} />
          </button>
        ) : null}
      </div>

      {searchResults ? (
        <div className="mt-10">
          <p className="mb-4 text-sm text-muted">
            {searchResults.length} of 52 weeks match &ldquo;{query}&rdquo;
          </p>
          {searchResults.length > 0 ? (
            <ul className="grid gap-3 sm:grid-cols-2">
              {searchResults.map((lesson) => (
                <li
                  key={lesson.week}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-2 p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                    {lesson.week}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                      Q{lesson.quarterNumber} · {lesson.quarterTheme} · {lesson.month}
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-paper">
                      {lesson.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted">{lesson.verse}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-white/15 py-14 text-center">
              <BookOpenText className="text-muted" size={28} aria-hidden />
              <p className="text-sm text-muted">
                No weeks matched that search. Try a broader keyword like a
                book of the Bible or a theme.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-10 space-y-4">
          {curriculum.map((quarter, index) => (
            <details
              key={quarter.id}
              open={index === 0}
              className="group rounded-2xl border border-white/10 bg-ink-2 open:border-gold/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold">
                    Q{quarter.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-paper">
                      {quarter.theme}
                    </h3>
                    <p className="text-xs text-muted">{quarter.weekRange}</p>
                  </div>
                </div>
                <span
                  aria-hidden
                  className="shrink-0 text-muted transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>

              <div className="space-y-6 border-t border-white/10 px-6 py-6">
                {quarter.months.map((month) => (
                  <div key={month.name}>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
                      {month.name}
                    </h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {month.lessons.map((lesson) => (
                        <li
                          key={lesson.week}
                          className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink p-4"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-paper">
                            {lesson.week}
                          </span>
                          <div>
                            <h5 className="text-sm font-semibold text-paper">
                              {lesson.title}
                            </h5>
                            <p className="mt-0.5 text-xs text-muted">
                              {lesson.verse}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}
