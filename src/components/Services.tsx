"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { services, type Service } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Services() {
  const [active, setActive] = useState<Service | null>(null);
  const reduce = useReducedMotion();
  const trigger = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const el = trigger.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      el?.focus();
    };
  }, [active]);

  return (
    <section id="services" className="bg-gradient-to-b from-white to-cream px-4 py-14 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
              <span className="h-px w-6 bg-gold" /> What we do
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-navy sm:text-4xl">Our Services</h2>
            <p className="mt-1 text-sm text-muted">Expert support across taxation, accounting, compliance and business advisory.</p>
          </div>
          <a href="#services" className="rounded-full border border-gold px-5 py-2 text-sm font-medium text-navy transition hover:bg-gold/15">
            View All Services →
          </a>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="h-full">
              <article className="group flex h-full flex-col items-center rounded-xl border border-line bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_12px_28px_-12px_rgba(16,61,50,0.35)]">
                <Image src={s.art} alt="" width={110} height={78} className="h-[78px] w-auto transition duration-300 group-hover:scale-105" />
                <h3 className="mt-3 font-serif text-base font-semibold leading-tight text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">{s.description}</p>
                <button
                  type="button"
                  onClick={(e) => {
                    trigger.current = e.currentTarget;
                    setActive(s);
                  }}
                  className="mt-4 inline-flex items-center gap-1 rounded-full bg-cream px-3 py-1.5 text-xs font-semibold text-navy ring-1 ring-line transition hover:bg-gold focus-visible:outline-2 focus-visible:outline-gold"
                >
                  View Documents <ArrowRight size={12} />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-gold/60 bg-white p-6 shadow-2xl sm:p-8"
              initial={reduce ? false : { opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: reduce ? 0 : 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                    <active.icon size={22} />
                  </span>
                  <h3 id="service-modal-title" className="font-serif text-xl font-semibold text-navy">
                    {active.title}
                  </h3>
                </div>
                <button ref={closeBtn} type="button" aria-label="Close" onClick={() => setActive(null)} className="rounded-lg p-1.5 text-muted hover:bg-cream">
                  <X size={20} />
                </button>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted">Documents checklist</p>
              <ul className="mt-3 space-y-3">
                {active.documents.map((d) => (
                  <li key={d} className="flex gap-3 text-sm">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted">Requirements vary by case. We will confirm the exact list when you get in touch.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
