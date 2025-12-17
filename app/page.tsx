'use client'; 

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import React, { CSSProperties } from 'react';

export default function Home() {
  
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="video-background">
            <video autoPlay muted loop playsInline src="https://assets.mixkit.co/videos/preview/mixkit-ink-in-water-264-large.mp4"></video>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              <span>We</span>{' '}
              <span>Build</span>{' '}
              <span>Brands</span>{' '}
              <span>That Resonate.</span>
            </h1>
            <p className="hero-subtitle">A full-service media network delivering strategy, creativity, and impactful results.</p>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="universe-section">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Our Core Services</h2>
                <div className="universe-grid">
                    <ServiceCard icon="fa-bullhorn" title="Digital Marketing" desc="Comprehensive strategies to boost your online presence." delay="0s" />
                    <ServiceCard icon="fa-chalkboard-teacher" title="Media Consultancy" desc="Expert guidance to help you navigate the media landscape." delay="0.2s" />
                    <ServiceCard icon="fa-newspaper" title="Press Release & PR" desc="Crafting compelling narratives to get your brand attention." delay="0.4s" />
                    <ServiceCard icon="fa-calendar-alt" title="Event Management" desc="End-to-end event planning that creates memorable experiences." delay="0.6s" />
                    <ServiceCard icon="fa-palette" title="Branding" desc="Developing distinctive brand identities." delay="0.8s" />
                    <ServiceCard icon="fa-video" title="Content Production" desc="Professional video content, documentaries, and films." delay="1.0s" />
                </div>
            </div>
        </section>

        {/* WORK SECTION - UPDATED STATS */}
        <section id="work" className="featured-section">
            <div className="container">
                <div className="featured-content">
                    <div className="featured-text animate-on-scroll">
                        <div className="success-badge">
                            <i className="fab fa-youtube"></i>
                            <span>YouTube Success Story</span>
                        </div>
                        <h2 className="section-title-left">Channel Growth Excellence</h2>
                        <h3>TV10 India YouTube Journey</h3>
                        <div className="metrics-grid">
                            <div className="metric-item">
                                <div className="metric-number">49K+</div>
                                <div className="metric-label">Subscribers</div>
                            </div>
                            <div className="metric-item">
                                <div className="metric-number">1.5Cr+</div>
                                <div className="metric-label">Total Views</div>
                            </div>
                            <div className="metric-item">
                                <div className="metric-number">30K+</div>
                                <div className="metric-label">Monthly Visits</div>
                            </div>
                        </div>
                        <p>Through strategic content planning and data-driven optimization, we've built a thriving YouTube community.</p>
                        <div className="success-actions">
                            <a href="https://www.youtube.com/@TV10India" target="_blank" className="btn btn-youtube-channel">
                                <i className="fab fa-youtube"></i> Visit Our Channel
                            </a>
                            <a href="#contact" className="btn btn-outline">Replicate This Success</a>
                        </div>
                    </div>
                    
                    <div className="featured-visual animate-on-scroll" style={{ '--delay': '0.2s' } as CSSProperties}>
                        <div className="youtube-success-visual">
                            <div className="visual-graphic">
                                <div className="graphic-item subscribers">
                                    <i className="fas fa-users"></i>
                                    <span>49K+</span>
                                    <p>Subscribers</p>
                                </div>
                                <div className="graphic-item views">
                                    <i className="fas fa-eye"></i>
                                    <span>1.5Cr</span>
                                    <p>Total Views</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Gallery />
        
        <section id="mission" className="mission-section">
            <div className="container">
                 <div className="mission-content animate-on-scroll">
                    <h2>We combine data-driven strategy with compelling storytelling to elevate your brand above the noise.</h2>
                </div>
            </div>
        </section>

        <section id="contact" className="featured-section" style={{ paddingTop: '60px' }}>
             <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title animate-on-scroll">Let's Create Together</h2>
                <a href="mailto:tvtenindia@gmail.com" className="btn animate-on-scroll" style={{ '--delay': '0.4s' } as CSSProperties}>tvtenindia@gmail.com</a>
            </div>
        </section>
      </main>
      
      <footer>
        <div className="container">
            <div className="footer-info">
                 <p>&copy; 2025 TV10 India. All Rights Reserved.</p>
                 <a href="https://tv10india.com/" target="_blank" className="footer-website-link">tv10india.com</a>
            </div>
            <div className="social-links">
                <a href="https://www.instagram.com/tv10.india/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/@TV10India" target="_blank"><i className="fab fa-youtube"></i></a>
            </div>
        </div>
    </footer>
    </>
  );
}

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  delay: string;
}

function ServiceCard({ icon, title, desc, delay }: ServiceCardProps) {
  return (
    <div className="universe-card animate-on-scroll" style={{ '--delay': delay } as CSSProperties}>
        <i className={`fas ${icon}`}></i>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  );
}