import './Hero.css'

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="container hero__content">
                <div className="hero__text fade-in-up">
                    <h1 className="hero__title">
                        Conecta tu mundo a la velocidad del futuro
                    </h1>
                    <p className="hero__subtitle">
                        Internet confiable y ultrarrápido con fibra óptica real para tu hogar o empresa, 
                        dándote el rendimiento que exiges sin interrupciones.
                    </p>

                    <div className="hero__actions">
                        <a href="#planes" className="btn-hero-primary">
                            Ver Planes
                        </a>
                        <a href="#cobertura" className="btn-hero-outline">
                            Verificar Cobertura
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
