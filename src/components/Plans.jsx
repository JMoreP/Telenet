import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import './Plans.css'

const categories = [
    {
        id: 'radio',
        label: 'Radio Enlace',

        description: 'Internet inalámbrico por radioenlace, ideal para zonas sin cobertura de fibra.',
        plans: [
            {
                name: 'Plan Lite',
                speed: 20,
                price: 30,
                color: 'cyan',
                popular: false,
            },
            {
                name: 'Plan Ultra',
                speed: 30,
                price: 40,
                color: 'orange',
                popular: true,
            },
            {
                name: 'Plan Plus',
                speed: 40,
                price: 50,
                color: 'red',
                popular: false,
            },
        ],
    },
    {
        id: 'fibra',
        label: 'Fibra Óptica',

        description: 'Conexión de alta velocidad por fibra óptica, la más estable y rápida.',
        plans: [
            {
                name: 'Plan Comunal',
                speed: 50,
                price: 15,
                color: 'cyan',
                popular: false,
            },
            {
                name: 'Plan Naranja',
                speed: 50,
                price: 20,
                color: 'orange',
                popular: false,
            },
            {
                name: 'Plan Home',
                speed: 60,
                price: 25,
                color: 'featured',
                popular: true,
            },
            {
                name: 'Plan Comercial',
                speed: 100,
                price: 30,
                color: 'red',
                popular: false,
            },
        ],
    },
]

export default function Plans() {
    const [activeTab, setActiveTab] = useState('fibra')
    const sectionRef = useRef(null)

    const activeCategory = categories.find((c) => c.id === activeTab)

    return (
        <section className="plans" id="planes" ref={sectionRef}>
            <div className="plans__bg-glow" />
            <div className="plans__bg-grid" />

            <div className="stars-layer">
                <div className="shooting-star-2"></div>
            </div>

            <div>
                <img className="plans__personaje" src="/personaje.png" alt="personaje" />
            </div>

            <div className="container container__estrellas" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    className="plans__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h2 className="section-title">
                        Nuestros <span>Planes</span> de Internet
                    </h2>
                    <p className="section-subtitle">
                        La conexión que necesitas, al alcance de tu mano. Elige entre nuestras dos
                        tecnologías de conexión.
                    </p>
                </motion.div>

                {/* ── Tab Toggle ── */}
                <motion.div
                    className="plans__tabs"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`plans__tab ${activeTab === cat.id ? 'plans__tab--active' : ''}`}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            <span className="plans__tab-label">{cat.label}</span>
                        </button>
                    ))}
                </motion.div>

                {/* ── Category Description ── */}
                <AnimatePresence mode="wait">
                    <motion.p
                        key={activeTab + '-desc'}
                        className="plans__cat-desc"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeCategory.description}
                    </motion.p>
                </AnimatePresence>

                {/* ── Cards Grid ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        className={`plans__grid plans__grid--${activeCategory.plans.length}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeCategory.plans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                className={`plan-card-tech plan-card-tech--${plan.color} ${plan.popular ? 'plan-card-tech--popular' : ''}`}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1,
                                    ease: 'easeOut',
                                }}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <div className="tech-scanline"></div>
                                <div className="tech-glow"></div>

                                {plan.popular && (
                                    <div className="tech-badge">
                                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                        MÁS POPULAR
                                    </div>
                                )}

                                <div className="tech-header">
                                    <span className="tech-class-label">// TIER</span>
                                    <span className="tech-class-name">[{plan.name.split(' ')[1] || plan.name}]</span>
                                </div>

                                <div className="tech-speed">
                                    <span className="tech-speed-val">{plan.speed}</span>
                                    <div className="tech-speed-meta">
                                        <span>MBPS</span>
                                        <span className="tech-speed-dl">DL</span>
                                    </div>
                                </div>

                                <div className="tech-divider"></div>

                                <div className="tech-specs">
                                    <div className="tech-spec-item">
                                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="1.5" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="9 12 11 14 15 10"></polyline></svg>
                                        <span>Instalación incluida</span>
                                    </div>
                                    <div className="tech-spec-item">
                                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="1.5" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="9 12 11 14 15 10"></polyline></svg>
                                        <span>Soporte 24/7</span>
                                    </div>
                                    <div className="tech-spec-item">
                                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="1.5" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="9 12 11 14 15 10"></polyline></svg>
                                        <span>Sin permanencia</span>
                                    </div>
                                </div>

                                <div className="tech-footer">
                                    <div className="tech-price">
                                        <span className="tech-currency">$</span>
                                        <span className="tech-price-val">{plan.price}</span>
                                        <span className="tech-period">/mo</span>
                                    </div>
                                    <a
                                        href="https://wa.me/584120000000?text=Hola%2C%20me%20interesa%20el%20"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`tech-cta ${plan.popular ? 'tech-cta--primary' : 'tech-cta--outline'}`}
                                    >
                                        {plan.popular ? 'ACCEDER' : 'INICIAR'}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
