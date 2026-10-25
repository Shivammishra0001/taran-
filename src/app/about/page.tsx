import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Story } from "@/components/Story";
import { LeadCta } from "@/components/LeadCta";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CA Nirmal Kaur & Company is a proprietorship-based Chartered Accountancy practice established in 2005 in Shahdara, Delhi, built on integrity, accuracy and professionalism.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-navy-deep via-navy to-[#0d3329] px-4 py-10 text-center text-white sm:px-6 md:py-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">About Us</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Trusted Chartered Accountants, <span className="text-gold-grad">Serving Clients Since 2005</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Integrity, accuracy and transparency, from a practice based in Shahdara, Delhi.
          </p>
        </section>
        <About />
        <Story />
        <LeadCta />
      </main>
      <Footer />
    </>
  );
}
