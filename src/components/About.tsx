import { Shield, Users, Wrench, Target } from "lucide-react";

const highlights = [
  {
    icon: Wrench,
    title: "Practical Hands-On Training",
    description: "Real-world machinery operating experience",
  },
  {
    icon: Users,
    title: "Experienced Instructors",
    description: "Professional guidance throughout your training",
  },
  {
    icon: Shield,
    title: "Safety-Focused Training",
    description: "Safety awareness as a core priority",
  },
  {
    icon: Target,
    title: "Career-Focused Development",
    description: "Skills that support your career goals",
  },
];

export function About() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-1 bg-yellow-400 rounded-full" />
              <span className="text-yellow-600 font-semibold tracking-wide uppercase text-sm">
                About Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Professional Machinery Training in{" "}
              <span className="text-yellow-500">Bellville, Cape Town</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              M&J Machines Training Centre provides practical machinery operator
              training in Bellville, Cape Town. Our centre focuses on helping
              individuals develop the knowledge, practical ability, and safety
              awareness required when operating different types of machinery.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100"
                >
                  <div className="bg-yellow-100 p-2 rounded-lg shrink-0">
                    <item.icon className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-2xl opacity-20" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-charcoal rounded-2xl opacity-10" />
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
              alt="Professional machinery training at M&J Machines Training Centre in Bellville"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-charcoal/90 backdrop-blur rounded-xl p-4 text-white">
              <p className="text-3xl font-bold text-yellow-400">10+</p>
              <p className="text-sm text-gray-300">Machinery Training Courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}