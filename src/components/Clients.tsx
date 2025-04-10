
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from 'lucide-react';

// Sample clients data
const clientLogos = [
  {
    id: 1,
    name: "TechVision",
    logo: "https://via.placeholder.com/150x80?text=TechVision",
    category: "tecnologia"
  },
  {
    id: 2,
    name: "CreativeStudios",
    logo: "https://via.placeholder.com/150x80?text=CreativeStudios",
    category: "entretenimento"
  },
  {
    id: 3,
    name: "MediaForce",
    logo: "https://via.placeholder.com/150x80?text=MediaForce",
    category: "midia"
  },
  {
    id: 4,
    name: "GlobalBrands",
    logo: "https://via.placeholder.com/150x80?text=GlobalBrands",
    category: "tecnologia"
  },
  {
    id: 5,
    name: "VisualArts",
    logo: "https://via.placeholder.com/150x80?text=VisualArts",
    category: "entretenimento"
  },
  {
    id: 6,
    name: "StudioPro",
    logo: "https://via.placeholder.com/150x80?text=StudioPro",
    category: "midia"
  },
  {
    id: 7,
    name: "DesignWorks",
    logo: "https://via.placeholder.com/150x80?text=DesignWorks",
    category: "design"
  },
  {
    id: 8,
    name: "DigitalCore",
    logo: "https://via.placeholder.com/150x80?text=DigitalCore",
    category: "tecnologia"
  },
];

const ClientsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-cosmic to-cosmic-blue/30">
      <div className="cosmic-container">
        <h2 className="section-title">Nossos Clientes</h2>
        <p className="text-gray-300 mb-12 max-w-2xl">
          Temos orgulho de colaborar com marcas inovadoras e criativas que confiam em nossa expertise para dar vida às suas visões.
        </p>

        <Tabs defaultValue="todos" className="mb-16">
          <TabsList className="bg-cosmic-blue/10 border border-cosmic-blue/20">
            <TabsTrigger value="todos" className="data-[state=active]:bg-cosmic-blue/20">Todos</TabsTrigger>
            <TabsTrigger value="tecnologia" className="data-[state=active]:bg-cosmic-blue/20">Tecnologia</TabsTrigger>
            <TabsTrigger value="entretenimento" className="data-[state=active]:bg-cosmic-blue/20">Entretenimento</TabsTrigger>
            <TabsTrigger value="midia" className="data-[state=active]:bg-cosmic-blue/20">Mídia</TabsTrigger>
            <TabsTrigger value="design" className="data-[state=active]:bg-cosmic-blue/20">Design</TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clientLogos.map((client) => (
                <div key={client.id} className="bg-cosmic-blue/5 border border-cosmic-blue/10 rounded-lg p-4 flex items-center justify-center h-32">
                  <img src={client.logo} alt={client.name} className="client-logo max-h-16" />
                </div>
              ))}
            </div>
          </TabsContent>

          {['tecnologia', 'entretenimento', 'midia', 'design'].map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {clientLogos
                  .filter((client) => client.category === category)
                  .map((client) => (
                    <div key={client.id} className="bg-cosmic-blue/5 border border-cosmic-blue/10 rounded-lg p-4 flex items-center justify-center h-32">
                      <img src={client.logo} alt={client.name} className="client-logo max-h-16" />
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ClientsSection;
