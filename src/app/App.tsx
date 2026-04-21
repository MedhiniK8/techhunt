import { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import EventMetaStrip from './components/EventMetaStrip';
import CharacterCTASection from './components/CharacterCTASection';
import PrizeSection from './components/PrizeSection';
import RulesSection from './components/RulesSection';
import WhatsAppCTA from './components/WhatsAppCTA';
import FooterSection from './components/FooterSection';
import RegistrationForm from './components/RegistrationForm';
import BackToTop from './components/BackToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleRegisterClick = () => setShowRegistration(true);
  const handleCloseRegistration = () => setShowRegistration(false);

  return (
    <>
      <Toaster position="top-right" richColors />
      {isLoading ? (
        <LoadingScreen />
      ) : showRegistration ? (
        <RegistrationForm onClose={handleCloseRegistration} />
      ) : (
        <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
          <HeroSection />
          <EventMetaStrip />
          <CharacterCTASection onRegisterClick={handleRegisterClick} />
          <PrizeSection />
          <RulesSection />
          <WhatsAppCTA />
          <FooterSection />
          <BackToTop />
        </div>
      )}
    </>
  );
}