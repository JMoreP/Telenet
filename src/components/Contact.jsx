import './Contact.css'
import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', phone: '', zone: '', plan: '' })
    const [sent, setSent] = useState(false)

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()
        // Build WhatsApp message
        const msg = `¡Hola Telenet! Me interesa contratar el servicio.%0A*Nombre:* ${form.name}%0A*Teléfono:* ${form.phone}%0A*Zona:* ${form.zone}%0A*Plan deseado:* ${form.plan}`
        window.open(`https://wa.me/+5491100000000?text=${msg}`, '_blank')
        setSent(true)
        setTimeout(() => setSent(false), 5000)
    }

    return (
        <section className="contact" id="contacto">
            <div className="contact__bg-glow" />
            <div className="container">
                <div className="contact__inner">
                    {/* Left */}
                    <div className="contact__info fade-in-up">
                        <div className="section-badge">
                            <span>📞</span> Contacto
                        </div>
                        <h2 className="section-title">
                            ¿Listo para <span>conectarte</span>?
                        </h2>
                        <p className="section-subtitle">
                            Completá el formulario y te contactamos en menos de 2 horas para coordinar la instalación.
                        </p>

                        <div className="contact__methods">
                            <a href="https://wa.me/+5491100000000" target="_blank" rel="noreferrer" className="contact__method">
                                <div className="contact__method-icon contact__method-icon--whatsapp">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="contact__method-label">WhatsApp</p>
                                    <p className="contact__method-value">+54 9 11 0000-0000</p>
                                </div>
                            </a>

                            <a href="mailto:info@telenet.com.ar" className="contact__method">
                                <div className="contact__method-icon contact__method-icon--email">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="contact__method-label">Email</p>
                                    <p className="contact__method-value">info@telenet.com.ar</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="contact__form-wrap fade-in-up delay-2">
                        {sent ? (
                            <div className="contact__success">
                                <span className="contact__success-icon">✓</span>
                                <h3>¡Mensaje enviado!</h3>
                                <p>Te redirigimos a WhatsApp. Respondemos en menos de 2 horas.</p>
                            </div>
                        ) : (
                            <form className="contact__form" onSubmit={handleSubmit}>
                                <h3 className="contact__form-title">Solicitá tu conexión</h3>
                                <div className="contact__field">
                                    <label htmlFor="name">Nombre completo</label>
                                    <input id="name" name="name" type="text" placeholder="Juan Pérez" required
                                        value={form.name} onChange={handleChange} />
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="phone">Teléfono / WhatsApp</label>
                                    <input id="phone" name="phone" type="tel" placeholder="+54 9 11 0000-0000" required
                                        value={form.phone} onChange={handleChange} />
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="zone">Zona / Barrio</label>
                                    <input id="zone" name="zone" type="text" placeholder="Ej: Villa Nueva, Centro..." required
                                        value={form.zone} onChange={handleChange} />
                                </div>
                                <div className="contact__field">
                                    <label htmlFor="plan">Plan de interés</label>
                                    <select id="plan" name="plan" required value={form.plan} onChange={handleChange}>
                                        <option value="">Seleccioná un plan</option>
                                        <option value="Básico 100Mbps">Básico — 100 Mbps</option>
                                        <option value="Pro 300Mbps">Pro — 300 Mbps</option>
                                        <option value="Ultra 1Gbps">Ultra — 1 Gbps</option>
                                        <option value="No lo sé aún">No lo sé aún</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn-primary contact__submit">
                                    Enviar por WhatsApp
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
