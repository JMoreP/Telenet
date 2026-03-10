import './FAQ.css'
import { useState } from 'react'

const faqs = [
    {
        q: '¿Qué es la fibra óptica y qué ventajas tiene?',
        a: 'La fibra óptica transmite datos a través de luz en lugar de señales eléctricas, lo que permite velocidades mucho más altas, menor latencia y mayor estabilidad que el ADSL o el cable coaxial tradicional.',
    },
    {
        q: '¿Cuánto tiempo tarda la instalación?',
        a: 'En menos de 48 horas hábiles desde la contratación, nuestro equipo técnico realiza la instalación completa en tu domicilio, sin costo adicional.',
    },
    {
        q: '¿Hay límite de datos o cuota de descarga?',
        a: 'No. Todos nuestros planes son de datos ilimitados. Podés navegar, ver streaming en 4K y trabajar remotamente sin preocuparte por límites.',
    },
    {
        q: '¿Puedo cambiar de plan después de contratar?',
        a: 'Por supuesto. Podés hacer upgrade o downgrade de tu plan en cualquier momento sin penalización. El cambio se aplica desde el siguiente ciclo de facturación.',
    },
    {
        q: '¿Incluyen el router WiFi?',
        a: 'Sí, todos los planes incluyen un router de última generación. El plan Pro incluye WiFi 6 y el Ultra incluye WiFi 6E con cobertura extendida.',
    },
    {
        q: '¿Hay contrato de permanencia?',
        a: 'No existe permanencia mínima. Podés cancelar el servicio cuando quieras sin cargos por corte anticipado.',
    },
]

export default function FAQ() {
    const [open, setOpen] = useState(null)

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="faq__header">
                    <div className="section-badge">
                        <span>❓</span> Preguntas Frecuentes
                    </div>
                    <h2 className="section-title">
                        Respondemos tus <span>dudas</span>
                    </h2>
                    <p className="section-subtitle">
                        Si no encontrás lo que buscás, escribinos al WhatsApp y te respondemos al instante.
                    </p>
                </div>

                <div className="faq__list">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`faq__item ${open === i ? 'faq__item--open' : ''}`}
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <div className="faq__question">
                                <span>{faq.q}</span>
                                <div className="faq__toggle">
                                    <span>{open === i ? '−' : '+'}</span>
                                </div>
                            </div>
                            <div className="faq__answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
