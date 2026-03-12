import './Coverage.css'

const zones = [
    'Centro', 'Norte', 'Sur', 'Este', 'Oeste',
    'San Martín', 'Los Olivos', 'Villa Nueva',
    'Palermo', 'El Parque', 'Río Claro', 'Las Flores',
]

export default function Coverage() {
    return (
        <section className="coverage" id="cobertura">
            <div className="container">
                <div className="coverage__inner">
                    {/* Left */}
                    <div className="coverage__text">
                        <h2 className="section-title">
                            Llegamos a tu <span>barrio</span>
                        </h2>
                        <p className="section-subtitle">
                            Estamos expandiendo nuestra red de fibra óptica constantemente. Verificá si tu zona ya tiene cobertura disponible.
                        </p>
                        <div className="coverage__zones">
                            {zones.map((zone, i) => (
                                <span key={i} className="coverage__zone-tag">
                                    <span className="coverage__zone-dot" /> {zone}
                                </span>
                            ))}
                        </div>
                        <div className="coverage__check">
                            <p className="coverage__check-label">¿No ves tu zona? Consultanos</p>
                            <a href="#contacto" className="btn-primary">
                                Verificar mi dirección
                            </a>
                        </div>
                    </div>

                    {/* Right — Visual Map Mockup */}
                    <div className="coverage__map-wrap">
                        <div className="coverage__map">
                            <div className="map__bg-grid" />
                            <div className="map__pulse map__pulse--1">
                                <div className="map__pulse-ring" />
                                <div className="map__pulse-ring map__pulse-ring--2" />
                                <div className="map__pulse-center" />
                                <span className="map__pulse-label">Zona 1</span>
                            </div>
                            <div className="map__pulse map__pulse--2">
                                <div className="map__pulse-ring" />
                                <div className="map__pulse-ring map__pulse-ring--2" />
                                <div className="map__pulse-center" />
                                <span className="map__pulse-label">Zona 2</span>
                            </div>
                            <div className="map__pulse map__pulse--3">
                                <div className="map__pulse-ring" />
                                <div className="map__pulse-ring map__pulse-ring--2" />
                                <div className="map__pulse-center" />
                                <span className="map__pulse-label">Zona 3</span>
                            </div>
                            <div className="map__stat-bar">
                                <span className="map__stat-label">Cobertura activa</span>
                                <div className="map__stat-progress">
                                    <div className="map__stat-fill" />
                                </div>
                                <span className="map__stat-value">78%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
