
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada!",
        description: "Agradecemos seu contato. Responderemos em breve.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-cosmic to-cosmic-blue/30">
      <div className="cosmic-container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="text-gray-300 mb-12 max-w-2xl">
          Pronto para transformar sua visão em realidade? Entre em contato conosco para discutir seu projeto ou agendar uma consulta.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Nome</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-cosmic-blue/10 border-cosmic-blue/20 text-white placeholder:text-gray-500"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-cosmic-blue/10 border-cosmic-blue/20 text-white placeholder:text-gray-500"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-white mb-2">Empresa</label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-cosmic-blue/10 border-cosmic-blue/20 text-white placeholder:text-gray-500"
                  placeholder="Nome da sua empresa"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Mensagem</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-cosmic-blue/10 border-cosmic-blue/20 text-white placeholder:text-gray-500 min-h-32"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-cosmic-purple hover:bg-cosmic-purple-light text-white flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Enviando...' : (
                  <>
                    Enviar Mensagem <Send size={16} />
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div className="bg-cosmic-blue/5 border border-cosmic-blue/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-cosmic-purple/20 p-3 rounded-full">
                  <Mail className="text-cosmic-purple-light h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-300">contato@cosmicocean.com</p>
                  <p className="text-gray-300">negocios@cosmicocean.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-cosmic-purple/20 p-3 rounded-full">
                  <Phone className="text-cosmic-purple-light h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Telefone</h4>
                  <p className="text-gray-300">+55 (11) 4567-8901</p>
                  <p className="text-gray-300">+55 (11) 9876-5432</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-cosmic-purple/20 p-3 rounded-full">
                  <MapPin className="text-cosmic-purple-light h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Endereço</h4>
                  <p className="text-gray-300">
                    Avenida Paulista, 1000<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01310-100
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                {['instagram', 'behance', 'linkedin', 'youtube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="bg-cosmic-blue/10 hover:bg-cosmic-purple/20 border border-cosmic-blue/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <img src={`https://via.placeholder.com/20?text=${social}`} alt={social} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
