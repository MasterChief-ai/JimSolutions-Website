import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Diagonal Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-dark" />

      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="heading-xl text-gold mb-8"
          >
            Expert kitchen design, laundry installation, and inverter systems for modern homes.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-cream/90 text-body max-w-2xl mb-10"
          >
            We take pride in transforming your home with quality installations and designs. 
            From dream kitchens to reliable power solutions, we deliver excellence in every project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-cream/10"
          >
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="font-serif text-gold text-3xl md:text-4xl font-semibold">
                  {stat.number}
                </p>
                <p className="text-cream/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block">
        <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-l from-gold/10 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
