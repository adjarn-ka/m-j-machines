import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          <span className="text-yellow-400 text-sm font-semibold tracking-wide">
            M&J MACHINES TRAINING CENTRE
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          PROFESSIONAL MACHINERY
          <span className="block text-yellow-400 mt-2">TRAINING IN CAPE TOWN</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Gain practical machinery operating skills with M&J Machines Training
          Centre in Bellville.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-charcoal font-bold text-lg px-8 py-6"
          >
            VIEW OUR TRAINING
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            <Phone className="mr-2 h-5 w-5" />
            WHATSAPP US
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <MapPin className="h-5 w-5 text-yellow-400" />
          <span className="text-sm sm:text-base">
            23 Vrede Street, Bellville, Cape Town
          </span>
        </div>
      </div>
    </section>
  );
}