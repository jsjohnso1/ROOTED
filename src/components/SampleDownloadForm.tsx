"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SAMPLE_PDF_PATH = "/rooted-sample-lesson.pdf";

const THANK_YOU_LETTER = `Thank you so much for requesting a sample from ROOTED.

I wrote this curriculum because I know what it's like to stare at a blank page on a Tuesday night, trying to figure out what you're going to teach your students this week. ROOTED exists so you never have to do that again.

Your download has started. Inside, you'll find one complete week exactly as it appears in the full 52-week curriculum: the game, the message, the small group questions, the weekly challenge, and the closing prayer.

I'd love to hear how it goes with your group.

Grace and peace,
Jeremy Johnson
Author, ROOTED`;

export function SampleDownloadForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "sample" }),
      });
    } catch (error) {
      // The sample PDF is a static asset — don't let an ESP/network hiccup
      // block someone from getting the content they asked for.
      console.error("Failed to record sample download subscription:", error);
    }

    downloadLinkRef.current?.click();
    setIsSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-2 flex w-full max-w-md flex-col items-center gap-4 rounded-2xl border border-gold/30 bg-ink px-6 py-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
          <CheckCircle2 size={24} aria-hidden />
        </span>
        <h3 className="text-lg font-bold text-paper">
          Your download has started
        </h3>
        <p className="whitespace-pre-line text-left text-sm leading-relaxed text-muted">
          {THANK_YOU_LETTER}
        </p>
        <a
          href={SAMPLE_PDF_PATH}
          download
          className="text-sm font-semibold text-gold hover:underline"
        >
          Didn&rsquo;t start automatically? Download it here.
        </a>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="lead-email" className="sr-only">
          Email address
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@yourchurch.org"
          className="w-full rounded-full border border-white/15 bg-ink px-5 py-3 text-sm text-paper placeholder:text-muted focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-colors hover:bg-gold-light disabled:opacity-70"
        >
          {isSubmitting ? "Sending…" : "Send Sample"}
          <ArrowRight size={16} aria-hidden />
        </button>
      </form>
      {/* Hidden trigger for the instant, client-side PDF download on submit. */}
      <a
        ref={downloadLinkRef}
        href={SAMPLE_PDF_PATH}
        download
        className="hidden"
        aria-hidden
        tabIndex={-1}
      >
        Download sample lesson
      </a>
      <p className="mt-2 text-center text-xs text-muted">
        By downloading, you&rsquo;ll also receive occasional updates and
        resources for ROOTED. You can unsubscribe at any time.
      </p>
    </>
  );
}
