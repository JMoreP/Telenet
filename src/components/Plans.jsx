import './Plans.css'

const plans = [
    {
        name: 'Básico',
        speed: '100',
        price: '25',
        popular: false,
        color: 'regular',
        perks: [
            'Fibra óptica simétrica',
            'Router WiFi incluido',
            'IP dinámica',
            'Soporte estándar',
            'Sin permanencia',
        ],
    },
    {
        name: 'Pro',
        speed: '300',
        price: '40',
        popular: true,
        color: 'featured',
        perks: [
            'Fibra óptica simétrica',
            'Router WiFi 6 incluido',
            'IP dinámica',
            'Soporte prioritario 24/7',
            'Sin permanencia',
            'Instalación gratuita',
        ],
    },
    {
        name: 'Ultra',
        speed: '1000',
        price: '65',
        popular: false,
        color: 'premium',
        perks: [
            'Fibra óptica simétrica',
            'Router WiFi 6E incluido',
            'IP estática incluida',
            'Soporte VIP 24/7',
            'Sin permanencia',
            'Instalación gratuita',
            'TV incluida',
        ],
    },
]

export default function Plans() {
    return (
        <section className="plans" id="planes">
            <div className="plans__bg-glow" />
            <div className="container">
                <div className="plans__header">
                    <div className="section-badge">
                        <span>📶</span> Nuestros Planes
                    </div>
                    <h2 className="section-title">
                        Elegí el plan <span>perfecto</span> para vos
                    </h2>
                    <p className="section-subtitle">
                        Todos nuestros planes incluyen fibra óptica pura, sin velocidades compartidas ni letra pequeña.
                    </p>
                </div>

                <div className="plans__grid">
                    {plans.map((plan, i) => (
                        <div key={i} className={`plan-card plan-card--${plan.color} fade-in-up delay-${i + 1}`}>
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
