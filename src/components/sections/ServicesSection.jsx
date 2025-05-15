import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import Button from '../UI/Button';
import {
  FaCode,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaMobileAlt,
  FaDatabase,
  FaCogs
} from 'react-icons/fa';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  // Services data
  const services = [
    {
      icon: <FaCode />,
      title: 'Product Development',
      description: 'End-to-end product engineering to bring your ideas to life.',
      color: 'bg-blue-600'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your valuable data and systems.',
      color: 'bg-red-600'
    },
    {
      icon: <FaCogs />,
      title: 'Technical Staffing',
      description: 'Access top-tier IT talent to accelerate your projects and innovation.',
      color: 'bg-indigo-600'
    }
  ];


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Our Services"
          subtitle="We offer a comprehensive range of IT solutions to meet your business needs"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card p-6 h-full transition-all duration-300"
              variants={itemVariants}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-white text-2xl mb-4 ${service.color}`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="text-gray-600 mb-4">{service.description}</p>

              <motion.div
                animate={{
                  opacity: hoveredService === index ? 1 : 0.5,
                  y: hoveredService === index ? 0 : 5
                }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/services"
                  className="text-primary font-medium flex items-center hover:text-primary-dark transition-colors"
                >
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button as="link" to="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;