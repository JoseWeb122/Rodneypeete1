import { useCallback, useState } from "react";
import type { Inquiry, InquiryInput } from "@/types";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Welcome } from "@/components/Welcome";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Areas } from "@/components/Areas";
import { Listings } from "@/components/Listings";
import { Gallery } from "@/components/Gallery";
import { QuoteBand } from "@/components/QuoteBand";
import { Process } from "@/components/Process";
import { Community } from "@/components/Community";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function App() {
  const [inquiry, setInquiry] = useState<Inquiry | null>(null);

  // Pre-fill the contact form, then glide down to it
  const handleInquire = useCallback((input: InquiryInput) => {
    setInquiry({ ...input, nonce: Date.now() });
    requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-sand-50">
      <Navbar />
      <main>
        <Hero onSearch={handleInquire} />
        <Welcome />
        <About />
        <Services />
        <Areas />
        <Listings onInquire={handleInquire} />
        <Gallery />
        <QuoteBand />
        <Process />
        <Community />
        <Contact prefill={inquiry} />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
