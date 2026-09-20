import { useState, useEffect } from 'react';
import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container navbar-container">
          <a href="#" className="navbar-brand" aria-label="Akshita Chaudhary - Home">
            {portfolio.personal.name}
          </a>

          <div className="navbar-desktop">
            <ul className="navbar-nav">
              {portfolio.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="navbar-link"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={portfolio.assets.resume}
              className="btn btn-primary navbar-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          <button
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="navbar-toggle-icon"></span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} role="dialog" aria-modal="true">
        <button
          className="mobile-menu-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          {portfolio.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu-link"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`https://${portfolio.personal.github}`}
            className="mobile-menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={`https://${portfolio.personal.linkedin}`}
            className="mobile-menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={portfolio.assets.resume}
            className="mobile-menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a
            href={portfolio.assets.resume}
            className="mobile-menu-link"
            download
          >
            Download Resume
          </a>
        </nav>
      </div>
    </>
  );
}
