import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Contact = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Thank you! We'll be in touch soon.");
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-navy flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-dark" />
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="heading-xl text-gold mb-6">Contact Us</h1>
            <p className="text-cream/90 text-body max-w-2xl">
              Ready to start your project? Get in touch with our team today. 
              We're here to answer your questions and provide a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl shadow-card p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="text-gold" size={24} />
                  </div>
                  <div>
                    <h2 className="font-serif text-navy text-2xl font-semibold">Send us a Message</h2>
                    <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
                    <h3 className="font-serif text-navy text-2xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12 border-border focus:border-gold focus:ring-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12 border-border focus:border-gold focus:ring-gold"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12 border-border focus:border-gold focus:ring-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-foreground">
                          Service Interest *
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                          required
                        >
                          <SelectTrigger className="h-12 border-border focus:border-gold focus:ring-gold">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kitchen">Kitchen Design & Installation</SelectItem>
                            <SelectItem value="laundry">Laundry Installation</SelectItem>
                            <SelectItem value="inverter">Inverter Installation</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                            <SelectItem value="other">Other / General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border-border focus:border-gold focus:ring-gold resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="xl"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 40 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-navy rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 hero-pattern opacity-20" />
                <div className="relative z-10 space-y-6">
                  <h3 className="font-serif text-gold text-xl font-semibold">Get in Touch</h3>
                  
                  <div className="space-y-5">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                        <MapPin className="text-gold group-hover:text-navy transition-colors" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-cream">Location</p>
                        <p className="text-cream/70 text-sm">123 Anywhere St., Any City, ST 12345</p>
                      </div>
                    </a>
                    
                    <a href="tel:+11234567890" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                        <Phone className="text-gold group-hover:text-navy transition-colors" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-cream">Phone</p>
                        <p className="text-cream/70 text-sm">(123) 456-7890</p>
                      </div>
                    </a>
                    
                    <a href="mailto:hello@homeserv.com" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                        <Mail className="text-gold group-hover:text-navy transition-colors" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-cream">Email</p>
                        <p className="text-cream/70 text-sm">hello@homeserv.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-gold" size={24} />
                  <h3 className="font-serif text-navy text-xl font-semibold">Office Hours</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">Saturday</span>
                    <span className="text-muted-foreground">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <Button variant="navy" size="xl" className="w-full" asChild>
                  <a href="tel:+11234567890">
                    <Phone size={18} /> Call Now
                  </a>
                </Button>
                <Button variant="goldOutline" size="xl" className="w-full" asChild>
                  <a href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={18} /> WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center bg-navy/5">
          <div className="text-center">
            <MapPin className="text-gold mx-auto mb-4" size={48} />
            <p className="text-muted-foreground">Interactive map would be displayed here</p>
            <p className="text-sm text-muted-foreground mt-2">123 Anywhere St., Any City, ST 12345</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
