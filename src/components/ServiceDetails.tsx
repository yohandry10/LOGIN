import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Shield, Activity, Gauge } from 'lucide-react';

const service = {
  title: "Mantenimiento de Transformadores",
  description: "Servicio especializado que garantiza el óptimo funcionamiento y longevidad de sus transformadores.",
  features: [
    "Mantenimiento integral preventivo y correctivo",
    "Cambio de aceite y regeneración",
    "Pruebas eléctricas completas",
    "Montaje y puesta en servicio",
    "Diagnóstico y monitoreo continuo"
  ],
  benefits: [
    { icon: Shield, title: "Extiende la vida útil", description: "Incrementa hasta 10 años la durabilidad de sus equipos" },
    { icon: Activity, title: "Aumenta eficiencia", description: "Mejora el rendimiento y reduce pérdidas eléctricas" },
    { icon: TrendingUp, title: "Previene fallas", description: "Reduce drásticamente las paradas no programadas" },
    { icon: Gauge, title: "Datos en tiempo real", description: "Monitoreo constante de parámetros críticos" }
  ]
};

export default function ServiceDetails() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm tracking-wider mb-4">
            SERVICIO ESPECIALIZADO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {service.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">{service.description}</p>
            
            <div className="p-6 bg-gray-50 rounded-xl mb-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="mr-2 text-blue-600" /> Características del servicio
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
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-blue-500/30 btn-shine transition-colors"
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
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <TrendingUp className="w-5 h-5 text-blue-600" />
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
                  whileHover={{ y: -5, boxShadow: "0 8px 20px -8px rgba(0, 0, 0, 0.1)", transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm card-3d"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
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
              className="px-6 py-4 bg-blue-50 border border-blue-200 rounded-lg mt-6"
            >
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-blue-800">Todos nuestros servicios incluyen garantía y soporte técnico especializado. Consulte por nuestras opciones de mantenimiento programado.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}