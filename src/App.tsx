import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { WaveDivider } from "@/components/WaveDivider";
import { Courier } from "@/components/Courier";
import { TourBus } from "@/components/TourBus";
import { NEMT } from "@/components/NEMT";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChoose } from "@/components/WhyChoose";
import { Gallery } from "@/components/Gallery";
import { ServiceArea } from "@/components/ServiceArea";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { QuoteForm } from "@/components/QuoteForm";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { useRevealOnScroll } from "@/hooks/useReveal";

export default function App() {
  useRevealOnScroll();

  // Skip link for keyboard users
  useEffect(() => {
    document.title =
      "Lil Lou's Courier & Tours | Courier, Tour Bus & Medical Rides in Rock Hill & Columbia, SC";
  }, []);

  return (
    <div className="min-h-screen bg-white text-navy-900">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-sun-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-xl"
      >
        Skip to content
      </a>

      <Header />

      <main>
        <Hero />
        <TrustBar />
        <Services />

        <WaveDivider from="#ffffff" to="#ecfeff" />
        <Courier />
        <WaveDivider from="#ffffff" to="#cffafe" flip />

        <TourBus />

        <NEMT />

        <HowItWorks />

        <WhyChoose />

        <Gallery />

        <ServiceArea />

        <Testimonials />

        <FAQ />

        <QuoteForm />

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
