import './Testimonials.css'

const testimonials = [
    {
        name: 'María González',
        role: 'Emprendedora digital',
        avatar: 'MG',
        color: '#F47C2B',
        rating: 5,
        text: 'Desde que cambié a Telenet, mis videollamadas de trabajo son perfectas. Nunca más perdí una reunión importante por cortes de internet.',
    },
    {
        name: 'Carlos Rodríguez',
        role: 'Gamer profesional',
        avatar: 'CR',
        color: '#3FC4D8',
        rating: 5,
        text: 'El ping bajó de 80ms a menos de 5ms. Para los que jugamos online, eso es todo. Telenet es la mejor inversión que hice.',
    },
    {
        name: 'Laura Méndez',
        role: 'Docente universitaria',
        avatar: 'LM',
        color: '#F47C2B',
        rating: 5,
        text: 'Tres meses y ni un solo corte. Mis alumnos ya no me preguntan más si se me fue el internet. La instalación fue súper rápida también.',
    },
    {
        name: 'Diego Fernández',
        role: 'Familia de 5',
        avatar: 'DF',
        color: '#3FC4D8',
        rating: 5,
        text: 'Somos 5 en casa y todos conectados al mismo tiempo sin problemas. Streaming en 4K, trabajo remoto y juegos online a la vez.',
    },
]

export default function Testimonials() {
    return (
        <section className="testimonials" id="testimonios">
            <div className="container">
                <div className="testimonials__header">
                    <div className="section-badge">
                        <span>💬</span> Testimonios
                    </div>
                    <h2 className="section-title">
                        Lo que dicen nuestros <span>clientes</span>
                    </h2>
                    <p className="section-subtitle">
                        Más de 10,000 hogares y empresas ya confían en nuestra red de fibra óptica.
                    </p>
                </div>

                <div className="testimonials__grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className={`testimonial-card fade-in-up delay-${i + 1}`}>
                            <div className="testimonial-card__stars">
                                {'★'.repeat(t.rating)}
                            </div>
                            <p className="testimonial-card__text">"{t.text}"</p>
                            <div className="testimonial-card__author">
                                <div className="testimonial-card__avatar" style={{ background: `${t.color}22`, border: `2px solid ${t.color}` }}>
                                    <span style={{ color: t.color }}>{t.avatar}</span>
                                </div>
                                <div>
                                    <p className="testimonial-card__name">{t.name}</p>
                                    <p className="testimonial-card__role">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
