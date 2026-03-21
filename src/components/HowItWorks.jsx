import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import NumberFlow from '@number-flow/react'
import './HowItWorks.css'

const steps = [
    {
        number: '01',
        title: 'Verificamos Cobertura',
        desc: 'Evaluamos tu sector y agendamos tu visita técnica.',
    },
    {
        number: '02',
        title: 'Instalación de Fibra',
        desc: 'Desplegamos el cableado y el hardware en tiempo récord.',
    },
    {
        number: '03',
        title: 'Online a Alta Velocidad',
        desc: 'Señal activa. Comienza a navegar sin límites de forma inmediata.',
    },
]

export default function HowItWorks() {
    const [speed, setSpeed] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpeed(300); // Meta speed for the dashboard
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="app-promo" id="app-web">
            <div className="app-promo__bg-text">TELENET_OS</div>

            <div className="app-promo__inner">
                {/* Lado Izquierdo: Contenido Original Restaurado */}
                <motion.div
                    className="tech-how-content"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="tech-how-label">// APP WEB</span>
                    <h2 className="tech-how-title">
                        "Conectando tu mundo a las <br /><span>telecomunicaciones</span>"
                    </h2>
                    <p className="tech-how-desc">
                        Somos un equipo enfocado en brindar la mejor experiencia en <strong>servicios de telecomunicaciones</strong> para nuestros clientes.
                        Comprometidos en el desarrollo de innovación tecnológico no solo de la región sino también a nivel nacional, a través de suministro de servicios de conectividad e internet alta velocidad y soluciones tecnológica en software y Hardware.
                    </p>

                    <a href="#ingresar" className="tech-how-cta">
                        Accede ahora
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </motion.div>

                {/* Lado Derecho: Laptop Terminal */}
                <motion.div
                    className="tech-how-visual"
                    initial={{ opacity: 0, x: 30, rotateY: -10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        className="tech-laptop"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="tech-laptop-screen">
                            <div className="tech-laptop-display">
                                {/* Navegación SO (OS) */}
                                <div className="tech-ui-nav">
                                    <div className="tech-ui-nav-dot red"></div>
                                    <div className="tech-ui-nav-dot yellow"></div>
                                    <div className="tech-ui-nav-dot green"></div>
                                    <span className="tech-ui-nav-title">Corporación Telenet de Venezuela</span>
                                </div>
                                {/* UI Dashboard Node */}
                                <div className="tech-ui-dash">
                                    <div className="tech-ui-ring">
                                        <div className="tech-ui-ring-inner">
                                            <div className="lbl">MI CONEXIÓN</div>
                                            <div className="val">
                                                <NumberFlow value={speed} format={{ style: 'decimal' }} />
                                            </div>
                                            <div className="lbl">Mbps</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tech-laptop-base">
                            <div className="tech-laptop-notch"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
