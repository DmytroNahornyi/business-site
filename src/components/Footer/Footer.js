import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Телефон: +39 (XXX) XXX-XX-XX</p>
          <p>Email: info@example.com</p>
          <p>Адрес: г. Ваш Город, ул. Примерная, д. 123</p>
        </div>
        <div className="footer-section">
          <h3>Навигация</h3>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                О нас
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>
                Услуги
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={500}>
                Отзывы клиентов
              </Link>
            </li>
            <li>
              <Link to="contacts" smooth={true} duration={500}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Социальные сети</h3>
          <ul className="social-links">
            <li>
              <a
                href="https://facebook.com"
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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon">
                  <FaInstagram />
                </span>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Ваша Компания. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
