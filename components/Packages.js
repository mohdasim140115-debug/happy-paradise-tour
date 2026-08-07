"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Moon, Phone } from "lucide-react";
import { BRAND, PACKAGES, telHref, whatsappHref } from "@/lib/brand";

const BADGE_STYLES = {
  accent: "bg-brand-accent-500",
  green: "bg-brand-green-600",
  blue: "bg-brand-blue-600",
};

export default function Packages() {
  return (
    <section id="packages" className="border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-400">
            Kashmir Packages
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Choose Your Kashmir Package
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-surface flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-brand-blue-500"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${BADGE_STYLES[pkg.badgeTone]}`}
                >
                  {pkg.badge}
                </span>
                <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-ink-950/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  <Moon className="h-3 w-3 text-brand-green-400" />
                  {pkg.duration}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-white">{pkg.name}</h3>
                <p className="mt-1 text-[12.5px] font-medium text-brand-blue-400">{pkg.places}</p>

                <ul className="mt-4 flex flex-col gap-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-muted-light">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-end justify-between border-t border-ink-border pt-4">
                  <div>
                    <p className="font-display text-xl font-bold text-white">
                      {pkg.price === "On Request" ? "On Request" : `₹${pkg.price}`}
                    </p>
                    <p className="text-[11px] text-muted">{pkg.unit}</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2.5">
                  <a
                    href={telHref(BRAND.primaryPhone)}
                    className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-ink-border text-[12.5px] font-semibold text-white transition-colors hover:border-brand-blue-500"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Call Now
                  </a>
                  <a
                    href={whatsappHref(
                      `Hi Happy Paradise Tour & Travels, I am interested in the ${pkg.name} – ${pkg.duration}. Please share more details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 flex-1 items-center justify-center rounded-full brand-gradient-bg text-[12.5px] font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    Inquiry Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
