import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PackageOverview from "@/components/PackageOverview";
import Packages from "@/components/Packages";
import Itinerary from "@/components/Itinerary";
import BookingProcess from "@/components/BookingProcess";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Accommodation from "@/components/Accommodation";
import DestinationGrid from "@/components/DestinationGrid";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactBooking from "@/components/ContactBooking";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PackageOverview />
        <Packages />
        <Itinerary />
        <BookingProcess />
        <About />
        <Highlights />
        <Accommodation />
        <DestinationGrid />
        <Gallery />
        <Reviews />
        <FAQ />
        <ContactBooking />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
