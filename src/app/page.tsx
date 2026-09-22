import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Compass,
  Download,
  Gamepad2,
  HandHeart,
  HeartHandshake,
  Mic2,
  ShoppingCart,
  Target,
  Users,
  BookMarked,
  UsersRound,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SampleDownloadForm } from "@/components/SampleDownloadForm";
import { siteConfig, quarters, lessonStructure } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "52-Week Christian Youth Ministry Curriculum",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const lessonIcons = {
  "gamepad-2": Gamepad2,
  "mic-2": Mic2,
  users: Users,
  target: Target,
  "hand-heart": HandHeart,
} as const;

const quarterIcons = {
  compass: Compass,
  "heart-handshake": HeartHandshake,
  "users-round": UsersRound,
  "book-marked": BookMarked,
} as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.12),transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              A Full Year of Youth Ministry, Done For You
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-paper sm:text-5xl md:text-6xl text-balance">
              {siteConfig.shortTitle}
            </h1>
            <p className="text-xl font-medium text-muted sm:text-2xl text-pretty">
              {siteConfig.subtitle}
            </p>
            <blockquote className="border-l-2 border-gold pl-4 text-lg italic text-paper/90">
              &ldquo;{siteConfig.verse}&rdquo;
              <span className="mt-1 block text-sm not-italic font-semibold text-gold">
                — {siteConfig.verseReference}
              </span>
            </blockquote>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={siteConfig.amazonUrl} external size="lg" variant="primary">
                <ShoppingCart size={18} aria-hidden />
                Order on Amazon
              </ButtonLink>
              <ButtonLink href="/scope-and-sequence" size="lg" variant="secondary">
                View 52-Week Scope & Sequence
                <ArrowRight size={18} aria-hidden />
              </ButtonLink>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm md:max-w-none">
            <Image
              src="/book-cover.jpg"
              alt="ROOTED: A 52-Week Lesson Plan for Christian Youth Ministry — book cover"
              width={600}
              height={900}
              sizes="(min-width: 768px) 480px, 384px"
              preload
              className="h-auto w-full rounded-xl border border-white/10 shadow-2xl shadow-black/80 contrast-115 brightness-90"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition: 5-part lesson structure */}
      <section id="lesson-structure" className="border-b border-white/10 bg-ink-2/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Every Single Week"
            title="One Simple, Repeatable Lesson Structure"
            description="ROOTED removes the guesswork from programming night. Every one of the 52 weeks follows the same proven five-part flow — so leaders spend less time building lessons and more time discipling students."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {lessonStructure.map((item) => {
              const Icon = lessonIcons[item.icon];
              return (
                <div
                  key={item.step}
                  className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-ink p-6 transition-colors hover:border-gold/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <Icon size={20} aria-hidden />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-paper">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quarterly Breakdown Grid */}
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="The Full Year at a Glance"
            title="Four Quarters. One Complete Discipleship Journey."
            description="ROOTED walks students through a deliberate progression — from who they are, to who they're becoming, to how they belong, to how they live wisely."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quarters.map((quarter) => {
              const Icon = quarterIcons[quarter.icon];
              return (
                <div
                  key={quarter.id}
                  className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-ink-2 p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <Icon size={22} aria-hidden />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                      Q{quarter.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-paper">
                      {quarter.theme}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">
                      {quarter.months} · {quarter.weekRange}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {quarter.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <ButtonLink href="/scope-and-sequence" size="md" variant="ghost">
              See all 52 weekly lesson topics
              <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Lead Magnet / Sample Download */}
      <section id="sample" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-2 to-ink px-6 py-14 text-center sm:px-14">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
              <Download size={26} aria-hidden />
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-paper sm:text-4xl text-balance">
              Try a Free Sample Week Before You Buy
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg text-pretty">
              Download a complete sample lesson from ROOTED — game
              instructions, message outline, small group questions, weekly
              challenge, and closing prayer — free, no strings attached.
            </p>
            <SampleDownloadForm />
          </div>
        </div>
      </section>
    </>
  );
}
