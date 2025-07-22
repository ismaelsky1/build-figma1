import React from 'react';
import ContactHeader from './ContactHeader';
import ContactOptions from './ContactOptions';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/905235cd8ee25a9e7e12d4b04d578af58c842b30?width=1208" 
          alt="Background decoration" 
          className="background-decoration"
        />
        <ContactHeader />
        <ContactOptions />
        <div className="contact-description">
          <span>Deixe seus dados que nosso pessoal te retorna ✌️</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
