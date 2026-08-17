"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Loader2, Mail, Send, User, X } from "lucide-react";

const EMPTY_FORM = {
  emailName: "",
  emailPhone: "",
  emailDate: "",
  emailTravellers: "",
  emailMessage: "",
};

export default function EmailButton() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | error

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setStatus("idle");
    setForm(EMPTY_FORM);
  };

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
          name: form.emailName,
          phone: form.emailPhone,
          date: form.emailDate,
          travellers: form.emailTravellers,
          message: form.emailMessage,
          source: "Email Us Enquiry",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+144px)] z-40 flex items-center gap-2 rounded-full brand-gradient-bg pl-3.5 pr-4 py-3 text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 active:scale-95 sm:right-5 sm:bottom-[84px]"
        aria-label="Email Us"
      >
        <Mail className="h-5 w-5" />
        <span className="text-sm font-semibold hidden sm:inline">Email Us</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
            onClick={close}
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
                  <h3 className="font-display text-lg font-bold text-white">Email Us</h3>
                  <p className="mt-0.5 text-xs text-muted">
                    Fill your details — our team will get an email with your enquiry.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
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
                            name="emailName"
                            value={form.emailName}
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
                          name="emailPhone"
                          value={form.emailPhone}
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
                          name="emailDate"
                          value={form.emailDate}
                          onChange={handleChange}
                          className="rounded-xl border border-ink-border px-3.5 py-2.5 text-sm text-white outline-none [color-scheme:dark] focus:border-brand-blue-500"
                        />
                      </label>

                      <label className="flex flex-col gap-1.5 text-xs font-medium text-muted-light">
                        Number of Travellers
                        <input
                          type="number"
                          min="1"
                          name="emailTravellers"
                          value={form.emailTravellers}
                          onChange={handleChange}
                          placeholder="e.g. 2"
                          className="rounded-xl border border-ink-border px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-muted focus:border-brand-blue-500"
                        />
                      </label>
                    </div>

                    <label className="flex flex-col gap-1.5 text-xs font-medium text-muted-light">
                      Message
                      <textarea
                        name="emailMessage"
                        value={form.emailMessage}
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
    </>
  );
}
