import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Clock, Award, PlayCircle, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const points = [
  [Award, "Personalised Advice"],
  [Clock, "Timely Compliance"],
  [ShieldCheck, "Trusted Expertise"],
] as const;

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy-deep text-white">
      {/* Banner photo: right-aligned on desktop, full-bleed and dimmed on mobile */}
      <div className="absolute inset-0 -z-10 md:left-[38%]">
        <Image
          src="/hero-banner.png"
          alt="Chartered accountant advising a client across a meeting table"
          fill
          priority
          sizes="(min-width: 768px) 62vw, 100vw"
          className="object-cover object-center"
        />
        <div aria-hidden className="absolute inset-0 bg-navy-deep/70 md:bg-transparent md:bg-gradient-to-r md:from-navy-deep md:via-navy-deep/40 md:to-transparent" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-deep/70 to-transparent" />
      </div>
      <div className="mx-auto flex min-h-[32rem] max-w-7xl items-center px-4 py-14 sm:px-6 md:min-h-[36rem] md:py-20">
        <div className="max-w-xl">
          <Reveal>
            <p className="inline-block rounded-full border border-gold/60 bg-navy-deep/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
              Chartered Accountants
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 text-[2.25rem] font-semibold leading-[1.12] sm:text-5xl lg:text-[3.4rem]">
              Clarity in Compliance.
              <span className="block text-gold">Confidence in Every Decision.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
              Taxation, accounting and regulatory compliance handled with care, so you can focus on running your business.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="gold-btn group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5">
              <CalendarCheck size={16} /> Book a Consultation <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <Link href="/#services" className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-navy-deep/40 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:border-gold hover:text-gold">
              <PlayCircle size={16} className="text-gold" /> Explore Services
            </Link>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/90">
              {points.map(([Icon, t]) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/60 bg-navy-deep/50 text-gold"><Icon size={14} /></span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
