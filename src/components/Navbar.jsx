// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import './Navbar.css';

const items = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Sobre Gerald.Dev', id: 'sobre' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Contacto', id: 'contacto' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(v => !v);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <img
        src={`${import.meta.env.BASE_URL}img/Logo-negro.webp`}
        alt="Logo Gerald.Dev"
        className="navbar-logo"
        onClick={() => scrollToSection('inicio')}
        style={{ cursor: 'pointer' }}
      />

      <div
        className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        role="button"
        tabIndex={0}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
      >
        <span />
        <span />
        <span />
      </div>

      <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        {items.map(item => (
          <li key={item.id}>
            <button
              className="navbar-button"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
