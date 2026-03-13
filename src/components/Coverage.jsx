import { motion } from 'framer-motion';
import './Coverage.css';

const GOOGLE_MAPS_EMBED = "https://maps.google.com/maps?q=Corporacion+Telenet+de+Venezuela,+Barinas&t=&z=17&ie=UTF8&iwloc=&output=embed";

export default function Coverage() {
    return (
        <section className="coverage" id="cobertura">
            <div className="coverage__bg-glow"></div>

            <div className="container">
                <motion.div 
                    className="coverage__header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">
                        Nuestra <span>Sede Principal</span>
                    </h2>
                    <p className="section-subtitle">
                        Encuéntranos en el centro tecnológico de Barinas. Ven y descubre el poder de la fibra óptica real.
                    </p>
                </motion.div>

                <motion.div 
                    className="bento-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    {/* Bento Card 1: Mapa Interactivo (Span 8 cols) */}
                    <motion.div 
                        className="bento-card bento-map"
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                    >
                        <div className="bento-map__badge">
                            <span className="live-dot"></span> Telenet HQ
                        </div>
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
                    </motion.div>

                    {/* Bento Card 2: Dirección (Span 4 cols) */}
                    <motion.div 
                        className="bento-card bento-info"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                    >
                        <div className="bento-icon">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <h3>Edificio Telenet</h3>
                        <p>Local 2-97, Sector Independencia I<br />
                        Planta baja, C. Atahualpa<br />
                        Barinas 5201, Venezuela</p>
                    </motion.div>

                    {/* Bento Card 3: Horarios (Span 4 cols) */}
                    <motion.div 
                        className="bento-card bento-hours"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                    >
                        <div className="bento-icon bento-icon--blue">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="hours-content">
                            <div className="hour-row">
                                <strong>Lun – Vie</strong>
                                <span>8:00 AM – 5:00 PM</span>
                            </div>
                            <div className="hour-row">
                                <strong>Sábado</strong>
                                <span>8:00 AM – 12:00 PM</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bento Card 4: Action / Rutas (Span 4 cols) */}
                    <motion.a
                        href="https://www.google.com/maps/place/Corporacion+Telenet+de+Venezuela/@8.6194813,-70.2298205,690m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e7b582de59f2ff1:0xed34546717687d82"
                        target="_blank"
                        rel="noreferrer"
                        className="bento-card bento-action"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                    >
                        <div className="bento-action__content">
                            <h3>Llegar Ahora</h3>
                            <p>Abrir en Google Maps</p>
                        </div>
                        <div className="bento-action__arrow">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
