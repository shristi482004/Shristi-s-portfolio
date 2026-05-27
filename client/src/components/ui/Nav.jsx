import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Nav.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          return;
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav-wrapper ${scrolled ? 'nav-scrolled' : ''}`}>
      <nav className="nav-bar" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <a href="#hero" className="nav-logo" aria-label="Home">
          <span className="nav-logo-box">shristi</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links" role="list">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${active === link.href.slice(1) ? 'nav-link--active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me */}
        <a href="#contact" className="nav-hire pill-btn" style={{ background: 'var(--accent-yellow)', color: 'var(--ink-black)' }}>
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`ham-line ${menuOpen ? 'ham-open' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'ham-open' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'ham-open' : ''}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <ul role="list">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-menu-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="pill-btn mobile-hire" onClick={() => setMenuOpen(false)}
                  style={{ background: 'var(--accent-yellow)', color: 'var(--ink-black)' }}>
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
