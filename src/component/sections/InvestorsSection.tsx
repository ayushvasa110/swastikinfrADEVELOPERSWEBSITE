import React from 'react';
import { FileTextIcon, DownloadIcon, LineChartIcon, BarChartIcon, TrendingUpIcon } from 'lucide-react';
const InvestorsSection = () => {
  const reports = [{
    title: 'Annual Report 2023',
    size: '3.2 MB',
    icon: FileTextIcon
  }, {
    title: 'Investor Presentation Q2 2023',
    size: '1.8 MB',
    icon: BarChartIcon
  }, {
    title: 'Financial Results Q2 2023',
    size: '2.4 MB',
    icon: LineChartIcon
  }, {
    title: 'Corporate Governance Report',
    size: '1.1 MB',
    icon: FileTextIcon
  }];
  const stats = [{
    value: '₹1200 Cr+',
    label: 'Market Cap',
    icon: TrendingUpIcon
  }, {
    value: '18%',
    label: 'YoY Growth',
    icon: LineChartIcon
  }, {
    value: '24+',
    label: 'Projects Delivered',
    icon: BarChartIcon
  }];
  return <section id="investors" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investor Relations
          </h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Access financial information, reports, and resources for Swastik
            Infra Developers investors.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Stats Column */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Financial Highlights
              </h3>
              <div className="space-y-8">
                {stats.map((stat, index) => <div key={index} className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                      <stat.icon className="h-6 w-6 text-blue-800" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          {/* Reports Column */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Investor Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reports.map((report, index) => <div key={index} className="bg-white p-4 rounded-md shadow-sm hover:shadow transition-shadow">
                    <div className="flex items-start">
                      <div className="p-2 bg-blue-100 rounded-md mr-3">
                        <report.icon className="h-5 w-5 text-blue-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">
                          {report.title}
                        </h4>
                        <p className="text-xs text-gray-500 mb-2">
                          PDF • {report.size}
                        </p>
                        <button className="inline-flex items-center text-sm text-blue-800 hover:text-blue-900">
                          <DownloadIcon className="h-4 w-4 mr-1" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>)}
              </div>
              {/* Contact Form */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Investor Inquiries
                </h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input type="text" id="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea id="message" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>
                  <button type="submit" className="px-6 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded font-medium transition-all">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default InvestorsSection;