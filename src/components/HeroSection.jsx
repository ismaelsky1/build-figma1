import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/3ff51cf955055a46419f5dd0ffa1f5e6e75dde6e?width=1194" 
          className="hero-graphic" 
          alt="Group 226" 
        />
        
        <div className="gradient-blur-1"></div>
        <div className="union-element"></div>
        
        <div className="hero-card">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9910997b1ceed0a78f7135c3d78ee08f5042f70e?width=976" 
            className="hero-image" 
            alt="Rectangle 168" 
          />
          <div className="hero-text">
            <span>Ajudando empresas a construírem produtos digitais de forma moderna e de alta qualidade.</span>
          </div>
          <div className="gradient-blur-2"></div>
          <div className="hero-pagination">
            <div className="page-numbers">
              <div className="page-current">1</div>
              <div className="page-separator">/</div>
              <div className="page-total">3</div>
            </div>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/85ce506df581e06934dff80329564fb45a172a12?width=80" 
              className="arrow-filled" 
              alt="atoms / arrows / filled" 
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/8e3bbe133947fee475d49c025638bb882ebb5463?width=80" 
              className="arrow-ghost" 
              alt="atoms / arrows / Ghost" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
