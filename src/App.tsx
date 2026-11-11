import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { Specialties } from './components/Specialties';
import { InstagramShowcase } from './components/InstagramShowcase';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { MapPin } from 'lucide-react';
import { InstagramIcon } from './components/InstagramIcon';
import { CAFE_INFO } from './data/menuData';

export const App: React.FC = () => {
  return (
    <div className="nuve-app">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        <Specialties />
        <InstagramShowcase />
        <LocationHours />
      </main>
      <Footer />

      {/* Floating CTA Buttons */}
      <div className="floating-action-bar">
        <a
          href={CAFE_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-btn-instagram"
          aria-label="Instagram @nuve_cafe"
        >
          <InstagramIcon size={18} color="#FFFFFF" />
          <span>@nuve_cafe</span>
        </a>
        <a
          href="#ubicacion"
          className="floating-btn floating-btn-maps"
          aria-label="Cómo llegar a Nuvé Café"
        >
          <MapPin size={18} color="#C47C49" />
          <span>El Coyol, Ver.</span>
        </a>
      </div>
    </div>
  );
};

export default App;
