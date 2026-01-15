import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChefHat, WashingMachine, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: ChefHat,
    title: "Kitchen Design and Installation",
    description:
      "Transform your kitchen into a beautiful, functional space with our expert design and professional installation services. From custom cabinetry to modern appliances, we handle every detail.",
  },
  {
    icon: WashingMachine,
    title: "Laundry Installation",
    description:
      "Professional laundry room solutions tailored to your space and needs. We install washers, dryers, and complete laundry systems with precision and care.",
  },
  {
    icon: Zap,
    title: "Inverter Installation",
    description:
      "Reliable power backup solutions for your home. Our certified technicians install and maintain inverter systems to keep your home running smoothly during outages.",
  },
];

const ServicesCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-navy mb-4">Our Main Services</h2>
          <p className="text-muted-foreground text-body max-w-2xl mx-auto">
            Comprehensive home solutions delivered with expertise and care
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <Link to="/services">
                <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 h-full transition-all duration-300 hover:bg-gold/20 hover:shadow-card hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-navy" size={28} />
                  </div>
                  <h3 className="font-serif text-navy text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-body-sm mb-6">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
