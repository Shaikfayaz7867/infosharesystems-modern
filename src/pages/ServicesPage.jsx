import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ServicesSection from '../components/sections/ServicesSection';
import CtaSection from '../components/sections/CtaSection';
import { 
  FaCode, 
  FaCloudUploadAlt, 
  FaShieldAlt, 
  FaMobileAlt, 
  FaDatabase, 
  FaCogs,
  FaDesktop,
  FaNetworkWired,
  FaServer,
  FaUserCog
} from 'react-icons/fa';

const ServicesPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Detailed services data
  const detailedServices = [
    {
      icon: <FaCode />,
      title: 'Software Development',
      description: 'Custom software solutions designed to meet your specific business requirements.',
      features: [
        'Custom web application development',
        'Enterprise software solutions',
        'Legacy system modernization',
        'API development and integration',
        'Quality assurance and testing'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: <FaCloudUploadAlt />,
      title: 'Cloud Services',
      description: 'Secure and scalable cloud infrastructure and migration services.',
      features: [
        'Cloud migration strategies',
        'AWS, Azure, and Google Cloud solutions',
        'Cloud infrastructure management',
        'Serverless architecture implementation',
        'Cloud cost optimization'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your valuable data and systems.',
      features: [
        'Security assessments and audits',
        'Penetration testing',
        'Security monitoring and incident response',
        'Compliance management (GDPR, HIPAA, PCI DSS)',
        'Security awareness training'
      ],
      color: 'bg-red-500'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Development',
      description: 'User-friendly mobile applications for iOS and Android platforms.',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'Mobile app UI/UX design',
        'App store optimization',
        'Mobile app maintenance and support'
      ],
      color: 'bg-green-500'
    },
    {
      icon: <FaDatabase />,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with our advanced analytics solutions.',
      features: [
        'Business intelligence implementation',
        'Data warehousing and ETL processes',
        'Predictive analytics',
        'Big data solutions',
        'Data visualization and reporting'
      ],
      color: 'bg-yellow-500'
    },
    {
      icon: <FaCogs />,
      title: 'IT Consulting',
      description: 'Strategic guidance to align your IT infrastructure with business objectives.',
      features: [
        'IT strategy development',
        'Digital transformation roadmaps',
        'Technology stack assessment',
        'IT governance and compliance',
        'Vendor selection and management'
      ],
      color: 'bg-indigo-500'
    },
    {
      icon: <FaDesktop />,
      title: 'UI/UX Design',
      description: 'Create intuitive and engaging user experiences for your digital products.',
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Responsive web design',
        'Usability testing',
        'Design system creation'
      ],
      color: 'bg-pink-500'
    },
    {
      icon: <FaNetworkWired />,
      title: 'Network Solutions',
      description: 'Reliable and secure network infrastructure design and management.',
      features: [
        'Network architecture design',
        'Network security implementation',
        'Wireless network solutions',
        'VPN and remote access setup',
        'Network monitoring and maintenance'
      ],
      color: 'bg-teal-500'
    },
    {
      icon: <FaServer />,
      title: 'DevOps Services',
      description: 'Streamline your development and operations processes for faster delivery.',
      features: [
        'CI/CD pipeline implementation',
        'Infrastructure as Code (IaC)',
        'Container orchestration (Docker, Kubernetes)',
        'Microservices architecture',
        'Monitoring and logging solutions'
      ],
      color: 'bg-orange-500'
    },
    {
      icon: <FaUserCog />,
      title: 'Managed IT Services',
      description: 'Comprehensive IT support and management for your business operations.',
      features: [
        '24/7 IT support and helpdesk',
        'System monitoring and maintenance',
        'Backup and disaster recovery',
        'IT asset management',
        'Regular security updates and patches'
      ],
      color: 'bg-gray-500'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesSection />

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Comprehensive IT Solutions"
            subtitle="Explore our full range of services designed to meet your business needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => (
              <motion.div 
                key={index}
                className="card p-6 h-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-white text-2xl mb-4 ${service.color}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Service Process"
            subtitle="How we work with you to deliver exceptional results"
          />

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', description: 'We begin by understanding your business needs and objectives.' },
                { step: '02', title: 'Strategy', description: 'We develop a tailored strategy and solution architecture.' },
                { step: '03', title: 'Implementation', description: 'Our experts implement the solution with precision and care.' },
                { step: '04', title: 'Support', description: 'We provide ongoing support and optimization services.' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                >
                  {/* Connector line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
                  )}
                  
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

export default ServicesPage;
