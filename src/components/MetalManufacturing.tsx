import { motion } from 'framer-motion';
import { Settings, PenTool as Tool, Shield, Layers, Ruler, Wrench } from 'lucide-react';

export default function MetalManufacturing() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold tracking-wider mb-4">
            FABRICACIÓN ESPECIALIZADA
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Fabricación de Metálica de Cubas, <br />
            <span className="text-green-700">Tapa y Tanque Conservador</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Diseñamos y fabricamos componentes metálicos para transformadores de distribución con 
            los más altos estándares de calidad, durabilidad y precisión.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto my-8 rounded-full"></div>
        </motion.div>

        {/* Main content with showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Componentes fabricados con precisión</h3>
            <p className="text-gray-600">
              Nuestro proceso de fabricación metálica asegura que cada componente cumple con especificaciones 
              exactas, garantizando un perfecto funcionamiento y una larga vida útil para sus transformadores.
            </p>
            
            <div className="space-y-4 mt-8">
              {[
                {
                  icon: Layers,
                  title: "Cubas para transformadores",
                  description: "Fabricadas con acero de alta calidad y soldadura de precisión"
                },
                {
                  icon: Shield,
                  title: "Tapas herméticas",
                  description: "Diseño que garantiza sellado perfecto y previene fugas"
                },
                {
                  icon: Settings,
                  title: "Tanques conservadores",
                  description: "Sistemas de compensación de volumen eficientes y duraderos"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50/50 transition-colors"
                >
                  <div className="bg-green-100 p-3 rounded-xl">
                    <item.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gradient-to-r from-green-600 to-green-800 text-white py-3 px-8 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-green-500/30"
            >
              Solicitar fabricación
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
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091210091-bd9c0a4aba76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Fabricación de cubas"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900">Cubas para transformadores</h4>
                <p className="text-sm text-gray-600">Fabricadas con materiales resistentes a la corrosión y diseñadas para una óptima disipación térmica.</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629792987198-44a062c13a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                  alt="Tapas herméticas"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900">Tapas herméticas</h4>
                <p className="text-sm text-gray-600">Diseño que asegura un cierre hermético perfecto y resistente a condiciones ambientales adversas.</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white md:col-span-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Tanque conservador"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900">Tanque conservador</h4>
                <p className="text-sm text-gray-600">Componente vital que compensa las variaciones de volumen del aceite debido a los cambios de temperatura, protegiendo la integridad del transformador.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Nuestro proceso de fabricación
          </h3>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  icon: Tool,
                  title: "Diseño y planificación",
                  description: "Desarrollo de planos precisos según especificaciones técnicas requeridas"
                },
                {
                  icon: Ruler,
                  title: "Corte y conformado de metales",
                  description: "Utilización de tecnología CNC para garantizar exactitud en cada pieza"
                },
                {
                  icon: Wrench,
                  title: "Soldadura y ensamblaje",
                  description: "Procesos certificados que aseguran resistencia y durabilidad"
                },
                {
                  icon: Shield,
                  title: "Pruebas y certificación",
                  description: "Inspección rigurosa y pruebas de estanqueidad para garantizar calidad"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10"
                >
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center gap-8`}>
                    <div className="md:w-1/2 flex justify-center">
                      <div className="bg-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center border-4 border-green-100 z-10">
                        <item.icon className="w-8 h-8 text-green-700" />
                      </div>
                    </div>
                    <div className={`md:w-1/2 p-6 bg-white rounded-xl shadow-md border border-gray-100 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">Paso {index + 1}</span>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
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