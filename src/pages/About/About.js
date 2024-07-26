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
            <h3>Анонимная психологическая помощь онлайн</h3>
            <p>
              Онлайн-терапия — это способ общения с квалифицированным
              дипломированным специалистом в области психического здоровья по
              телефону или компьютеру. Как правило, общение проводится
              посредством видеозвонков в мессенджерах, в онлайн-чатах, либо с
              помощью обычных телефонных звонков. В то же время, психологи
              онлайн являются специалистами в области психического здоровья, и
              как правило, проводят очные консультации аналогичные онлайн
              встречам.
            </p>
          </div>
          <div className="about-column">
            <h3>Что такое онлайн-терапия?</h3>
            <p>
              Онлайн-терапия отличается от очной терапии несколькими нюансами:
            </p>
            <ul>
              <li>
                В очной терапии нужно добираться в кабинет психотерапевта,
                тратить деньги и время на дорогу туда и обратно. В
                онлайн-терапии достаточно нажать кнопку вызова в гаджете, и вы
                уже на связи, при этом не важно, где вы сейчас находитесь: в
                кафе, дома, в машине, в парке, дома, на отдыхе, в командировке
                или в другой стране.
              </li>
              <li>
                Если в очной терапии должно пройти какое-то время на вхождение в
                особый контакт (рапорт) специалиста и клиента, часто при этом
                клиент смотрит в сторону, в пол, то сидя перед экраном телефона
                или компьютера, психотерапевт и его клиент смотрят друг другу в
                глаза, что обеспечивает быстрое вхождение в контакт и
                возможность более глубокой психологической работы.
              </li>
            </ul>
          </div>
          <div className="about-column">
            <h3>Каковы преимущества терапии у психотерапевта онлайн?</h3>
            <p>
              Онлайн-терапия имеет некоторые преимущества перед традиционной
              терапией. Одни не любят тратить время на дорогу. Другие понимают,
              что им не нужно думать с кем оставить детей. Для третьих удобней
              общаться с соотечественником на русском языке, проживая в других
              странах.
            </p>
            <p>
              К тому же, стоимость услуг очного психолога, как правило, выше
              консультации специалиста, работающего онлайн.
            </p>
            <p>
              Интернет-психолог может подойти практически всем, кто ищет
              эмоциональную поддержку. Общие проблемы, которые рассматривает
              специалист, включают работу со стрессом, беспокойством,
              депрессией, проблемами в отношениях, травмами, кризисом, утратой,
              проблемами сна и другими психологическими проблемами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
