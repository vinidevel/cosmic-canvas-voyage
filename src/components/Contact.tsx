
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
      <div className="cosmic-container flex flex-col items-center">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="text-gray-300 mb-12 max-w-2xl">
          Pronto para transformar sua visão em realidade? Entre em contato conosco para discutir seu projeto ou agendar uma consulta.
        </p>

        <div className="grid md:grid-cols-1 gap-12">

          <div className="bg-cosmic-blue/5 border border-cosmic-blue/20 rounded-xl p-8">
            {/* <h3 className="text-2xl font-bold text-white mb-12 text-center">Informações de Contato</h3> */}

            <div className="flex flex-wrap gap-6">
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

              {/* <div className="flex items-start gap-4">
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
              </div> */}
            </div>

            <div className="mt-8">
              <h4 className="text-white font-medium mb-4 text-center">Siga-nos</h4>
              <div className="flex gap-4 justify-center">
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
