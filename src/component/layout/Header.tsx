import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img src="/Swastik_Infra_%284%29.png" alt="Swastik Infra Developers Logo" className="h-12 w-auto" />
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-gray-800 hover:text-blue-700">
              Home
            </a>
            <a href="#about" className="text-sm font-medium text-gray-800 hover:text-blue-700">
              About Us
            </a>
            <a href="#projects" className="text-sm font-medium text-gray-800 hover:text-blue-700">
              Projects
            </a>
            <a href="#investors" className="text-sm font-medium text-gray-800 hover:text-blue-700">
              Investors
            </a>
            <a href="#careers" className="text-sm font-medium text-gray-800 hover:text-blue-700">
              Careers
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-800 hover:text-blue-700">
              Contact Us
            </a>
            <a href="#contact" className="ml-4 px-5 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded text-sm font-medium transition-all">
              Schedule a Site Visit
            </a>
          </nav>
          {/* Contact Number - Desktop */}
          <div className="hidden lg:flex items-center">
            <PhoneIcon className="h-4 w-4 text-blue-800 mr-2" />
            <span className="text-sm font-medium">+91 9823446128</span>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="p-2 rounded-md text-gray-700 hover:text-blue-800 focus:outline-none">
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="lg:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="#home" className="block py-2 text-base font-medium text-gray-800 hover:text-blue-700">
              Home
            </a>
            <a href="#about" className="block py-2 text-base font-medium text-gray-800 hover:text-blue-700">
              About Us
            </a>
            <a href="#projects" className="block py-2 text-base font-medium text-gray-800 hover:text-blue-700">
              Projects
            </a>
            <a href="#investors" className="block py-2 text-base font-medium text-gray-800 hover:text-blue-700">
              Investors
            </a>
            <a href="#careers" className="block py-2 text-base font-medium text-gray-800 hover:text-blue-700">
              Careers
            </a>
            <a href="#contact" className="block py-2 text-base font-medium text-gray-800 hover:text-blue-700">
              Contact Us
            </a>
            <div className="pt-2">
              <a href="#contact" className="block w-full text-center px-5 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded text-base font-medium transition-all">
                Schedule a Site Visit
              </a>
            </div>
            <div className="flex items-center pt-2">
              <PhoneIcon className="h-4 w-4 text-blue-800 mr-2" />
              <span className="text-sm font-medium">+91 9823446128</span>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;