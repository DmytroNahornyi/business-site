import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm({ service, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/mdkngzdl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, service }),
      });

      if (response.ok) {
        setIsSent(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        throw new Error('Ошибка при отправке формы');
      }
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      setError(
        'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.'
      );
    } finally {
      setIsLoading(false);
    }
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
    <form
      onSubmit={handleSubmit}
      className="consultation-form"
      action="https://formspree.io/f/mdkngzdl"
      method="POST"
    >
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
