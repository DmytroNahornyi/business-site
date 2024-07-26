import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaViber } from 'react-icons/fa';
import './Home.css';
import '../../styles/Section.css';
import image1 from '../../assets/psychology1-min.jpg';
import image2 from '../../assets/psychology5-min.jpg';

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
    window.open(`https://wa.me/393277847240`, '_blank');
  };

  const handleViberClick = () => {
    window.open(`viber://chat?number=%2B393277847240`, '_blank');
  };

  return (
    <section id="home" className="section" ref={homeRef}>
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1>{t('homeTitle')}</h1>
            <h2>{t('homeDescription')}</h2>
            <p>{t('homeDescriptionExtended')}</p>
            <p>{t('homeDescriptionExtended1')}</p>
            <p>{t('homeDescriptionExtended11')}</p>
            <p>{t('homeDescriptionExtended2')}</p>
            <ul>
              <li>{t('homeDescriptionExtended4')}</li>
              <li>{t('homeDescriptionExtended5')}</li>
              <li>{t('homeDescriptionExtended6')}</li>
            </ul>
            <div className="cta-buttons">
              <button
                className="cta-button whatsapp-button"
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp /> {t('learnMore')}
              </button>
              <button
                className="cta-button viber-button"
                onClick={handleViberClick}
              >
                <FaViber /> {t('learnMore1')}
              </button>
            </div>
          </div>
          <div className="home-image">
            <div className="image-container">
              <div className="image-wrapper">
                <img src={image1} alt="Home 1" />
              </div>
              <div className="image-wrapper">
                <img src={image2} alt="Home 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
