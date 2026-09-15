import { Button } from "@/components/ui/button";
import { Clock, Phone } from "lucide-react";

const courses = [
  {
    name: "FORKLIFT",
    description: "Practical training focused on safe and responsible forklift operation.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    duration: "5 Days",
    price: "R2,500",
  },
  {
    name: "REACH TRUCK",
    description: "Develop the skills required to operate reach truck equipment safely.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    duration: "5 Days",
    price: "R2,500",
  },
  {
    name: "ROLLER",
    description: "Practical training for roller machinery operation.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    duration: "3 Days",
    price: "R2,000",
  },
  {
    name: "TLB",
    description: "Training focused on the safe operation of TLB equipment.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    duration: "5 Days",
    price: "R3,000",
  },
  {
    name: "FRONT-END LOADER",
    description: "Develop practical operating skills for front-end loader machinery.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    duration: "5 Days",
    price: "R3,000",
  },
  {
    name: "EXCAVATOR",
    description: "Practical excavator operator training with an emphasis on safe operation.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    duration: "5 Days",
    price: "R3,500",
  },
  {
    name: "GRADER",
    description: "Training for individuals looking to develop grader operating skills.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    duration: "5 Days",
    price: "R3,500",
  },
  {
    name: "DUMP TRUCK",
    description: "Develop practical skills for dump truck operation.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    duration: "3 Days",
    price: "R2,500",
  },
  {
    name: "MOBILE CRANE",
    description: "Machinery training focused on safe mobile crane operation.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    duration: "5 Days",
    price: "R4,000",
  },
  {
    name: "TOWER CRANE",
    description: "Training focused on tower crane operating skills and workplace safety.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    duration: "5 Days",
    price: "R4,500",
  },
];

export function Training() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-1 bg-yellow-400 rounded-full" />
            <span className="text-yellow-600 font-semibold tracking-wide uppercase text-sm">
              Our Training
            </span>
            <span className="w-12 h-1 bg-yellow-400 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Machinery Training Programmes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of professional machinery training courses in
            Bellville, Cape Town.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={`${course.name} training at M&J Machines Training Centre Cape Town`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    {course.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="text-sm font-semibold text-charcoal">
                    {course.price}
                  </div>
                </div>
                <Button className="w-full bg-charcoal hover:bg-yellow-500 hover:text-charcoal transition-colors">
                  <Phone className="mr-2 h-4 w-4" />
                  ENQUIRE NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}