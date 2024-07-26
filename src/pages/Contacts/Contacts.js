import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import './Contacts.css';
import contactImage from '../../assets/3.jpg';

function Contacts() {
  const { t } = useTranslation();
  const contactsRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contacts' && contactsRef.current) {
      const headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo(0, contactsRef.current.offsetTop - headerHeight);
    }
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    emailjs
      .send(
        'service_70f9gom',
        'template_svec73k',
        formData,
        'NpimVglHhVTQss36l'
      )
      .then(
        result => {
          console.log('Успешно отправлено:', result.text);
          setIsSent(true);
          setIsLoading(false);
          setTimeout(() => {
            setIsSent(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
          }, 3000);
        },
        error => {
          console.error('Ошибка при отправке:', error);
          setError(t('messageSentError'));
          setIsLoading(false);
        }
      );
  };

  return (
    <section id="contacts" className="section" ref={contactsRef}>
      <div className="contacts-container">
        <div className="contacts-content">
          <div className="contacts-form">
            {isSent ? (
              <div className="success-message">
                <h2>{t('messageSentSuccess')}</h2>
                <p>{t('thankYouMessage')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="consultation-form">
                <h2>{t('contactFormTitle')}</h2>
                <input
                  type="text"
                  name="name"
                  placeholder={t('name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t('phone')}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder={t('message')}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" disabled={isLoading}>
                  {isLoading ? t('sending') : t('send')}
                </button>
              </form>
            )}
          </div>
          <div className="contacts-image">
            <div className="image-wrapper">
              <img src={contactImage} alt="Contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
