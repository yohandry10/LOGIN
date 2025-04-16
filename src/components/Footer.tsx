import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden pt-20 pb-10">
      {/* Main content container with distinct background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-gray-800 p-10 rounded-lg shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src="/logintec.png" 
              alt="LOGINTEC" 
              className="h-28 w-auto mb-6 bg-white p-2 rounded"
            />
            <p className="text-gray-300 mb-6">
              Soluciones eléctricas profesionales con más de 15 años de experiencia en el sector industrial y comercial.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-[2px] bg-blue-500 transition-all duration-300"></span>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-white transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#laboratorio" className="text-gray-400 hover:text-white transition-colors">Laboratorio</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
          
          {/* Servicios */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-[2px] bg-orange-500 inline-block"></span>
              Servicios
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Mantenimiento de Transformadores</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Análisis de Aceites</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Montajes Electromecánicos</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Pruebas Eléctricas</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Termografía</a>
              </li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
              Contáctanos
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white font-semibold">Teléfono</p>
                  <p className="text-gray-400">(01) 5403076</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400">contacto@logintec.com.pe</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white font-semibold">Dirección</p>
                  <p className="text-gray-400">Lima, Perú</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="border-t border-gray-700 my-10"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} LOGINTEC. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
      
      {/* Certificaciones - Outside the inner container, directly on dark background */}
      <div className="bg-gray-950 py-6 relative z-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">Empresa certificada en estándares de calidad</p>
            <div className="flex items-center space-x-8">
              <img src="https://via.placeholder.com/80x30?text=ISO9001" alt="ISO 9001" className="h-8 opacity-70" />
              <img src="https://via.placeholder.com/80x30?text=ISO14001" alt="ISO 14001" className="h-8 opacity-70" />
              <img src="https://via.placeholder.com/80x30?text=OHSAS18001" alt="OHSAS 18001" className="h-8 opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 