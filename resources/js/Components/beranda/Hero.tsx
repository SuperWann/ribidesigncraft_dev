import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, TrendingUp, Award } from 'lucide-react';

interface Slide {
  image: string;
  headline: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: 'https://images.unsplash.com/photo-1735380673311-a21b6fb610cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      headline: 'Karya yang Dibuat dengan Hati',
      description: 'Setiap detail adalah hasil tangan dan proses — bukan mesin. Karya yang lahir dari waktu, ketelitian, dan rasa.',
      buttonText: 'Jelajahi Karya',
      buttonLink: '#shop',
    },
    {
      image: 'https://images.unsplash.com/photo-1659200735680-e56be841c909?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      headline: 'Bisa Request, Bisa Custom!',
      description: 'Ada ide atau kebutuhan spesial? Kami senang mewujudkannya. Mulai dari ukuran, warna, hingga personalisasi nama.',
      buttonText: 'Buat Pesananmu',
      buttonLink: '#promo',
    },
    {
      image: 'https://images.unsplash.com/photo-1596518432939-479596b448b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      headline: 'Dikirim Aman, Sampai dengan Senyum',
      description: 'Packaging rapi dan aman agar karya kami tiba di tanganmu dalam kondisi terbaik.',
      buttonText: 'Pesan Sekarang',
      buttonLink: '#shop',
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  // Preload images
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const handleButtonClick = (link: string) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = link;
    }
  };

  return (
    <>
      {/* Hero Slider */}
      <div className="relative w-full h-160 md:h-700px overflow-hidden group ">
        {/* Background Images */}
        <div className="w-full h-full">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  currentSlide === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute pointer-events-none'
                }`}
              >
                {currentSlide === index && (
                  <div className="animate-fadeIn">
                    <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold mb-4 leading-tight">
                      {slide.headline}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-xl mb-12 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <button
                      onClick={() => handleButtonClick(slide.buttonLink)}
                      className="bg-white text-gray-900 font-semibold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute top-1/2 -translate-y-1/2 left-6 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all duration-300 group-hover:opacity-100 opacity-0"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute top-1/2 -translate-y-1/2 right-6 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all duration-300 group-hover:opacity-100 opacity-0"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-4 h-2 bg-white' 
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes fadeIn {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          .animate-fadeIn { 
            animation: fadeIn 0.8s ease-out; 
          }
        `}</style>
      </div>
    </>
  );
};

export default Hero;