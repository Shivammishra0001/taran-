import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  { t: "A Practice Built on Trust Since 2005", href: "/about", img: "/ref/feat1.png", alt: "Team reviewing documents together on a laptop", tone: "bg-cream" },
  { t: "Practical Advisory", href: "/#services", img: "/hero-banner.png", alt: "Chartered accountant advising a client", tone: "bg-gold" },
  { t: "Your Compliance Partner for Long-Term Growth", href: "/contact", img: "/ref/feat3.png", alt: "Professional holding a tablet", tone: "bg-cream" },
];

export function Features() {
  return (
    <section className="bg-cream px-4 py-12 sm:px-6 md:py-14">
      <ul className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.08} className="h-full">
            <li className="h-full list-none">
              <Link href={c.href} className={`group relative flex h-full min-h-56 flex-col justify-between overflow-hidden rounded-2xl border border-line p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${c.tone}`}>
                <h3 className="relative z-10 max-w-[14rem] font-serif text-xl font-semibold leading-snug text-navy">{c.t}</h3>
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold transition group-hover:rotate-12">
                  <ArrowUpRight size={18} />
                </span>
                {c.img && (
                  <Image src={c.img} alt={c.alt} width={626} height={417} className={`absolute bottom-0 right-0 object-cover transition duration-500 group-hover:scale-105 ${"wide" in c ? "h-3/5 w-full [mask-image:linear-gradient(to_top,#000_55%,transparent)]" : "h-3/4 w-auto opacity-90 [mask-image:linear-gradient(to_left,#000_55%,transparent)]"}`} />
                )}
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
