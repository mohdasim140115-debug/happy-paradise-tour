"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Loader2, Send, User, X } from "lucide-react";

const EMPTY_FORM = {
  inquiryName: "",
  inquiryPhone: "",
  inquiryDate: "",
  inquiryTravellers: "",
  inquiryMessage: "",
};

export default function PackageInquiryModal({ pkg, onClose }) {
  const router = useRouter();
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const open = Boolean(pkg);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setForm(EMPTY_FORM);
      setStatus("idle");
    }
  }, [open, pkg]);

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
          name: form.inquiryName,
          phone: form.inquiryPhone,
          date: form.inquiryDate,
          travellers: form.inquiryTravellers,
          message: form.inquiryMessage,
          source: `Package Enquiry: ${pkg.name} (${pkg.duration})`,
        }),
      });
      if (!res.ok) throw new Error("Failed");
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
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22 }}
            className="card-surface w-full max-w-md rounded-2xl p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white">Enquire Now</h3>
                <p className="mt-0.5 text-xs text-muted">
                  {pkg?.name} — {pkg?.duration}. Fill your details and our team will get an
                  email with your enquiry.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-border text-muted-light hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 grid gap-3.5">
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5 text-xs font-medium text-muted-light">
                      Full Name
                      <div className="flex items-center gap-2 rounded-xl border border-ink-border px-3.5 py-2.5 focus-within:border-brand-blue-500">
                        <User className="h-4 w-4 text-muted" />
                        <input
                          required
                          type="text"
                          name="inquiryName"
                          value={form.inquiryName}
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
                        name="inquiryPhone"
                        value={form.inquiryPhone}
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
                        name="inquiryDate"
                        value={form.inquiryDate}
                        onChange={handleChange}
                        className="rounded-xl border border-ink-border px-3.5 py-2.5 text-sm text-white outline-none [color-scheme:dark] focus:border-brand-blue-500"
                      />
                    </label>

                    <label className="flex flex-col gap-1.5 text-xs font-medium text-muted-light">
                      Number of Travellers
                      <input
                        type="number"
                        min="1"
                        name="inquiryTravellers"
                        value={form.inquiryTravellers}
                        onChange={handleChange}
                        placeholder="e.g. 2"
                        className="rounded-xl border border-ink-border px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-muted focus:border-brand-blue-500"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5 text-xs font-medium text-muted-light">
                    Message
                    <textarea
                      name="inquiryMessage"
                      value={form.inquiryMessage}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your dream Kashmir trip..."
                      className="rounded-xl border border-ink-border px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-muted focus:border-brand-blue-500"
                    />
                  </label>

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
                        Send Enquiry
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
