import Link from "next/link";
import { ArrowRight, Eye, Scale, Target, UserCheck } from "lucide-react";
import { Reveal } from "./Reveal";

export const commitments = [
  [Scale, "Integrity", "Honest, ethical advice at every step."],
  [Target, "Accuracy", "Careful work that stands up to scrutiny."],
  [UserCheck, "Professionalism", "Clear deadlines and dependable follow-through."],
  [Eye, "Transparency", "You always know what is being done and why."],
] as const;

export function Commitments() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
              <span className="h-px w-6 bg-gold" /> Our Commitment
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-navy sm:text-4xl">A Practice Built on Trust Since 2005</h2>
          </div>
          <Link href="/about" className="group inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2 text-sm font-medium text-navy transition hover:bg-gold/15">
            Know More About Us <ArrowRight size={14} className="transition group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 0.07} className="h-full">
              <li className="h-full list-none rounded-xl border border-line bg-cream p-5 transition duration-300 hover:-translate-y-1 hover:border-gold">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-gold"><Icon size={20} /></span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-navy">{t}</h3>
                <p className="mt-1 text-sm text-muted">{d}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
