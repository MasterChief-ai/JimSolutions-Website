import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Clock, Shield } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every project, ensuring the highest quality standards.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your satisfaction is our priority. We listen, adapt, and deliver beyond expectations.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "On-time delivery and transparent communication throughout every project phase.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest pricing, ethical practices, and a commitment to doing what's right.",
  },
];

const About = () => {
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

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
            <h1 className="heading-xl text-gold mb-6">About Us</h1>
            <p className="text-cream/90 text-body max-w-2xl">
              Discover the story behind JimSolutions and our commitment to transforming homes 
              with exceptional service and unmatched expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="heading-lg text-navy">Built on Passion, Driven by Excellence</h2>
              <p className="text-body text-muted-foreground">
                Founded in 2008, HomeServ began with a simple mission: to provide homeowners with 
                reliable, high-quality home services they could trust. What started as a small team 
                of dedicated professionals has grown into a leading home services company serving 
                thousands of satisfied clients.
              </p>
              <p className="text-body text-muted-foreground">
                Our founder, Michael Chen, recognized a gap in the market for comprehensive home 
                services delivered with integrity and expertise. Drawing on his background in 
                electrical engineering and a passion for beautiful design, he assembled a team of 
                like-minded professionals who shared his vision.
              </p>
              <p className="text-body text-muted-foreground">
                Today, we continue to uphold those founding principles, combining traditional 
                craftsmanship with modern technology to deliver exceptional results for every project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                  alt="Our team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-gold rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="gold-border-card rounded-lg p-8 md:p-12"
            >
              <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mb-6">
                <Target className="text-navy" size={28} />
              </div>
              <h3 className="heading-md text-gold mb-4">Our Mission</h3>
              <p className="text-cream/80 text-body">
                To transform homes through exceptional craftsmanship, innovative solutions, and 
                unwavering commitment to customer satisfaction. We aim to make professional home 
                services accessible, reliable, and delivered with the highest standards of quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="gold-border-card rounded-lg p-8 md:p-12"
            >
              <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-navy" size={28} />
              </div>
              <h3 className="heading-md text-gold mb-4">Our Vision</h3>
              <p className="text-cream/80 text-body">
                To be the most trusted name in home services, recognized for our expertise, integrity, 
                and the lasting relationships we build with our clients. We envision a future where 
                every home reflects the perfect balance of functionality and beauty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="section-padding bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold font-medium uppercase tracking-wider text-sm">What Drives Us</span>
            <h2 className="heading-lg text-navy mt-4">Our Core Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-serif text-navy text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-body-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <div className="bg-navy rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 hero-pattern opacity-20" />
            <div className="relative z-10">
              <h2 className="heading-lg text-gold mb-6">Ready to Transform Your Home?</h2>
              <p className="text-cream/80 text-body max-w-2xl mx-auto mb-8">
                Contact us today for a free consultation. Let's discuss how we can bring your 
                vision to life with our expert services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="goldOutline" size="xl" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
