import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChefHat, WashingMachine, Zap, Check, ArrowRight, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "kitchen",
    icon: ChefHat,
    title: "Kitchen Design & Installation",
    subtitle: "Transform your culinary space",
    description: "Create the kitchen of your dreams with our comprehensive design and installation services. From modern minimalist to classic elegance, we bring your vision to life with precision and care.",
    features: [
      "Custom cabinet design and installation",
      "Countertop selection and fitting",
      "Appliance integration and setup",
      "Lighting design and installation",
      "Plumbing and electrical upgrades",
      "Complete project management",
    ],
    process: [
      { step: "Consultation", desc: "We discuss your vision, needs, and budget" },
      { step: "Design", desc: "Our team creates detailed 3D renderings" },
      { step: "Approval", desc: "You review and approve the final design" },
      { step: "Installation", desc: "Our experts bring the design to life" },
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "laundry",
    icon: WashingMachine,
    title: "Laundry Installation",
    subtitle: "Efficient and elegant solutions",
    description: "Optimize your laundry space with professional installation services. We ensure your appliances are properly connected, vented, and positioned for maximum efficiency and convenience.",
    features: [
      "Washer and dryer installation",
      "Ventilation system setup",
      "Plumbing connections and upgrades",
      "Electrical hookups",
      "Space optimization solutions",
      "Custom storage solutions",
    ],
    process: [
      { step: "Assessment", desc: "We evaluate your space and requirements" },
      { step: "Planning", desc: "Design optimal layout and connections" },
      { step: "Preparation", desc: "Prepare plumbing and electrical systems" },
      { step: "Installation", desc: "Professional installation and testing" },
    ],
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "inverter",
    icon: Zap,
    title: "Inverter Installation",
    subtitle: "Reliable backup power solutions",
    description: "Never be left in the dark with our professional inverter installation services. We provide comprehensive power backup solutions that keep your home running during outages.",
    features: [
      "System sizing and selection",
      "Battery bank installation",
      "Inverter mounting and wiring",
      "Automatic transfer switch setup",
      "System testing and commissioning",
      "Ongoing maintenance support",
    ],
    process: [
      { step: "Power Audit", desc: "Analyze your power needs and usage" },
      { step: "System Design", desc: "Design optimal backup power solution" },
      { step: "Installation", desc: "Professional installation by certified technicians" },
      { step: "Training", desc: "Teach you how to operate and maintain the system" },
    ],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },
];

const ServiceSection = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      id={service.id}
      className={`section-padding ${index % 2 === 0 ? "bg-cream" : "bg-cream-dark"}`}
    >
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`space-y-6 ${!isEven ? "lg:order-2" : ""}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center">
                <service.icon className="text-navy" size={28} />
              </div>
              <div>
                <p className="text-gold font-medium text-sm uppercase tracking-wider">
                  {service.subtitle}
                </p>
                <h2 className="heading-md text-navy">{service.title}</h2>
              </div>
            </div>

            <p className="text-body text-muted-foreground">{service.description}</p>

            {/* Features */}
            <div className="pt-4">
              <h3 className="font-serif text-navy text-lg font-semibold mb-4">What's Included</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <Check className="text-gold shrink-0 mt-1" size={16} />
                    <span className="text-foreground text-body-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="pt-6">
              <h3 className="font-serif text-navy text-lg font-semibold mb-4">Our Process</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {service.process.map((step, idx) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center mx-auto mb-2 font-semibold">
                      {idx + 1}
                    </div>
                    <p className="font-semibold text-navy text-sm">{step.step}</p>
                    <p className="text-muted-foreground text-xs mt-1">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative ${!isEven ? "lg:order-1" : ""}`}
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elevated">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute -bottom-6 ${isEven ? "-right-6" : "-left-6"} w-full h-full border-2 border-gold rounded-lg -z-10`} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-navy flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-dark" />
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="heading-xl text-gold mb-6">Our Services</h1>
            <p className="text-cream/90 text-body max-w-2xl mb-8">
              Comprehensive home service solutions delivered by certified professionals. 
              From kitchen transformations to reliable power systems, we've got you covered.
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-wrap gap-4">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-cream/10 border border-gold/30 rounded-lg text-cream hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  <service.icon size={18} />
                  <span className="text-sm font-medium">{service.title}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* Why Choose Us Section */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gold mb-4">Why Choose HomeServ?</h2>
            <p className="text-cream/70 text-body max-w-2xl mx-auto">
              We're committed to excellence in every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "15+ Years Experience", desc: "Decades of expertise in home services" },
              { title: "Licensed & Insured", desc: "Fully certified professionals you can trust" },
              { title: "Satisfaction Guaranteed", desc: "We don't rest until you're happy" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-gold fill-gold" size={20} />
                  ))}
                </div>
                <h3 className="font-serif text-gold text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-cream/70 text-body-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8 md:p-16 text-center">
            <h2 className="heading-lg text-navy mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-body max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and quote. Our team is ready to help 
              you transform your home with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Request a Quote <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="navy" size="xl" asChild>
                <a href="tel:+11234567890">Call (123) 456-7890</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
