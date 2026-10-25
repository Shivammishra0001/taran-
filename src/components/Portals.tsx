import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { portals } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Portals() {
  return (
    <section className="bg-gradient-to-b from-navy to-navy-deep px-4 py-14 text-white sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-6 bg-gold" /> Useful Resources
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Government Portals</h2>
            <p className="mt-1 text-sm text-white/75">Quick access to official portals so you can stay informed and do more in less time.</p>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {portals.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05} className="h-full">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center rounded-xl bg-white p-4 text-center text-navy transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_26px_-4px_rgba(197,245,26,0.7)]"
              >
                <Image src={p.img} alt="" width={60} height={48} className="h-12 w-auto" />
                <span className="mt-2 font-serif text-sm font-semibold">{p.name}</span>
                <span className="mt-1 flex-1 text-[11px] leading-snug text-muted">{p.note}</span>
                <span className="gold-btn mt-3 inline-flex items-center gap-1 rounded-full px-4 py-1 text-[10px] font-bold tracking-wider">
                  CLICK ME <ArrowUpRight size={11} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
