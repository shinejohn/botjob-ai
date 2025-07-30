import React, { useState } from 'react';
import { Header } from '../components/landing/Header';
import { Hero } from '../components/landing/Hero';
import { TrustIndicators } from '../components/landing/TrustIndicators';
import { UserTypeSelection } from '../components/landing/UserTypeSelection';
import { AgentShowcase } from '../components/landing/AgentShowcase';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Testimonials } from '../components/landing/Testimonials';
import { Pricing } from '../components/landing/Pricing';
import { Footer } from '../components/landing/Footer';
import { BusinessSignupFlow } from '../components/auth/BusinessSignup/BusinessSignupFlow';
import { DeveloperSignupFlow } from '../components/auth/DeveloperSignup/DeveloperSignupFlow';
import { LoginFlow } from '../components/auth/Login/LoginFlow';
export const LandingPage = () => {
  const [showBusinessSignup, setShowBusinessSignup] = useState(false);
  const [showDeveloperSignup, setShowDeveloperSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return <div className="w-full">
      <Header showSignup={() => setShowBusinessSignup(true)} showLogin={() => setShowLogin(true)} />
      {showBusinessSignup ? <div className="pt-20">
          <BusinessSignupFlow />
        </div> : showDeveloperSignup ? <div className="pt-20">
          <DeveloperSignupFlow />
        </div> : showLogin ? <div className="pt-20">
          <LoginFlow onClose={() => setShowLogin(false)} onShowSignup={() => {
        setShowLogin(false);
        setShowBusinessSignup(true);
      }} />
        </div> : <>
          <Hero showSignup={() => setShowBusinessSignup(true)} />
          <TrustIndicators />
          <UserTypeSelection onBusinessSignup={() => setShowBusinessSignup(true)} onDeveloperSignup={() => setShowDeveloperSignup(true)} />
          <AgentShowcase />
          <HowItWorks />
          <Testimonials />
          <Pricing showSignup={() => setShowBusinessSignup(true)} />
          <Footer />
        </>}
    </div>;
};