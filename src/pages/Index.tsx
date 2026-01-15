import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import HowWeWork from "@/components/sections/HowWeWork";
import Testimonials from "@/components/sections/Testimonials";
import ServicesCards from "@/components/sections/ServicesOverview";
import ServicesDetail from "@/components/sections/ServicesDetail";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowWeWork />
        <Testimonials />
        <ServicesCards />
        <ServicesDetail />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
