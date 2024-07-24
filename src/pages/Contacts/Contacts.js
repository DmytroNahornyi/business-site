import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contacts.css';

function Contacts() {
  const { t } = useTranslation();

  return (
    <section id="contacts" className="contacts section">
      <div className="container">
        <h2>{t('contacts')}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t('contactInfo')}</h3>
            <p>
              {t('address')}: {t('addressValue')}
            </p>
            <p>
              {t('phone')}: {t('phoneValue')}
            </p>
            <p>
              {t('email')}: {t('emailValue')}
            </p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder={t('name')} required />
            <input type="email" placeholder={t('email')} required />
            <input type="Number" placeholder={t('number')} required />
            <textarea placeholder={t('message')} required></textarea>
            <button type="submit">{t('send')}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
