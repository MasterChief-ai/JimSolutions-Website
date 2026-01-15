import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Complete kitchen renovation and design consultation",
  "Professional appliance installation and setup",
  "Inverter system installation and maintenance",
  "Custom laundry room solutions",
];

const ServicesDetail = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Beautiful modern kitchen"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gold rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="heading-lg text-navy">Our Services</h2>
            <p className="text-body text-muted-foreground">
              We provide comprehensive home service solutions designed to enhance your 
              living space. Our team of certified professionals brings years of experience 
              and a commitment to excellence in every project we undertake.
            </p>

            {/* Features List */}
            <ul className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="text-navy" size={14} />
                  </div>
                  <span className="text-foreground text-body-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-6">
              <Button variant="navy" size="lg" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
