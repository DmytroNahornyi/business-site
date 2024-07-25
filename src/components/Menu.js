// src/components/Menu.js

import React from 'react';
import { Link } from 'react-scroll';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import './Menu.css';
import closeIcon from '../assets/close-icon.svg'; // Убедитесь, что у вас есть этот файл

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <button className="menu-close" onClick={onClose}>
        <img src={closeIcon} alt="Close menu" />
      </button>
      <nav className="menu-nav">
        <Link to="home" smooth={true} duration={500} onClick={onClose}>
          Главная
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={onClose}>
          О нас
        </Link>
        <Link to="services" smooth={true} duration={500} onClick={onClose}>
          Услуги
        </Link>
        <Link to="portfolio" smooth={true} duration={500} onClick={onClose}>
          Отзывы клиентов
        </Link>
        <Link to="contacts" smooth={true} duration={500} onClick={onClose}>
          Контакты
        </Link>
      </nav>
      <LanguageSwitcher className="menu-lang-switcher" />
    </div>
  );
}

export default Menu;
