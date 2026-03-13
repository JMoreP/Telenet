import './Coverage.css';

// URL extraída directamente del placeId y coordenadas de Corporación Telenet de Venezuela
const GOOGLE_MAPS_EMBED = "https://maps.google.com/maps?q=Corporacion+Telenet+de+Venezuela,+Barinas&t=&z=17&ie=UTF8&iwloc=&output=embed";

export default function Coverage() {
    return (
        <section className="coverage" id="cobertura">
            <div className="container">

                <div className="coverage__header">
                    <h2 className="section-title">
                        Visítanos en nuestra <span>sede</span>
                    </h2>
                    <p className="section-subtitle">
                        Estamos ubicados en el corazón de Barinas. Ven a conocernos y descubre los mejores planes de fibra óptica para tu hogar.
                    </p>
                </div>

                <div className="coverage__map-container">

                    {/* Panel lateral */}
                    <div className="coverage__sidebar">
                        <div className="coverage__sidebar-icon">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>

                        <h3 className="coverage__sidebar-title">Sede Principal</h3>

                        <div className="coverage__address">
                            <p className="coverage__address-name">Edificio Telenet</p>
                            <p>Local 2-97</p>
                            <p>Sector Independencia I</p>
                            <p>Planta baja, C. Atahualpa</p>
                            <p>Barinas 5201, Venezuela</p>
                        </div>

                        <div className="coverage__hours">
                            <p className="coverage__hours-title">Horario de atención</p>
                            <div className="coverage__hour-row">
                                <span>Lun – Vie</span>
                                <span>8:00 AM – 5:00 PM</span>
                            </div>
                            <div className="coverage__hour-row">
                                <span>Sábado</span>
                                <span>8:00 AM – 12:00 PM</span>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps/place/Corporacion+Telenet+de+Venezuela/@8.6194813,-70.2298205,690m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e7b582de59f2ff1:0xed34546717687d82!8m2!3d8.6194813!4d-70.2298205"
                            target="_blank"
                            rel="noreferrer"
                            className="coverage__directions-btn"
                        >
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            Abrir en Google Maps
                        </a>
                    </div>

                    {/* Google Maps iframe */}
                    <div className="coverage__map-wrapper">
                        <iframe
                            title="Telenet Sede Principal - Barinas"
                            src={GOOGLE_MAPS_EMBED}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
