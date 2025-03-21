import React, { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
const ProjectsSection = () => {
  const categories = ['All', 'Residential'];
  const [activeCategory, setActiveCategory] = useState('All');
  const projects = [{
    id: 1,
    title: 'Viral Shantivan',
    category: 'Residential',
    location: 'Mumbai',
    status: 'Ongoing',
    image: "/WhatsApp_Image_2025-03-20_at_10.25.59_PM.jpg",
    description: 'MahaRERA Number :- P99000078855'
  }, {
    id: 2,
    title: 'Viral Shantivan',
    category: 'Residential',
    location: 'Mumbai',
    status: 'Ongoing',
    image: "/WhatsApp_Image_2025-03-15_at_7.40.52_PM.jpg",
    description: 'MahaRERA Number :- P99000078855'
  }];
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);
  return <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Discover our portfolio of premium residential and commercial
            developments across India.
          </p>
        </div>
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => <button key={category} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category ? 'bg-blue-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`} onClick={() => setActiveCategory(category)}>
              {category}
            </button>)}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">{project.category}</span> |{' '}
                  {project.location}
                </p>
                <a href="#" className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900">
                  View Details
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>)}
        </div>
        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a href="#" className="inline-block px-8 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded font-medium transition-all">
            View All Projects
          </a>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;