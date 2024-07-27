// src/components/Menu.js

import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next'; // Добавлен импорт useTranslation
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import './Menu.css';
import closeIcon from '../assets/close-icon.svg';

function Menu({ isOpen, onClose }) {
  const { t } = useTranslation(); // Добавлено использование хука useTranslation

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <button className="menu-close" onClick={onClose}>
        <img src={closeIcon} alt="Close menu" />
      </button>
      <nav className="menu-nav">
        <Link to="home" smooth={true} duration={500} onClick={onClose}>
          {t('home')}
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={onClose}>
          {t('about')}
        </Link>
        <Link to="services" smooth={true} duration={500} onClick={onClose}>
          {t('servicesHeader')}
        </Link>
        <Link to="portfolio" smooth={true} duration={500} onClick={onClose}>
          {t('clientReviews')}
        </Link>
        <Link to="contacts" smooth={true} duration={500} onClick={onClose}>
          {t('contacts')}
        </Link>
      </nav>
      <LanguageSwitcher className="menu-lang-switcher" />
    </div>
  );
}

export default Menu;
