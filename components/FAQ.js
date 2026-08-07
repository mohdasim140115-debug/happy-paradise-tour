"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/brand";

function FaqItem({ item, index, open, onToggle }) {
  const isOpen = open === index;
  return (
    <div className="card-surface rounded-2xl">
      <button
        onClick={() => onToggle(isOpen ? null : index)}
        className="flex w-full items-center gap-3 px-4 py-4 text-left sm:px-5"
        aria-expanded={isOpen}
      >
        <span className="font-display text-sm font-bold text-brand-blue-400">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 text-[14px] font-medium text-white">{item.q}</span>
        <Plus
          className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${
            isOpen ? "rotate-45 text-brand-green-400" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 text-[13.5px] leading-relaxed text-muted sm:px-5 sm:pl-12">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-400">
            FAQ
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Common Questions
          </h2>
        </div>

        <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
          {FAQS.map((item, i) => (
            <FaqItem key={item.q} item={item} index={i} open={open} onToggle={setOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
