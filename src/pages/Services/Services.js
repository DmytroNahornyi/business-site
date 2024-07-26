import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../../utils/ContactForm';
import './Services.css';

function Services() {
  const { t } = useTranslation();
  const servicesRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#services' && servicesRef.current) {
      const headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo(0, servicesRef.current.offsetTop - headerHeight);
    }
  }, []);

  const services = [
    {
      id: 1,
      title: 'service1Title',
      description: 'service1Description',
      icon: '🌟',
    },
    {
      id: 2,
      title: 'service2Title',
      description: 'service2Description',
      icon: '💼',
    },
    {
      id: 3,
      title: 'service3Title',
      description: 'service3Description',
      icon: '🚀',
    },
  ];

  const handleConsultation = service => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="services" className="section" ref={servicesRef}>
        <div className="container">
          <h2>{t('services')}</h2>
          <h3>{t('service1Question')}</h3>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-item">
                <div className="service-icon">{service.icon}</div>
                <h3>{t(service.title)}</h3>
                <p>{t(service.description)}</p>
                <button onClick={() => handleConsultation(service)}>
                  {t('Подать заявку')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isModalOpen && selectedService && (
        <div className="modal-overlay">
          <div className={`modal service-${selectedService.id}`}>
            <div className="modal-content">
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              <ContactForm
                service={t(selectedService.title)}
                onClose={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
