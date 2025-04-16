import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ServiceDetails from './components/ServiceDetails';
import Equipment from './components/Equipment';
import Footer from './components/Footer';
import Laboratory from './components/Laboratory';
import DielectricOilTreatment from './components/DielectricOilTreatment';
import TripolarSwitches from './components/TripolarSwitches';
import MetalManufacturing from './components/MetalManufacturing';
import OilWorkshopTreatment from './components/OilWorkshopTreatment';
import FieldThermovacTreatment from './components/FieldThermovacTreatment';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular tiempo de carga con progreso real
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Preloader futurista */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          >
            <div className="relative w-full max-w-2xl h-96 flex flex-col items-center justify-center">
              {/* Campo de energía eléctrica */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="electric-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <linearGradient id="electric-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                  
                  {/* Líneas de energía dinámicas */}
                  {[...Array(15)].map((_, i) => (
                    <motion.path
                      key={i}
                      d={`M${Math.random() * 100}% ${Math.random() * 100}% L${Math.random() * 100}% ${Math.random() * 100}%`}
                      stroke="url(#electric-gradient)"
                      strokeWidth={0.5 + Math.random()}
                      strokeLinecap="round"
                      filter="url(#electric-glow)"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ 
                        opacity: [0, 0.8, 0],
                        pathLength: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5 + Math.random(),
                        repeat: Infinity,
                        repeatDelay: Math.random() * 2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </svg>
              </div>

              {/* Logo con efecto de energía */}
              <motion.div
                className="relative z-10 mb-12"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  scale: [0.9, 1.05, 1],
                  opacity: 1,
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  ease: "backOut"
                }}
              >
                <img 
                  src="/logintec.png" 
                  alt="LOGINTEC SAC" 
                  className="h-28 w-auto mx-auto filter drop-shadow-xl"
                />
                
                {/* Aura energética */}
                <motion.div 
                  className="absolute inset-0 -z-10 rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: [0.8, 1.5],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <div className="h-full w-full bg-gradient-to-r from-blue-500/20 to-emerald-400/20 rounded-full" />
                </motion.div>
                
                {/* Destellos eléctricos */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute -z-20"
                    initial={{ 
                      x: 0,
                      y: 0,
                      opacity: 0
                    }}
                    animate={{
                      x: Math.cos(i * 45 * Math.PI/180) * 40,
                      y: Math.sin(i * 45 * Math.PI/180) * 40,
                      opacity: [0, 0.8, 0],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 5
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" 
                        fill="url(#electric-gradient)"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </motion.div>
                ))}
              </motion.div>

              {/* Barra de progreso holográfica */}
              <div className="w-80 h-3 bg-gray-200 rounded-full overflow-hidden relative z-10 mb-8">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 via-emerald-400 to-yellow-400 relative overflow-hidden"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "linear" }}
                >
                  {/* Efecto de escaneo */}
                  <motion.div
                    className="absolute right-0 top-0 h-full w-2 bg-white/80"
                    initial={{ x: -100 }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
                
                {/* Marcas de voltaje */}
                <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                  {[0, 25, 50, 75, 100].map((pos) => (
                    <div 
                      key={pos}
                      className="h-3 w-px bg-white/50 relative"
                      style={{ left: `${pos}%` }}
                    >
                      <motion.span 
                        className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-mono text-gray-600"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ 
                          opacity: progress >= pos ? 1 : 0,
                          y: progress >= pos ? 0 : -10
                        }}
                        transition={{ delay: pos * 0.02 }}
                      >
                        {pos}V
                      </motion.span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Texto con efecto de terminal */}
              <motion.div 
                className="relative z-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.h3 
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 mb-2"
                >
                  INICIALIZANDO SISTEMA
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 font-mono text-sm flex justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.span
                    className="inline-block mr-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ▊
                  </motion.span>
                  CARGANDO MÓDULOS DE ENERGÍA {Math.round(progress)}%
                </motion.p>
              </motion.div>

              {/* Efecto de partículas */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: `${2 + Math.random() * 4}px`,
                      height: `${2 + Math.random() * 4}px`,
                      background: `hsl(${Math.random() * 60 + 200}, 80%, 60%)`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      y: [-20, Math.random() * 100 - 50],
                      x: [0, Math.random() * 40 - 20]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <ServiceDetails />
        <DielectricOilTreatment />
        <OilWorkshopTreatment />
        <FieldThermovacTreatment />
        <Equipment />
        <TripolarSwitches />
        <MetalManufacturing />
        <Laboratory />
        <Footer />
      </main>
    </>
  );
}

export default App;