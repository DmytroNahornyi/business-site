// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import './Menu.css';

function Menu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-menu" onClick={onClose}>
        ×
      </button>
      <nav>
        <Link to="/" onClick={onClose}>
          Главная
        </Link>
        <Link to="/about" onClick={onClose}>
          О нас
        </Link>
        <Link to="/services" onClick={onClose}>
          Услуги
        </Link>
        <Link to="/portfolio" onClick={onClose}>
          Портфолио
        </Link>
        <Link to="/contacts" onClick={onClose}>
          Контакты
        </Link>
      </nav>
      <LanguageSwitcher />
    </div>
  );
}

export default Menu;
