"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, MessageCircle, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { BRAND, MOBILE_NAV_LINKS, NAV_LINKS, telHref, whatsappHref, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/brand";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-ink-border bg-ink-950/85 backdrop-blur-md"
            : "border-transparent bg-ink-950/30 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1220px] items-center justify-between px-4 sm:px-6">
          <a href="#home" aria-label="Happy Paradise Tour & Travels — Home">
            <Logo />
          </a>

          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13.5px] font-medium text-muted-light transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-1.5 rounded-full brand-gradient-bg px-4.5 py-2 text-[13.5px] font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Book Package
            <ChevronRight className="h-3.5 w-3.5" />
          </a>

          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M1 1H17M1 7H17M1 13H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-ink-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-16 items-center justify-between border-b border-ink-border px-5">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-border text-white"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              <ul className="flex flex-1 flex-col overflow-y-auto px-2 py-2">
                {MOBILE_NAV_LINKS.map((link) => (
                  <li key={link.label} className="border-b border-ink-border/60 last:border-none">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-3 py-4 text-[15px] font-medium text-muted-light transition-colors hover:text-white"
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 text-muted" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 border-t border-ink-border p-5">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center justify-center rounded-full brand-gradient-bg text-sm font-semibold text-white"
                >
                  Book Kashmir Package
                </a>
                <div className="flex gap-3">
                  <a
                    href={telHref(BRAND.primaryPhone)}
                    className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-ink-border text-sm font-medium text-white"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-ink-border text-sm font-medium text-brand-green-400"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
