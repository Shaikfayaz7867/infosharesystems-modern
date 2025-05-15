import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/UI/SectionTitle';
import CtaSection from '../components/sections/CtaSection';
import {
  FaBuilding,
  FaHospital,
  FaShoppingCart,
  FaUniversity,
  FaIndustry,
  FaMoneyBillWave,
  FaPlane,
  FaGavel
} from 'react-icons/fa';

const IndustriesPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Industries data
  const industries = [
    {
      icon: <FaMoneyBillWave />,
      title: 'Financial Services',
      description: 'Secure and efficient IT solutions for banks, insurance companies, and financial institutions.',
      challenges: [
        'Regulatory compliance (GDPR, PCI DSS)',
        'Data security and fraud prevention',
        'Legacy system modernization',
        'Digital banking transformation'
      ],
      solutions: [
        'Secure payment processing systems',
        'Fraud detection and prevention',
        'Core banking system modernization',
        'Mobile banking applications'
      ],
      color: 'bg-blue-500',
      image: '/images/industries/finance.jpg'
    },
    {
      icon: <FaHospital />,
      title: 'Healthcare',
      description: 'Innovative technology solutions for hospitals, clinics, and healthcare providers.',
      challenges: [
        'HIPAA compliance and data privacy',
        'Electronic health records management',
        'Patient engagement and telehealth',
        'Healthcare analytics and reporting'
      ],
      solutions: [
        'Electronic health record (EHR) systems',
        'Telehealth platforms',
        'Medical billing and claims processing',
        'Healthcare data analytics'
      ],
      color: 'bg-green-500',
      image: '/images/industries/healthcare.jpg'
    },
    {
      icon: <FaShoppingCart />,
      title: 'Retail & E-commerce',
      description: 'Digital solutions to enhance customer experience and streamline retail operations.',
      challenges: [
        'Omnichannel customer experience',
        'Inventory management',
        'Payment security',
        'Customer data analysis'
      ],
      solutions: [
        'E-commerce platforms',
        'Inventory management systems',
        'Customer relationship management',
        'Point-of-sale (POS) systems'
      ],
      color: 'bg-purple-500',
      image: '/images/industries/retail.jpg'
    },
    {
      icon: <FaIndustry />,
      title: 'Manufacturing',
      description: 'Technology solutions to optimize production processes and supply chain management.',
      challenges: [
        'Supply chain visibility',
        'Production efficiency',
        'Quality control',
        'Equipment maintenance'
      ],
      solutions: [
        'Enterprise resource planning (ERP)',
        'Supply chain management systems',
        'IoT-enabled equipment monitoring',
        'Quality management systems'
      ],
      color: 'bg-red-500',
      image: '/images/industries/manufacturing.jpg'
    },
    {
      icon: <FaUniversity />,
      title: 'Education',
      description: 'Digital learning solutions and administrative systems for educational institutions.',
      challenges: [
        'Remote learning capabilities',
        'Student information management',
        'Campus security',
        'Administrative efficiency'
      ],
      solutions: [
        'Learning management systems (LMS)',
        'Student information systems',
        'Campus management solutions',
        'Digital classroom technologies'
      ],
      color: 'bg-yellow-500',
      image: '/images/industries/education.jpg'
    },
    {
      icon: <FaBuilding />,
      title: 'Real Estate',
      description: 'Technology solutions for property management, sales, and development.',
      challenges: [
        'Property management efficiency',
        'Client relationship management',
        'Market analysis',
        'Document management'
      ],
      solutions: [
        'Property management systems',
        'Real estate CRM solutions',
        'Virtual tour technologies',
        'Document automation'
      ],
      color: 'bg-indigo-500',
      image: '/images/industries/realestate.jpg'
    },
    {
      icon: <FaPlane />,
      title: 'Travel & Hospitality',
      description: 'Digital solutions to enhance guest experience and streamline operations.',
      challenges: [
        'Booking and reservation management',
        'Customer experience personalization',
        'Operational efficiency',
        'Loyalty program management'
      ],
      solutions: [
        'Booking and reservation systems',
        'Customer experience platforms',
        'Hospitality management systems',
        'Mobile check-in/check-out solutions'
      ],
      color: 'bg-teal-500',
      image: '/images/industries/travel.jpg'
    },
    {
      icon: <FaGavel />,
      title: 'Legal Services',
      description: 'Technology solutions to improve case management and document handling for law firms.',
      challenges: [
        'Document management and security',
        'Case management efficiency',
        'Client communication',
        'Billing and time tracking'
      ],
      solutions: [
        'Legal case management systems',
        'Document management and e-discovery',
        'Client portal solutions',
        'Legal billing and accounting systems'
      ],
      color: 'bg-orange-500',
      image: '/images/industries/legal.jpg'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section
        className="relative bg-primary text-white py-28 md:py-40 bg-center"
        style={{
          backgroundImage: `url('/images/industries/industries-img.jpg')`,
          backgroundSize: '100%', // Slightly zoomed out (use 100% for original size)
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for darkening the image */}
        <div className="absolute inset-0 bg-primary bg-opacity-50 z-0"></div>

        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-gray-200">
              Specialized IT solutions tailored to the unique needs of various industries
            </p>
          </motion.div>
        </div>
      </section>



      {/* Industries Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Industry Expertise"
            subtitle="We deliver specialized solutions across a wide range of industries"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg shadow-smooth hover:shadow-hover transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white text-2xl mb-4 ${industry.color}`}>
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Industry-Specific Solutions"
            subtitle="Tailored approaches to address the unique challenges in each industry"
          />

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
              >
                {/* Image Section - alternating left/right */}
                <div className={`rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-auto"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.onerror = null;
                      e.target.style.height = '300px';
                      e.target.style.background = industry.color;
                      e.target.style.display = 'flex';
                      e.target.style.alignItems = 'center';
                      e.target.style.justifyContent = 'center';
                      e.target.style.color = 'white';
                      e.target.style.fontSize = '1.5rem';
                      e.target.style.fontWeight = 'bold';
                      e.target.innerHTML = industry.title;
                    }}
                  />
                </div>

                {/* Content Section */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mr-4 ${industry.color}`}>
                      {industry.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{industry.title}</h3>
                  </div>

                  <p className="text-gray-700 mb-6">{industry.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">Key Challenges</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-gray-700">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">Our Solutions</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-gray-700">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Success Stories"
            subtitle="See how we've helped organizations across different industries"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Financial Institution Digital Transformation',
                industry: 'Financial Services',
                description: 'How we helped a leading bank modernize their legacy systems and improve customer experience.',
                image: '/images/case-studies/finance-case.jpg',
                color: 'bg-blue-500'
              },
              {
                title: 'Healthcare Provider Telehealth Solution',
                industry: 'Healthcare',
                description: 'Implementing a secure telehealth platform that increased patient engagement by 45%.',
                image: '/images/case-studies/healthcare-case.jpg',
                color: 'bg-green-500'
              },
              {
                title: 'Retail Chain Omnichannel Experience',
                industry: 'Retail',
                description: 'Creating a seamless shopping experience across online and physical stores.',
                image: '/images/case-studies/retail-case.jpg',
                color: 'bg-purple-500'
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden h-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.onerror = null;
                      e.target.style.background = caseStudy.color;
                      e.target.style.display = 'flex';
                      e.target.style.alignItems = 'center';
                      e.target.style.justifyContent = 'center';
                      e.target.style.color = 'white';
                      e.target.style.fontSize = '1.2rem';
                      e.target.style.fontWeight = 'bold';
                      e.target.innerHTML = caseStudy.industry;
                    }}
                  />
                </div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium mb-3 ${caseStudy.color}`}>
                    {caseStudy.industry}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <a href="#" className="text-primary font-medium flex items-center hover:text-primary-dark transition-colors">
                    Read Case Study
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

export default IndustriesPage;
