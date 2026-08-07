"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, MessageSquareText, PackageCheck, PlaneTakeoff } from "lucide-react";
import { BOOKING_STEPS } from "@/lib/brand";

const ICONS = [PackageCheck, MessageSquareText, CalendarCheck, PlaneTakeoff];

export default function BookingProcess() {
  return (
    <section className="relative border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 -z-10 opacity-25">
        <Image src="/gulmarg-mountain-road.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-ink-950/85" />

      <div className="mx-auto max-w-[1220px] px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-400">
            Booking Process
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Book Your Kashmir Trip in 4 Easy Steps
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BOOKING_STEPS.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-ink-border bg-ink-900/70 p-5 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-brand-blue-400">{s.step}</span>
                  <Icon className="h-4.5 w-4.5 text-brand-green-400" />
                </div>
                <h3 className="mt-3 text-[15px] font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
