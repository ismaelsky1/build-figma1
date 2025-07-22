import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <svg className="feature-svg" width="1440" height="560" viewBox="0 0 1440 560" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H1440V560H0V0Z" fill="#171D4C"/>
        <mask id="mask0_3477_1826" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="560">
          <path d="M0 0H1440V560H0V0Z" fill="url(#paint0_linear_3477_1826)"/>
        </mask>
        <g mask="url(#mask0_3477_1826)">
          <rect opacity="0.9" x="-120" y="-203" width="1616" height="1215" fill="url(#pattern0_3477_1826)"/>
          <rect x="-1" y="-217" width="1442" height="961" fill="url(#pattern1_3477_1826)"/>
          <path opacity="0.15" d="M1448.24 364.59C1414.14 364.59 1397.47 334.896 1397.47 280C1397.47 225.104 1414.14 195.41 1448.24 195.41C1482.34 195.41 1499.01 225.104 1499.01 280C1499.01 334.896 1482.34 364.59 1448.24 364.59ZM1448.24 428C1521.77 428 1564 367.809 1564 280C1564 192.149 1521.77 132 1448.24 132C1374.71 132 1332.48 192.149 1332.48 280C1332.48 367.851 1374.71 428 1448.24 428ZM1299.99 428C1321.1 428 1338.57 410.506 1338.57 389.369C1338.57 368.232 1321.1 350.738 1299.99 350.738C1278.87 350.738 1261.4 368.232 1261.4 389.369C1261.4 410.506 1278.83 428 1299.99 428ZM1059.83 422.324H1253.19V359.718H1157.74L1204.87 312.15C1230.85 286.142 1249.13 256.83 1249.13 222.689C1249.13 165.336 1203.65 132 1152.87 132C1113.48 132 1075.28 151.908 1057 194.224L1111.83 226.332C1119.53 208.457 1133.75 195.41 1153.68 195.41C1172.76 195.41 1184.14 207.61 1184.14 225.485C1184.14 242.174 1171.96 258.821 1155.29 275.891L1059.83 375.094V422.324Z" fill="white"/>
        </g>
        
        <defs>
          <linearGradient id="paint0_linear_3477_1826" x1="799.5" y1="-29" x2="595" y2="560" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2E2239"/>
            <stop offset="1" stopColor="#2E2239" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_3477_1826" x1="381.769" y1="23.2203" x2="-40.724" y2="236.564" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0BD8C0"/>
            <stop offset="1" stopColor="#4EEF61"/>
          </linearGradient>
          <linearGradient id="paint2_linear_3477_1826" x1="138.109" y1="152.217" x2="138.109" y2="186" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4EEF61"/>
            <stop offset="1" stopColor="#4EEF61" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      
      <div className="feature-content">
        <div className="feature-text-main">
          <span>Aumente suas vendas, </span>
          <span>gerencie e melhore todos </span>
          <span>os processos de seu </span>
          <span>negócio </span>
        </div>
        
        <div className="feature-text-secondary">
          <span>Entenda como podemos </span>
          <span>ajudar sua empresa</span>
        </div>
        
        <div className="feature-arrow">
          <path d="M1023 329V343" stroke="#22FF62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1030 336L1023 343L1016 336" stroke="#22FF62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </div>
        
        <div className="feature-card">
          <div className="feature-chart-bg"></div>
          <div className="feature-chart-line"></div>
          <div className="feature-chart-icon">
            <svg width="52" height="30" viewBox="0 0 52 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1915 22.1601C21.7568 26.2339 30.7799 26.2339 36.3452 22.1601C41.9105 18.0863 41.9105 11.4814 36.3452 7.40761C30.7799 3.33383 21.7568 3.33383 16.1915 7.40761C10.6262 11.4814 10.6262 18.0863 16.1915 22.1601Z" stroke="#FDFDFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.1915 7.40759L36.3452 22.1601" stroke="#FDFDFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M36.345 7.40765C36.1061 11.2725 33.9575 14.9423 30.2989 17.7344C26.4846 20.4125 21.4713 21.9853 16.1914 22.1601C16.4303 18.2952 18.5789 14.6255 22.2375 11.8334C26.0518 9.15529 31.0651 7.58252 36.345 7.40765V7.40765Z" stroke="#FDFDFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
