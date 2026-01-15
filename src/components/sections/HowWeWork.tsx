import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HowWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="heading-lg text-navy">How we work with you</h2>
            <p className="text-body text-muted-foreground">
              We believe in a collaborative approach that puts your needs first. Our team of 
              experts works closely with you from initial consultation to final installation, 
              ensuring every detail meets your expectations.
            </p>
            <p className="text-body text-muted-foreground">
              With over 15 years of experience in home services, we've perfected a process 
              that's transparent, efficient, and focused on delivering exceptional results. 
              From design to implementation, we're with you every step of the way.
            </p>
            <div className="pt-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
                alt="Professional kitchen installation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-gold rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
