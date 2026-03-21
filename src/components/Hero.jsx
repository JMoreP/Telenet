import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const slides = [
    {
        id: 1,
        headline: "CONEXIÓN ESTABLE",
        title: "LLEVA TU <br/> <span class='highlight'>ROUTER</span> HOY",
        subtitle: "Únete a Telenet y disfruta del WIFI más estable del mercado con LA MEJOR ATENCIÓN al cliente.",
        image: "/hero_router.webp",
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
        image: "/hero_fiber.webp",
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
        image: "/hero_family.webp",
        cta1: "Ver Beneficios",
        link1: "#beneficios",
        cta2: "Ayuda y FAQ",
        link2: "#faq"
    }
]

export default function Hero() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="hero" id="hero">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={current}
                    className="hero__slide"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ backgroundImage: `url(${slides[current].image})` }}
                >
                    <div className="hero__overlay"></div>

                    <div className="container hero__content">
                        <motion.div
                            className="hero__text-box"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="hero__headline">{slides[current].headline}</span>
                            <h1
                                className="hero__title"
                                dangerouslySetInnerHTML={{ __html: slides[current].title }}
                            />
                            <p className="hero__subtitle">{slides[current].subtitle}</p>

                            <div className="hero__actions">
                                <a href={slides[current].link1} className="btn-17">
                                    <span className="text-container">
                                        <span className="text">{slides[current].cta1}</span>
                                    </span>
                                </a>
                                <a href={slides[current].link2} className="btn-hero-outline">
                                    {slides[current].cta2}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Paginación (Dots) */}
            <div className="hero__dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero__dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Ir al slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
