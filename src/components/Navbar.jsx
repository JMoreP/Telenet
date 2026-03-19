import './Navbar.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
        <motion.header
            className={`navbar ${scrolled || menuOpen ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container navbar__inner">
                {/* Logo */}
                <a href="#hero" className="navbar__logo" onClick={() => setMenuOpen(false)}>
                    <img src="/telenet.png" alt="Telenet Logo" className="navbar__logo-img" />
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
                <a href="#contacto" className="btn-17 navbar__cta">
                    <span className="text-container">
                        <span className="text">Contratar Ahora</span>
                    </span>
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
                <a href="#contacto" className="btn-17" onClick={() => setMenuOpen(false)}>
                    <span className="text-container">
                        <span className="text">Contratar Ahora</span>
                    </span>
                </a>
            </div>
        </motion.header>
    )
}
