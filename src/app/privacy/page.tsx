import Link from "next/link";

export const metadata = { title: "Privacy Policy" };

// Placeholder: legal copy must be supplied and reviewed by the firm.
export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-3 text-muted">Content to be provided by the firm.</p>
      <Link href="/" className="mt-6 font-semibold text-gold-dark">← Back to home</Link>
    </main>
  );
}
