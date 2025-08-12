'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light'); // default light mode

  useEffect(() => {
    // Import Bootstrap's JS only in the browser
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute('data-bs-theme', savedTheme);
    } else {
      document.body.setAttribute('data-bs-theme', 'light');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" href="/">Hamza Rajpoot</Link>

        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="btn btn-link text-white me-2"
          style={{ fontSize: '1.2rem' }}
        >
         
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="#about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact Us</Link>
            </li>
               <div className='nav-item theme-toggle' onClick={toggleTheme} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center',margin: '0 10px' }}>
             {theme === 'light' ? <FaMoon /> : <FaSun />}

               </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
