import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2>{t('about')}</h2>
        <p>{t('aboutDescription')}</p>
      </div>
    </section>
  );
}

export default About;
