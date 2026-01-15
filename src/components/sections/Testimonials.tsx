import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hannah Morales",
    role: "Homeowner",
    content:
      "The kitchen renovation exceeded all my expectations. The team was professional, punctual, and the attention to detail was remarkable. I couldn't be happier with the results!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Carlos Okello",
    role: "Property Developer",
    content:
      "We've used HomeServ for multiple projects. Their inverter installations are top-notch, and the backup power systems have been flawless. Highly recommended for any home service needs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Patricia Williams",
    role: "Interior Designer",
    content:
      "As an interior designer, I only work with the best. HomeServ consistently delivers exceptional quality. Their laundry room installations are both functional and beautifully designed.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-navy relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern opacity-30" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gold mb-4">Feedback from Clients</h2>
          <p className="text-cream/70 text-body max-w-2xl mx-auto">
            Why you should hire our firm
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="gold-border-card rounded-lg p-8 relative"
            >
              <Quote className="text-gold/30 absolute top-6 right-6" size={40} />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <h4 className="font-serif text-gold font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-cream/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-cream/80 text-body-sm leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
