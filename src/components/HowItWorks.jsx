import './HowItWorks.css'

const steps = [
    {
        number: '01',
        icon: '📋',
        title: 'Elegís tu Plan',
        desc: 'Elige tu velocidad ideal',
    },
    {
        number: '02',
        icon: '🔧',
        title: 'Instalamos',
        desc: 'Equipo técnico local',
    },
    {
        number: '03',
        icon: '🚀',
        title: '¡A navegar!',
        desc: 'Fibra en 48 horas',
    },
]

export default function HowItWorks() {
    return (
        <section className="app-promo" id="app-web">
            {/* Texto gigante de fondo (Stroke / Outline) */}
            <div className="app-promo__bg-text">WEB</div>

            <div className="container app-promo__inner">
                {/* Lado Izquierdo: Contenido Textual */}
                <div className="app-promo__content fade-in-up">
                    <h2 className="app-promo__title">
                        Maneja tu conexión al alcance de un <br /><span>clic</span>
                    </h2>
                    <p className="app-promo__desc">
                        Ingresa a nuestra <strong>versión web</strong> desde cualquier navegador y accede al panel de control total de tu servicio. Ideal para esos momentos en los que necesitas gestionar todo desde tu computadora o laptop a la mano.
                    </p>
                    <a href="#ingresar" className="btn-primary app-promo__cta">
                        ¡Accede ahora!
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M7 17L17 7M17 7H7M17 7V17" /> {/* Flecha diagonal (Arriba-Derecha) */}
                        </svg>
                    </a>
                </div>

                {/* Lado Derecho: Render de Laptop (CSS Puro) */}
                <div className="app-promo__visual fade-in-up delay-2">
                    <div className="laptop-mockup">
                        <div className="laptop-screen">
                            <div className="laptop-screen-inner">
                                {/* Pantalla / Interfaz UI Simulada */}
                                <div className="ui-mockup">
                                    <div className="ui-nav">
                                        <div className="ui-nav-brand">Telenet</div>
                                        <div className="ui-nav-avatar"></div>
                                    </div>
                                    <div className="ui-hero">
                                        <div className="ui-hero-text">Mi Conexión</div>
                                        <div className="ui-hero-circle">
                                            <span>300</span>
                                            <small>Mbps</small>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="laptop-base">
                            <div className="laptop-base-top"></div>
                            <div className="laptop-base-bottom">
                                <div className="laptop-notch"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
