// src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Menu from '../Menu';
import './Header.css';
import logo from '../../assets/logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation(); // Добавьте эту строку

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className={`logo ${isLoaded ? 'loaded' : ''}`}>
          <img src={logo} alt="Logo" />
        </div>
        <nav className="desktop-nav">
          <Link to="home" smooth={true} duration={500}>
            {t('home')}
          </Link>
          <Link to="about" smooth={true} duration={500}>
            {t('about')}
          </Link>
          <Link to="services" smooth={true} duration={500}>
            {t('servicesHeader')}
          </Link>
          <Link to="portfolio" smooth={true} duration={500}>
            {t('clientReviews')}
          </Link>
          <Link to="contacts" smooth={true} duration={500}>
            {t('contacts')}
          </Link>
        </nav>
        <div className="header-right">
          <LanguageSwitcher className="desktop-lang-switcher" />
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
}

export default Header;
