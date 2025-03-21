import React from 'react';
import { BriefcaseIcon, CheckIcon, UserIcon, MapPinIcon, ClockIcon } from 'lucide-react';
const CareersSection = () => {
  const jobs = [{
    title: 'Project Manager',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead and manage real estate development projects from inception to completion.'
  }, {
    title: 'Architect',
    location: 'Delhi',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Design innovative and sustainable architectural solutions for our projects.'
  }, {
    title: 'Civil Engineer',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Oversee construction activities and ensure quality standards are met.'
  }, {
    title: 'Marketing Manager',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Develop and implement marketing strategies for our real estate projects.'
  }];
  const benefits = ['Competitive salary and bonuses', 'Health and life insurance', 'Professional development opportunities', 'Work-life balance', 'Modern office environment', 'Team building activities'];
  return <section id="careers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Careers at Swastik Infra
          </h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Join our team of professionals and build your career with one of
            India's leading real estate developers.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Why Join Us */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Join Us
              </h3>
              <p className="text-gray-600 mb-6">
                At Swastik Infra Developers, we believe in fostering talent and
                providing opportunities for growth. We are committed to creating
                an inclusive work environment where innovation thrives.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-800 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>)}
              </div>
            </div>
          </div>
          {/* Current Openings */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Current Openings
              </h3>
              <div className="space-y-6">
                {jobs.map((job, index) => <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {job.title}
                      </h4>
                      <button className="px-4 py-1 bg-blue-800 hover:bg-blue-900 text-white text-sm rounded transition-all">
                        Apply Now
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-1 text-blue-800" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <BriefcaseIcon className="h-4 w-4 mr-1 text-blue-800" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1 text-blue-800" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
        {/* Application Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Apply for a Position
          </h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input type="text" id="fullName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                  Position
                </label>
                <select id="position" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select a position</option>
                  {jobs.map((job, index) => <option key={index} value={job.title}>
                      {job.title}
                    </option>)}
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience
                </label>
                <input type="number" id="experience" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resume
                </label>
                <input type="file" id="resume" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter
                </label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="px-8 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded font-medium transition-all">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>;
};
export default CareersSection;