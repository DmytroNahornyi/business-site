// src/components/LanguageSwitcher.js

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher({ className }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className={`language-switcher ${className}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {i18n.language.toUpperCase()}
      </button>
      {isOpen && (
        <ul>
          <li onClick={() => changeLanguage('ru')}>RU</li>
          <li onClick={() => changeLanguage('en')}>EN</li>
          <li onClick={() => changeLanguage('it')}>IT</li>
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
