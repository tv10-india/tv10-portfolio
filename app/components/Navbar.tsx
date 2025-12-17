'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="main-header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          <Link href="/" className="logo-link">
            <img src="/logo.png" alt="TV10 India Logo" className="logo-img" />
          </Link>
          
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#work" onClick={() => setIsOpen(false)}>Our Work</a></li>
            <li><a href="#mission" onClick={() => setIsOpen(false)}>About Us</a></li>
            <li><a href="#contact" className="btn-youtube" onClick={() => setIsOpen(false)}>Get In Touch</a></li>
          </ul>
          
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </nav>
      </div>
    </header>
  );
}