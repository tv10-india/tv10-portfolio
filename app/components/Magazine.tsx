'use client';

import React from 'react';

export default function Magazine() {
  return (
    <section id="magazine" className="magazine-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Our Monthly Edition</h2>
        
        <div className="magazine-container animate-on-scroll">
          {/* Left Side: The Cover Image */}
          <div className="magazine-visual">
            <div className="magazine-cover-wrapper">
              {/* Ensure you have the image at public/magazine/cover.jpg */}
              <img src="/magazine/cover.png" alt="Samvaad Magazine Cover" className="magazine-cover" />
              <div className="cover-glow"></div>
            </div>
          </div>

          {/* Right Side: The Content */}
          <div className="magazine-content">
            <h3>TV10 Magazine: Samvaad</h3>
            <p className="magazine-desc">
              Explore the mystical valleys and vibrant culture of Uttarakhand. 
              Our latest edition brings you the untold stories of the hills, 
              spiritual wisdom, and a celebration of our local heritage.
            </p>
            
            <div className="magazine-features">
              <div className="mag-feature">
                <i className="fas fa-book-open"></i> <span>Stories of Uttarakhand</span>
              </div>
              <div className="mag-feature">
                <i className="fas fa-om"></i> <span>Spiritual Insights</span>
              </div>
              <div className="mag-feature">
                <i className="fas fa-file-pdf"></i> <span>High Quality PDF</span>
              </div>
            </div>

            <div className="magazine-actions">
              <a 
                href="https://drive.google.com/file/d/1dh-6eKDB3GXcv4LgCAkHWakKDXyCthq5/view?usp=sharing" 
                download="TV10-Samvaad-Uttarakhand.pdf" 
                className="btn btn-magazine"
              >
                <i className="fas fa-download"></i> Download PDF
              </a>
              
              <a 
                href="https://drive.google.com/file/d/1dh-6eKDB3GXcv4LgCAkHWakKDXyCthq5/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-mag"
              >
                <i className="fas fa-eye"></i> Read Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 