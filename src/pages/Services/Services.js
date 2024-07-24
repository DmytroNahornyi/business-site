import React from 'react';
import { useTranslation } from 'react-i18next';
import './Services.css';

function Services() {
  const { t } = useTranslation();

  const services = [
    { title: 'service1Title', description: 'service1Description' },
    { title: 'service2Title', description: 'service2Description' },
    { title: 'service3Title', description: 'service3Description' },
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2>{t('services')}</h2>
        <h3>{t('service1Question')}</h3>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <h3>{t(service.title)}</h3>
              <p>{t(service.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
