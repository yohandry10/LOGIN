import { motion } from 'framer-motion';
import { FlaskRound as Flask, CheckCircle, Droplet, Filter, Zap } from 'lucide-react';

export default function OilWorkshopTreatment() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      <div className="absolute right-0 top-1/4 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200/30 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute left-0 bottom-1/4 transform -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            SERVICIO ESPECIALIZADO
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tratamiento de Aceite en <span className="text-blue-600">Taller</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="max-w-3xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Servicio completo de regeneración y tratamiento de aceites dieléctricos
            en nuestro taller especializado, con equipos de última generación
            y personal altamente calificado.
          </motion.p>
        </motion.div>

        {/* Content cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Droplet,
              title: "Análisis Preliminar",
              description: "Evaluación completa del estado inicial del aceite para determinar el tratamiento adecuado",
              color: "blue"
            },
            {
              icon: Filter,
              title: "Proceso de Filtración",
              description: "Eliminación de partículas sólidas, agua y gases disueltos mediante tecnología avanzada",
              color: "indigo"
            },
            {
              icon: Flask,
              title: "Control de Calidad",
              description: "Verificación de parámetros según estándares internacionales antes de la entrega",
              color: "purple"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-8 border border-gray-100 relative overflow-hidden group"
            >
              <div className={`absolute right-0 top-0 w-32 h-32 rounded-bl-full ${
                item.color === 'blue' ? 'bg-blue-100/30' :
                item.color === 'indigo' ? 'bg-indigo-100/30' : 'bg-purple-100/30'
              } group-hover:w-40 group-hover:h-40 transition-all duration-300`}></div>
              
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                item.color === 'blue' ? 'bg-blue-100' :
                item.color === 'indigo' ? 'bg-indigo-100' : 'bg-purple-100'
              }`}>
                <item.icon className={`w-8 h-8 ${
                  item.color === 'blue' ? 'text-blue-600' :
                  item.color === 'indigo' ? 'text-indigo-600' : 'text-purple-600'
                }`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Workshop showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900">Nuestro taller especializado</h3>
            <p className="text-gray-600">
              Contamos con instalaciones modernas equipadas con la tecnología más avanzada para 
              el tratamiento de aceites dieléctricos. Nuestro equipo de profesionales certificados 
              garantiza resultados óptimos y cumplimiento de los estándares más exigentes.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-700">Beneficios de nuestro servicio:</h4>
              
              {[
                "Eliminación efectiva de humedad y partículas contaminantes",
                "Restauración de las propiedades dieléctricas del aceite",
                "Prolongación de la vida útil de sus equipos",
                "Reducción de costos operativos y de mantenimiento",
                "Entrega rápida y certificación de calidad"
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-4 bg-blue-50 border border-blue-100 rounded-lg flex items-start gap-4"
            >
              <div className="p-2 bg-blue-100 rounded-lg">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">¿Sabía que?</h4>
                <p className="text-sm text-gray-600">
                  Un aceite dieléctrico correctamente tratado puede duplicar la vida útil de sus transformadores 
                  y reducir hasta en un 40% los costos de mantenimiento correctivo.
                </p>
              </div>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-8 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-blue-500/30"
            >
              Solicitar servicio
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=2070"
                alt="Taller de tratamiento de aceite" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h4 className="text-white text-2xl font-bold mb-2">Equipos de alta tecnología</h4>
                <p className="text-gray-200">
                  Nuestro taller cuenta con equipamiento de última generación para tratamiento de aceites dieléctricos
                </p>
              </div>
            </motion.div>
            
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl transform rotate-3">
              <span className="font-bold">Capacidad de procesamiento:</span> 6,000 Lt/hr
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 