import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';
import '../../styles/Section.css';

function Portfolio() {
  const { t } = useTranslation();
  const portfolioRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#portfolio' && portfolioRef.current) {
      const headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo(0, portfolioRef.current.offsetTop - headerHeight);
    }
  }, []);

  const reviews = [
    {
      name: 'Анна',
      age: 28,
      city: 'Минкс',
      text: 'Благодаря онлайн-терапии я смогла справиться со своей тревожностью. Спасибо за поддержку!',
    },
    {
      name: 'Игорь',
      age: 35,
      city: 'Одесса',
      text: 'Удобно и эффективно. Онлайн-формат позволил мне получить помощь, не выходя из дома.',
    },
    {
      name: 'Елена',
      age: 42,
      city: 'Екатеринбург',
      text: 'Профессиональный подход и внимательность к деталям. Очень довольна результатами терапии.',
    },
    {
      name: 'Dmitri',
      age: 31,
      city: 'Milano',
      text: 'La consulenza online mi ha aiutato a superare una crisi nella mia relazione. Grazie mille!',
    },
    {
      name: 'Olga',
      age: 39,
      city: 'Napoli',
      text: 'È incredibile quanto possa essere efficace la terapia anche in un formato online. Lo consiglio!',
    },
    {
      name: 'Сергій',
      age: 45,
      city: 'Львів',
      text: 'Вдячний за допомогу в боротьбі з вигоранням на роботі. Тепер почуваюся набагато краще.',
    },
  ];

  return (
    <section id="portfolio" className="portfolio section" ref={portfolioRef}>
      <div className="container">
        <h2>{t('clientReviews')}</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="stars">★★★★★</div>
              <h3>
                {review.name}, {review.age}
              </h3>
              <p className="city">{review.city}</p>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
