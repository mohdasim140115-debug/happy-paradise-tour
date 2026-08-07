"use client";

import { MessageCircle } from "lucide-react";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/brand";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+80px)] z-40 flex items-center gap-2 rounded-full bg-[#25D366] pl-3.5 pr-4 py-3 text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 active:scale-95 sm:right-5 sm:bottom-5"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      <span className="text-sm font-semibold hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
