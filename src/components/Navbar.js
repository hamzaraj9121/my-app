'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

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
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled shadow-sm' : ''}`}
      style={{
        marginBottom: '80px',
        backgroundColor: 'var(--bs-body-bg)',
        transition: 'all 0.3s ease',
        zIndex: 9999,
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand fw-bold" href="/">MH</a>

        <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><Link className="nav-link" href="#About">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#experience">Experience</Link></li>
            <li className="nav-item"><Link className="nav-link" href="#skill">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact">Contact Us</Link></li>
            <div className="nav-item theme-toggle ms-3" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </div>
          </ul>
        </div>

        <div className="d-lg-none d-flex align-items-center gap-3">
          <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </div>
          <button className="btn border-0" type="button" onClick={toggleMenu} aria-label="Toggle navigation">
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="mobile-dropdown d-lg-none"
          style={{
            
            backgroundColor: 'var(--bs-body-bg)',
            borderTop: '2px solid var(--accent)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            padding: '2rem 1rem',
            animation: 'slideDown 0.3s ease',
            position: 'relative',
            zIndex: 10000,
            textAlign: 'center',
            
          }}
        >
          <ul className="list-unstyled mb-0">
            <li style={{ marginBottom: '1rem' }}>
              <Link href="#About" onClick={() => setMenuOpen(false)} style={{ display: 'inline-block', padding: '0.75rem 1.5rem', color: 'var(--foreground)', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', transition: 'all 0.3s ease', borderRadius: '6px', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'rgba(37, 21, 217, 0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--foreground)'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                About
              </Link>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <Link href="#projects" onClick={() => setMenuOpen(false)} style={{ display: 'inline-block', padding: '0.75rem 1.5rem', color: 'var(--foreground)', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', transition: 'all 0.3s ease', borderRadius: '6px', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'rgba(37, 21, 217, 0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--foreground)'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                Projects
              </Link>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <Link href="#experience" onClick={() => setMenuOpen(false)} style={{ display: 'inline-block', padding: '0.75rem 1.5rem', color: 'var(--foreground)', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', transition: 'all 0.3s ease', borderRadius: '6px', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'rgba(37, 21, 217, 0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--foreground)'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                Experience
              </Link>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <Link href="#skill" onClick={() => setMenuOpen(false)} style={{ display: 'inline-block', padding: '0.75rem 1.5rem', color: 'var(--foreground)', textDecoration: 'none', fontSize: '1rem', fontWeight: '500', transition: 'all 0.3s ease', borderRadius: '6px', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.backgroundColor = 'rgba(37, 21, 217, 0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--foreground)'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                Skills
              </Link>
            </li>
            <li style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ display: 'inline-block', padding: '0.9rem 2rem', color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', transition: 'all 0.3s ease', borderRadius: '8px', background: 'linear-gradient(135deg, var(--accent), #6471ff)', boxShadow: '0 4px 12px rgba(37, 21, 217, 0.3)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 21, 217, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 21, 217, 0.3)'; }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}

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
