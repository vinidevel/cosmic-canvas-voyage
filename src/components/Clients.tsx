
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

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    text: "A Cosmic Ocean transformou nossa visão em algo extraordinário. As imagens 3D criadas para nosso lançamento de produto superaram todas as expectativas.",
    author: "Marina Silva",
    position: "Diretora de Marketing, TechVision",
    rating: 5,
  },
  {
    id: 2,
    text: "Trabalhar com a equipe da Cosmic Ocean foi uma experiência incrível. Sua criatividade e atenção aos detalhes fizeram toda a diferença em nossa campanha publicitária.",
    author: "Carlos Mendes",
    position: "CEO, CreativeStudios",
    rating: 5,
  },
  {
    id: 3,
    text: "As ilustrações desenvolvidas pela Cosmic Ocean ajudaram a elevar nossa marca para um novo patamar. Recomendo fortemente para qualquer empresa que busca excelência visual.",
    author: "Luciana Ferreira",
    position: "Diretora Criativa, MediaForce",
    rating: 4,
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

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">O Que Nossos Clientes Dizem</h3>
          
          <div className="max-w-3xl mx-auto bg-cosmic-blue/5 border border-cosmic-blue/10 rounded-xl p-8 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-cosmic-purple rounded-full p-3">
              <div className="text-white">"</div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-300 italic mb-6">
                {testimonials[currentTestimonial].text}
              </p>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-cosmic-purple-light h-5 w-5 fill-cosmic-purple-light" />
                ))}
              </div>
              
              <div>
                <h4 className="text-white font-bold">
                  {testimonials[currentTestimonial].author}
                </h4>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentTestimonial === index ? "bg-cosmic-purple-light" : "bg-cosmic-blue/30"
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
