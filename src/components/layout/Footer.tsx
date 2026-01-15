import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-cream">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
                <span className="font-serif text-navy font-bold text-xl">H</span>
              </div>
              <div>
                <span className="font-serif text-gold text-xl font-semibold tracking-wide">
                  JimSolutions
                </span>
                <span className="block text-cream/60 text-xs tracking-[0.2em] uppercase">
                  Professional Solutions
                </span>
              </div>
            </Link>
            <p className="text-cream/70 text-body-sm leading-relaxed">
              Transforming homes with expert kitchen design, professional laundry installation, 
              and reliable inverter systems. Quality you can trust.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-gold text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300 text-body-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-gold text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Kitchen Design & Installation",
                "Laundry Installation",
                "Inverter Installation",
                "Maintenance & Support",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-cream/70 hover:text-gold transition-colors duration-300 text-body-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-gold text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 shrink-0" />
                <span className="text-cream/70 text-body-sm">
                  123 Anywhere St., Any City, ST 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+11234567890" className="text-cream/70 hover:text-gold transition-colors text-body-sm">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:hello@homeserv.com" className="text-cream/70 hover:text-gold transition-colors text-body-sm">
                  hello@homeserv.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} HomeServ. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-cream/50 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-cream/50 hover:text-gold text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
