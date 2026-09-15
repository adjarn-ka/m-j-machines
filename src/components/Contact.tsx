import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Globe, MessageCircle } from "lucide-react";

const machineryOptions = [
  "Forklift",
  "Reach Truck",
  "Roller",
  "TLB",
  "Front-End Loader",
  "Excavator",
  "Grader",
  "Dump Truck",
  "Mobile Crane",
  "Tower Crane",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    machinery: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello M&J Machines Training Centre, I'm ${formData.name}. I'm interested in ${formData.machinery} training. ${formData.message}`;
    window.open(
      `https://wa.me/27781915552?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-1 bg-yellow-400 rounded-full" />
            <span className="text-yellow-600 font-semibold tracking-wide uppercase text-sm">
              Contact Us
            </span>
            <span className="w-12 h-1 bg-yellow-400 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contact M&J Machines Training Centre for more information about our
            machinery training programmes.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
              <h3 className="text-xl font-bold text-charcoal mb-4">
                M&J Machines Training Centre
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal">Address</p>
                    <p className="text-gray-600">
                      23 Vrede Street, Bellville, Cape Town, 7530
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal">Phone / WhatsApp</p>
                    <p className="text-gray-600">078 191 5552</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal">Website</p>
                    <p className="text-gray-600">mjmachinesatraining.co.za</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
              <h3 className="text-xl font-bold text-charcoal mb-4">
                Quick Contact
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-charcoal font-bold flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button className="bg-green-500 hover:bg-green-600 text-white font-bold flex-1">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
              <h3 className="text-xl font-bold text-charcoal mb-4">Location</h3>
              <div className="rounded-xl overflow-hidden h-64 bg-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                  <p className="text-gray-600 font-semibold">
                    23 Vrede Street, Bellville
                  </p>
                  <p className="text-gray-500 text-sm">Cape Town, 7530</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 h-fit">
            <h3 className="text-xl font-bold text-charcoal mb-6">
              Send Us An Enquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label>Machinery Training</Label>
                <Select
                  value={formData.machinery}
                  onValueChange={(value) =>
                    setFormData({ ...formData, machinery: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select machinery training" />
                  </SelectTrigger>
                  <SelectContent>
                    {machineryOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your training needs"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-charcoal hover:bg-yellow-500 hover:text-charcoal transition-colors font-bold"
              >
                SEND ENQUIRY
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}