import Link from "next/link";
import { BookOpen, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  {
    heading: "Explore",
    links: [
      { href: "/scope-and-sequence", label: "Full Scope & Sequence" },
      { href: "/resources", label: "Supplemental Resources" },
      // Hidden for initial launch until real reviews are collected — re-add once ready.
      // { href: "/reviews", label: "Reviews & Endorsements" },
    ],
  },
  {
    heading: "The Book",
    links: [
      { href: siteConfig.amazonUrl, label: "Order on Amazon", external: true },
      { href: "/#lesson-structure", label: "The 5-Part Lesson Structure" },
      { href: "/#sample", label: "Download a Free Sample" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-paper">
              <BookOpen className="text-gold" size={22} aria-hidden />
              <span className="text-lg font-bold tracking-[0.1em]">
                {siteConfig.shortTitle}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.subtitle}. A full year of games, messages, small
              group questions, weekly challenges, and closing prayers for
              your student ministry.
            </p>
            <blockquote className="mt-4 border-l-2 border-gold/60 pl-4 text-sm italic text-muted">
              &ldquo;{siteConfig.verse}&rdquo;
              <span className="mt-1 block not-italic text-gold">
                — {siteConfig.verseReference}
              </span>
            </blockquote>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-paper">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={
                        "external" in link && link.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-muted transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-paper">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
                >
                  <Mail size={16} aria-hidden />
                  {siteConfig.author.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.shortTitle} /{" "}
            {siteConfig.author.name}. All rights reserved.
          </p>
          <p>{siteConfig.title}</p>
        </div>
      </div>
    </footer>
  );
}
