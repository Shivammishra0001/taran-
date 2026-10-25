import Image from "next/image";
import Link from "next/link";
import { firm } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${firm.name} home`}>
      <Image src="/logo.jpg" alt="" width={44} height={34} className="h-9 w-auto rounded-md bg-white" priority />
      <span className="leading-tight">
        <span className={`block font-serif text-base font-semibold ${light ? "text-white" : "text-navy"}`}>
          {firm.name}
        </span>
        <span className={`block text-[9px] font-medium uppercase tracking-[0.2em] ${light ? "text-white/60" : "text-muted"}`}>
          {firm.tagline}
        </span>
      </span>
    </Link>
  );
}
