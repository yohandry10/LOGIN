import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Zap, PenTool as Tool, Activity, FlaskRound as Flask, Wrench, Settings, Battery, Gauge, ArrowRight, CheckCircle } from 'lucide-react';

const mainServices = [
  {
    icon: Zap,
    title: "Mantenimiento de Transformadores",
    description: "Servicio especializado en mantenimiento preventivo y correctivo de transformadores de potencia y distribución.",
    features: [
      "Mantenimiento integral de transformadores",
      "Cambio de aceite al transformador",
      "Pruebas eléctricas",
      "Montaje de transformadores"
    ],
    image: "https://images.pexels.com/photos/2947937/pexels-photo-2947937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    icon: Tool,
    title: "Tratamiento de Aceite Dieléctrico",
    description: "Sistema de termovacío y regeneración para prolongar la vida útil de sus equipos.",
    features: [
      "Tratamiento por termovacío",
      "Regeneración con tierra Fuller",
      "Análisis físico-químico",
      "Servicio in situ"
    ],
    image: "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    icon: Activity,
    title: "Pruebas Eléctricas",
    description: "Análisis y diagnóstico completo del estado de sus equipos eléctricos.",
    features: [
      "Análisis Cromatográfico DGA",
      "Análisis de Furanos",
      "Análisis de PCB's",
      "Análisis general de aceite"
    ],
    image: "https://images.pexels.com/photos/8839884/pexels-photo-8839884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    icon: Wrench,
    title: "Mantenimiento de Motores",
    description: "Servicio completo para motores AC/DC y sistemas electromecánicos.",
    features: [
      "Reparación de motores AC/DC",
      "Evaluación on-line",
      "Monitoreo predictivo",
      "Mantenimiento preventivo"
    ],
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const additionalServices = [
  {
    icon: Settings,
    title: "Mantenimiento de Subestaciones",
    description: "Servicio integral para subestaciones eléctricas.",
    color: "blue"
  },
  {
    icon: Battery,
    title: "Sistemas de Puesta a Tierra",
    description: "Instalación y mantenimiento de sistemas de puesta a tierra.",
    color: "indigo"
  },
  {
    icon: Gauge,
    title: "Análisis de Laboratorio",
    description: "Pruebas y análisis especializados en nuestro laboratorio.",
    color: "orange"
  },
  {
    icon: Flask,
    title: "Servicios Especializados",
    description: "Soluciones personalizadas para necesidades específicas.",
    color: "emerald"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="servicios" className="py-24 bg-gray-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Nuestros Servicios</h3>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Soluciones integrales para sus equipos eléctricos
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Ofrecemos una amplia gama de servicios especializados con los más altos estándares de calidad.
          </p>
        </motion.div>

        {/* Main Services with Interactive Tabs */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Service navigation */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Servicios principales
                </h3>
                <div className="space-y-3">
                  {mainServices.map((service, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedService(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-4 ${
                        selectedService === index 
                          ? 'bg-blue-50 border-l-4 border-blue-600 shadow-md' 
                          : 'hover:bg-gray-50 border-l-4 border-transparent'
                      }`}
                      whileHover={{ x: selectedService === index ? 0 : 5 }}
                      whileTap={{ scale: 0.98 }}
                      custom={index}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        selectedService === index ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        <service.icon className={`w-6 h-6 transition-colors duration-300 ${
                          selectedService === index ? 'text-blue-600' : 'text-gray-500'
                        }`} />
                      </div>
                      <div>
                        <h4 className={`font-medium transition-colors duration-300 ${
                          selectedService === index ? 'text-blue-800' : 'text-gray-700'
                        }`}>{service.title}</h4>
                        <p className={`text-sm mt-1 transition-colors duration-300 ${
                          selectedService === index ? 'text-blue-600' : 'text-gray-500'
                        }`}>Ver detalles</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Service detail */}
            <motion.div 
              className="lg:col-span-3 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              key={selectedService}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transform perspective-1000 hover:shadow-2xl transition-all duration-500">
                <div className="h-64 relative overflow-hidden">
                  <motion.img 
                    src={mainServices[selectedService].image} 
                    alt={mainServices[selectedService].title}
                    className="w-full h-full object-cover hover-scale"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {(() => {
                          const ServiceIcon = mainServices[selectedService].icon;
                          return <ServiceIcon className="w-5 h-5 text-white" />;
                        })()}
                      </motion.div>
                      <h3 className="text-2xl font-bold">{mainServices[selectedService].title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-8">{mainServices[selectedService].description}</p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-50 p-1 rounded-md mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </span>
                    Lo que incluye:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mainServices[selectedService].features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span 
                          className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3"
                          whileHover={{ backgroundColor: "#dbeafe", scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </motion.span>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ x: 5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 flex items-center gap-2 text-blue-600 font-medium bg-blue-50 px-5 py-2 rounded-lg transition-all duration-300"
                  >
                    Solicitar este servicio <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Services with Interactive Cards */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-xl font-semibold text-gray-900">Servicios adicionales</h3>
          <p className="text-gray-600 mt-2">Descubra nuestra gama completa de servicios especializados</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-3d"
            >
              <motion.div 
                className={`w-14 h-14 ${
                  service.color === 'blue' ? 'bg-blue-50' :
                  service.color === 'indigo' ? 'bg-indigo-50' :
                  service.color === 'orange' ? 'bg-orange-50' :
                  'bg-emerald-50'
                } rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500`}
                whileHover={{ 
                  rotate: 5, 
                  scale: 1.1,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
              >
                <service.icon className={`w-7 h-7 ${
                  service.color === 'blue' ? 'text-blue-600' :
                  service.color === 'indigo' ? 'text-indigo-600' :
                  service.color === 'orange' ? 'text-orange-600' :
                  'text-emerald-600'
                }`} />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <motion.a
                href="#contacto"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center text-sm font-medium px-4 py-2 rounded-lg ${
                  service.color === 'blue' ? 'text-blue-600 bg-blue-50 hover:bg-blue-100' :
                  service.color === 'indigo' ? 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100' :
                  service.color === 'orange' ? 'text-orange-600 bg-orange-50 hover:bg-orange-100' :
                  'text-emerald-600 bg-emerald-50 hover:bg-emerald-100'
                } transition-colors duration-300`}
              >
                Más información <ArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}