import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-background"></div>
      <div className="contact-content">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/905235cd8ee25a9e7e12d4b04d578af58c842b30?width=1208" 
          className="contact-decoration" 
          alt="Group 194" 
        />
        
        <div className="contact-header">
          <div className="header-label">
            <span className="label-main">FALE CONOSCO</span>
            <span className="label-accent">.</span>
          </div>
          <div className="header-title">
            Quer falar <br />
            com a gente?
          </div>
        </div>

        <div className="contact-description">
          <span>Deixe seus dados que nosso pessoal te retorna ✌️</span>
        </div>

        <div className="contact-options">
          <div className="contact-card">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d70fa5617b841a8992c2323a851c7648cd31e1f1?width=120" 
              className="contact-icon" 
              alt="Group 196" 
            />
            <div className="contact-text">
              <span className="contact-label">Ligue para nós!</span>
              <br />
              <span className="contact-value">77 981143208</span>
            </div>
          </div>

          <div className="contact-card">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d07e28565d08d673024d0799b3b246bc7c97beb5?width=122" 
              className="contact-icon" 
              alt="Group 1024" 
            />
            <div className="contact-text">
              Fale no chat com<br />
              nossa equipe
            </div>
          </div>

          <div className="contact-card">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/ddc07433fe65c1c47affc28fade740a6611e3d58?width=110" 
              className="contact-icon" 
              alt="Group 1025" 
            />
            <div className="contact-text">
              Envie uma mensagem
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
