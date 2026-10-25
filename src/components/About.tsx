import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarCheck, Mail, MapPin } from "lucide-react";
import { firm } from "@/lib/site";
import { Reveal } from "./Reveal";

const credentials = ["FCA", "CIFRS", "ISA", "Certified GST", "SAP (FICO)", "M.Com."];

export function About() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-12 sm:px-6 md:py-16">
      <Image src="/about-bg.png" alt="" fill sizes="100vw" className="-z-20 object-cover object-center" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-white/80" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
              <span className="h-px w-6 bg-gold" /> About Our Firm
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-navy sm:text-5xl">
              Meet <span className="text-gold-dark">CA Nirmal Kaur</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul aria-label="Professional qualifications" className="mt-5 flex flex-wrap gap-2">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-1.5 rounded-full border border-navy/15 bg-white/90 px-3 py-1 text-xs font-semibold text-navy transition hover:-translate-y-0.5 hover:border-gold-dark">
                  <BadgeCheck size={14} className="text-gold-dark" aria-hidden />{c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">
              CA Nirmal Kaur &amp; Company is a proprietorship-based Chartered Accountancy practice established in 2005
              in Shahdara, Delhi. With years of professional experience, we are committed to maintaining the highest
              standards of integrity, accuracy, and professionalism.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              Our focus is on building lasting client relationships through trust, transparency, and a commitment to
              excellence.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <dl className="mt-7 max-w-xl space-y-4 rounded-2xl border border-line bg-white/90 p-5 backdrop-blur">
              <div className="flex gap-3">
                <CalendarCheck size={18} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden />
                <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted">Established</dt><dd className="font-medium text-navy">{firm.established}</dd></div>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden />
                <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted">Address</dt><dd className="font-medium text-navy">{firm.address}</dd></div>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Email</dt>
                  <dd className="font-medium text-navy"><a href={`mailto:${firm.email}`} className="break-all underline-offset-4 hover:underline">{firm.email}</a></dd>
                </div>
              </div>
            </dl>
            <Link href="/contact" className="gold-btn group mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5">
              Contact Our Firm <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Reveal x={32} className="relative mx-auto w-full max-w-sm md:max-w-md md:justify-self-end">
          <div aria-hidden className="absolute -inset-3 -rotate-3 rounded-[2rem] bg-white/60" />
          <div aria-hidden className="absolute inset-6 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-gold/50 bg-white p-2 shadow-xl">
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-2xl md:max-h-[34rem]">
              <Image
                src="/founder.jpg"
                alt="CA Nirmal Kaur at her desk reviewing financial statements"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover object-[50%_28%] transition duration-700 hover:scale-105"
              />
            </div>
          </div>
          <Reveal delay={0.5} y={12} className="absolute -bottom-4 left-4 sm:-left-4">
            <span className="flex items-center gap-2 rounded-full border border-gold/60 bg-navy px-4 py-2 text-xs font-semibold text-white shadow-lg">
              <span className="h-2 w-2 rounded-full bg-gold" /> Serving Clients Since 2005
            </span>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
