
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, ChevronDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create stars dynamically
    if (heroRef.current) {
      const heroSection = heroRef.current;
      const heroWidth = heroSection.offsetWidth;
      const heroHeight = heroSection.offsetHeight;
      
      // Clear any existing stars
      const existingStars = heroSection.querySelectorAll('.star');
      existingStars.forEach(star => star.remove());
      
      // Create new stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random positions
        const size = Math.random() * 3 + 1; // 1-4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * heroWidth}px`;
        star.style.top = `${Math.random() * heroHeight}px`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        heroSection.appendChild(star);
      }
    }
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen bg-cosmic-gradient flex items-center overflow-hidden"
    >
      {/* Dynamic orb/planet */}
      <div className="absolute -right-40 top-1/4 w-96 h-96 rounded-full bg-cosmic-blue/20 blur-3xl animate-pulse-cosmic"></div>
      <div className="absolute -left-24 bottom-1/4 w-64 h-64 rounded-full bg-cosmic-purple/20 blur-3xl animate-pulse-cosmic" style={{ animationDelay: '2s' }}></div>
      
      <div className="cosmic-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Navegue pelo <span className="bg-clip-text text-transparent bg-cosmic-highlight">Universo Criativo</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transformamos ideias em experiências visuais extraordinárias com ilustrações e imagens 3D de alto impacto para sua marca brilhar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-cosmic-purple hover:bg-cosmic-purple-light text-white px-6 py-6 text-lg flex items-center gap-2"
              onClick={scrollToPortfolio}
            >
              Ver Portfolio <Rocket className="ml-1" size={18} />
            </Button>
            <Button variant="outline" className="border-cosmic-purple-light text-cosmic-purple-light hover:bg-cosmic-purple/10 px-6 py-6 text-lg">
              Contato
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white animate-float"
      >
        <ChevronDown size={36} />
      </button>
    </div>
  );
};

export default Hero;
