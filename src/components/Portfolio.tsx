
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Nebulosa Astral",
    category: "Ilustração 3D",
    description: "Visualização de uma nebulosa cósmica com elementos de design futurista.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    title: "Portais Dimensionais",
    category: "Arte Conceitual",
    description: "Série de portais conectando diferentes dimensões e universos paralelos.",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "Estação Orbital",
    category: "Modelagem 3D",
    description: "Modelagem detalhada de uma estação espacial em órbita terrestre.",
    image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    title: "Mundo Aquático",
    category: "Ambiente 3D",
    description: "Exploração visual de um ecossistema subaquático alienígena.",
    image: "https://images.unsplash.com/photo-1579033385971-a7bc8c5f4b75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 5,
    title: "Civilização Neon",
    category: "Paisagem Digital",
    description: "Paisagem urbana futurista com elementos de neon e tecnologia avançada.",
    image: "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 6,
    title: "Nave Exploradora",
    category: "Design de Produto",
    description: "Conceito de nave espacial para exploração intergaláctica.",
    image: "https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: (typeof portfolioItems)[0]) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 bg-cosmic">
      <div className="cosmic-container">
        <h2 className="section-title">Portfolio</h2>
        <p className="text-gray-300 mb-12 max-w-2xl">
          Explore nossa coleção de trabalhos em ilustração 3D, design conceitual e visualização. 
          Cada projeto representa nossa paixão por criar mundos visuais extraordinários.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item group h-80"
              onClick={() => openModal(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="portfolio-item-overlay">
                <div className="p-4">
                  <span className="text-cosmic-purple-light text-sm font-medium mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-cosmic-blue hover:bg-cosmic-blue-light text-white">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-cosmic border-cosmic-purple/20 max-w-4xl p-0 overflow-hidden">
          {selectedItem && (
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 bg-cosmic/50 p-1 rounded-full"
                >
                  <X className="text-white" size={24} />
                </button>
              </div>
              <div className="p-6 md:w-1/3">
                <span className="text-cosmic-purple-light text-sm font-medium mb-1 block">
                  {selectedItem.category}
                </span>
                <h3 className="text-white text-2xl font-bold mb-4">{selectedItem.title}</h3>
                <p className="text-gray-300 mb-6">{selectedItem.description}</p>
                <Button className="w-full bg-cosmic-purple hover:bg-cosmic-purple-light text-white">
                  Ver Caso Completo
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
