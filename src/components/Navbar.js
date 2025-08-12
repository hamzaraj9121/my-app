'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" href="/">Hamza Rajpoot</Link>
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
              <Link className="nav-link" href="experience">Experience</Link> {/* Added Experience Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="skills">Skills</Link> {/* Added Experience Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
