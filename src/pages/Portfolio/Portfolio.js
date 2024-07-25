import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

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

  const projects = [
    { title: 'project1Title', description: 'project1Description' },
    { title: 'project2Title', description: 'project2Description' },
    { title: 'project3Title', description: 'project3Description' },
  ];

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2>{t('portfolio')}</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <h3>{t(project.title)}</h3>
              <p>{t(project.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
