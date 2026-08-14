import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import EmailButton from "@/components/EmailButton";
import MobileStickyBar from "@/components/MobileStickyBar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  title: "Happy Paradise Tour & Travels | See Paradise With Us",
  description:
    "Discover the beauty of Kashmir with Happy Paradise Tour & Travels — carefully planned holidays, comfortable stays and memorable local experiences in Srinagar, Gulmarg, Pahalgam & Sonmarg.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground pb-[72px] lg:pb-0">
        {children}
        <WhatsAppButton />
        <EmailButton />
        <MobileStickyBar />
      </body>
    </html>
  );
}
