import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { BRAND, telHref } from "@/lib/brand";

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Tour Packages", href: "#package" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

const SUPPORT_LINKS = [
  { label: "Help Center", href: "#contact" },
  { label: "Terms", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Travel Advice", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-border/60 bg-ink-950">
      <div className="mx-auto max-w-[1220px] px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-[240px] text-[13px] leading-relaxed text-muted">
              {BRAND.address.line1},<br />
              {BRAND.address.line2}
            </p>
            <div className="mt-4 flex flex-col gap-2 text-[13px] text-muted">
              <a href={telHref(BRAND.phones[0])} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-3.5 w-3.5 text-brand-green-400" />
                {BRAND.phones[0]}
              </a>
              <a href={telHref(BRAND.phones[1])} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-3.5 w-3.5 text-brand-green-400" />
                {BRAND.phones[1]}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-3.5 w-3.5 text-brand-green-400" />
                {BRAND.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-[13.5px]">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-muted-light hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              Support
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-[13.5px]">
              {SUPPORT_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-muted-light hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-ink-border pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-muted">© {BRAND.name}. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-xs text-muted">
            <MapPin className="h-3 w-3 text-brand-green-400" />
            Members: {BRAND.members} &nbsp;·&nbsp; GSTIN: {BRAND.gstin}
          </p>
        </div>
      </div>
    </footer>
  );
}
