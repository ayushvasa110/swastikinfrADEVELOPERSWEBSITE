import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
const AboutSection = () => {
  const milestones = [{
    year: '2024',
    achievement: 'Company Founded'
  }, {
    year: '2024',
    achievement: 'Launched First Residential Project'
  }, {
    year: '2024',
    achievement: 'Expanded to Commercial Development'
  }];
  const values = [{
    title: 'Quality',
    description: 'We never compromise on the quality of our developments'
  }, {
    title: 'Innovation',
    description: 'Embracing new technologies and design philosophies'
  }, {
    title: 'Trust',
    description: 'Building lasting relationships with our clients and partners'
  }, {
    title: 'Sustainability',
    description: 'Creating eco-friendly spaces for future generations'
  }];
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Swastik Infra Developers
          </h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Building excellence through innovation, quality, and customer
            satisfaction since 2005.
          </p>
        </div>
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 mb-6">
              To be the most trusted name in real estate development, creating
              landmark properties that enhance the quality of life and
              contribute to sustainable urban development.
            </p>
            <div className="space-y-3">
              {values.slice(0, 2).map((value, index) => <div key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-800 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              To create exceptional living and working spaces through innovative
              design, superior craftsmanship, and unwavering commitment to
              customer satisfaction.
            </p>
            <div className="space-y-3">
              {values.slice(2).map((value, index) => <div key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-800 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        {/* Milestones */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, index) => <div key={index} className="relative md:flex items-center justify-between">
                  {/* Left side (even) or right side (odd) content */}
                  <div className={`md:w-5/12 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:text-left md:pl-12'}`}>
                    <h4 className="text-xl font-bold text-gray-900">
                      {milestone.year}
                    </h4>
                    <p className="text-gray-600">{milestone.achievement}</p>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-800 border-4 border-white"></div>
                  {/* Right side (even) or left side (odd) - empty space for alignment */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-last' : ''}`}></div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;