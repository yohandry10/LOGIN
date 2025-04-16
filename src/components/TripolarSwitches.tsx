import { motion } from 'framer-motion';
import { Zap, PenTool as Tool, CheckCircle, AlertTriangle, Gauge } from 'lucide-react';

export default function TripolarSwitches() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px] opacity-20"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1 bg-blue-900/80 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            SERVICIO ESPECIALIZADO
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mantenimiento de Interruptores Tripolares <br/> 
            <span className="text-blue-300">Sumergidos en Aceite</span>
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="max-w-3xl mx-auto text-xl text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Servicio completo de mantenimiento preventivo y correctivo para interruptores 
            tripolares sumergidos en aceite, garantizando el máximo rendimiento y longevidad 
            de sus equipos eléctricos.
          </motion.p>
        </motion.div>

        {/* Main content with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-xl backdrop-blur-sm"></div>
            <img 
              src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
              alt="Interruptores Tripolares" 
              className="w-full h-full object-cover rounded-xl shadow-2xl shadow-blue-500/10 border border-white/10"
            />
            <div className="absolute bottom-4 right-4 bg-blue-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-blue-700">
              <span className="text-sm text-blue-200 font-medium">Alta fiabilidad y seguridad</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-blue-300 mb-6">¿Por qué es necesario este mantenimiento?</h3>
            <p className="text-gray-300 mb-8">
              Los interruptores tripolares sumergidos en aceite son componentes críticos en sistemas 
              eléctricos de alta y media tensión. Un mantenimiento adecuado previene fallas que 
              podrían ocasionar interrupciones en el suministro, daños costosos y riesgos para la seguridad.
            </p>
            
            <div className="space-y-5">
              {[
                {
                  icon: Tool,
                  title: "Mantenimiento preventivo",
                  description: "Inspección, limpieza y ajuste de mecanismos de operación y contactos"
                },
                {
                  icon: CheckCircle,
                  title: "Análisis de aceite dieléctrico",
                  description: "Verificación de propiedades aislantes y detección de contaminantes"
                },
                {
                  icon: AlertTriangle,
                  title: "Detección temprana de fallas",
                  description: "Identificación de desgastes o problemas antes de que ocasionen interrupciones"
                },
                {
                  icon: Gauge,
                  title: "Pruebas operativas",
                  description: "Comprobación de tiempos de operación y sincronización de contactos"
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-900/50 p-3 rounded-lg border border-blue-700/50">
                    <item.icon className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-8 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-blue-700/30 hover:shadow-blue-700/50 transition-all"
            >
              Solicitar servicio
              <Zap className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Nuestro proceso de mantenimiento
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Diagnóstico inicial",
                description: "Evaluación completa del estado actual del interruptor"
              },
              {
                step: "02",
                title: "Mantenimiento preventivo",
                description: "Limpieza, lubricación y ajuste de componentes mecánicos"
              },
              {
                step: "03",
                title: "Análisis y tratamiento del aceite",
                description: "Verificación de propiedades dieléctricas y filtrado"
              },
              {
                step: "04",
                title: "Pruebas finales y certificación",
                description: "Validación operativa y documentación del servicio"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-900/50 to-blue-950/50 p-6 rounded-xl border border-blue-800/50 shadow-xl hover:shadow-blue-700/5 transition-all relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all"></div>
                <div className="text-6xl font-black text-blue-700/20 absolute right-4 bottom-4">{item.step}</div>
                <h4 className="text-xl font-bold text-white mb-2 relative z-10">{item.title}</h4>
                <p className="text-blue-200 relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 