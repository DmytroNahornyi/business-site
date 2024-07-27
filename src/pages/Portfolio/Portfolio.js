import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';
import '../../styles/Section.css';

function Portfolio() {
  const { t } = useTranslation();
  const portfolioRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#portfolio' && portfolioRef.current) {
      const headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo(0, portfolioRef.current.offsetTop - headerHeight);
    }
  }, []);

  const reviews = t('reviews', { returnObjects: true });

  return (
    <section id="portfolio" className="portfolio section" ref={portfolioRef}>
      <div className="container">
        <h2>{t('clientReviews')}</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="stars">★★★★★</div>
              <h3>
                {review.name}, {review.age}
              </h3>
              <p className="city">{review.city}</p>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
