"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";

const idOf = (href: string) => (href === "/" ? "home" : (href.split("#")[1] ?? ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    navLinks.forEach((l) => {
      const el = idOf(l.href) ? document.getElementById(idOf(l.href)) : null;
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-cream/90 shadow-sm backdrop-blur" : "bg-cream"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => {
            const on = l.href === "/about" || l.href === "/contact" ? pathname === l.href : pathname === "/" && active === idOf(l.href);
            return (
              <li key={l.label}>
                <Link
                  href={l.href}
                  aria-current={on ? "true" : undefined}
                  className={`relative py-1 text-sm font-medium transition-colors hover:text-gold-dark ${on ? "text-gold-dark" : "text-navy"}`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-gold-dark transition-transform ${on ? "scale-x-100" : "scale-x-0"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="/contact"
          className="hidden items-center gap-2 gold-btn rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 md:inline-flex"
        >
          <Phone size={15} /> Contact Us <ArrowRight size={15} />
        </Link>
        <button
          type="button"
          className="rounded-lg p-2 text-ink hover:bg-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white px-4 pb-5 pt-2 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium hover:bg-cream"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="gold-btn mt-3 block rounded-full px-5 py-3 text-center font-semibold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
