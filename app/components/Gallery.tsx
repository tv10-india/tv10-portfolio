'use client';

import { useState, MouseEvent } from 'react';

interface GalleryItem {
  src: string;
  title: string;
  desc: string;
  client: string;
}

const galleryItems: GalleryItem[] = [
  { src: "/img/r3.jpg", title: "Rishikesh Veerta Samman", desc: "Honoring community service.", client: "Amar Ujala" },
  { src: "/img/r1.jpg", title: "Veerta Samman Ceremony", desc: "Recognizing local heroes.", client: "Amar Ujala" },
  { src: "/img/r2.jpg", title: "Main Stage Setup", desc: "Professional event staging.", client: "Amar Ujala" },
  { src: "/img/g2.jpg", title: "Bhavishya Jyoti", desc: "Award ceremony for students.", client: "GRD Institute" },
  { src: "/img/g3.jpg", title: "Award Distribution", desc: "Guests at registration.", client: "GRD Institute" },
  { src: "/img/g1.jpg", title: "Cultural Program", desc: "Red carpet walkway.", client: "GRD Institute" },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = (e?: MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = (e?: MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="events-gallery">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Event Highlights</h2>
        <p className="gallery-subtitle animate-on-scroll">Capturing memorable moments from our successful events</p>
        
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item animate-on-scroll" onClick={() => openLightbox(index)}>
              <img src={item.src} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="event-client">Client: {item.client}</span>
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div className="lightbox" style={{ display: 'flex' }} onClick={() => setLightboxOpen(false)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>&times;</button>
              <img src={galleryItems[currentIndex].src} alt={galleryItems[currentIndex].title} />
              <div className="lightbox-info">
                <h3 className="lightbox-title">{galleryItems[currentIndex].title}</h3>
                <p className="lightbox-description">{galleryItems[currentIndex].desc}</p>
              </div>
              <div className="lightbox-nav">
                <button className="lightbox-prev" onClick={prevImage}><i className="fas fa-chevron-left"></i></button>
                <button className="lightbox-next" onClick={nextImage}><i className="fas fa-chevron-right"></i></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}