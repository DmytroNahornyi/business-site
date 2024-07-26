// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        homeTitle: 'Добро пожаловать! ',
        homeDescription: `Психолог онлайн в Италии.
          Видеоконсультации с русскоязычным психологом (психотерапевтом)`,
        homeDescriptionExtended: `
      Психолог онлайн может стать хорошим вариантам для решения психологических проблем.`,
        homeDescriptionExtended1: `
      Большой опыт очного и онлайн консультирования клиентов по различным вопросам позволяют психологам нашего сервиса оказывать профессиональную психологическую помощь дистанционно.
      .`,
        homeDescriptionExtended11: `
        Цель сервиса test.com - помочь вам быстро справится с трудными жизненными ситуациями и внутренними проблемами`,
        homeDescriptionExtended2: `Онлайн консультация с психологом (психотерапевтом) - это удобно:`,
        homeDescriptionExtended4: `Вы экономите время и деньги на дорогу`,
        homeDescriptionExtended5: `
      Находясь в привычной обстановке, вам будет легче расслабиться и раскрыться`,
        homeDescriptionExtended6: `
      Конфиденциальность – вы не столкнетесь с другими клиентами и посторонними людьми`,
        learnMore: 'Написать в WhatsApp',
        whatsappUrlWhatsApp: 'https://wa.me/+393277847240',
        learnMore1: 'Написать в Viber',
        whatsappUrlViber: 'viber://chat?number=%2B+393277847240',
        about: 'О нас',
        aboutDescription:
          'IT - это команда профессионалов, специализирующихся на разработке веб-сайтов, мобильных приложений и предоставлении IT-консалтинга. Мы стремимся к инновациям и качеству в каждом проекте.',
        services: 'Вы заслуживаете счастья!',
        service1Question: 'Какой тип консультации вам нужен?',
        service1Title: 'Индивидуальная',
        service1Description: 'Индивидуальная консультация онлайн для взрослых.',
        service2Title: 'Семейная',
        service2Description: 'Консультация онлайн для семей и пар.',
        service3Title: 'Для подростка',
        service3Description:
          'Консультация онлайн для подростов от 13 до 17 лет.',
        portfolio: 'Отзывы клиентов',
        project1Title: 'В разработке',
        project1Description: 'В разработке.',
        project2Title: 'В разработке',
        project2Description: 'В разработке.',
        project3Title: 'В разработке',
        project3Description: 'В разработке.',
        contacts: 'Контакты',
        contactInfo: 'Контактная информация',
        address: 'Адрес',
        addressValue: 'г. Рим, ул. Примерная, д. 123',
        phone: 'Телефон',
        phoneValue: '+39 327 7847240',
        email: 'Email',
        emailValue: 'Weddingitaly28@gmail.com',
        name: 'Имя',
        message: 'Сообщение',
        number: 'Номер телефона',
        send: 'Отправить',
        clientReviews: 'Отзывы клиентов',
        // Новые переводы
        openContactForm: 'Напишите нам',
        contactFormTitle: 'Свяжитесь с нами',
        sending: 'Отправка...',
        messageSentSuccess: 'Сообщение успешно отправлено!',
        thankYouMessage:
          'Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.',
        messageSentError:
          'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.',
      },
    },
    // Закомментированные английский и итальянский переводы остаются без изменений
  },
  lng: 'ru', // Язык по умолчанию
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
