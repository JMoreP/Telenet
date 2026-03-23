import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import NumberFlow from '@number-flow/react'

import './HowItWorks.css'


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


            <div className="app-promo__inner container">
                {/* Lado Izquierdo: Contenido */}
                <motion.div
                    className="tech-how-content"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="tech-how-left">
                        <h2 className="tech-how-title">
                            "Conectando tu mundo a las<br /><span>telecomunicaciones</span>"
                        </h2>
                    </div>

                    <div className="tech-how-center">
                        <p className="tech-how-desc">
                            Somos un equipo enfocado en brindar la mejor experiencia en <strong>servicios de telecomunicaciones</strong> para nuestros clientes.
                            Comprometidos en el desarrollo de innovación tecnológico no solo de la región sino también a nivel nacional, a través de suministro de servicios de conectividad e internet alta velocidad y soluciones tecnológica en software y Hardware.
                        </p>
                        <a href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tech-how-cta">
                            Accede ahora
                        </a>
                    </div>


                </motion.div>
            </div>
        </section>
    )
}
