import type { Metadata } from "next";
import { Star, Quote, PenLine } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { endorsements } from "@/lib/reviews-data";

export const metadata: Metadata = {
  title: "Reviews & Endorsements",
  description:
    "Read endorsements and reader reviews of ROOTED: A 52-Week Lesson Plan for Christian Youth Ministry, and share your own feedback.",
  alternates: { canonical: "/reviews" },
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-gold text-gold" : "text-white/20"}
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  // Only real, non-placeholder endorsements are published as Review structured
  // data — publishing placeholder text as schema.org reviews would misrepresent
  // them to search engines.
  const realEndorsements = endorsements.filter((e) => !e.isPlaceholder);

  const reviewJsonLd =
    realEndorsements.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "Book",
          name: siteConfig.title,
          review: realEndorsements.map((endorsement) => ({
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: endorsement.rating,
              bestRating: 5,
            },
            author: {
              "@type": "Person",
              name: endorsement.name,
            },
            reviewBody: endorsement.quote,
          })),
        }
      : null;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {reviewJsonLd ? <JsonLd data={reviewJsonLd} /> : null}

      <SectionHeading
        eyebrow="What Leaders Are Saying"
        title="Reviews & Endorsements"
        description="Feedback from youth pastors, ministry leaders, and parents using ROOTED with their students."
      />

      {/* Placeholder endorsements hidden for initial launch — un-comment once
          real reviews are added to src/lib/reviews-data.ts. */}
      {/* <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {endorsements.map((endorsement, index) => (
          <figure
            key={index}
            className={`flex flex-col gap-4 rounded-2xl border p-6 ${
              endorsement.isPlaceholder
                ? "border-dashed border-white/15 bg-transparent"
                : "border-white/10 bg-ink-2"
            }`}
          >
            <div className="flex items-center justify-between">
              <Quote className="text-gold" size={22} aria-hidden />
              <Stars rating={endorsement.rating} />
            </div>
            <blockquote className="text-sm leading-relaxed text-muted italic">
              &ldquo;{endorsement.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto text-sm">
              <span className="block font-semibold text-paper">
                {endorsement.name}
              </span>
              <span className="text-muted">{endorsement.role}</span>
            </figcaption>
            {endorsement.isPlaceholder ? (
              <span className="inline-flex w-fit items-center rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
                Placeholder
              </span>
            ) : null}
          </figure>
        ))}
      </div> */}

      {/* Review submission placeholder card */}
      <div className="mt-16 rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-2 to-ink p-6 sm:p-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
            <PenLine size={24} aria-hidden />
          </span>
          <h2 className="text-2xl font-bold text-paper sm:text-3xl">
            Used ROOTED With Your Students?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            We&rsquo;d love to hear how it went. Submit a review below and it
            may be featured on this page.
          </p>
        </div>

        {/* TODO: wire this form up to a form backend (e.g. Formspree, a Route Handler, or your ESP) before launch. */}
        <form className="mx-auto mt-8 grid max-w-xl gap-4 sm:grid-cols-2" action="#" method="post">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="review-name" className="text-xs font-semibold uppercase tracking-wide text-muted">
              Name
            </label>
            <input
              id="review-name"
              name="name"
              type="text"
              required
              className="rounded-lg border border-white/15 bg-ink px-4 py-2.5 text-sm text-paper placeholder:text-muted focus:border-gold focus:outline-none"
              placeholder="Jane Smith"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="review-role" className="text-xs font-semibold uppercase tracking-wide text-muted">
              Role / Church
            </label>
            <input
              id="review-role"
              name="role"
              type="text"
              className="rounded-lg border border-white/15 bg-ink px-4 py-2.5 text-sm text-paper placeholder:text-muted focus:border-gold focus:outline-none"
              placeholder="Youth Pastor, Grace Church"
            />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="review-rating" className="text-xs font-semibold uppercase tracking-wide text-muted">
              Rating
            </label>
            <select
              id="review-rating"
              name="rating"
              className="rounded-lg border border-white/15 bg-ink px-4 py-2.5 text-sm text-paper focus:border-gold focus:outline-none"
              defaultValue="5"
            >
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>
                  {n} Star{n === 1 ? "" : "s"}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="review-quote" className="text-xs font-semibold uppercase tracking-wide text-muted">
              Your Review
            </label>
            <textarea
              id="review-quote"
              name="quote"
              rows={4}
              required
              className="rounded-lg border border-white/15 bg-ink px-4 py-2.5 text-sm text-paper placeholder:text-muted focus:border-gold focus:outline-none"
              placeholder="Tell us how ROOTED impacted your youth ministry..."
            />
          </div>
          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-colors hover:bg-gold-light"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
