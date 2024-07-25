// src/components/Home/Home.js

import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

function Home() {
  const { t } = useTranslation();
  const homeRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#home' && homeRef.current) {
      const headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo(0, homeRef.current.offsetTop - headerHeight);
    }
  }, []);

  const handleWhatsAppClick = () => {
    window.open(t('whatsappUrl'), '_blank');
  };

  return (
    <section id="home" className="home section" ref={homeRef}>
      <div className="container">
        <h1>{t('homeTitle')}</h1>
        <h2>{t('homeDescription')}</h2>
        <p>{t('homeDescriptionExtended')}</p>
        <p>{t('homeDescriptionExtended1')}</p>
        <p>{t('homeDescriptionExtended11')}</p>
        <p>{t('homeDescriptionExtended2')}</p>
        <ul>
          {/* <li>{t('homeDescriptionExtended3')}</li> */}
          <li>{t('homeDescriptionExtended4')}</li>
          <li>{t('homeDescriptionExtended5')}</li>
          <li>{t('homeDescriptionExtended6')}</li>
        </ul>
        <button className="cta-button" onClick={handleWhatsAppClick}>
          {t('learnMore')}
        </button>
      </div>
    </section>
  );
}

export default Home;
