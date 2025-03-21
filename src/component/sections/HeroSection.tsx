import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const HeroSection = () => {
  const slides = [{
    id: 1,
    image: "/WhatsApp_Image_2025-03-20_at_10.25.59_PM.jpg",
    title: 'Luxury Living Redefined',
    description: 'Modern apartments with premium retail spaces in Virar West'
  }, {
    id: 2,
    image: "/WhatsApp_Image_2025-03-15_at_7.40.52_PM.jpg",
    title: 'Thoughtfully Designed Spaces',
    description: 'Spacious 1 & 2 BHK apartments with modern amenities'
  }, {
    id: 3,
    image: "/WhatsApp_Image_2025-03-20_at_10.26.00_PM.jpg",
    title: 'Premium Retail Opportunities',
    description: 'Prime commercial spaces in a thriving location'
  }];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${slide.image})`
        }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
          </div>)}
      </div>
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            {slides.map((slide, index) => <div key={slide.id} className={`transition-all duration-700 ease-in-out transform ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {index === currentSlide && <>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white mb-8">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a href="#projects" className="px-8 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded font-medium transition-all">
                        Explore Our Projects
                      </a>
                      <a href="#contact" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white rounded font-medium transition-all">
                        Schedule a Site Visit
                      </a>
                    </div>
                  </>}
              </div>)}
          </div>
        </div>
      </div>
      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-10 flex space-x-2">
        <button onClick={prevSlide} className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all" aria-label="Previous slide">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button onClick={nextSlide} className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all" aria-label="Next slide">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      {/* Dots */}
      <div className="absolute bottom-10 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'}`} aria-label={`Go to slide ${index + 1}`} />)}
        </div>
      </div>
    </section>;
};
export default HeroSection;