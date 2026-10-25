import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { whyChoose } from "@/lib/site";
import { Reveal } from "./Reveal";

export function LeadCta() {
  return (
    <section id="contact" className="bg-white px-4 py-12 sm:px-6 md:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <Reveal>
          <div className="relative flex items-center overflow-hidden rounded-2xl border border-gold/50 bg-gradient-to-r from-[#f1edE5] to-[#faf7f0] p-6 shadow-lg sm:p-8">
            <div className="relative z-10 max-w-xs">
              <h2 className="text-2xl font-semibold text-navy sm:text-3xl">Let&apos;s Make Your Compliance Simpler</h2>
              <p className="mt-2 text-sm text-navy/70">Tell us about your requirements and we will get back to you.</p>
              {/* /contact is a placeholder until the enquiry form is built. */}
              <Link href="/contact" className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-deep">
                <FileText size={16} className="text-gold" /> Fill Your Form <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
            <Image src="/ref/cta.png" alt="Professional working on a laptop at a desk" width={140} height={130} className="absolute bottom-0 right-0 hidden h-full w-auto object-cover sm:block" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="font-serif text-xl font-semibold text-navy">Why Choose Us</h3>
          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {whyChoose.map(([t], i) => (
              <li key={t} className="flex flex-col items-center text-center text-xs font-medium text-navy">
                <Image src={`/ref/why${i + 1}.png`} alt="" width={56} height={56} className="h-14 w-14 rounded-full" />
                <span className="mt-2">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
