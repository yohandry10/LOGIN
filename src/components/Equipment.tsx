import { motion } from 'framer-motion';
import { PenTool as Tool, Gauge, FlaskRound as Flask, Shield, Cpu, BarChart, Zap, Terminal } from 'lucide-react';

const equipment = [
  {
    icon: Zap,
    name: "Máquina de Tratamiento de Aceite",
    specs: "Termovacío 6,000 Lt/hr",
    description: "Equipo especializado para el tratamiento y regeneración de aceites dieléctricos con capacidad de 6,000 litros por hora",
    color: "blue"
  },
  {
    icon: Tool,
    name: "Bomba de Vacío",
    specs: "Alta potencia",
    description: "Sistema de vacío de última generación para la extracción eficiente de humedad y gases disueltos",
    color: "green"
  },
  {
    icon: Gauge,
    name: "Medidor de Rigidez Dieléctrica",
    specs: "100kV",
    description: "Instrumento de alta precisión para análisis de aceites de transformadores",
    color: "purple"
  },
  {
    icon: Flask,
    name: "Laboratorio Móvil",
    specs: "Análisis in situ",
    description: "Unidad completa para pruebas y análisis en campo",
    color: "orange"
  },
  {
    icon: Shield,
    name: "Equipo de Protección",
    specs: "Certificación internacional",
    description: "Sistemas de seguridad y protección para trabajos en alta tensión",
    color: "teal"
  },
  {
    icon: Cpu,
    name: "Analizador de Gases Disueltos",
    specs: "Tecnología DGA avanzada",
    description: "Monitoreo avanzado de gases de falla en transformadores",
    color: "red"
  },
  {
    icon: BarChart,
    name: "Sistema de Termovacío en Campo",
    specs: "Para transformadores hasta 30 MVA",
    description: "Unidad portátil para tratamiento de aceite sin necesidad de desmontar el transformador",
    color: "indigo" 
  },
  {
    icon: Terminal,
    name: "Unidad de Termovacío en Caliente",
    specs: "Servicio in situ",
    description: "Tratamiento del aceite dieléctrico mientras el transformador permanece en servicio",
    color: "amber"
  }
];

export default function Equipment() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gray-200 relative overflow-hidden">
      {/* Optional: Add subtle light theme decoration if needed later */}
      {/* <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold tracking-wider mb-4">
            TECNOLOGÍA AVANZADA
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Equipamiento Especializado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos tecnología de última generación para garantizar 
            resultados óptimos y soluciones de la más alta calidad
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)" }}
              className={`bg-white rounded-xl p-6 hover:bg-white transition-all duration-300 border border-gray-200 shadow-lg hover:shadow-xl card-3d`}
            >
              <div className={`w-12 h-12 ${
                item.color === 'blue' ? 'bg-blue-100' :
                item.color === 'purple' ? 'bg-purple-100' :
                item.color === 'orange' ? 'bg-orange-100' :
                item.color === 'teal' ? 'bg-teal-100' :
                item.color === 'red' ? 'bg-red-100' :
                item.color === 'indigo' ? 'bg-indigo-100' :
                item.color === 'green' ? 'bg-green-100' :
                'bg-amber-100'
              } rounded-lg flex items-center justify-center mb-4 transform transition-transform group-hover:rotate-[-5deg]`}>
                <item.icon className={`w-6 h-6 ${
                  item.color === 'blue' ? 'text-blue-600' :
                  item.color === 'purple' ? 'text-purple-600' :
                  item.color === 'orange' ? 'text-orange-600' :
                  item.color === 'teal' ? 'text-teal-600' :
                  item.color === 'red' ? 'text-red-600' :
                  item.color === 'indigo' ? 'text-indigo-600' :
                  item.color === 'green' ? 'text-green-600' :
                  'text-amber-600'
                }`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
              <p className={`font-medium mb-3 ${
                item.color === 'blue' ? 'text-blue-600' :
                item.color === 'purple' ? 'text-purple-600' :
                item.color === 'orange' ? 'text-orange-600' :
                item.color === 'teal' ? 'text-teal-600' :
                item.color === 'red' ? 'text-red-600' :
                item.color === 'indigo' ? 'text-indigo-600' :
                item.color === 'green' ? 'text-green-600' :
                'text-amber-600'
              }`}>{item.specs}</p>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white p-2 rounded-full mb-8 border border-gray-300 shadow-sm">
            <motion.span 
              className="w-3 h-3 rounded-full bg-green-500 inline-block"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-gray-700 pr-2">Equipos calibrados y certificados</span>
          </div>
          
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 md:py-4 md:text-lg md:px-10 shadow-lg shadow-blue-500/30 btn-shine"
          >
            Solicitar Demostración
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}