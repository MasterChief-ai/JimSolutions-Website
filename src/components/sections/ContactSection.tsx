import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="heading-md text-navy">Contact Us</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <p className="font-medium text-navy">Location</p>
                  <p className="text-muted-foreground text-body-sm">
                    123 Anywhere St., Any City, ST 12345
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <p className="font-medium text-navy">Phone</p>
                  <a href="tel:+11234567890" className="text-muted-foreground hover:text-gold transition-colors text-body-sm">
                    (123) 456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-gold" size={20} />
                </div>
                <div>
                  <p className="font-medium text-navy">Email</p>
                  <a href="mailto:hello@homeserv.com" className="text-muted-foreground hover:text-gold transition-colors text-body-sm">
                    hello@homeserv.com
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="heading-md text-navy">Office Hours</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="text-gold" size={20} />
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-navy">Monday - Friday</p>
                    <p className="text-muted-foreground text-body-sm">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-navy">Saturday</p>
                    <p className="text-muted-foreground text-body-sm">9:00 AM - 12:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-navy">Sunday</p>
                    <p className="text-muted-foreground text-body-sm">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="heading-md text-navy">Follow Us Online</h2>
            <p className="text-muted-foreground text-body-sm">
              Stay connected with us on social media for the latest updates, tips, and inspiration for your home projects.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="text-cream" size={22} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="text-cream" size={22} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="text-cream" size={22} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-cream" size={22} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm pt-4">
              We are committed to accessibility and providing equal access to all users.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
