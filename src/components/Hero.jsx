import './Hero.css'

export default function Hero() {
    return (
        <section className="hero" id="hero">
            {/* Animated background orbs */}
            <div className="hero__orb hero__orb--orange" />
            <div className="hero__orb hero__orb--cyan" />

            {/* Fiber animated SVG lines */}
            <svg className="hero__fiber-lines" viewBox="0 0 1200 600" preserveAspectRatio="none">
                <path d="M-50,150 Q300,50 600,200 T1250,100" className="fiber-path fp1" />
                <path d="M-50,300 Q250,400 550,250 T1250,350" className="fiber-path fp2" />
                <path d="M-50,450 Q350,550 650,380 T1250,500" className="fiber-path fp3" />
                <path d="M0,100 Q400,200 700,80 T1300,180" className="fiber-path fp4" />
            </svg>

            <div className="container hero__content">
                <div className="hero__text fade-in-up">
                    <div className="section-badge">
                        <span>⚡</span> Fibra Óptica 100% Pura
                    </div>
                    <h1 className="hero__title">
                        Conectá tu mundo a la
                        <span className="hero__title--gradient"> velocidad del futuro</span>
                    </h1>
                    <p className="hero__subtitle">
                        Internet de fibra óptica de alta velocidad para tu hogar y empresa.
                        Sin interrupciones, sin excusas — solo conexión real.
                    </p>

                    <div className="hero__stats">
                        <div className="hero__stat">
                            <span className="hero__stat-value">1 Gbps</span>
                            <span className="hero__stat-label">Velocidad Máxima</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <span className="hero__stat-value">99.9%</span>
                            <span className="hero__stat-label">Uptime Garantizado</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <span className="hero__stat-value">24/7</span>
                            <span className="hero__stat-label">Soporte Técnico</span>
                        </div>
                    </div>

                    <div className="hero__actions">
                        <a href="#planes" className="btn-primary btn-primary--lg">
                            Ver Planes
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#cobertura" className="btn-outline btn-outline--lg">
                            Verificar Cobertura
                        </a>
                    </div>
                </div>

                {/* Visual — Speed indicator */}
                <div className="hero__visual fade-in-up delay-3">
                    <div className="hero__speed-ring">
                        <div className="hero__speed-ring-inner">
                            <span className="hero__speed-number">1</span>
                            <span className="hero__speed-unit">Gbps</span>
                            <span className="hero__speed-label">Fibra Óptica</span>
                        </div>
                        <div className="hero__ring r1" />
                        <div className="hero__ring r2" />
                        <div className="hero__ring r3" />
                    </div>

                    {/* Floating badges */}
                    <div className="hero__badge hero__badge--top">
                        <span className="hero__badge-icon">✓</span>
                        <span>Sin límite de datos</span>
                    </div>
                    <div className="hero__badge hero__badge--bottom">
                        <span className="hero__badge-icon">⚡</span>
                        <span>Instalación gratis</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll-hint">
                <span>Desplazate</span>
                <div className="hero__scroll-arrow" />
            </div>
        </section>
    )
}
