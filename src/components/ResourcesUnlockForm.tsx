"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ResourcesUnlockFormProps = {
  onUnlock: () => void;
};

export function ResourcesUnlockForm({ onUnlock }: ResourcesUnlockFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "resources" }),
      });

      if (!response.ok) {
        throw new Error("Subscription request failed.");
      }

      onUnlock();
    } catch (err) {
      console.error("Failed to unlock resources:", err);
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-2 to-ink px-6 py-10 text-center sm:px-14">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
        <Lock size={22} aria-hidden />
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-paper sm:text-3xl text-balance">
        Unlock Official ROOTED Supplemental Resources
      </h2>
      <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base text-pretty">
        Enter your email for instant access to all 52-week supply lists,
        printable student cards, and social media packages.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="resources-unlock-email" className="sr-only">
          Email address
        </label>
        <input
          id="resources-unlock-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@yourchurch.org"
          className="w-full rounded-full border border-white/15 bg-ink px-5 py-3 text-sm text-paper placeholder:text-muted focus:border-gold focus:outline-none"
        />
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Unlocking…" : "Unlock Resources"}
          <ArrowRight size={16} aria-hidden />
        </Button>
      </form>

      {error ? <p className="text-xs font-semibold text-red-400">{error}</p> : null}

      <p className="text-xs text-muted">
        By signing up, you&rsquo;ll also receive occasional curriculum
        updates and bonus resources. Unsubscribe anytime.
      </p>
    </div>
  );
}
