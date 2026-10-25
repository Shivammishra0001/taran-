"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { services } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  phone: z.string().trim().regex(/^\+?[\d\s-]{10,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000).optional(),
});
type Values = z.infer<typeof schema>;

const serviceOptions = [...services.map((s) => s.title), "Other"];
const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const g = {
  url: process.env.NEXT_PUBLIC_GFORM_URL,
  name: process.env.NEXT_PUBLIC_GFORM_NAME,
  phone: process.env.NEXT_PUBLIC_GFORM_PHONE,
  email: process.env.NEXT_PUBLIC_GFORM_EMAIL,
  service: process.env.NEXT_PUBLIC_GFORM_SERVICE,
  message: process.env.NEXT_PUBLIC_GFORM_MESSAGE,
};
const gformReady = Boolean(g.url && g.name && g.phone && g.email && g.service && g.message);

const field =
  "mt-1 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

type Status = { kind: "idle" } | { kind: "done"; text: string } | { kind: "error"; text: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { service: "" } });

  const onSubmit = async (v: Values) => {
    if (!wa && !gformReady) {
      setStatus({ kind: "error", text: "Enquiries are not configured yet. Please call or email us directly." });
      return;
    }
    const lines = [
      "New enquiry from website",
      `Name: ${v.name}`,
      `Phone: ${v.phone}`,
      `Email: ${v.email}`,
      `Service: ${v.service}`,
      v.message ? `Message: ${v.message}` : "",
    ].filter(Boolean);

    // Open WhatsApp first, synchronously with the click, so popup blockers allow it.
    if (wa) window.open(`https://wa.me/${wa}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");

    let sheetOk = false;
    if (gformReady) {
      const body = new URLSearchParams({
        [g.name!]: v.name,
        [g.phone!]: v.phone,
        [g.email!]: v.email,
        [g.service!]: v.service,
        [g.message!]: v.message ?? "",
      });
      try {
        // Google Forms does not return a readable response; a resolved request means it was sent.
        await fetch(g.url!, { method: "POST", mode: "no-cors", body });
        sheetOk = true;
      } catch {
        sheetOk = false;
      }
    }

    if (gformReady && !sheetOk && !wa) {
      setStatus({ kind: "error", text: "We could not send your enquiry. Please check your connection and try again." });
      return;
    }
    const parts = [
      wa ? "WhatsApp has opened with your details — please press Send there to deliver them." : "",
      sheetOk ? "Your enquiry was also submitted to our records." : gformReady ? "We could not save it to our records, so please use WhatsApp." : "",
    ].filter(Boolean);
    setStatus({ kind: "done", text: parts.join(" ") });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-lg sm:p-8">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-navy">Name *</label>
        <input id="name" autoComplete="name" className={field} aria-invalid={!!errors.name} {...register("name")} />
        {errors.name && <p role="alert" className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-navy">Phone *</label>
          <input id="phone" type="tel" autoComplete="tel" className={field} aria-invalid={!!errors.phone} {...register("phone")} />
          {errors.phone && <p role="alert" className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy">Email *</label>
          <input id="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} {...register("email")} />
          {errors.email && <p role="alert" className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="service" className="text-sm font-semibold text-navy">Service required *</label>
        <select id="service" className={field} aria-invalid={!!errors.service} {...register("service")}>
          <option value="">Select a service</option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        {errors.service && <p role="alert" className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy">Message</label>
        <textarea id="message" rows={4} className={field} {...register("message")} />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="gold-btn inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition hover:-translate-y-0.5 disabled:opacity-60"
      >
        <Send size={16} /> {isSubmitting ? "Sending…" : "Send Enquiry"}
      </button>
      <div aria-live="polite">
        {status.kind !== "idle" && (
          <p className={`rounded-lg p-3 text-sm ${status.kind === "done" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-700"}`}>
            {status.text}
          </p>
        )}
      </div>
    </form>
  );
}
