import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import SplitType from 'split-type';

// Imágenes del slider
const sliderImages = [
  "https://images.pexels.com/photos/17018102/pexels-photo-17018102/free-photo-of-trabajando-hombres-tecnologia-lineas.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1544947/pexels-photo-1544947.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2781760/pexels-photo-2781760.jpeg?auto=compress&cs=tinysrgb&w=1600"
];

// Textos para cada slide
const sliderContent = [
  {
    title: "Servicio de reparación y mantenimiento de motores eléctricos",
    subtitle: "Especialistas en montajes electromecánicos industriales con más de 15 años de experiencia"
  },
  {
    title: "Mantenimiento de transformadores industriales",
    subtitle: "Soluciones eléctricas confiables para su empresa"
  },
  {
    title: "Instalaciones eléctricas industriales",
    subtitle: "Proyectos de ingeniería adaptados a sus necesidades específicas"
  },
  {
    title: "Servicio técnico especializado",
    subtitle: "Atención rápida y eficiente en todo momento"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.5]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const titleRef = useRef(null);
  const intervalRef = useRef<number | null>(null);

  // Animación de texto
  useEffect(() => {
    if (titleRef.current) {
      const text = new SplitType(titleRef.current, { types: 'chars' });
      const chars = text.chars;
      
      chars?.forEach((char, i) => {
        if (char) {
          char.style.animation = `fadeIn 0.5s ${i * 0.05}s forwards`;
        }
      });
    }
  }, [currentSlide]);

  // Autoplay del slider
  useEffect(() => {
    if (isAutoplay) {
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 6000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoplay]);

  // Pausa el autoplay cuando el usuario interactúa con los controles
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
    
    // Reinicia el autoplay después de 15 segundos de inactividad
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setTimeout(() => {
      setIsAutoplay(true);
    }, 15000);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="relative overflow-hidden min-h-[90vh]">
      {/* Background Slider con Parallax */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div 
            style={{ 
              backgroundImage: `url(${sliderImages[currentSlide]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
              y,
              scale,
            }}
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Iconos eléctricos organizados como elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          className="absolute top-[20%] left-[15%] z-10"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="text-yellow-400 opacity-70"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-[45%] right-[20%] z-10"
        >
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="text-yellow-400 opacity-70"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-[25%] left-[25%] z-10"
        >
          <motion.div
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="text-blue-400 opacity-70"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 13V7M16 15V9M8 11v4M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Líneas técnicas flotantes */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="0" y1="50%" x2="100%" y2="30%"
          stroke="white"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="0" y1="70%" x2="100%" y2="75%"
          stroke="white"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="20%" y1="0" x2="40%" y2="100%"
          stroke="white"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="80%" y1="0" x2="60%" y2="100%"
          stroke="white"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="max-w-3xl text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-bold mb-8 opacity-0 tracking-tighter"
                    style={{ animation: 'none' }}
                  >
                    {sliderContent[currentSlide].title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
                    {sliderContent[currentSlide].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              <motion.div
                className="flex flex-wrap gap-4 mt-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.05, backgroundColor: "#1E40AF" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-blue-700/30 btn-shine"
                >
                  Solicitar Servicio
                </motion.a>
                <motion.a
                  href="#servicios"
                  whileHover={{ scale: 1.05, backgroundColor: "#F97316" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-orange-700/30 btn-shine"
                >
                  Explorar Servicios
                </motion.a>
              </motion.div>
              
              {/* Stats Strip */}
              <motion.div 
                className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-1"
                  >
                    15+
                  </motion.div>
                  <p className="text-sm text-gray-300">Años de experiencia</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-1"
                  >
                    100%
                  </motion.div>
                  <p className="text-sm text-gray-300">Satisfacción cliente</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.9, duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-1"
                  >
                    24/7
                  </motion.div>
                  <p className="text-sm text-gray-300">Servicio técnico</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Controles del slider */}
        <div className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                ? 'bg-white w-10' 
                : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Flechas de navegación */}
        <button 
          onClick={prevSlide}
          className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full p-3 text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full p-3 text-white transition-all duration-300"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicador de desplazamiento */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 right-8 z-20"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 bg-white rounded-full"
            />
          </div>
          <p className="text-white text-xs mt-2">Scroll</p>
        </motion.div>
      </div>

      {/* Overlay radial de abajo para transición suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
    </div>
  );
}