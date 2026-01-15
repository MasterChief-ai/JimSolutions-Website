import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-custom">
        <nav className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
              <span className="font-serif text-navy font-bold text-xl">H</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-gold text-xl font-semibold tracking-wide">
                JimSolutions
              </span>
              <span className="block text-cream/80 text-xs tracking-[0.3em] uppercase">
                Professional Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-gold"
                    : "text-cream/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-light border-t border-gold/20"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium py-2 transition-colors ${
                    location.pathname === link.href
                      ? "text-gold"
                      : "text-cream/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="gold" size="lg" className="mt-4" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
