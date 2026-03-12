import { useEffect, useRef, useState } from 'react'
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
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return

            const rect = sectionRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Empezar la animación cuando la sección entre al viewport por abajo
            const start = windowHeight
            // Terminar la animación cuando la sección alcance el 25% superior del viewport
            const end = windowHeight * 0.25

            let progress = (start - rect.top) / (start - end)
            // Limitar progreso entre 0 y 1
            progress = Math.max(0, Math.min(1, progress))

            setScrollProgress(progress)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Cálculo inicial

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Usaremos globeVisible virtualmente (cuando scroll esté al 45%) 
    // para activar el fade-in de las tarjetas de los planes mucho más rápido.
    const globeVisible = scrollProgress > 0.45

    return (
        <section className="plans" id="planes" ref={sectionRef}>
            <div className="plans__bg-glow" />
            <Globe scrollProgress={scrollProgress} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div
                    className={`plans__header ${globeVisible ? 'fade-in-up' : ''}`}
                    style={{ opacity: globeVisible ? undefined : 0, animationDelay: '0.1s' }}
                >
                    <h2 className="section-title">
                        Elegí el plan <span>perfecto</span> para vos
                    </h2>
                    <p className="section-subtitle">
                        Todos nuestros planes incluyen fibra óptica pura, sin velocidades compartidas ni letra pequeña.
                    </p>
                </div>

                <div className="plans__grid">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`plan-card plan-card--${plan.color}`}
                            style={{
                                opacity: globeVisible ? undefined : 0,
                                filter: globeVisible ? 'none' : 'blur(10px)',
                                transform: globeVisible ? undefined : 'translateY(20px) scale(0.8)',
                                transitionDelay: `${0.1 + i * 0.1}s`
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
                        </div>
                    ))}
                </div>

                <p className="plans__footnote">
                    * Precios en USD. Los valores pueden variar según tu zona. Consultá disponibilidad.
                </p>
            </div>
        </section>
    )
}
