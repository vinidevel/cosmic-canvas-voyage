
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import ClientsSection from "@/components/Clients";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic">
      <Navbar />
      <Hero />
      <Portfolio />
      <ClientsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
