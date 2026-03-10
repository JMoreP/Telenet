import './HowItWorks.css'

const steps = [
    {
        number: '01',
        icon: '📋',
        title: 'Elegís tu Plan',
        desc: 'Seleccioná el plan que mejor se adapte a tus necesidades y completá el formulario. Es rápido y sin papelerío.',
    },
    {
        number: '02',
        icon: '🔧',
        title: 'Instalamos Gratis',
        desc: 'Nuestro equipo técnico local va a tu domicilio y realiza la instalación de fibra óptica sin costo adicional.',
    },
    {
        number: '03',
        icon: '🚀',
        title: '¡A navegar!',
        desc: 'Listo. En menos de 48 horas tenés fibra óptica pura en tu casa. Velocidad real desde el primer momento.',
    },
]

export default function HowItWorks() {
    return (
        <section className="how-it-works" id="como-funciona">
            <div className="container">
                <div className="hiw__header">
                    <div className="section-badge">
                        <span>🗺️</span> Proceso Simple
                    </div>
                    <h2 className="section-title">
                        Tres pasos y ya <span>estás conectado</span>
                    </h2>
                    <p className="section-subtitle">
                        Sin burocracia, sin complicaciones. De cero a fibra óptica en menos de 48 horas.
                    </p>
                </div>

                <div className="hiw__steps">
                    {steps.map((step, i) => (
                        <div key={i} className={`hiw__step fade-in-up delay-${i + 1}`}>
                            <div className="hiw__connector" />
                            <div className="hiw__icon-wrap">
                                <span className="hiw__number">{step.number}</span>
                                <span className="hiw__icon">{step.icon}</span>
                            </div>
                            <h3 className="hiw__step-title">{step.title}</h3>
                            <p className="hiw__step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA inline */}
                <div className="hiw__cta fade-in-up delay-4">
                    <a href="#contacto" className="btn-primary btn-primary--lg">
                        Quiero contratarlo ahora
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
