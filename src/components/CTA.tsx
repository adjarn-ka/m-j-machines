import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-charcoal/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          READY TO DEVELOP YOUR{" "}
          <span className="text-yellow-400">MACHINERY OPERATING SKILLS?</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Take the next step and train with M&J Machines Training Centre in
          Bellville, Cape Town. Contact us today to find out more about our
          machinery training programmes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-charcoal font-bold text-lg px-8 py-6"
          >
            REGISTER NOW
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            <Phone className="mr-2 h-5 w-5" />
            WHATSAPP 078 191 5552
          </Button>
        </div>
      </div>
    </section>
  );
}