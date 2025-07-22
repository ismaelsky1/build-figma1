import React from 'react';
import './ComparisonSection.css';

const ComparisonSection = () => {
  return (
    <div className="comparison-section">
      <div className="comparison-content">
        <div className="comparison-header">
          <div className="header-text">
            <div className="header-label">como funciona</div>
            <div className="header-title">
              <span>Como você faz</span>
              <br />
              <span className="title-highlight">os processos de seu negócio?</span>
            </div>
          </div>
          <div className="header-navigation">
            <div className="nav-arrows">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/855caaeafe5c8e79b8f1a1f64ae562208b938982?width=80" 
                className="arrow-btn" 
                alt="atoms / arrows / filled" 
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/6c5d4da3b2bee21dab5395b259bca9c17b5fd68e?width=80" 
                className="arrow-btn" 
                alt="atoms / arrows / filled" 
              />
            </div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>

        <div className="comparison-cards">
          <div className="without-company">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/547f3eec7fa6c79bfcc878a11537a5fdf08f2fc6?width=40" 
              className="emoji-icon" 
              alt="👎" 
            />
            <div className="card-title">Sem a IsDevelope:</div>
            <div className="card-description">
              Procura diversas ferramentas de mercado, planilhas, e-mails aleatórios e sem segurança nenhuma. 
              E no final não tem um processo otimizado do seu negócio e até paga taxa desnecessárias
            </div>
          </div>

          <div className="with-company">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/77c4071a11ba6c10ae15b1b74e25e6e61d8e5743?width=40" 
              className="emoji-icon" 
              alt="👍" 
            />
            <div className="card-title">Com a IsDevelope:</div>
            <div className="card-description">
              Sem burocracia entregamos uma solução ou serviço especializado para o seu negócio com as tecnologias 
              mais avanças e que mais se adequa ao que você deseja ou precisa.
            </div>
          </div>

          <div className="visual-element">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/196024eeef1321626ea7ca35638c4e895eb607ad?width=642" 
              className="top-graphic" 
              alt="Group 217" 
            />
            
            <div className="gradient-shape">
              <svg width="348" height="350" viewBox="0 0 348 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12C0 5.37259 5.37258 0 12 0H348V338C348 344.627 342.627 350 336 350H0V12Z" fill="url(#paint0_linear_3477_1953)"/>
                <defs>
                  <linearGradient id="paint0_linear_3477_1953" x1="400.322" y1="-19.6174" x2="277.787" y2="488.158" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0BD8C0"/>
                    <stop offset="1" stopColor="#4EEF61"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="dashed-line">
              <svg width="2" height="117" viewBox="0 0 2 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 116L1 1" stroke="url(#paint0_linear_3477_1962)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 5"/>
                <defs>
                  <linearGradient id="paint0_linear_3477_1962" x1="-2.5322" y1="56.5268" x2="26.3862" y2="77.0782" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2EB874"/>
                    <stop offset="1" stopColor="#2EB874" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="floating-card">
              <div className="card-shadow"></div>
              <div className="card-background"></div>
              <div className="card-elements">
                <div className="card-icon"></div>
                <div className="card-lines"></div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-background"></div>
              <div className="info-content">
                <div className="info-avatar"></div>
                <div className="info-lines">
                  <div className="info-line"></div>
                  <div className="info-line"></div>
                  <div className="info-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
