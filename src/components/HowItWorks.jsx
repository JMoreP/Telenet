import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import NumberFlow from '@number-flow/react'
import './HowItWorks.css'

const steps = [
    {
        number: '01',
        icon: '📋',
        title: 'Elegís tu Plan',
        desc: 'Elige tu velocidad ideal',
    },
    {
        number: '02',
        icon: '🔧',
        title: 'Instalamos',
        desc: 'Equipo técnico local',
    },
    {
        number: '03',
        icon: '🚀',
        title: '¡A navegar!',
        desc: 'Fibra en 48 horas',
    },
]

export default function HowItWorks() {
    const [speed, setSpeed] = useState(0);

    useEffect(() => {
        // Pequeña demora para que se note la animación al cargar la sección
        const timer = setTimeout(() => {
            setSpeed(300);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="app-promo" id="app-web">
            {/* Texto gigante de fondo (Stroke / Outline) */}
            <div className="app-promo__bg-text">TELENET</div>

            <div className="container app-promo__inner">
                {/* Lado Izquierdo: Contenido Textual */}
                <motion.div
                    className="app-promo__content"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="app-promo__title">
                        "Conectando tu mundo a las <br /><span>telecomunicaciones</span>"
                    </h2>
                    <p className="app-promo__desc">
                        Somos un equipo enfocado en brindar la mejor experiencia en <strong>servicios de telecomunicaciones</strong> para nuestros clientes.
                        Comprometidos en el desarrollo de innovación tecnológico no solo de la región sino también a nivel nacional, a través de suministro de servicios de conectividad e internet alta velocidad y soluciones tecnológica en software y Hardware
                    </p>
                    <a href="#ingresar" className="btn-primary app-promo__cta">
                        Accede ahora
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M7 17L17 7M17 7H7M17 7V17" /> {/* Flecha diagonal (Arriba-Derecha) */}
                        </svg>
                    </a>
                </motion.div>

                {/* Lado Derecho: Render de Laptop (CSS Puro) */}
                <motion.div
                    className="app-promo__visual"
                    initial={{ opacity: 0, x: 30, rotateY: 20 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        className="laptop-mockup"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="laptop-screen">
                            <div className="laptop-screen-inner">
                                {/* Pantalla / Interfaz UI Simulada */}
                                <div className="ui-mockup">
                                    <div className="ui-nav">
                                        <div className="ui-nav-brand">Corporacion telenet de venezuela</div>
                                        <div className="ui-nav-avatar"></div>
                                    </div>
                                    <div className="ui-hero">
                                        <div className="ui-hero-text">Mi Conexión</div>
                                        <div className="ui-hero-circle">
                                            <NumberFlow
                                                value={speed}
                                                format={{ style: 'decimal' }}
                                            />
                                            <small>Mbps</small>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="laptop-base">
                            <div className="laptop-base-top"></div>
                            <div className="laptop-base-bottom">
                                <div className="laptop-notch"></div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
