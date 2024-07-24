// src/components/Header/Header.js

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Menu from '../Menu';
import './Header.css';
import logo from '../../assets/logo.jpg'; // Предполагается, что у вас есть файл логотипа

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="desktop-nav">
          <Link to="home" smooth={true} duration={500}>
            Главная
          </Link>
          <Link to="about" smooth={true} duration={500}>
            О нас
          </Link>
          <Link to="services" smooth={true} duration={500}>
            Услуги
          </Link>
          <Link to="portfolio" smooth={true} duration={500}>
            Портфолио
          </Link>
          <Link to="contacts" smooth={true} duration={500}>
            Контакты
          </Link>
        </nav>
        <LanguageSwitcher />
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
}

export default Header;
