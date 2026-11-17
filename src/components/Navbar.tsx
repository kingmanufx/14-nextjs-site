"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container className="flex h-20 items-center justify-between border-b border-white/10">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-[-0.04em] text-white"
          aria-label="King Manu home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-[#d5f66f] text-sm text-[#17261f]">k</span>
          king manu
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors ${active ? "text-[#d5f66f]" : "text-white/75 hover:text-white"}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#d5f66f] hover:text-[#d5f66f] md:inline-flex"
        >
          Let&apos;s talk <span aria-hidden="true" className="ml-2">↗</span>
        </Link>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-xl" aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-b border-white/10 bg-[#17261f] px-5 py-3 md:hidden"
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`block border-b border-white/10 py-4 text-sm last:border-0 ${active ? "text-[#d5f66f]" : "text-white/80"}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
