import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { Ribbon } from "@/components/Ribbon";
import { Commitments } from "@/components/Commitments";
import { Story } from "@/components/Story";
import { Portals } from "@/components/Portals";
import { LeadCta } from "@/components/LeadCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Ribbon />
        <Commitments />
        <Story />
        <Portals />
        <LeadCta />
      </main>
      <Footer />
    </>
  );
}
