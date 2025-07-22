import React from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Mais segurança',
      description: 'Tenha suporte e orientação para realizar as diversa atividade do dia a dia de sua empresa.',
      icon: (
        <svg width="59" height="73" viewBox="0 0 59 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 27.5081L18.7863 23.9857C19.0299 23.94 19.2799 23.94 19.5235 23.9857L38.3098 27.5081V54.9325C38.3098 58.7252 36.356 62.2503 33.1398 64.2605L19.6849 72.6698C19.3606 72.8724 18.9492 72.8724 18.6249 72.6698L5.17001 64.2605C1.95382 62.2503 0 58.7252 0 54.9325L0 27.5081Z" fill="url(#paint0_linear_3477_2018)"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M17.5584 61.0292L28.7321 45.2264H23.1453V34.6912L11.9716 50.494H17.5584V61.0292Z" fill="white"/>
          <defs>
            <linearGradient id="paint0_linear_3477_2018" x1="34.4174" y1="28.4235" x2="-10.8013" y2="39.2293" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0BD8C0"/>
              <stop offset="1" stopColor="#4EEF61"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: 'Vendas e Cobranças',
      description: 'Realize vendas com integrações com diversos sistemas de pagamentos e tenha o controle com um painel pratico e rápido.',
      icon: (
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/3371b36d1ad7c9da0a341221bc23719945fe7f65?width=116" 
          alt="Group 206" 
        />
      )
    },
    {
      title: 'Controle e melhoria da gestão',
      description: 'Ajudamos você a controlar e gerenciar seus processo para o maior retorno e menor risco.',
      icon: (
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/5770aef5a9b62ce28e1e7333f8507eec107ff433?width=84" 
          alt="Group 207" 
        />
      )
    },
    {
      title: 'Acessibilidade',
      description: 'Esteja em todos os lugares com Web Site e Aplicativos.',
      icon: (
        <div className="accessibility-icon"></div>
      )
    },
    {
      title: 'Economia',
      description: 'Gaste pouco e tenha um sistema ou serviço que faça seu negócio lucra.',
      icon: (
        <div className="economy-icon"></div>
      )
    }
  ];

  return (
    <div className="benefits-section">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/95a184140490ce10ce959b5e0f2e7a6ccf7adc4d?width=2882" 
        className="benefits-background" 
        alt="Group 82" 
      />
      
      <div className="benefits-content">
        <div className="benefits-header">
          <div className="header-text">
            <div className="header-label">vantagens</div>
            <div className="header-title">
              Modernize <br />
              seu negócio
            </div>
          </div>
          <div className="header-description">
            Conheça as vantagens de ter seu negócio no mundo digital.
          </div>
          <div className="header-navigation">
            <div className="nav-arrows">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/54a75d27a57a150d145efdbbb6e55a4ce777cedc?width=80" 
                className="arrow-btn" 
                alt="atoms / arrows / filled" 
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/24e9d0cc7df25ab937c52bc5fa4ef94649081828?width=80" 
                className="arrow-btn" 
                alt="atoms / arrows / filled" 
              />
            </div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>

        <div className="benefits-cards">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="card-shadow"></div>
              <div className="card-background"></div>
              <div className="card-content">
                <div className="card-icon">
                  <div className="icon-background"></div>
                  {benefit.icon}
                </div>
                <div className="card-title">{benefit.title}</div>
                <div className="card-description">{benefit.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
