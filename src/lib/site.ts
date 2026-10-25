import {
  Briefcase,
  Building2,
  Calculator,
  FileText,
  Landmark,
  Percent,
  ReceiptText,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

// TODO: replace every [placeholder] with verified firm details.
export const firm = {
  name: "Nirmal Kaur & Company",
  tagline: "Chartered Accountants",
  phone: "[Phone number]",
  email: "nkcoffice01@gmail.com",
  address: "599/22-A, Moti Ram Road, G.T. Road, Shahdara, Delhi – 110032",
  established: "2005",
  hours: "[Office hours]",
  quote: "Your Compliance Partner for Long Term Growth",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  art: string;
  documents: string[];
};

export const services: Service[] = [
  {
    title: "GST Services",
    art: "/ref/svc1.png",
    description: "Registration, monthly and annual returns, reconciliations and notices.",
    icon: Percent,
    documents: [
      "PAN card of the business / proprietor",
      "Aadhaar card of the proprietor or partners / directors",
      "Business address proof (rent agreement / electricity bill)",
      "Bank account details (cancelled cheque or statement)",
      "Sales and purchase invoices for the period",
      "Existing GSTIN and portal login details (for returns)",
    ],
  },
  {
    title: "Income Tax",
    art: "/ref/svc2.png",
    description: "Return filing, advance tax planning, assessments and notice replies.",
    icon: ReceiptText,
    documents: [
      "PAN and Aadhaar",
      "Form 16 / salary slips",
      "Form 26AS and AIS / TIS",
      "Bank statements and interest certificates",
      "Investment proofs (80C, 80D, etc.)",
      "Capital gains statements and property documents",
    ],
  },
  {
    title: "TDS Compliance",
    art: "/ref/svc3.png",
    description: "Deduction calculation, challan payment, quarterly returns and certificates.",
    icon: FileText,
    documents: [
      "TAN and TRACES login details",
      "Deductee PAN list and payment details",
      "Vendor / salary payment registers",
      "Challan payment receipts (CIN details)",
      "Previous quarter TDS return acknowledgements",
    ],
  },
  {
    title: "Accounting & Bookkeeping",
    art: "/ref/svc4.png",
    description: "Day-to-day books, financial statements, MIS and audit support.",
    icon: Calculator,
    documents: [
      "Bank and credit card statements",
      "Sales and purchase invoices / bills",
      "Expense vouchers and receipts",
      "Opening balances and previous year financials",
      "Loan statements and asset purchase details",
    ],
  },
  {
    title: "Company Incorporation",
    art: "/ref/svc5.png",
    description: "Private limited, LLP and other entity formation with ROC filings.",
    icon: Building2,
    documents: [
      "PAN and Aadhaar of all directors / partners",
      "Passport-size photographs",
      "Address proof of directors (bank statement / utility bill)",
      "Registered office proof and owner's NOC",
      "Proposed company / LLP names",
      "Digital signature certificates (if available)",
    ],
  },
  {
    title: "Business Compliance",
    art: "/ref/svc6.png",
    description: "MSME registration, PF / ESI, ROC annual filings and licences.",
    icon: ShieldCheck,
    documents: [
      "Entity incorporation certificate and PAN",
      "Aadhaar of the authorised signatory",
      "Business activity and turnover details",
      "Employee list with salary details (for PF / ESI)",
      "Previous ROC / compliance filings",
    ],
  },
];

export const portals = [
  { img: "/ref/portal1.png", name: "GST Portal", note: "Registration & returns", href: "https://www.gst.gov.in", icon: Percent },
  { img: "/ref/portal2.png", name: "Income Tax", note: "e-Filing portal", href: "https://www.incometax.gov.in", icon: ReceiptText },
  { img: "/ref/portal3.png", name: "MCA", note: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in", icon: Landmark },
  { img: "/ref/portal4.png", name: "MSME / Udyam", note: "Udyam registration", href: "https://udyamregistration.gov.in", icon: Briefcase },
  { img: "/ref/portal5.png", name: "EPFO", note: "Provident fund services", href: "https://www.epfindia.gov.in", icon: Users },
  { img: "/ref/portal6.png", name: "TRACES / TDS", note: "TDS Centralised Processing", href: "https://www.tdscpc.gov.in", icon: FileText },
];

export const ribbonItems = [
  "GST Compliance",
  "Income Tax Returns",
  "TDS & TCS",
  "Accounting & Bookkeeping",
  "Company Incorporation",
  "ROC Filings",
  "MSME Registration",
  "Business Advisory",
];

export const trustItems = ["Personalised Approach", "Timely Compliance", "Transparent Process", "Trusted Expertise"];

export const whyChoose = [
  ["Personalised Approach", "Advice shaped around your business."],
  ["Timely Compliance", "Deadlines tracked so nothing is missed."],
  ["Clear Communication", "Plain-language updates at every step."],
  ["Practical Advisory", "Guidance you can act on."],
];

export const steps = [
  ["01", "Understand", "We listen to your business, records and goals before suggesting anything."],
  ["02", "Organise", "Documents, books and registrations are put in order against clear deadlines."],
  ["03", "Comply", "Returns and filings are prepared, reviewed and submitted on time."],
  ["04", "Advise", "We provide ongoing guidance to plan ahead with confidence."],
] as const;

export const mapQuery = encodeURIComponent(`${firm.name}, ${firm.address}`);
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(firm.address)}&output=embed`;
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(firm.address)}`;
