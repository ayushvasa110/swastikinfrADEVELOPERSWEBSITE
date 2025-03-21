import React, { lazy } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, SendIcon } from 'lucide-react';
const ContactSection = () => {
  const contactDetails = [{
    icon: MapPinIcon,
    title: 'Address',
    details: ['Swastik Infra Developers', 'House No. 1006, Bolinj, Sopara Road,', 'Next to Bharat Gas, Opp. Karmale Talav,', 'Bolinj, Virar(W) 401203']
  }, {
    icon: PhoneIcon,
    title: 'Phone',
    details: ['Tejas P. Vasa', '+91 9823446128', '+91 8208381247']
  }, {
    icon: MailIcon,
    title: 'Email',
    details: ['swastikinfra900@gmail.com']
  }, {
    icon: ClockIcon,
    title: 'Working Hours',
    details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: By Appointment Only']
  }];
  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Get in touch with our team for inquiries about our projects or to
            schedule a site visit.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <div className="space-y-8">
                {contactDetails.map((item, index) => <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <item.icon className="h-5 w-5 text-blue-800" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      {item.details.map((detail, idx) => <p key={idx} className="text-gray-600">
                          {detail}
                        </p>)}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input type="text" id="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Inquiry about Swastik Heights" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea id="message" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your message here..."></textarea>
                  </div>
                </div>
                <button type="submit" className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded font-medium transition-all flex items-center">
                  <SendIcon className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-lg overflow-hidden shadow-sm h-96 bg-gray-200">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1655234028446!5m2!1sen!2sin" className="w-full h-full" style={{
          border: 0
        }} allowFullScreen loading="lazy" title="Swastik Infra Developers Location"></iframe>
        </div>
      </div>
    </section>;
};
export default ContactSection;