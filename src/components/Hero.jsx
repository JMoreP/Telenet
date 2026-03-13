import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="container hero__content">
                <motion.div 
                    className="hero__text"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                >
                    <motion.h1 
                        className="hero__title"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        Conecta tu mundo a la velocidad del futuro
                    </motion.h1>
                    <motion.p 
                        className="hero__subtitle"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        Internet confiable y ultrarrápido con fibra óptica real para tu hogar o empresa, 
                        dándote el rendimiento que exiges sin interrupciones.
                    </motion.p>
                    
                    <motion.div 
                        className="hero__actions"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        <a href="#planes" className="btn-hero-primary">
                            Ver Planes
                        </a>
                        <a href="#cobertura" className="btn-hero-outline">
                            Verificar Cobertura
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
