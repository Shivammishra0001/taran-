import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const serif = Playfair_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"; // TODO: set the real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: {
    default: "Nirmal Kaur & Company | Chartered Accountants, Delhi",
    template: "%s | Nirmal Kaur & Company",
  },
  description:
    "GST, income tax, TDS, accounting, company incorporation and business compliance services from Nirmal Kaur & Company, Chartered Accountants in Shahdara, Delhi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${serif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
