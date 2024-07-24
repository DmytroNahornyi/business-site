import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

function Home() {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    window.open(t('whatsappUrl'), '_blank');
  };

  return (
    <section id="home" className="home section">
      <div className="container">
        <h1>{t('homeTitle')}</h1>
        <h2>{t('homeDescription')}</h2>
        <p>{t('homeDescriptionExtended')}</p>
        <p>{t('homeDescriptionExtended1')}</p>
        <p>{t('homeDescriptionExtended2')}</p>
        <ul>{t('homeDescriptionExtended3')}</ul>
        <li>{t('homeDescriptionExtended4')}</li>
        <li>{t('homeDescriptionExtended5')}</li>
        <li>{t('homeDescriptionExtended6')}</li>
        <button className="cta-button" onClick={handleWhatsAppClick}>
          {t('learnMore')}
        </button>
      </div>
    </section>
  );
}

export default Home;
