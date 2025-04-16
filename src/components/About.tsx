import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Users, Award, Shield, CheckCircle, Clock, TrendingUp, Zap, Star, Heart, Lightbulb } from 'lucide-react';
import { useRef } from 'react';

const values = [
  {
    icon: Target,
    title: "Puntualidad",
    description: "Cumplimiento estricto en entregas, plazos y compromisos con nuestros clientes y proveedores."
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Unidos por un mismo objetivo: la excelencia en nuestro servicio."
  },
  {
    icon: Award,
    title: "Experiencia",
    description: "15 años brindando soluciones efectivas en el sector eléctrico industrial."
  },
  {
    icon: Shield,
    title: "Confiabilidad",
    description: "Servicios garantizados que cumplen con los más altos estándares de calidad."
  }
];

const timeline = [
  {
    year: '2008',
    title: 'Fundación',
    description: 'Inicio de operaciones con servicios básicos de mantenimiento eléctrico',
    icon: Clock,
  },
  {
    year: '2012',
    title: 'Expansión',
    description: 'Ampliación de servicios a mantenimiento de transformadores industriales',
    icon: TrendingUp,
  },
  {
    year: '2016',
    title: 'Certificación ISO',
    description: 'Obtención de certificación ISO 9001 por excelencia en procesos',
    icon: CheckCircle,
  },
  {
    year: '2020',
    title: 'Innovación Tecnológica',
    description: 'Incorporación de tecnologías avanzadas de diagnóstico y mantenimiento',
    icon: TrendingUp,
  }
];

const certifications = [
  'ISO 9001:2015', 
  'Certificación en Seguridad Industrial', 
  'Personal Técnico Certificado',
  'Homologación de Proveedores'
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.section 
      id="nosotros" 
      className="py-24 bg-gray-100 overflow-hidden"
      ref={containerRef}
      style={{ opacity, scale }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Quiénes Somos</h2>
          <h3 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Experiencia que genera confianza
          </h3>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Con más de 15 años en el sector, combinamos experiencia, tecnología y talento humano
            para ofrecer soluciones eléctricas de alto valor.
          </p>
        </motion.div>

        {/* Mission and Vision with 3D effect */}
        <div className="relative mb-32">
          <div className="absolute -inset-4 bg-blue-50/60 rounded-3xl blur-xl transition duration-700 group-hover:opacity-100"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            <motion.div
              initial={{ opacity: 0, rotateY: -15, x: -50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 bg-gradient-to-br from-blue-50 to-blue-100/70 p-10 rounded-2xl shadow-lg border border-blue-100 backdrop-blur-sm transform perspective-1000"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800">Nuestra Misión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Brindar soluciones eléctricas de alta calidad, garantizando la eficiencia y seguridad en cada proyecto.
              </p>
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-blue-200/30 blur-2xl"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, rotateY: 15, x: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 bg-gradient-to-br from-orange-50 to-orange-100/70 p-10 rounded-2xl shadow-lg border border-orange-100 backdrop-blur-sm transform perspective-1000"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-800">Nuestra Visión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Ser líderes en el sector eléctrico, reconocidos por nuestra excelencia técnica y compromiso con la innovación.
              </p>
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-orange-200/30 blur-2xl"></div>
            </motion.div>
          </div>
        </div>

        {/* El camino hacia la excelencia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 relative"
        >
          <div className="text-center mb-20">
            <motion.span 
              className="inline-block px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium tracking-widest uppercase mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nuestro Compromiso
            </motion.span>
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              El camino hacia la excelencia
            </motion.h3>
            <motion.div 
              className="w-24 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Compromiso",
                description: "Dedicación plena a cada proyecto, garantizando resultados que superan las expectativas de nuestros clientes.",
                icon: <Heart className="w-6 h-6" />,
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Excelencia",
                description: "Búsqueda constante de la perfección en cada servicio que ofrecemos mediante procesos de mejora continua.",
                icon: <Award className="w-6 h-6" />,
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Innovación",
                description: "Incorporamos las últimas tecnologías y metodologías para ofrecer soluciones eléctricas de vanguardia.",
                icon: <Lightbulb className="w-6 h-6" />,
                color: "from-blue-600 to-blue-700"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white rounded-lg transform transition-transform duration-500 group-hover:scale-[1.02]" />
                <div className="relative p-8 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-500">
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:rotate-3"
                    >
                      <div className="text-blue-700">
                        {item.icon}
                      </div>
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      className="text-xl font-bold text-gray-900 mb-4 text-center"
                    >
                      {item.title}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      className="text-gray-600 text-center leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Elementos decorativos sutiles */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob" />
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000" />
          
          {/* Línea decorativa */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Nuestra Historia</h3>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">El camino hacia la excelencia</h2>
          </div>
          
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700"></div>
            
            {/* Timeline Items */}
            <div className="relative">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`mb-12 flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
                    <div className={`p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}>
                      <span className="text-sm font-semibold text-blue-600">{item.year}</span>
                      <h4 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h4>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center z-10">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Company Values with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Nuestros Valores</h3>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Principios que guían nuestro trabajo diario
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:rotate-12">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications and Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gray-200 p-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Certificaciones y Garantías
              </h3>
              <p className="text-gray-700 mb-8">
                Nuestro compromiso con la calidad está respaldado por certificaciones 
                internacionales y años de experiencia en el sector.
              </p>
              <ul className="space-y-5">
                {certifications.map((cert, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="relative aspect-w-4 aspect-h-3 lg:aspect-none">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Equipo certificado trabajando"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <p className="text-4xl font-bold text-white">15+</p>
                    <p className="text-sm text-blue-200">Años de experiencia</p>
                  </div>
                  <div className="text-center bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <p className="text-4xl font-bold text-white">100%</p>
                    <p className="text-sm text-blue-200">Garantía de servicio</p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-6 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/10"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">Equipo certificado</h4>
                  <p className="text-sm text-blue-100">Nuestros técnicos están altamente capacitados y certificados para brindar el mejor servicio.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}