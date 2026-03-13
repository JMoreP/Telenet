import { useRef } from 'react'
import { motion } from 'framer-motion'
import Globe from './Globe'
import './Plans.css'

const plans = [
    {
        name: 'Básico',
        speed: 300,
        price: 19.99,
        popular: false,
        color: 'blue',
        perks: [
            'Fibra óptica simétrica',
            'Router WiFi 6 incluido',
            'Soporte técnico 24/7',
            'Instalación gratis',
        ],
    },
    {
        name: 'Hogar+',
        speed: 600,
        price: 29.99,
        popular: true,
        color: 'featured',
        perks: [
            'Fibra óptica simétrica',
            'Router WiFi 6 incluido',
            'Soporte técnico 24/7',
            'Instalación gratis',
            '1 Repetidor Mesh gratis',
        ],
    },
    {
        name: 'Pro Gaming',
        speed: 1000,
        price: 49.99,
        popular: false,
        color: 'premium',
        perks: [
            'Fibra óptica simétrica',
            'Router WiFi 6E incluido',
            'Soporte técnico VIP 24/7',
            'Instalación gratis',
            '2 Repetidores Mesh gratis',
            'IP Fija',
        ],
    },
]

export default function Plans() {
    const sectionRef = useRef(null)
    return (
        <section className="plans" id="planes" ref={sectionRef}>
            <div className="plans__bg-glow" />
            <Globe />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    className="plans__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="section-title">
                        Elegí el plan <span>perfecto</span> para vos
                    </h2>
                    <p className="section-subtitle">
                        Todos nuestros planes incluyen fibra óptica pura, sin velocidades compartidas ni letra pequeña.
                    </p>
                </motion.div>

                <div className="plans__grid">
                    {plans.map((plan, i) => {
                        const offsets = [-105, 0, 105];
                        const baseScale = [0.9, 1, 0.9];
                        
                        return (
                            <motion.div
                                key={i}
                                className={`plan-card plan-card--${plan.color}`}
                                initial={{ 
                                    opacity: 0, 
                                    y: 30, 
                                    x: `${offsets[i]}%`
                                }}
                                whileInView={{ 
                                    opacity: 1, 
                                    y: 0, 
                                    x: `${offsets[i]}%`
                                }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ 
                                    duration: 0.8, 
                                    delay: i * 0.1,
                                    ease: "easeOut" 
                                }}
                                whileHover={{ 
                                    y: -10, 
                                    scale: baseScale[i] + 0.05,
                                    transition: { duration: 0.3 } 
                                }}
                            >
                                {plan.popular && (
                                    <div className="plan-card__badge">⭐ Más Popular</div>
                                )}

                                <div className="plan-card__header">
                                    <div className="plan-card__name">{plan.name}</div>
                                    <div className="plan-card__speed">
                                        <span className="plan-speed-value">{plan.speed}</span>
                                        <span className="plan-speed-unit">Mbps</span>
                                    </div>
                                    <div className="plan-card__symmetry">Simétrico ↑↓</div>
                                </div>

                                <div className="plan-card__price">
                                    <span className="plan-price-currency">$</span>
                                    <span className="plan-price-value">{plan.price}</span>
                                    <span className="plan-price-period">/mes</span>
                                </div>

                                <ul className="plan-card__perks">
                                    {plan.perks.map((perk, j) => (
                                        <li key={j} className="plan-perk">
                                            <span className="plan-perk__check">✓</span>
                                            {perk}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contacto" className={`plan-card__cta ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                                    {plan.popular ? '¡Lo quiero!' : 'Contratar'}
                                </a>
                            </motion.div>
                        )
                    })}
                </div>

                <p className="plans__footnote">
                    * Precios en USD. Los valores pueden variar según tu zona. Consultá disponibilidad.
                </p>
            </div>
        </section>
    )
}
