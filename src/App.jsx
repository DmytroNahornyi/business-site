import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Contacts from './pages/Contacts/Contacts';

import './styles/index.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="App">
          <Header />
          <main className="container">
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Contacts />
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
