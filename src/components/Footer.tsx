import { MapPin, Phone, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              M&J MACHINES TRAINING CENTRE
            </h3>
            <p className="text-gray-400 mb-4">
              Professional Machinery Training in Bellville, Cape Town
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                23 Vrede Street, Bellville, Cape Town, 7530
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                078 191 5552
              </p>
              <p className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-yellow-400" />
                mjmachinesatraining.co.za
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Machinery Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Get In Touch</h4>
            <p className="text-gray-400 text-sm mb-4">
              Ready to start your machinery training? Contact us today.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold w-full">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us
            </Button>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} M&J Machines Training Centre. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}