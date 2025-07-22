import React, { useState } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('aplicacoes');

  const services = {
    aplicacoes: {
      title: 'Aplicações',
      items: [
        { name: 'Web Site', description: 'Criação de Landpages, Paineis , blogs , e-commerci e entre outros' },
        { name: 'Aplicativos', description: 'Android ou Iphone' },
        { name: 'Pesquisa de Mercado', description: 'Pesquisa de experiencia e usabilidade de seu negócio' },
        { name: 'UI Desing', description: 'Prototipagem e Wireframe de se projeto.' }
      ]
    },
    transformacao: {
      title: 'Transformação Digital',
      items: [
        { name: 'Governança tecnológica', description: 'Ferramentas e servicos para agilidade nas rotina operacional equipamento, programas e rede.' },
        { name: 'Design da organização de Tecnologia de TI', description: 'Identifica Problema e necessidades e trazer solucoes tecnologicas para solucionas.' },
        { name: 'Gestão de produtos / suporte a entregas ágeis / devOps', description: 'Utilização de metodologias ageis para gestão de entregas' },
        { name: 'Inteligencia Artificial', description: 'Utilize inteligencia artificial em alguer setor de sua empresa: atendimento, gestão de estoque e etc.' }
      ]
    },
    marketing: {
      title: 'Marketing',
      items: [
        { name: 'Email marketing', description: 'Criar campanhas eficientes para nutrir leads e aumentar as vendas' },
        { name: 'Tráfego pago', description: 'Utilize as redes sociais no como utilizar o Facebook, Instagram e LinkedIn a seu favor' },
        { name: 'Criação de materiais digitais', description: 'Bannes, posts e videos para postagem.' },
        { name: 'Relatório', description: 'No final de todo mês entregamos a mensuração de resultados em um relatório detalhado.' }
      ]
    }
  };

  return (
    <div className="services-section">
      <div className="services-header">
        <div className="services-title">
          <div className="services-label">Serviços</div>
          <div className="services-main-title">Conheça os Serviços</div>
        </div>
        
        <div className="services-tabs">
          <button 
            className={`tab ${activeTab === 'aplicacoes' ? 'active' : ''}`}
            onClick={() => setActiveTab('aplicacoes')}
          >
            Aplicações
          </button>
          <button 
            className={`tab ${activeTab === 'transformacao' ? 'active' : ''}`}
            onClick={() => setActiveTab('transformacao')}
          >
            Transformação Digital
          </button>
          <button 
            className={`tab ${activeTab === 'marketing' ? 'active' : ''}`}
            onClick={() => setActiveTab('marketing')}
          >
            Marketing
          </button>
        </div>
      </div>

      <div className="services-features">
        <div className="features-header">
          <div className="features-title">Funcionalidades inclusas em todos os planos</div>
          <div className="features-list">
            <div className="feature-item">
              <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.5L5.5 13L17.5 1" stroke="#22FF62" strokeWidth="2"/>
              </svg>
              <span>Implatação Gratuita</span>
            </div>
            <div className="feature-item">
              <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.5L5.5 13L17.5 1" stroke="#22FF62" strokeWidth="2"/>
              </svg>
              <span>SAC Automatizado (Whatsapp e Facebook Manager)</span>
            </div>
            <div className="feature-item">
              <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.5L5.5 13L17.5 1" stroke="#22FF62" strokeWidth="2"/>
              </svg>
              <span>Suporte</span>
            </div>
            <div className="feature-item">
              <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.5L5.5 13L17.5 1" stroke="#22FF62" strokeWidth="2"/>
              </svg>
              <span>Treinamento para a equipe</span>
            </div>
          </div>
        </div>
      </div>

      <div className="services-cards">
        <div className="service-card">
          <div className="card-content">
            <div className="card-header">
              <div className="card-label">Detalhes</div>
              <div className="card-title">{services[activeTab].title}</div>
            </div>
            
            <div className="service-items">
              {services[activeTab].items.map((item, index) => (
                <div key={index} className="service-item">
                  <div className="service-name">{item.name}</div>
                  <div className="service-description">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="custom-service-card">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/7553a5ec338eaafbf44c53f343ac72e078f45acf?width=2264" 
            className="custom-bg" 
            alt="Mask Group" 
          />
          <div className="custom-icon">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/6994377725f20d810901790c82a87320d38db9da?width=52" 
              alt="Group 201" 
            />
          </div>
          <div className="custom-content">
            <div className="custom-title">
              <span>para personalizado </span>
              <span className="highlight">a sua empresas!</span>
            </div>
            <div className="custom-description">
              Para empresas que precisam de um serviço sob medida.
            </div>
          </div>
          <button className="custom-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L15 15M1 15L15 1" stroke="#171D4C" strokeWidth="2"/>
            </svg>
            <span>Fale com um consultor</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
