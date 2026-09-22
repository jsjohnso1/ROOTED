"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/scope-and-sequence", label: "Scope & Sequence" },
  { href: "/resources", label: "Resources" },
  // Hidden for initial launch until real reviews are collected — re-add once ready.
  // { href: "/reviews", label: "Reviews" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-[0.15em] text-paper hover:text-gold transition-colors"
          onClick={() => setOpen(false)}
        >
          {siteConfig.shortTitle}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-gold" : "text-muted hover:text-paper"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href={siteConfig.amazonUrl}
            external
            size="md"
            variant="primary"
          >
            Order on Amazon
          </ButtonLink>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-paper hover:bg-white/10"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-white/10 bg-ink px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium ${
                    active ? "text-gold" : "text-paper"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <ButtonLink
              href={siteConfig.amazonUrl}
              external
              size="md"
              variant="primary"
              className="mt-2 w-full"
            >
              Order on Amazon
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
