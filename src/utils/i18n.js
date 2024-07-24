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
        homeDescriptionExtended2: `
        Цель сервиса test.com - помочь вам быстро справится с трудными жизненными ситуациями и внутренними проблемами`,
        homeDescriptionExtended3: `Онлайн консультация с психологом (психотерапевтом) - это удобно:`,
        homeDescriptionExtended4: `Вы экономите время и деньги на дорогу`,
        homeDescriptionExtended5: `
      Находясь в привычной обстановке, вам будет легче расслабиться и раскрыться`,
        homeDescriptionExtended6: `
      Конфиденциальность – вы не столкнетесь с другими клиентами и посторонними людьми`,
        learnMore: 'Написать в WhatsApp',
        whatsappUrl: 'https://wa.me/+380673049999',
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
        phoneValue: '+39 (123) 456-78-90',
        email: 'Email',
        emailValue: 'info@test.com',
        name: 'Имя',
        message: 'Сообщение',
        number: 'Номер телефона',
        send: 'Отправить',
      },
    },
    // en: {
    //   translation: {
    //     homeTitle: 'Welcome to IT Prusakova',
    //     homeDescription: 'We provide innovative IT solutions for your business',
    //     learnMore: 'Learn More',
    //     about: 'About Us',
    //     aboutDescription:
    //       'IT Prusakova is a team of professionals specializing in website development, mobile applications, and IT consulting. We strive for innovation and quality in every project.',
    //     services: 'Services',
    //     service1Title: 'Website Development',
    //     service1Description:
    //       'We create modern, functional, and responsive websites for your business.',
    //     service2Title: 'Mobile Applications',
    //     service2Description:
    //       'We develop innovative mobile applications for iOS and Android.',
    //     service3Title: 'IT Consulting',
    //     service3Description:
    //       'We provide expert consultations on optimizing IT processes and implementing new technologies.',
    //     portfolio: 'Portfolio',
    //     project1Title: 'Corporate Website',
    //     project1Description:
    //       'Development of a modern corporate website for a large company.',
    //     project2Title: 'Mobile Application',
    //     project2Description:
    //       'Creation of an innovative mobile application for a startup.',
    //     project3Title: 'IT Infrastructure',
    //     project3Description:
    //       'Optimization of IT infrastructure to improve business process efficiency.',
    //     contacts: 'Contacts',
    //     contactInfo: 'Contact Information',
    //     address: 'Address',
    //     addressValue: '123 Example St., Moscow, Russia',
    //     phone: 'Phone',
    //     phoneValue: '+7 (123) 456-78-90',
    //     email: 'Email',
    //     emailValue: 'info@prusakova.com',
    //     name: 'Name',
    //     message: 'Message',
    //     send: 'Send',
    //   },
    // },
    // it: {
    //   translation: {
    //     homeTitle: 'Benvenuti a IT Prusakova',
    //     homeDescription: 'Forniamo soluzioni IT innovative per il tuo business',
    //     learnMore: 'Scopri di più',
    //     about: 'Chi siamo',
    //     aboutDescription:
    //       "IT Prusakova è un team di professionisti specializzati nello sviluppo di siti web, applicazioni mobili e consulenza IT. Ci impegniamo per l'innovazione e la qualità in ogni progetto.",
    //     services: 'Servizi',
    //     service1Title: 'Sviluppo siti web',
    //     service1Description:
    //       'Creiamo siti web moderni, funzionali e responsive per il tuo business.',
    //     service2Title: 'Applicazioni mobili',
    //     service2Description:
    //       'Sviluppiamo applicazioni mobili innovative per iOS e Android.',
    //     service3Title: 'Consulenza IT',
    //     service3Description:
    //       "Forniamo consulenze esperte sull'ottimizzazione dei processi IT e l'implementazione di nuove tecnologie.",
    //     portfolio: 'Portfolio',
    //     project1Title: 'Sito web aziendale',
    //     project1Description:
    //       'Sviluppo di un moderno sito web aziendale per una grande azienda.',
    //     project2Title: 'Applicazione mobile',
    //     project2Description:
    //       "Creazione di un'applicazione mobile innovativa per una startup.",
    //     project3Title: 'Infrastruttura IT',
    //     project3Description:
    //       "Ottimizzazione dell'infrastruttura IT per migliorare l'efficienza dei processi aziendali.",
    //     contacts: 'Contatti',
    //     contactInfo: 'Informazioni di contatto',
    //     address: 'Indirizzo',
    //     addressValue: 'Via Esempio 123, Mosca, Russia',
    //     phone: 'Telefono',
    //     phoneValue: '+7 (123) 456-78-90',
    //     email: 'Email',
    //     emailValue: 'info@prusakova.com',
    //     name: 'Nome',
    //     message: 'Messaggio',
    //     send: 'Invia',
    //   },
    // },
  },
  lng: 'ru', // Язык по умолчанию
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
