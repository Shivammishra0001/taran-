import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { BackToTop } from "./BackToTop";
import { firm, navLinks, portals, services } from "@/lib/site";

const h = "mb-4 text-sm font-semibold text-gold";
const a = "transition hover:text-white";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy to-navy-deep text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1.1fr_0.9fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm">
            Your trusted partner for taxation, accounting, compliance and business advisory since {firm.established}.
          </p>
        </div>
        <div>
          <h3 className={h}>Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.label}><Link href={l.href} className={a}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={h}>Our Services</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.title}><Link href="/#services" className={a}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={h}>Useful Portals</h3>
          <ul className="space-y-2.5 text-sm">
            {portals.map((p) => (
              <li key={p.name}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className={a}>{p.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={h}>Contact Details</h3>
          <address className="space-y-3 text-sm not-italic">
            <p className="flex gap-2.5"><Phone size={16} className="mt-0.5 shrink-0 text-gold" />{firm.phone}</p>
            <p className="flex gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
              <a href={`mailto:${firm.email}`} className={a}>{firm.email}</a>
            </p>
            <p className="flex gap-2.5"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" />{firm.address}</p>
            <p className="flex gap-2.5"><Clock size={16} className="mt-0.5 shrink-0 text-gold" />{firm.hours}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-gold/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs sm:flex-row sm:px-6">
          <p>© {firm.name}. All rights reserved.</p>
          <p className="flex gap-5">
            <Link href="/privacy" className={a}>Privacy Policy</Link>
            <Link href="/terms" className={a}>Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}
