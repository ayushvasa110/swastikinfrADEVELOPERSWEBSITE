import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import InvestorsSection from './components/sections/InvestorsSection';
import CareersSection from './components/sections/CareersSection';
import ContactSection from './components/sections/ContactSection';
export function App() {
  return <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <InvestorsSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}