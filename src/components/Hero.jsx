import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const slides = [
  {
    id: 1,
    headline: "CONEXIÓN ESTABLE",
    title: "LLEVA TU <br/> <span class='highlight'>ROUTER</span> HOY",
    subtitle: "Únete a Telenet y disfruta del WIFI más estable del mercado con LA MEJOR ATENCIÓN al cliente.",
    image: "/hero_router_v2.png",
    cta1: "Validar Cobertura",
    link1: "#cobertura",
    cta2: "Ver Ofertas",
    link2: "#planes"
  },
  {
    id: 2,
    headline: "NUEVA VELOCIDAD",
    title: "VUELA A <br/> 300 <span class='highlight'>Mbps</span>",
    subtitle: "Navega, juega y streamea sin límites con nuestra fibra óptica de última generación real.",
    image: "/hero_fiber_v2.png",
    cta1: "Contratar Ahora",
    link1: "#contacto",
    cta2: "Planes Gamers",
    link2: "#planes"
  },
  {
    id: 3,
    headline: "HOGAR INTELIGENTE",
    title: "ENTRETENIMIENTO <br/> <span class='highlight'>TOTAL</span>",
    subtitle: "Conecta todos tus dispositivos al mismo tiempo sin perder velocidad. Diseño robusto para tu hogar.",
    image: "/hero_family_v2.png",
    cta1: "Ver Beneficios",
    link1: "#beneficios",
    cta2: "Ayuda y FAQ",
    link2: "#faq"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-cinematic" id="hero">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={current}
          className="hero-cinematic__slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ken Burns Effect en la imagen de fondo */}
          <motion.div 
            className="hero-cinematic__bg"
            style={{ backgroundImage: `url(${slides[current].image})` }}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" }}
          />

          <div className="hero-cinematic__overlay"></div>

          <div className="container hero-cinematic__content">
            <div className="hero-cinematic__text-box">
              {/* Headline */}
              <motion.div
                className="hero-cinematic__headline-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="hero-cinematic__headline">{slides[current].headline}</span>
              </motion.div>

              {/* Título enmascarado (cada palabra o bloque revelado) */}
              <motion.h1
                className="hero-cinematic__title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                dangerouslySetInnerHTML={{ __html: slides[current].title }}
              />
              
              <motion.p 
                className="hero-cinematic__subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {slides[current].subtitle}
              </motion.p>

              <motion.div 
                className="hero-cinematic__actions"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <a href={slides[current].link1} className="btn-primary-cinematic">
                  {slides[current].cta1}
                </a>
                <a href={slides[current].link2} className="btn-outline-glass">
                  {slides[current].cta2}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Paginación Activa Inteligente (Líneas de Progreso) */}
      <div className="hero-cinematic__pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`pagination__dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Ir al slide ${index + 1}`}
          >
            {/* Si es el actual, dibujamos la línea de progreso */}
            {index === current && (
              <motion.span 
                className="pagination__progress"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
