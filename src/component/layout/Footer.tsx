import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, MapPinIcon, PhoneIcon, MailIcon, ArrowRightIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <img src="/Swastik_Infra_%284%29.png" alt="Swastik Infra Developers Logo" className="h-12 w-auto mb-4" />
            </h3>
            <p className="text-blue-100 mb-4">
              Building excellence through innovation, quality, and customer
              satisfaction. Established in 2024.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/swastik.infra.developers" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-800 hover:bg-blue-700 rounded-full transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <ArrowRightIcon className="h-3 w-3 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <ArrowRightIcon className="h-3 w-3 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <ArrowRightIcon className="h-3 w-3 mr-2" />
                  Projects
                </a>
              </li>
              <li>
                <a href="#investors" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <ArrowRightIcon className="h-3 w-3 mr-2" />
                  Investors
                </a>
              </li>
              <li>
                <a href="#careers" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <ArrowRightIcon className="h-3 w-3 mr-2" />
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <ArrowRightIcon className="h-3 w-3 mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPinIcon className="h-5 w-5 mr-3 flex-shrink-0 text-blue-300" />
                <span className="text-blue-100">
                  House No. 1006, Bolinj, Sopara Road, Next to Bharat Gas, Opp.
                  Karmale Talav, Bolinj, Virar(W) 401203
                </span>
              </li>
              <li className="flex">
                <PhoneIcon className="h-5 w-5 mr-3 flex-shrink-0 text-blue-300" />
                <span className="text-blue-100">
                  +91 9823446128
                  <br />
                  +91 8208381247
                </span>
              </li>
              <li className="flex">
                <MailIcon className="h-5 w-5 mr-3 flex-shrink-0 text-blue-300" />
                <span className="text-blue-100">swastikinfra900@gmail.com</span>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-blue-100 mb-4">
              Subscribe to our newsletter for latest updates on projects and
              offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Your email address" className="px-4 py-2 bg-blue-800 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300" />
              <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 py-4">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} Swastik Infra Developers. All
            rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;