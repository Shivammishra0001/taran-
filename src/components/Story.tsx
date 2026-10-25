import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { steps } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section id="process" className="bg-gradient-to-b from-white to-[#f1ede5] px-4 py-14 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-4 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
              <span className="h-px w-6 bg-gold" /> Our Process
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-navy sm:text-4xl">From Paperwork to Peace of Mind</h2>
          </div>
          <p className="text-sm text-muted">A simple and transparent process to make your compliance journey smooth and hassle-free.</p>
        </Reveal>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.12}>
              <li className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex w-full items-center gap-3">
                  <Image src={`/ref/step${i + 1}.png`} alt="" width={64} height={64} className="h-16 w-16 rounded-full" />
                  {i < 3 && <ArrowRight aria-hidden size={22} className="hidden flex-1 text-gold lg:block" />}
                </div>
                <p className="mt-3 text-xs font-bold tracking-widest text-gold-dark">{n}</p>
                <h3 className="font-serif text-lg font-semibold text-navy">{t}</h3>
                <p className="mt-1 max-w-[16rem] text-sm text-muted">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
