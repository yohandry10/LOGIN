import { motion } from 'framer-motion';
import { useState } from 'react';
import { Microscope, FlaskConical, FileText, ChevronRight, Beaker, Atom, Droplets, Gauge } from 'lucide-react';

const labServices = [
  {
    id: "analisis-fisicoquimico",
    title: "Análisis Físico-Químico",
    description: "Evaluación completa de propiedades físicas y químicas de aceites dieléctricos conforme a estándares internacionales.",
    icon: FlaskConical,
    color: "blue",
    tests: [
      { name: "Rigidez dieléctrica", value: "ASTM D1816", result: ">30 kV" },
      { name: "Contenido de humedad", value: "ASTM D1533", result: "<20 ppm" },
      { name: "Tensión interfacial", value: "ASTM D971", result: ">30 mN/m" },
      { name: "Número de acidez", value: "ASTM D974", result: "<0.2 mg KOH/g" },
      { name: "Factor de potencia", value: "ASTM D924", result: "<0.5%" }
    ]
  },
  {
    id: "analisis-cromatografico",
    title: "Análisis Cromatográfico",
    description: "Detección precisa de gases disueltos generados por fallas incipientes en transformadores y equipos eléctricos.",
    icon: Droplets,
    color: "green",
    tests: [
      { name: "Hidrógeno (H₂)", value: "IEEE C57.104", result: "<100 ppm" },
      { name: "Metano (CH₄)", value: "IEEE C57.104", result: "<120 ppm" },
      { name: "Etileno (C₂H₄)", value: "IEEE C57.104", result: "<50 ppm" },
      { name: "Acetileno (C₂H₂)", value: "IEEE C57.104", result: "<1 ppm" },
      { name: "Monóxido de carbono (CO)", value: "IEEE C57.104", result: "<500 ppm" }
    ]
  },
  {
    id: "analisis-furanos",
    title: "Análisis de Furanos",
    description: "Determinación del envejecimiento del papel aislante y estimación de vida útil remanente del transformador.",
    icon: Beaker,
    color: "orange",
    tests: [
      { name: "2-Furfural (2FAL)", value: "ASTM D5837", result: "<0.1 mg/L" },
      { name: "5-H-2-Furfural (5H2F)", value: "ASTM D5837", result: "<0.05 mg/L" },
      { name: "2-Acetilfurano (2ACF)", value: "ASTM D5837", result: "<0.05 mg/L" },
      { name: "Vida útil estimada", value: "IEEE C57.91", result: "Reporte" },
      { name: "Índice de polimerización", value: "ASTM D4243", result: "Reporte" }
    ]
  },
  {
    id: "analisis-pcb",
    title: "Análisis de PCB's",
    description: "Detección y cuantificación de bifenilos policlorados para cumplimiento normativo y gestión ambiental.",
    icon: Atom,
    color: "purple",
    tests: [
      { name: "Concentración de PCB's", value: "ASTM D4059", result: "<2 ppm" },
      { name: "Arocloros", value: "ASTM D4059", result: "No detectado" },
      { name: "Análisis cualitativo", value: "EPA 8082", result: "Negativo" },
      { name: "Evaluación regulatoria", value: "NOM-133-SEMARNAT", result: "Cumple" },
      { name: "Certificación ambiental", value: "", result: "Emitida" }
    ]
  }
];

export default function Laboratory() {
  const [activeTab, setActiveTab] = useState(labServices[0].id);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const activeService = labServices.find(service => service.id === activeTab) || labServices[0];

  return (
    <section id="laboratorio" className="py-24 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 opacity-50 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gray-50 opacity-70 rounded-tr-full"></div>

      {/* Líneas de grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-base font-semibold text-blue-600 tracking-wide uppercase inline-flex items-center gap-2">
            <Microscope className="w-5 h-5" />
            Nuestro Laboratorio
          </h3>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Análisis especializados de alta precisión
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Contamos con un laboratorio de última generación para el análisis y diagnóstico de aceites dieléctricos y equipos eléctricos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Navegación de servicios */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-6 sticky top-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Servicios de laboratorio</h3>
              </div>

              <div className="space-y-2">
                {labServices.map((service) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                      activeTab === service.id 
                        ? `bg-${service.color}-50 border-l-4 border-${service.color}-600 shadow-sm` 
                        : 'hover:bg-gray-100 border-l-4 border-transparent'
                    }`}
                    whileHover={{ x: activeTab === service.id ? 0 : 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeTab === service.id 
                        ? `bg-${service.color}-100` 
                        : 'bg-gray-200'
                    }`}>
                      <service.icon className={`w-5 h-5 ${
                        activeTab === service.id 
                          ? `text-${service.color}-600` 
                          : 'text-gray-500'
                      }`} />
                    </div>
                    <span className={`font-medium ${
                      activeTab === service.id 
                        ? `text-${service.color}-900` 
                        : 'text-gray-700'
                    }`}>
                      {service.title}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-700 mb-3">
                  Todos nuestros análisis cumplen con los estándares ASTM, IEEE y normativas internacionales.
                </p>
                <a 
                  href="#contacto" 
                  className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  Solicitar análisis <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Detalles del servicio */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden">
              <div className={`p-6 bg-${activeService.color}-50`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-${activeService.color}-100`}>
                    <activeService.icon className={`h-8 w-8 text-${activeService.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{activeService.title}</h3>
                    <p className={`text-${activeService.color}-700 mt-1`}>{activeService.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Gauge className={`h-5 w-5 text-${activeService.color}-600`} />
                    Parámetros analizados
                  </h4>
                  
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parámetro</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Método</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valores aceptables</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {activeService.tests.map((test, idx) => (
                          <motion.tr 
                            key={idx}
                            custom={idx}
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            className="hover:bg-gray-50"
                          >
                            <td className="py-4 px-4 text-sm font-medium text-gray-900">{test.name}</td>
                            <td className="py-4 px-4 text-sm text-gray-500">{test.value}</td>
                            <td className={`py-4 px-4 text-sm font-medium text-${activeService.color}-600`}>{test.result}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Imagen del laboratorio con descripción */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 rounded-xl overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      alt="Laboratorio especializado"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Equipamiento de alta precisión</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Nuestro laboratorio cuenta con equipos de última generación calibrados según estándares internacionales para garantizar la exactitud de los resultados.
                    </p>
                    <motion.a
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href="#contacto"
                      className={`inline-flex items-center text-sm font-medium gap-1 text-${activeService.color}-600 hover:text-${activeService.color}-700`}
                    >
                      Solicitar este análisis <ChevronRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 p-4 rounded-xl mt-8 text-sm text-gray-600">
                  <p className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Los análisis se realizan en nuestro laboratorio certificado o pueden realizarse in situ según los requerimientos del cliente. El tiempo de entrega estándar para resultados es de 3 a 5 días hábiles.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 