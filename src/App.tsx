import { useState } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Training } from "@/components/Training";
import { WhyChoose } from "@/components/WhyChoose";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Training />
      <WhyChoose />
      <Process />
      <CTA />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}