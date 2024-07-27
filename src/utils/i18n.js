// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        // Общие
        home: 'Главная',
        about: 'О нас',
        services: 'Услуги',
        portfolio: 'Отзывы клиентов',
        contacts: 'Контакты',
        applyNow: 'Подать заявку',
        learnMore: 'Написать в WhatsApp',
        learnMoreViber: 'Написать в Viber',
        send: 'Отправить',
        sending: 'Отправка...',

        // Главная страница
        homeTitle: 'Добро пожаловать!',
        homeDescription:
          'Психолог онлайн в Италии. Видеоконсультации с русскоязычным психологом (психотерапевтом)',
        homeDescriptionExtended:
          'Психолог онлайн может стать хорошим вариантам для решения психологических проблем.',
        homeDescriptionExtended1:
          'Большой опыт очного и онлайн консультирования клиентов по различным вопросам позволяют психологам нашего сервиса оказывать профессиональную психологическую помощь дистанционно.',
        homeDescriptionExtended11:
          'Цель сервиса test.com - помочь вам быстро справится с трудными жизненными ситуациями и внутренними проблемами',
        homeDescriptionExtended2:
          'Онлайн консультация с психологом (психотерапевтом) - это удобно:',
        homeDescriptionExtended4: 'Вы экономите время и деньги на дорогу',
        homeDescriptionExtended5:
          'Находясь в привычной обстановке, вам будет легче расслабиться и раскрыться',
        homeDescriptionExtended6:
          'Конфиденциальность – вы не столкнетесь с другими клиентами и посторонними людьми',

        // О нас
        aboutDescription:
          'IT - это команда профессионалов, специализирующихся на разработке веб-сайтов, мобильных приложений и предоставлении IT-консалтинга. Мы стремимся к инновациям и качеству в каждом проекте.',
        aboutColumn1Title: 'Анонимная психологическая помощь онлайн',
        aboutColumn1Text:
          'Онлайн-терапия — это способ общения с квалифицированным дипломированным специалистом в области психического здоровья по телефону или компьютеру. Как правило, общение проводится посредством видеозвонков в мессенджерах, в онлайн-чатах, либо с помощью обычных телефонных звонков. В то же время, психологи онлайн являются специалистами в области психического здоровья, и как правило, проводят очные консультации аналогичные онлайн встречам.',
        aboutColumn2Title: 'Что такое онлайн-терапия?',
        aboutColumn2Text1:
          'Онлайн-терапия отличается от очной терапии несколькими нюансами:',
        aboutColumn2ListItem1:
          'В очной терапии нужно добираться в кабинет психотерапевта, тратить деньги и время на дорогу туда и обратно. В онлайн-терапии достаточно нажать кнопку вызова в гаджете, и вы уже на связи, при этом не важно, где вы сейчас находитесь: в кафе, дома, в машине, в парке, дома, на отдыхе, в командировке или в другой стране.',
        aboutColumn2ListItem2:
          'Если в очной терапии должно пройти какое-то время на вхождение в особый контакт (рапорт) специалиста и клиента, часто при этом клиент смотрит в сторону, в пол, то сидя перед экраном телефона или компьютера, психотерапевт и его клиент смотрят друг другу в глаза, что обеспечивает быстрое вхождение в контакт и возможность более глубокой психологической работы.',
        aboutColumn3Title:
          'Каковы преимущества терапии у психотерапевта онлайн?',
        aboutColumn3Text1:
          'Онлайн-терапия имеет некоторые преимущества перед традиционной терапией. Одни не любят тратить время на дорогу. Другие понимают, что им не нужно думать с кем оставить детей. Для третьих удобней общаться с соотечественником на русском языке, проживая в других странах.',
        aboutColumn3Text2:
          'К тому же, стоимость услуг очного психолога, как правило, выше консультации специалиста, работающего онлайн.',
        aboutColumn3Text3:
          'Интернет-психолог может подойти практически всем, кто ищет эмоциональную поддержку. Общие проблемы, которые рассматривает специалист, включают работу со стрессом, беспокойством, депрессией, проблемами в отношениях, травмами, кризисом, утратой, проблемами сна и другими психологическими проблемами.',

        // Услуги
        servicesHeader: 'Услуги',
        servicesHeppy: 'Ты заслуживаешь счастья!',
        service1Question: 'Какой тип консультации вам нужен?',
        service1Title: 'Индивидуальная',
        service1Description: 'Индивидуальная консультация онлайн для взрослых.',
        service2Title: 'Семейная',
        service2Description: 'Консультация онлайн для семей и пар.',
        service3Title: 'Для подростка',
        service3Description:
          'Консультация онлайн для подростов от 13 до 17 лет.',

        // Контакты
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
        openContactForm: 'Напишите нам',
        contactFormTitle: 'Свяжитесь с нами',
        messageSentSuccess: 'Сообщение успешно отправлено!',
        thankYouMessage:
          'Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.',
        messageSentError:
          'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.',

        // Футер
        navigation: 'Навигация',
        socialNetworks: 'Социальные сети',
        allRightsReserved: '© 2024. Все права защищены',

        // URL
        whatsappUrlWhatsApp: 'https://wa.me/+393277847240',
        whatsappUrlViber: 'viber://chat?number=%2B+393277847240',

        // Отзывы клиентов
        clientReviews: 'Отзывы клиентов',
        reviews: [
          {
            name: 'Анна',
            age: 28,
            city: 'Минск',
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
            city: 'Запорожье',
            text: 'Профессиональный подход и внимание к деталям. Очень довольна результатами терапии.',
          },
          {
            name: 'Дмитрий',
            age: 31,
            city: 'Милан',
            text: 'Онлайн-консультация помогла мне преодолеть кризис в отношениях. Большое спасибо!',
          },
          {
            name: 'Ольга',
            age: 39,
            city: 'Неаполь',
            text: 'Невероятно, насколько эффективной может быть терапия даже в онлайн-формате. Рекомендую!',
          },
          {
            name: 'Сергей',
            age: 45,
            city: 'Львов',
            text: 'Благодарен за помощь в борьбе с выгоранием на работе. Теперь чувствую себя намного лучше.',
          },
        ],
      },
    },
    en: {
      translation: {
        // General
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        portfolio: 'Client Reviews',
        contacts: 'Contacts',
        applyNow: 'Apply Now',
        learnMore: 'Write on WhatsApp',
        learnMoreViber: 'Write on Viber',
        send: 'Send',
        sending: 'Sending...',

        // Home page
        homeTitle: 'Welcome!',
        homeDescription:
          'Online psychologist in Italy. Video consultations with a Russian-speaking psychologist (psychotherapist)',
        homeDescriptionExtended:
          'An online psychologist can be a good option for solving psychological problems.',
        homeDescriptionExtended1:
          "Extensive experience in face-to-face and online counseling of clients on various issues allows our service's psychologists to provide professional psychological assistance remotely.",
        homeDescriptionExtended11:
          'The goal of test.com service is to help you quickly cope with difficult life situations and internal problems',
        homeDescriptionExtended2:
          'Online consultation with a psychologist (psychotherapist) is convenient:',
        homeDescriptionExtended4: 'You save time and money on travel',
        homeDescriptionExtended5:
          'Being in a familiar environment, it will be easier for you to relax and open up',
        homeDescriptionExtended6:
          "Confidentiality – you won't encounter other clients and strangers",

        // About Us
        aboutDescription:
          'IT is a team of professionals specializing in website development, mobile applications, and providing IT consulting. We strive for innovation and quality in every project.',
        aboutColumn1Title: 'Anonymous Online Psychological Help',
        aboutColumn1Text:
          'Online therapy is a way of communicating with a qualified, certified mental health professional via phone or computer. Typically, communication is conducted through video calls in messengers, online chats, or regular phone calls. At the same time, online psychologists are mental health specialists and usually conduct face-to-face consultations similar to online meetings.',
        aboutColumn2Title: 'What is Online Therapy?',
        aboutColumn2Text1:
          'Online therapy differs from face-to-face therapy in several ways:',
        aboutColumn2ListItem1:
          "In face-to-face therapy, you need to travel to the therapist's office, spending money and time on the journey there and back. In online therapy, you just need to press a call button on your device, and you're connected, regardless of where you are: in a cafe, at home, in a car, in a park, on vacation, on a business trip, or in another country.",
        aboutColumn2ListItem2:
          "While face-to-face therapy requires some time to establish a special contact (rapport) between the specialist and the client, often with the client looking away or at the floor, in online therapy, the psychotherapist and their client look into each other's eyes through the phone or computer screen, ensuring quick contact and the possibility of deeper psychological work.",
        aboutColumn3Title:
          'What are the advantages of therapy with an online psychotherapist?',
        aboutColumn3Text1:
          "Online therapy has some advantages over traditional therapy. Some people don't like to spend time traveling. Others realize they don't need to worry about who to leave their children with. For others, it's more convenient to communicate with a compatriot in Russian while living in other countries.",
        aboutColumn3Text2:
          'Moreover, the cost of services of a face-to-face psychologist is usually higher than that of a specialist working online.',
        aboutColumn3Text3:
          'An online psychologist can be suitable for almost anyone seeking emotional support. Common issues that the specialist addresses include work with stress, anxiety, depression, relationship problems, traumas, crisis, loss, sleep problems, and other psychological issues.',

        // Services
        servicesHeader: 'Services',
        servicesHeppy: 'You deserve happiness!',
        service1Question: 'What type of consultation do you need?',
        service1Title: 'Individual',
        service1Description: 'Individual online consultation for adults.',
        service2Title: 'Family',
        service2Description: 'Online consultation for families and couples.',
        service3Title: 'For teenagers',
        service3Description:
          'Online consultation for teenagers from 13 to 17 years old.',

        // Contacts
        contactInfo: 'Contact Information',
        address: 'Address',
        addressValue: 'Rome, Sample St., 123',
        phone: 'Phone',
        phoneValue: '+39 327 7847240',
        email: 'Email',
        emailValue: 'Weddingitaly28@gmail.com',
        name: 'Name',
        message: 'Message',
        number: 'Phone number',
        openContactForm: 'Write to us',
        contactFormTitle: 'Contact Us',
        messageSentSuccess: 'Message sent successfully!',
        thankYouMessage:
          'Thank you for your message. We will contact you soon.',
        messageSentError:
          'An error occurred while sending the message. Please try again.',

        // Footer
        navigation: 'Navigation',
        socialNetworks: 'Social Networks',
        allRightsReserved: '© 2024. All rights reserved.',

        // URLs
        whatsappUrlWhatsApp: 'https://wa.me/+393277847240',
        whatsappUrlViber: 'viber://chat?number=%2B+393277847240',

        // Client Reviews
        clientReviews: 'Client Reviews',
        reviews: [
          {
            name: 'Anna',
            age: 28,
            city: 'Minsk',
            text: 'Thanks to online therapy, I was able to cope with my anxiety. Thank you for your support!',
          },
          {
            name: 'Igor',
            age: 35,
            city: 'Odessa',
            text: 'Convenient and effective. The online format allowed me to get help without leaving home.',
          },
          {
            name: 'Elena',
            age: 42,
            city: 'Zaporizhzhia',
            text: 'Professional approach and attention to detail. Very satisfied with the results of therapy.',
          },
          {
            name: 'Dmitri',
            age: 31,
            city: 'Milan',
            text: 'Online counseling helped me overcome a crisis in my relationship. Thank you so much!',
          },
          {
            name: 'Olga',
            age: 39,
            city: 'Naples',
            text: "It's incredible how effective therapy can be even in an online format. I recommend it!",
          },
          {
            name: 'Sergiy',
            age: 45,
            city: 'Lviv',
            text: 'Grateful for the help in fighting burnout at work. Now I feel much better.',
          },
        ],
      },
    },
    it: {
      translation: {
        // Generali
        home: 'Home',
        about: 'Chi siamo',
        services: 'Servizi',
        portfolio: 'Recensioni dei clienti',
        contacts: 'Contatti',
        applyNow: 'Invia richiesta',
        learnMore: 'Scrivi su WhatsApp',
        learnMoreViber: 'Scrivere in Viber',
        send: 'Invia',
        sending: 'Invio in corso...',

        // Pagina principale
        homeTitle: 'Benvenuti!',
        homeDescription:
          'Psicologo online in Italia. Videoconsulenze con uno psicologo (psicoterapeuta) di lingua russa',
        homeDescriptionExtended:
          'Uno psicologo online può essere una buona opzione per risolvere problemi psicologici.',
        homeDescriptionExtended1:
          'La vasta esperienza di consulenza faccia a faccia e online su varie questioni permette agli psicologi del nostro servizio di fornire assistenza psicologica professionale a distanza.',
        homeDescriptionExtended11:
          "L'obiettivo del servizio test.com è aiutarti a superare rapidamente situazioni di vita difficili e problemi interiori",
        homeDescriptionExtended2:
          'La consulenza online con uno psicologo (psicoterapeuta) è conveniente:',
        homeDescriptionExtended4: 'Risparmi tempo e denaro per il viaggio',
        homeDescriptionExtended5:
          'Essendo in un ambiente familiare, ti sarà più facile rilassarti e aprirti',
        homeDescriptionExtended6:
          'Riservatezza - non incontrerai altri clienti o estranei',

        // Chi siamo
        aboutDescription:
          "IT è un team di professionisti specializzati nello sviluppo di siti web, applicazioni mobili e nella fornitura di consulenza IT. Ci impegniamo per l'innovazione e la qualità in ogni progetto.",
        aboutColumn1Title: 'Aiuto psicologico online anonimo',
        aboutColumn1Text:
          'La terapia online è un modo per comunicare con un professionista qualificato e certificato della salute mentale tramite telefono o computer. Di solito, la comunicazione avviene tramite videochiamate su messenger, chat online o chiamate telefoniche normali. Allo stesso tempo, gli psicologi online sono specialisti della salute mentale e di solito conducono consultazioni faccia a faccia simili agli incontri online.',
        aboutColumn2Title: "Cos'è la terapia online?",
        aboutColumn2Text1:
          'La terapia online differisce dalla terapia faccia a faccia in diversi modi:',
        aboutColumn2ListItem1:
          'Nella terapia faccia a faccia, devi recarti nello studio dello psicoterapeuta, spendendo soldi e tempo per il viaggio di andata e ritorno. Nella terapia online, basta premere un pulsante di chiamata sul tuo dispositivo e sei già in contatto, non importa dove ti trovi: in un caffè, a casa, in macchina, in un parco, in vacanza, in viaggio di lavoro o in un altro paese.',
        aboutColumn2ListItem2:
          "Mentre nella terapia faccia a faccia ci vuole un po' di tempo per stabilire un contatto speciale (rapporto) tra lo specialista e il cliente, spesso con il cliente che guarda altrove o a terra, seduti davanti allo schermo del telefono o del computer, lo psicoterapeuta e il suo cliente si guardano negli occhi, garantendo un rapido contatto e la possibilità di un lavoro psicologico più profondo.",
        aboutColumn3Title:
          'Quali sono i vantaggi della terapia con uno psicoterapeuta online?',
        aboutColumn3Text1:
          'La terapia online ha alcuni vantaggi rispetto alla terapia tradizionale. Alcuni non amano perdere tempo in viaggio. Altri capiscono che non devono preoccuparsi di con chi lasciare i bambini. Per altri è più conveniente comunicare con un connazionale in russo mentre vivono in altri paesi.',
        aboutColumn3Text2:
          'Inoltre, il costo dei servizi di uno psicologo faccia a faccia è di solito superiore a quello di uno specialista che lavora online.',
        aboutColumn3Text3:
          "Uno psicologo online può essere adatto a quasi tutti coloro che cercano supporto emotivo. I problemi comuni che lo specialista affronta includono il lavoro con lo stress, l'ansia, la depressione, i problemi relazionali, i traumi, le crisi, le perdite, i problemi di sonno e altri problemi psicologici.",

        // Servizi
        servicesHeader: 'Servizi',
        servicesHeppy: 'Meriti di essere felice!',
        service1Question: 'Di che tipo di consulenza hai bisogno?',
        service1Title: 'Individuale',
        service1Description: 'Consulenza individuale online per adulti.',
        service2Title: 'Familiare',
        service2Description: 'Consulenza online per famiglie e coppie.',
        service3Title: 'Per adolescenti',
        service3Description:
          'Consulenza online per adolescenti dai 13 ai 17 anni.',

        // Contatti
        contactInfo: 'Informazioni di contatto',
        address: 'Indirizzo',
        addressValue: 'Roma, Via Esempio, 123',
        phone: 'Telefono',
        phoneValue: '+39 327 7847240',
        email: 'Email',
        emailValue: 'Weddingitaly28@gmail.com',
        name: 'Nome',
        message: 'Messaggio',
        number: 'Numero di telefono',
        openContactForm: 'Scrivici',
        contactFormTitle: 'Contattaci',
        messageSentSuccess: 'Messaggio inviato con successo!',
        thankYouMessage: 'Grazie per il tuo messaggio. Ti contatteremo presto.',
        messageSentError:
          "Si è verificato un errore durante l'invio del messaggio. Per favore, riprova.",

        // Footer
        navigation: 'Navigazione',
        socialNetworks: 'Social network',
        allRightsReserved: '© 2024. Tutti i diritti riservati.',

        // URL
        whatsappUrlWhatsApp: 'https://wa.me/+393277847240',
        whatsappUrlViber: 'viber://chat?number=%2B+393277847240',

        // Recensioni dei clienti
        clientReviews: 'Recensioni dei clienti',
        reviews: [
          {
            name: 'Anna',
            age: 28,
            city: 'Minsk',
            text: 'Grazie alla terapia online sono riuscita a superare la mia ansia. Grazie per il supporto!',
          },
          {
            name: 'Igor',
            age: 35,
            city: 'Odessa',
            text: 'Comodo ed efficace. Il formato online mi ha permesso di ricevere aiuto senza uscire di casa.',
          },
          {
            name: 'Elena',
            age: 42,
            city: 'Zaporozhye',
            text: 'Approccio professionale e attenzione ai dettagli. Sono molto soddisfatta dei risultati della terapia.',
          },
          {
            name: 'Dmitry',
            age: 31,
            city: 'Milano',
            text: 'La consulenza online mi ha aiutato a superare una crisi nelle relazioni. Grazie mille!',
          },
          {
            name: 'Olga',
            age: 39,
            city: 'Napoli',
            text: 'È incredibile quanto possa essere efficace la terapia anche in formato online. Lo consiglio!',
          },
          {
            name: 'Sergey',
            age: 45,
            city: 'Lviv',
            text: "Grato per l'aiuto nella lotta contro il burnout sul lavoro. Ora mi sento molto meglio.",
          },
        ],
      },
    },
  },
  lng: 'ru', // Язык по умолчанию
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
