import React from 'react';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import FeatureSection from './FeatureSection';
import ServicesSection from './ServicesSection';
import ComparisonSection from './ComparisonSection';
import BenefitsSection from './BenefitsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <ContentSection />
      <FeatureSection />
      <ServicesSection />
      <ComparisonSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
