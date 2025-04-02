
import { Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cosmic py-12 border-t border-cosmic-purple/10">
      <div className="cosmic-container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Star className="text-cosmic-purple-light h-6 w-6" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-cosmic-highlight">
                Cosmic Ocean
              </span>
            </a>
            <p className="text-gray-400 mb-6">
              Transformando ideias em experiências visuais extraordinárias desde 2015.
            </p>
            <div className="flex gap-4">
              {['instagram', 'behance', 'linkedin', 'youtube'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="bg-cosmic-blue/10 hover:bg-cosmic-purple/20 border border-cosmic-blue/20 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <img src={`https://via.placeholder.com/16?text=${social}`} alt={social} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {['Ilustração 3D', 'Modelagem 3D', 'Design Conceitual', 'Animação', 'Efeitos Visuais'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-cosmic-purple-light transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {['Sobre Nós', 'Portfolio', 'Clientes', 'Carreiras', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cosmic-purple-light transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                contato@cosmicocean.com
              </li>
              <li className="text-gray-400">
                +55 (11) 4567-8901
              </li>
              <li className="text-gray-400">
                Avenida Paulista, 1000<br />
                São Paulo - SP, Brasil
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cosmic-purple/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Cosmic Ocean. Todos os direitos reservados.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {['Termos de Uso', 'Política de Privacidade', 'Cookies'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-500 text-sm hover:text-cosmic-purple-light transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
