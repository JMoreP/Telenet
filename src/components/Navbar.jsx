import './Navbar.css'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const links = ['Planes', 'Beneficios', 'Cobertura', 'FAQ']

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                {/* Logo */}
                <a href="#hero" className="navbar__logo" onClick={() => setMenuOpen(false)}>
                    <img src="/telenet.jpg" alt="Telenet Logo" className="navbar__logo-img" />
                    <span className="navbar__brand">Tele<span>net</span></span>
                </a>

                {/* Desktop Nav */}
                <nav className="navbar__links">
                    {links.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="navbar__link">
                            {link}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <a href="#contacto" className="btn-primary navbar__cta">
                    Contratar Ahora
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>

                {/* Hamburger */}
                <button
                    className={`navbar__burger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
                {links.map(link => (
                    <a key={link} href={`#${link.toLowerCase()}`} className="navbar__mobile-link"
                        onClick={() => setMenuOpen(false)}>
                        {link}
                    </a>
                ))}
                <a href="#contacto" className="btn-primary" onClick={() => setMenuOpen(false)}>
                    Contratar Ahora
                </a>
            </div>
        </header>
    )
}
