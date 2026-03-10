import './Features.css'

const features = [
    {
        icon: '⚡',
        title: 'Velocidad Real',
        desc: 'Fibra óptica 100% pura hasta tu hogar. Lo que contratás, lo recibís — sin asteriscos ni letras pequeñas.',
        color: 'orange',
    },
    {
        icon: '🛡️',
        title: 'Conexión Estable',
        desc: 'Infraestructura de última generación con redundancia total. Olvídate de los cortes en el peor momento.',
        color: 'cyan',
    },
    {
        icon: '📡',
        title: 'WiFi de Alta Potencia',
        desc: 'Incluimos un router de última generación con cobertura para toda tu casa o negocio.',
        color: 'orange',
    },
    {
        icon: '🎧',
        title: 'Soporte 24/7',
        desc: 'Equipo técnico local disponible las 24 horas. Porque tus problemas de conexión no tienen horario.',
        color: 'cyan',
    },
]

export default function Features() {
    return (
        <section className="features" id="beneficios">
            <div className="container">
                <div className="features__header">
                    <div className="section-badge">
                        <span>🏆</span> ¿Por qué elegirnos?
                    </div>
                    <h2 className="section-title">
                        La diferencia que <span>sentís</span> desde el primer día
                    </h2>
                    <p className="section-subtitle">
                        No somos solo un proveedor de internet. Somos tu aliado en conectividad, con tecnología real y personas reales.
                    </p>
                </div>

                <div className="features__grid">
                    {features.map((f, i) => (
                        <div key={i} className={`feature-card feature-card--${f.color} fade-in-up delay-${i + 1}`}>
                            <div className={`feature-card__icon-wrap feature-icon--${f.color}`}>
                                <span className="feature-card__icon">{f.icon}</span>
                            </div>
                            <h3 className="feature-card__title">{f.title}</h3>
                            <p className="feature-card__desc">{f.desc}</p>
                            <div className="feature-card__glow" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
