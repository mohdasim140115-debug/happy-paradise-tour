import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { BRAND, telHref, whatsappHref, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/brand";

export const metadata = {
  title: "Thank You | Happy Paradise Tour & Travels",
  description: "Your enquiry has been received. Our Kashmir travel expert will contact you shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
      <Link href="/" aria-label="Happy Paradise Tour & Travels — Home" className="mb-8">
        <Logo priority />
      </Link>

      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green-600/15 text-brand-green-400">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 12.5l5 5L20 6.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <h1 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
        Thank You!
      </h1>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-light">
        Your enquiry has been received. Our Kashmir travel expert,{" "}
        <span className="text-white">{BRAND.contactPerson}</span>, will contact you shortly to
        help plan your perfect trip.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full brand-gradient-bg px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          Chat on WhatsApp
        </a>
        <a
          href={telHref(BRAND.primaryPhone)}
          className="flex items-center gap-2 rounded-full border border-ink-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-blue-500"
        >
          <Phone className="h-4 w-4" />
          {BRAND.primaryPhone}
        </a>
      </div>

      <Link
        href="/"
        className="mt-8 flex items-center gap-1.5 text-sm font-medium text-muted-light hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
    </main>
  );
}
