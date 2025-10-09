'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false); // for mobile dropdown

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.setAttribute('data-bs-theme', savedTheme);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`navbar  navbar-expand-lg fixed-top ${scrolled ? 'scrolled shadow-sm' : ''}`}
      style={{
        marginBottom: '80px',
        backgroundColor: 'var(--bs-body-bg)',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" href="/">Muhammad Hamza</Link>

        {/* ✅ Desktop Menu */}
        <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><Link className="nav-link" href="#About">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#experience">Experience</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#skill">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact">Contact Us</Link></li>
            <div
              className="nav-item theme-toggle ms-3"
              onClick={toggleTheme}
              style={{ cursor: 'pointer' }}
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </div>
          </ul>
        </div>

        {/* ✅ Mobile Icons */}
        <div className="d-lg-none d-flex align-items-center gap-3">
          <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </div>
          <button
            className="btn border-0"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown (below navbar) */}
      {menuOpen && (
        <div
          className="mobile-dropdown d-lg-none text-center"
          style={{
            backgroundColor: 'var(--bs-body-bg)',
            borderTop: '1px solid #ddd',
            boxShadow: '0 4px 10px rgba(128, 100, 231, 0.1)',
            padding: '1rem 0',
            animation: 'slideDown 0.3s ease',
          }}
        >
          <ul className="list-unstyled mb-0">
            <li className="my-2">
              <Link href="#About" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="my-2">
              <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            </li>
            <li className="my-2">
              <Link href="#experience" onClick={() => setMenuOpen(false)}>Experience</Link>
            </li>
            <li className="my-2">
              <Link href="#skill" onClick={() => setMenuOpen(false)}>Skills</Link>
            </li>
            <li className="my-2">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
