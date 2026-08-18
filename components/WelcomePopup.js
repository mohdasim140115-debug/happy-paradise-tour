"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Loader2, Send, Sparkles, User, X } from "lucide-react";

const EMPTY_FORM = {
  popupName: "",
  popupPhone: "",
  popupDate: "",
  popupTravellers: "",
};
const SESSION_KEY = "hp_welcome_popup_shown";

export default function WelcomePopup() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | error

  useEffect(() => {
    if (pathname !== "/") return; // never show on thank-you or other non-home pages
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 2500);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.popupName,
          phone: form.popupPhone,
          date: form.popupDate,
          travellers: form.popupTravellers,
          source: "Welcome Popup Enquiry",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      close();
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="card-surface relative w-full max-w-md overflow-hidden rounded-2xl p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-ink-border text-muted-light hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green-600/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-green-400">
              <Sparkles className="h-3 w-3" />
              Kashmir Couple Package
            </span>
            <h3 className="mt-3 pr-8 font-display text-xl font-bold text-white">
              Plan Your Dream Kashmir Vacation
            </h3>
            <p className="mt-1 text-[13px] text-muted">
              04 Nights / 05 Days starting from ₹22,000 per couple. Share your details and we'll
              get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 grid gap-3.5">
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5 text-xs font-medium text-muted-light">
                      Full Name
                      <div className="flex items-center gap-2 rounded-xl border border-ink-border px-3.5 py-2.5 focus-within:border-brand-blue-500">
                        <User className="h-4 w-4 text-muted" />
                        <input
                          required
                          type="text"
                          name="popupName"
                          value={form.popupName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-muted"
                        />
                      </div>
                    </label>

                    <label className="flex flex-col gap-1.5 text-xs font-medium text-muted-light">
                      Phone Number
                      <input
                        required
                        type="tel"
                        name="popupPhone"
                        value={form.popupPhone}
                        onChange={handleChange}
                        placeholder="+91"
                        className="rounded-xl border border-ink-border px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-muted focus:border-brand-blue-500"
                      />
                    </label>
                  </div>

                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5 text-xs font-medium text-muted-light">
                      Travel Date
                      <input
                        type="date"
                        name="popupDate"
                        value={form.popupDate}
                        onChange={handleChange}
                        className="rounded-xl border border-ink-border px-3.5 py-2.5 text-sm text-white outline-none [color-scheme:dark] focus:border-brand-blue-500"
                      />
                    </label>

                    <label className="flex flex-col gap-1.5 text-xs font-medium text-muted-light">
                      Number of Travellers
                      <input
                        type="number"
                        min="1"
                        name="popupTravellers"
                        value={form.popupTravellers}
                        onChange={handleChange}
                        placeholder="e.g. 2"
                        className="rounded-xl border border-ink-border px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-muted focus:border-brand-blue-500"
                      />
                    </label>
                  </div>

                  {status === "error" && (
                    <p className="flex items-center gap-1.5 text-xs text-brand-accent-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      Couldn't send your enquiry. Please try again or WhatsApp us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-1 flex items-center justify-center gap-2 rounded-full brand-gradient-bg px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Get Free Quote
                      </>
                    )}
                  </button>
                </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
