import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaWhatsapp, FaViber } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-item">
            <h3>{t('contacts')}</h3>
            <p>
              {t('phone')}:{' '}
              <a href="tel:+393277847240" className="contact-link">
                +39 327 7847240
              </a>
            </p>
          </div>
          <div className="footer-item">
            <h3>{t('navigation')}</h3>
            <ul>
              <li>
                <Link to="home" smooth={true} duration={500}>
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500}>
                  {t('servicesHeader')}
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={500}>
                  {t('clientReviews')}
                </Link>
              </li>
              <li>
                <Link to="contacts" smooth={true} duration={500}>
                  {t('contacts')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h3>{t('socialNetworks')}</h3>
            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/people/Irina-Doroshenko/100066278091843/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">
                    <FaFacebook />
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393277847240"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">
                    <FaWhatsapp />
                  </span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="viber://chat?number=%2B393277847240"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">
                    <FaViber />
                  </span>
                  Viber
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>{t('allRightsReserved', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};

export default Footer;
