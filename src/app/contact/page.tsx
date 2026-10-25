import type { Metadata } from "next";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { firm, mapDirectionsUrl, mapEmbedUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Nirmal Kaur & Company, Chartered Accountants in Shahdara, Delhi. Send an enquiry, get directions or write to us.",
  alternates: { canonical: "/contact" },
};

const details = [
  [MapPin, "Address", firm.address],
  [Phone, "Phone", firm.phone],
  [Mail, "Email", firm.email],
  [Clock, "Office hours", firm.hours],
] as const;

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-navy-deep via-navy to-[#0d3329] px-4 py-14 text-center text-white sm:px-6 md:py-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Contact Us</p>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
            Let&apos;s Make Your <span className="text-gold-grad">Compliance Simpler</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80">Tell us about your requirements and we will get back to you.</p>
        </section>

        <section className="bg-cream px-4 py-14 sm:px-6 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_1fr]">
            <Reveal><ContactForm /></Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4">
                {details.map(([Icon, label, value]) => (
                  <div key={label} className="flex gap-4 rounded-xl border border-line bg-white p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-gold"><Icon size={20} aria-hidden /></span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
                      {label === "Email" ? (
                        <a href={`mailto:${firm.email}`} className="break-all font-medium text-navy hover:underline">{value}</a>
                      ) : (
                        <p className="font-medium text-navy">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 md:py-16">
          <div className="mx-auto max-w-7xl">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-navy">Find Our Office</h2>
                <p className="mt-1 text-sm text-muted">{firm.address}</p>
              </div>
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                <Navigation size={16} /> Get Directions
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <iframe
                title={`Map showing the location of ${firm.name}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-6 h-80 w-full rounded-2xl border border-gold/40 shadow-lg sm:h-96"
              />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
