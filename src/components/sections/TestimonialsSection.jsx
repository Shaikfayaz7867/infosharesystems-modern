import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../UI/SectionTitle';
import Button from '../UI/Button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      name: 'John Smith',
      position: 'CEO, Tech Innovations',
      quote: 'InfoShare Systems completely transformed our IT infrastructure. Their expertise and dedication to excellence are unmatched in the industry.',
      image: '/images/testimonial1.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO, Global Solutions',
      quote: 'Working with InfoShare Systems was a game-changer for our business. Their cloud migration services saved us time and resources while improving performance.',
      image: '/images/testimonial2.jpg'
    },
    {
      name: 'Michael Brown',
      position: 'Operations Director, Nexus Corp',
      quote: 'The cybersecurity solutions provided by InfoShare Systems gave us peace of mind knowing our sensitive data is protected with state-of-the-art technology.',
      image: '/images/testimonial3.jpg'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Animation variants
  const testimonialVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section
      className="section-padding text-white relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/client-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition:"center -300px" // replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0" />

      <div className="container-custom relative z-10">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Hear from businesses that have transformed their operations with our solutions"
          light={true}
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Content */}
          <div className="min-h-[320px] flex items-center">
            <motion.div
              key={currentIndex}
              className="text-center"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={testimonialVariants}
            >
              {/* Quote Icon */}
              <div className="mb-6 flex justify-center">
                <svg className="w-16 h-16 text-secondary opacity-30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-xl md:text-2xl italic mb-8">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Profile */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-secondary">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${testimonials[currentIndex].name}&background=0D8ABC&color=fff`;
                    }}
                  />
                </div>
                <h4 className="text-lg font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-300">{testimonials[currentIndex].position}</p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-10 space-x-4">
            {/* Indicators */}
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-gray-400 bg-opacity-50'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default TestimonialsSection;