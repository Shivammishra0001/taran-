import { Briefcase, Building2, Calculator, FileText, Landmark, Percent, ReceiptText, Scale } from "lucide-react";
import { ribbonItems } from "@/lib/site";

const icons = [Percent, ReceiptText, FileText, Calculator, Building2, Landmark, Briefcase, Scale];

export function Ribbon() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {ribbonItems.map((t, i) => {
        const Icon = icons[i % icons.length];
        return (
          <li key={t} className="flex items-center gap-2 whitespace-nowrap border-r border-gold/30 px-6 text-sm font-medium text-white">
            <Icon size={16} className="text-gold" aria-hidden /> {t}
          </li>
        );
      })}
    </ul>
  );
  return (
    <section aria-label="Areas we cover" className="marquee overflow-hidden border-y-2 border-gold/70 bg-navy-deep py-3.5">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
