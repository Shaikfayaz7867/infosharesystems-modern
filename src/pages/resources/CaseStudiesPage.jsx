import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';
import PageTemplate from '../../components/layout/PageTemplate';
import ResourceCard from '../../components/resources/ResourceCard';
import CtaSection from '../../components/sections/CtaSection';

const CaseStudiesPage = () => {
  // Sample case studies data
  const allCaseStudies = [
    {
      id: 1,
      title: 'Global Bank Enhances Security Posture with MASTS Implementation',
      excerpt: 'How a leading financial institution reduced security incidents by 75% and improved compliance with regulatory requirements using our advanced security platform.',
      date: 'April 2025',
      category: 'Financial Services',
      image: '/images/resources/case-study-finance.jpg',
      link: '/resources/case-studies/global-bank-security'
    },
    {
      id: 2,
      title: 'Healthcare Provider Streamlines IT Operations with Nightingale',
      excerpt: 'A major healthcare network implemented Nightingale to monitor critical systems, resulting in 99.99% uptime and significant cost savings.',
      date: 'March 2025',
      category: 'Healthcare',
      image: '/images/resources/case-study-healthcare.jpg',
      link: '/resources/case-studies/healthcare-it-operations'
    },
    {
      id: 3,
      title: 'Manufacturing Company Accelerates Digital Transformation',
      excerpt: 'How our custom software development services helped a traditional manufacturer modernize operations and increase production efficiency by 35%.',
      date: 'February 2025',
      category: 'Manufacturing',
      image: '/images/resources/case-study-manufacturing.jpg',
      link: '/resources/case-studies/manufacturing-digital-transformation'
    },
    {
      id: 4,
      title: 'Retail Giant Enhances Customer Experience with Mobile App',
      excerpt: 'A leading retailer partnered with InfoShare Systems to develop a mobile application that increased customer engagement and boosted online sales by 42%.',
      date: 'January 2025',
      category: 'Retail',
      image: '/images/resources/case-study-retail.jpg',
      link: '/resources/case-studies/retail-mobile-app'
    },
    {
      id: 5,
      title: 'Government Agency Achieves CMMC 2.0 Certification',
      excerpt: 'How our cybersecurity team guided a federal agency through the complex CMMC 2.0 certification process, ensuring compliance and strengthening security.',
      date: 'December 2024',
      category: 'Government',
      image: '/images/resources/case-study-government.jpg',
      link: '/resources/case-studies/government-cmmc-certification'
    },
    {
      id: 6,
      title: 'Energy Company Secures Critical Infrastructure',
      excerpt: 'A comprehensive cybersecurity solution that protected vital energy infrastructure from sophisticated cyber threats and ensured operational continuity.',
      date: 'November 2024',
      category: 'Energy',
      image: '/images/resources/case-study-energy.jpg',
      link: '/resources/case-studies/energy-infrastructure-security'
    },
    {
      id: 7,
      title: 'Tech Startup Scales Operations with Cloud Migration',
      excerpt: 'How a rapidly growing technology startup leveraged our cloud expertise to migrate their infrastructure, reducing costs by 40% while improving scalability.',
      date: 'October 2024',
      category: 'Technology',
      image: '/images/resources/case-study-tech-startup.jpg',
      link: '/resources/case-studies/startup-cloud-migration'
    },
    {
      id: 8,
      title: 'Insurance Provider Modernizes Legacy Systems',
      excerpt: 'A strategic approach to modernizing critical legacy applications while maintaining business continuity for a major insurance provider.',
      date: 'September 2024',
      category: 'Insurance',
      image: '/images/resources/case-study-insurance.jpg',
      link: '/resources/case-studies/insurance-legacy-modernization'
    }
  ];

  // Industries extracted from case studies
  const industries = ['All', ...new Set(allCaseStudies.map(study => study.category))];

  // State for filtering and search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  // Filter case studies based on search term and industry
  const filteredCaseStudies = allCaseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         study.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All' || study.category === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  return (
    <PageTemplate
      title="Case Studies"
      subtitle="Real-world success stories and solutions from InfoShare Systems"
      heroImage="/images/resources/case-studies-hero.jpg"
      heroAlt="InfoShare Systems Case Studies"
    >
      {/* Introduction Section */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-dark">Client Success Stories</h2>
          <p className="text-lg text-gray-600">
            Explore how InfoShare Systems has helped organizations across various industries 
            solve complex challenges, optimize operations, and achieve their business objectives 
            through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Industry Filter */}
            <div className="w-full md:w-64">
              <div className="relative">
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full appearance-none px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {industries.map((industry, index) => (
                    <option key={index} value={industry}>{industry}</option>
                  ))}
                </select>
                <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="mb-16">
        {filteredCaseStudies.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredCaseStudies.map((study) => (
              <ResourceCard 
                key={study.id} 
                resource={study} 
                type="case-study" 
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-gray-700 mb-2">No case studies found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </section>

      {/* Featured Case Study */}
      <section className="mb-16">
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img 
                src="/images/resources/featured-case-study.jpg" 
                alt="Featured Case Study" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-sm text-primary font-medium mb-2">Featured Case Study</div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                Fortune 500 Company Achieves 300% ROI with InfoShare AWV Implementation
              </h2>
              <p className="text-gray-600 mb-6">
                A multinational corporation faced significant challenges with CFIUS compliance, resulting in 
                regulatory penalties and operational inefficiencies. Learn how our AWV platform transformed 
                their compliance processes, eliminated penalties, and delivered a 300% return on investment 
                within the first year.
              </p>
              <div className="flex items-center mb-6">
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Financial Services</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Compliance</span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">AWV</span>
                </div>
              </div>
              <button className="self-start bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
                Read Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results by the Numbers */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-dark">Results by the Numbers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The measurable impact our solutions have delivered for our clients
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="text-5xl font-bold text-primary mb-2">$50M+</div>
            <p className="text-lg">Cost savings delivered</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="text-5xl font-bold text-primary mb-2">99.9%</div>
            <p className="text-lg">System uptime achieved</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="text-5xl font-bold text-primary mb-2">85%</div>
            <p className="text-lg">Reduction in security incidents</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="text-5xl font-bold text-primary mb-2">40%</div>
            <p className="text-lg">Average productivity increase</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Client Testimonials */}
      <section className="mb-16 bg-gray-50 py-16 px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear directly from our clients about their experience working with InfoShare Systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl text-primary opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-lg text-gray-700 italic mb-6">
                  InfoShare Systems delivered a solution that exceeded our expectations. Their team took the time 
                  to understand our unique challenges and developed a custom approach that addressed our specific needs. 
                  The results have been transformative for our business.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-dark">Robert Johnson</h4>
                    <p className="text-gray-600">CIO, Global Financial Services</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl text-primary opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-lg text-gray-700 italic mb-6">
                  Working with InfoShare Systems has been a game-changer for our IT operations. Their Nightingale 
                  platform has dramatically reduced our system downtime and helped us identify optimization opportunities 
                  we weren't even aware of. The ROI has been substantial.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-dark">Maria Rodriguez</h4>
                    <p className="text-gray-600">VP of Technology, Healthcare Systems Inc.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Achieve Similar Results?"
        subtitle="Let's discuss how our solutions can address your organization's unique challenges."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </PageTemplate>
  );
};

export default CaseStudiesPage;
