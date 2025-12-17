'use client';

import React, { CSSProperties } from 'react';

export default function Magazine() {
  return (
    <section id="magazine" className="magazine-section">
      <div className="container">
        {/* UPDATED TITLE */}
        <h2 className="section-title animate-on-scroll">Special Edition</h2>
        
        <div className="magazine-container animate-on-scroll">
          {/* Left Side: The Cover Image */}
          <div className="magazine-visual">
            <div className="magazine-cover-wrapper">
              <img src="/magazine/cover.jpg" alt="Samvaad Magazine Cover" className="magazine-cover" />
              <div className="cover-glow"></div>
            </div>
          </div>

          {/* Right Side: The Content */}
          <div className="magazine-content">
            <h3>TV10 Magazine: Samvaad</h3>
            <p className="magazine-desc">
              Explore the mystical valleys and vibrant culture of Uttarakhand. 
              This special edition brings you untold stories of the hills, 
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
                /* Replace this with your Google Drive Link */
                href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-magazine"
              >
                <i className="fas fa-download"></i> Download PDF
              </a>
              
              <a 
                href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing" 
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
