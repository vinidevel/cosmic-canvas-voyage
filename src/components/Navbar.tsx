
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Star, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cosmic/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="cosmic-container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
        
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-cosmic-highlight">
            Cosmic Ocean
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <a href="#portfolio" className="nav-link">
            Projetos
          </a>
          <a href="#clients" className="nav-link">
            Clientes
          </a>
          <a href="#about" className="nav-link">
            Sobre
          </a>
          <a href="#contact" className="nav-link">
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-cosmic/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[300px] border-b border-cosmic-purple/20" : "max-h-0"
        }`}
      >
        <nav className="cosmic-container flex flex-col py-4 space-y-4">
          <a
            href="#portfolio"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#clients"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Clientes
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
