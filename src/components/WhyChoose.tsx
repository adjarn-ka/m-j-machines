import { Wrench, Shield, Users, TrendingUp, Truck, MapPin } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "PRACTICAL TRAINING",
    description: "Focus on developing real-world machinery operating skills.",
  },
  {
    icon: Shield,
    title: "SAFETY FIRST",
    description: "Learn responsible machinery operation with safety as a priority.",
  },
  {
    icon: Users,
    title: "EXPERIENCED TRAINING",
    description: "Receive guidance in a structured and professional training environment.",
  },
  {
    icon: TrendingUp,
    title: "CAREER DEVELOPMENT",
    description: "Develop valuable machinery operating skills for your career goals.",
  },
  {
    icon: Truck,
    title: "RANGE OF MACHINERY",
    description: "Training available across a wide selection of construction and industrial machinery.",
  },
  {
    icon: MapPin,
    title: "BELLVILLE LOCATION",
    description: "Conveniently located at 23 Vrede Street, Bellville, Cape Town.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-1 bg-yellow-400 rounded-full" />
            <span className="text-yellow-400 font-semibold tracking-wide uppercase text-sm">
              Why Choose Us
            </span>
            <span className="w-12 h-1 bg-yellow-400 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose M&J Machines?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional machinery training with a focus on safety, quality, and
            career development.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="bg-yellow-400 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-charcoal" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}