import React from 'react';
import './ContactHeader.css';

const ContactHeader = () => {
  return (
    <div className="contact-header">
      <div className="header-subtitle">
        <span className="subtitle-text">FALE CONOSCO</span>
        <span className="subtitle-accent">.</span>
      </div>
      <div className="header-title">
        <span>Quer falar com a gente?</span>
      </div>
    </div>
  );
};

export default ContactHeader;
