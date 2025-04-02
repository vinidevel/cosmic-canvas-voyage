
import { Rocket, Zap, Star, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-cosmic">
      <div className="cosmic-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Sobre a Cosmic Ocean</h2>
            <p className="text-gray-300 mb-6">
              Somos um estúdio criativo especializado em produção de imagens 3D e ilustrações de alta qualidade para empresas, agências de publicidade e projetos audiovisuais.
            </p>
            <p className="text-gray-300 mb-6">
              Fundada em 2015, a Cosmic Ocean nasceu da paixão por criar mundos visuais extraordinários que transcendem o comum. O nome da nossa empresa reflete nossa filosofia: assim como o cosmos representa infinitas possibilidades, mergulhamos em um oceano de criatividade para trazer à vida visões inovadoras.
            </p>
            <p className="text-gray-300">
              Nossa equipe é formada por artistas, designers e especialistas 3D apaixonados por explorar novas fronteiras visuais e ultrapassar os limites da imaginação. Combinamos técnicas avançadas com uma abordagem centrada no cliente para entregar resultados que não apenas atendem, mas superam expectativas.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-cosmic-blue/10 border border-cosmic-blue/20 rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
                <Rocket className="text-cosmic-purple-light mb-4 h-8 w-8" />
                <h3 className="text-white text-xl font-bold mb-2">Inovação</h3>
                <p className="text-gray-400">
                  Exploramos constantemente novas técnicas e abordagens para criar visuais de ponta.
                </p>
              </div>
              
              <div className="bg-cosmic-blue/10 border border-cosmic-blue/20 rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
                <Zap className="text-cosmic-purple-light mb-4 h-8 w-8" />
                <h3 className="text-white text-xl font-bold mb-2">Qualidade</h3>
                <p className="text-gray-400">
                  Comprometimento com a excelência em cada pixel e detalhe das nossas criações.
                </p>
              </div>
              
              <div className="bg-cosmic-blue/10 border border-cosmic-blue/20 rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
                <Star className="text-cosmic-purple-light mb-4 h-8 w-8" />
                <h3 className="text-white text-xl font-bold mb-2">Criatividade</h3>
                <p className="text-gray-400">
                  Ideias originais que transformam conceitos em experiências visuais memoráveis.
                </p>
              </div>
              
              <div className="bg-cosmic-blue/10 border border-cosmic-blue/20 rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
                <Users className="text-cosmic-purple-light mb-4 h-8 w-8" />
                <h3 className="text-white text-xl font-bold mb-2">Colaboração</h3>
                <p className="text-gray-400">
                  Trabalhamos em estreita parceria com nossos clientes em cada etapa do processo.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-cosmic-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-cosmic-blue/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Nosso Processo Criativo</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Descoberta",
                description: "Compreendemos sua visão, objetivos e necessidades específicas."
              },
              {
                step: "02",
                title: "Conceituação",
                description: "Desenvolvemos conceitos e direções visuais para seu projeto."
              },
              {
                step: "03",
                title: "Criação",
                description: "Transformamos conceitos aprovados em visuais impressionantes."
              },
              {
                step: "04",
                title: "Refinamento",
                description: "Aperfeiçoamos cada detalhe até atingir a perfeição visual."
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-block mb-4 bg-cosmic-blue/10 border border-cosmic-blue/20 rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="text-cosmic-purple-light text-xl font-bold">{item.step}</span>
                </div>
                
                <h4 className="text-white text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cosmic-purple/50 to-cosmic-blue/50 -z-10 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
