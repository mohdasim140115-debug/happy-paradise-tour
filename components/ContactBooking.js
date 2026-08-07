"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, User } from "lucide-react";
import { whatsappHref } from "@/lib/brand";

export default function ContactBooking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    travellers: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi Happy Paradise Tour & Travels, I would like a Kashmir package enquiry.\n\nName: ${form.name}\nPhone: ${form.phone}\nTravel Date: ${form.date}\nTravellers: ${form.travellers}\nMessage: ${form.message}`;
    window.open(whatsappHref(message), "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[820px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40"
        >
          <div className="brand-gradient-bg px-6 py-9 sm:px-10 sm:py-12">
            <div className="text-center">
              <span className="inline-flex rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                Plan Your Trip
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                Plan Your Dream <br /> Kashmir Vacation
              </h2>
              <p className="mx-auto mt-2.5 max-w-md text-[13.5px] text-white/80">
                04 Nights / 05 Days Kashmir Couple Package starting from ₹22,000 per couple.
              </p>
            </div>

            {submitted ? (
              <div className="mx-auto mt-8 flex max-w-sm flex-col items-center gap-3 rounded-2xl bg-white/10 px-6 py-10 text-center backdrop-blur-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Send className="h-5 w-5 text-white" />
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  Thank you{form.name ? `, ${form.name}` : ""}!
                </h3>
                <p className="text-[13.5px] text-white/80">
                  Your enquiry has been opened on WhatsApp. Our Kashmir travel expert will contact
                  you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-1 text-sm font-semibold text-white underline underline-offset-4"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 grid max-w-lg gap-3.5 rounded-2xl bg-ink-950/40 p-4 backdrop-blur-sm sm:p-6"
              >
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-xs font-medium text-white/80">
                    Your Name
                    <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 focus-within:border-white/50">
                      <User className="h-4 w-4 text-white/50" />
                      <input
                        required
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                      />
                    </div>
                  </label>

                  <label className="flex flex-col gap-1.5 text-xs font-medium text-white/80">
                    Phone Number
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91"
                      className="rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/50"
                    />
                  </label>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-xs font-medium text-white/80">
                    Travel Date
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none [color-scheme:dark] focus:border-white/50"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 text-xs font-medium text-white/80">
                    Number of Travellers
                    <input
                      type="number"
                      min="1"
                      name="travellers"
                      value={form.travellers}
                      onChange={handleChange}
                      placeholder="e.g. 2"
                      className="rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/50"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5 text-xs font-medium text-white/80">
                  Message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your dream Kashmir trip..."
                    className="rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/50"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-1 flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-blue-800 transition-transform hover:scale-[1.02]"
                >
                  Get Free Quote
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
