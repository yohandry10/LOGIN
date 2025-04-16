import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Cpu, Clock, Award } from 'lucide-react';

export default function FieldThermovacTreatment() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/circuit-pattern.svg')] bg-repeat opacity-30"></div>
      </div>
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-blue-500/20 filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-indigo-500/20 filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tratamiento por Termovacío en Campo <br/>
            <span className="text-blue-300">Transformador de 30 MVA</span>
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
            Servicio especializado de tratamiento de aceite dieléctrico in situ para 
            transformadores de gran potencia, sin necesidad de interrumpir las operaciones.
          </motion.p>
        </motion.div>

        {/* Main content with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Tratamiento por termovacío en campo" 
              className="w-full h-auto rounded-2xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow duration-300"
            />
            <div className="absolute bottom-6 right-6 bg-blue-900/80 backdrop-blur-sm p-4 rounded-lg border border-blue-700/50 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-white">30</span>
                <div className="text-blue-200">
                  <div className="text-sm font-semibold">MVA</div>
                  <div className="text-xs">Capacidad</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-blue-300 mb-6">¿Por qué elegir el tratamiento en campo?</h3>
            <p className="text-gray-300 mb-8">
              Nuestro servicio de tratamiento por termovacío en campo permite mantener sus transformadores 
              en óptimas condiciones sin necesidad de trasladarlos a un taller, ahorrando tiempo y recursos, 
              y minimizando el impacto en sus operaciones.
            </p>
            
            <div className="space-y-5">
              {[
                {
                  icon: Zap,
                  title: "Sin interrupción del servicio",
                  description: "El transformador puede continuar operando durante el tratamiento"
                },
                {
                  icon: Clock,
                  title: "Ahorro de tiempo y costos",
                  description: "Evita el desmontaje, traslado y reinstalación del equipo"
                },
                {
                  icon: Cpu,
                  title: "Apto para equipos de alta potencia",
                  description: "Solución ideal para transformadores de gran tamaño (hasta 30 MVA)"
                },
                {
                  icon: Award,
                  title: "Resultados garantizados",
                  description: "Mejora inmediata de las propiedades dieléctricas del aceite"
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4 bg-gradient-to-r from-blue-900/50 to-blue-800/30 p-4 rounded-xl border border-blue-700/30"
                >
                  <div className="bg-blue-500/20 p-3 rounded-lg backdrop-blur-sm">
                    <item.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="text-blue-200">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-8 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-blue-700/30 hover:shadow-blue-700/50 transition-all"
            >
              Solicitar este servicio
              <ArrowRight className="w-5 h-5" />
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
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Proceso de tratamiento en campo
          </h3>
          
          <div className="relative">
            {/* Process connection line */}
            <div className="absolute left-[50%] top-0 h-full w-0.5 bg-blue-700/30 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  title: "Evaluación inicial",
                  description: "Análisis completo del estado del aceite para determinar el tratamiento adecuado",
                  image: "https://images.unsplash.com/photo-1581093196277-9f03a975c2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  step: "01"
                },
                {
                  title: "Instalación de equipos",
                  description: "Configuración de la unidad de termovacío y conexión al transformador",
                  image: "https://images.unsplash.com/photo-1581093196277-9f03a975c2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  step: "02"
                },
                {
                  title: "Proceso de termovacío",
                  description: "Eliminación de humedad, gases y partículas contaminantes del aceite",
                  image: "https://images.unsplash.com/photo-1581093196277-9f03a975c2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  step: "03"
                },
                {
                  title: "Verificación y certificación",
                  description: "Análisis final del aceite tratado y emisión de certificado de calidad",
                  image: "https://images.unsplash.com/photo-1581093196277-9f03a975c2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  step: "04"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6`}>
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative">
                        {/* Step number */}
                        <div className="absolute -left-4 -top-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-20">
                          {step.step}
                        </div>
                        
                        {/* Connection dot */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 z-10 hidden md:block"></div>
                        
                        {/* Image */}
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-64 object-cover rounded-xl shadow-lg border border-blue-700/30"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-1/2">
                      <div className={`text-left ${index % 2 !== 0 && 'md:text-right'}`}>
                        <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                        <p className="text-blue-200">{step.description}</p>
                        
                        <div className="mt-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-400" />
                          <span className="text-sm text-blue-300 font-medium">
                            {index < 3 ? 'Paso completado' : 'Proceso finalizado'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 