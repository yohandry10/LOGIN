import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { CheckCircle, TrendingUp, Shield, Activity, Gauge } from 'lucide-react';

// Data for Dielectric Oil Treatment service
const service = {
  title: "Tratamiento de Aceite Dieléctrico",
  description: "Sistema avanzado de termovacío y regeneración que extiende la vida útil de sus equipos.",
  image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80",
  features: [
    "Tratamiento por termovacío en caliente",
    "Regeneración con tierra Fuller",
    "Eliminación de impurezas y humedad",
    "Mejora de propiedades aislantes",
    "Servicio in situ disponible"
  ],
  benefits: [
    { icon: Shield, title: "Protección integral", description: "Elimina humedad y partículas contaminantes" },
    { icon: Activity, title: "Alta rigidez dieléctrica", description: "Aumenta significativamente la resistencia eléctrica" },
    { icon: TrendingUp, title: "Regeneración económica", description: "Alternativa rentable frente al reemplazo" },
    { icon: Gauge, title: "Análisis físico-químico", description: "Seguimiento y control de calidad completo" }
  ]
};

export default function DielectricOilTreatment() {
  return (
    <Parallax
      blur={0}
      bgImage={service.image}
      strength={200}
      className="min-h-[700px] relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-orange-500/20 backdrop-blur-md text-orange-300 rounded-lg text-sm tracking-wider mb-4">
            SERVICIO ESPECIALIZADO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {service.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">{service.description}</p>
            
            <div className="p-6 bg-white/5 backdrop-blur-md rounded-xl mb-8 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <CheckCircle className="mr-2 text-orange-400" /> Características del servicio
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-orange-500/30 btn-shine transition-colors"
            >
              Solicitar este servicio
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                <TrendingUp className="w-5 h-5 text-orange-400" />
              </span>
              Beneficios que obtendrá
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 p-5 rounded-xl backdrop-blur-sm border border-white/10 card-3d"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <benefit.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{benefit.title}</h4>
                      <p className="text-sm text-orange-100/70">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="px-6 py-4 bg-orange-900/30 border border-orange-500/20 rounded-lg backdrop-blur-sm mt-6"
            >
              <div className="flex items-center">
                <div className="p-2 bg-orange-500/30 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-orange-200">Realizamos seguimiento post-tratamiento para asegurar la efectividad y durabilidad del servicio.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Parallax>
  );
} 