import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { scrollY } = useScroll();
  
  // El fondo ahora es blanco desde el inicio
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 1)']
  );
  
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 2px 10px -1px rgba(0, 0, 0, 0.05)', '0 4px 15px -1px rgba(0, 0, 0, 0.1)']
  );

  // Controlador de sección activa basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'servicios', 'contacto'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ background, boxShadow }}
      className="fixed w-full z-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-24 w-auto"
              src="/logintec.png"
              alt="LOGINTEC"
            />
          </div>
          <div className="hidden md:flex items-center justify-between space-x-4">
            <div className="ml-10 flex items-baseline space-x-2">
              <NavLink href="#inicio" isActive={activeSection === 'inicio'}>Inicio</NavLink>
              <NavLink href="#nosotros" isActive={activeSection === 'nosotros'}>Nosotros</NavLink>
              <NavLink href="#servicios" isActive={activeSection === 'servicios'}>Servicios</NavLink>
              <NavLink href="#contacto" isActive={activeSection === 'contacto'}>Contacto</NavLink>
            </div>
            <motion.a 
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white ml-8 py-2.5 px-6 rounded-lg flex items-center space-x-2 shadow-md transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span className="font-medium">Solicitar Servicio</span>
            </motion.a>
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden bg-white border-t border-gray-100"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="#inicio" isActive={activeSection === 'inicio'}>Inicio</MobileNavLink>
          <MobileNavLink href="#nosotros" isActive={activeSection === 'nosotros'}>Nosotros</MobileNavLink>
          <MobileNavLink href="#servicios" isActive={activeSection === 'servicios'}>Servicios</MobileNavLink>
          <MobileNavLink href="#contacto" isActive={activeSection === 'contacto'}>Contacto</MobileNavLink>
          
          <motion.a
            href="#contacto"
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: -10 }
            }}
            className="bg-blue-600 text-white hover:bg-blue-700 block w-full text-center px-3 py-3 mt-4 rounded-lg font-medium transition-colors"
          >
            Solicitar Servicio
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
}

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-lg text-sm font-bold uppercase transition-all duration-300 relative
      ${isActive 
        ? 'text-blue-600' 
        : 'text-gray-800 hover:text-blue-600'
      }
    `}
  >
    {children}
    {isActive && (
      <motion.div 
        layoutId="activeIndicator"
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </a>
);

const MobileNavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <motion.a
    href={href}
    variants={{
      open: { opacity: 1, y: 0 },
      closed: { opacity: 0, y: -10 }
    }}
    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
      ${isActive
        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
        : 'text-gray-800 hover:text-blue-600 hover:bg-gray-50 border-l-4 border-transparent'
      }
    `}
  >
    {children}
  </motion.a>
);