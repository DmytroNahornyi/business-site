import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

function ContactForm({ service, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Добавлено поле для номера телефона
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Подготовка данных для отправки
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone, // Добавлен номер телефона
      message: formData.message,
    };

    console.log('Отправляемые данные:', templateParams);

    emailjs
      .send(
        'service_70f9gom',
        'template_svec73k',
        templateParams,
        'NpimVglHhVTQss36l'
      )
      .then(
        result => {
          console.log('Успешно отправлено:', result.text);
          setIsSent(true);
          setIsLoading(false);
          setTimeout(() => {
            onClose();
          }, 3000);
        },
        error => {
          console.error('Ошибка при отправке:', error);
          if (error.text) {
            console.error('Текст ошибки:', error.text);
          }
          setError(
            'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.'
          );
          setIsLoading(false);
        }
      );
  };

  if (isSent) {
    return (
      <div className="consultation-form success-message">
        <h2>Спасибо за вашу заявку!</h2>
        <p>Мы свяжемся с вами в ближайшее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="consultation-form">
      <h2>Запись на консультацию</h2>
      {service && !service.includes('Title') && (
        <p className="service-name">{service}</p>
      )}
      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Ваш email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Ваш номер телефона"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Ваше сообщение"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Отправка...' : 'Записаться'}
      </button>
    </form>
  );
}

export default ContactForm;
