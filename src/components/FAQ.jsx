import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FAQ.css'

const faqs = [
    {
        q: '¿Qué es la fibra óptica y qué ventajas tiene?',
        a: 'La fibra óptica transmite datos a través de luz en lugar de señales eléctricas, lo que permite velocidades mucho más altas, menor latencia y mayor estabilidad que el ADSL o el cable coaxial tradicional.',
    },
    {
        q: '¿Cuánto tiempo tarda la instalación?',
        a: 'En menos de 48 horas hábiles desde la contratación, nuestro equipo técnico realiza la instalación completa en tu domicilio, sin costo adicional.',
    },
    {
        q: '¿Hay límite de datos o cuota de descarga?',
        a: 'No. Todos nuestros planes son de datos ilimitados. Podés navegar, ver streaming en 4K y trabajar remotamente sin preocuparte por límites.',
    },
    {
        q: '¿Puedo cambiar de plan después de contratar?',
        a: 'Por supuesto. Podés hacer upgrade o downgrade de tu plan en cualquier momento sin penalización. El cambio se aplica desde el siguiente ciclo de facturación.',
    },
    {
        q: '¿Incluyen el router WiFi?',
        a: 'Sí, todos los planes incluyen un router de última generación. El plan Pro incluye WiFi 6 y el Ultra incluye WiFi 6E con cobertura extendida.',
    },
    {
        q: '¿Hay contrato de permanencia?',
        a: 'No existe permanencia mínima. Podés cancelar el servicio cuando quieras sin cargos por corte anticipado.',
    },
]

export default function FAQ() {
    const [open, setOpen] = useState(null)

    return (
        <section className="faq-tech" id="faq">
            <div className="container">
                <div className="faq-tech__header">
                    <span className="faq-tech-label">// KNOWLEDGE_BASE</span>
                    <h2 className="faq-tech-title">
                        Respondemos tus <span>dudas</span>
                    </h2>
                    <p className="faq-tech-subtitle">
                        Si no encontrás lo que buscás, escribinos al WhatsApp y te respondemos al instante.
                    </p>
                </div>

                <motion.div 
                    className="faq-tech__list"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            className={`tech-faq-item ${open === i ? 'tech-faq-item--open' : ''}`}
                            onClick={() => setOpen(open === i ? null : i)}
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                        >
                            <div className="tech-faq-question">
                                <div className="tech-faq-q-text">
                                    <span className="tech-faq-id">{`>_Q0${i+1}`}</span>
                                    <span>{faq.q}</span>
                                </div>
                                <motion.div 
                                    className="tech-faq-toggle"
                                    animate={{ rotate: open === i ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span>{open === i ? '−' : '+'}</span>
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div 
                                        className="tech-faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <p>{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
