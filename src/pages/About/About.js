import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className="about-container">
        <h2>{t('about')}</h2>
        <div className="about-content">
          <div className="about-column">
            <h3>{t('aboutColumn1Title')}</h3>
            <p>{t('aboutColumn1Text')}</p>
          </div>
          <div className="about-column">
            <h3>{t('aboutColumn2Title')}</h3>
            <p>{t('aboutColumn2Text1')}</p>
            <ul>
              <li>{t('aboutColumn2ListItem1')}</li>
              <li>{t('aboutColumn2ListItem2')}</li>
            </ul>
          </div>
          <div className="about-column">
            <h3>{t('aboutColumn3Title')}</h3>
            <p>{t('aboutColumn3Text1')}</p>
            <p>{t('aboutColumn3Text2')}</p>
            <p>{t('aboutColumn3Text3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
