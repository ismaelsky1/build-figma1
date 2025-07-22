import React from 'react';
import './ContactOptions.css';

const ContactOptions = () => {
  return (
    <div className="contact-options">
      <div className="contact-card">
        <div className="card-background"></div>
        <div className="card-content">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/d70fa5617b841a8992c2323a851c7648cd31e1f1?width=120" 
            alt="Phone icon" 
            className="contact-icon"
          />
          <div className="contact-text">
            <div className="contact-label">Ligue para nós!</div>
            <div className="contact-value">77 981143208</div>
          </div>
        </div>
      </div>

      <div className="contact-card">
        <div className="card-background"></div>
        <div className="card-content">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/d07e28565d08d673024d0799b3b246bc7c97beb5?width=122" 
            alt="Chat icon" 
            className="contact-icon"
          />
          <div className="contact-text">
            <div className="contact-description">Fale no chat com nossa equipe</div>
          </div>
        </div>
      </div>

      <div className="contact-card">
        <div className="card-background"></div>
        <div className="card-content">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/ddc07433fe65c1c47affc28fade740a6611e3d58?width=110" 
            alt="Message icon" 
            className="contact-icon"
          />
          <div className="contact-text">
            <div className="contact-description">Envie uma mensagem</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;
