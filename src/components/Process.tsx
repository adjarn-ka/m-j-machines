import { MousePointerClick, PhoneCall, GraduationCap, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "CHOOSE YOUR MACHINERY",
    description: "Select the machinery training you are interested in.",
  },
  {
    icon: PhoneCall,
    title: "CONTACT US",
    description: "Speak to M&J Machines Training Centre via WhatsApp or phone.",
  },
  {
    icon: GraduationCap,
    title: "COMPLETE YOUR TRAINING",
    description: "Attend the required training and practical sessions.",
  },
  {
    icon: ClipboardCheck,
    title: "COMPLETE YOUR ASSESSMENT",
    description: "Complete the applicable assessment process.",
  },
];

export function Process() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-1 bg-yellow-400 rounded-full" />
            <span className="text-yellow-600 font-semibold tracking-wide uppercase text-sm">
              Training Process
            </span>
            <span className="w-12 h-1 bg-yellow-400 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with your machinery training is easy.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <span className="text-4xl font-bold text-slate-200">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-bold text-charcoal mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-yellow-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}