import { FiUsers, FiUserCheck, FiClock, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import PageTemplate from '../../components/layout/PageTemplate';
import FeatureSection from '../../components/sections/FeatureSection';
import CtaSection from '../../components/sections/CtaSection';

const TechnicalStaffingPage = () => {
  const services = [
    {
      title: 'Contract Staffing',
      description: 'Flexible technical talent for short-term projects, specialized initiatives, or to fill temporary gaps in your workforce.',
      icon: <FiClock size={24} />
    },
    {
      title: 'Direct Placement',
      description: 'Find the perfect permanent addition to your team with our thorough vetting process and industry expertise.',
      icon: <FiUserCheck size={24} />
    },
    {
      title: 'Staff Augmentation',
      description: 'Seamlessly integrate skilled professionals into your existing teams to boost productivity and capabilities.',
      icon: <FiUsers size={24} />
    },
    {
      title: 'Executive Search',
      description: 'Identify and recruit top-tier technical leadership talent to drive your organization forward.',
      icon: <FiTrendingUp size={24} />
    }
  ];

  const benefits = [
    {
      title: 'Reduced Time-to-Hire',
      description: 'Our streamlined process and pre-vetted talent pool significantly reduces the time it takes to find qualified candidates.',
      icon: <div className="text-3xl font-bold text-primary">01</div>
    },
    {
      title: 'Access to Specialized Skills',
      description: 'Tap into our extensive network of professionals with niche technical skills that are hard to find in the general market.',
      icon: <div className="text-3xl font-bold text-primary">02</div>
    },
    {
      title: 'Cost Efficiency',
      description: 'Optimize your hiring budget by eliminating costly recruitment processes and reducing turnover with better-fit candidates.',
      icon: <div className="text-3xl font-bold text-primary">03</div>
    },
    {
      title: 'Scalability',
      description: 'Quickly scale your technical teams up or down based on project demands and business needs.',
      icon: <div className="text-3xl font-bold text-primary">04</div>
    }
  ];

  const roles = [
    'Software Engineers',
    'DevOps Specialists',
    'Data Scientists',
    'UI/UX Designers',
    'Project Managers',
    'QA Engineers',
    'Cloud Architects',
    'Security Specialists',
    'Database Administrators',
    'Full Stack Developers',
    'Mobile Developers',
    'Business Analysts'
  ];

  return (
    <PageTemplate
      title="Technical IT Staffing"
      subtitle="Connecting businesses with top-tier technical talent to drive innovation and growth"
      heroImage="/images/services/technical-staffing-hero.jpg"
      heroAlt="Technical IT Staffing Services"
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-dark">Building High-Performance Technical Teams</h2>
          <p className="text-lg text-gray-600 mb-8">
            At InfoShare Systems, we understand that finding the right technical talent is crucial for your business success. 
            Our IT staffing services connect you with skilled professionals who not only have the technical expertise you need 
            but also align with your company culture and business objectives.
          </p>
        </div>
      </section>

      {/* Services Features */}
      <FeatureSection
        title="Our Technical Staffing Services"
        subtitle="Flexible staffing solutions tailored to your business needs"
        features={services}
        image="/images/services/technical-staffing-features.jpg"
        imageAlt="Technical Staffing Services"
        imageOnRight={true}
        bgColor="bg-gray-50"
      />

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-dark">Our Staffing Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A thorough, efficient approach to finding the perfect match for your technical needs
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary transform -translate-x-1/2 z-0"></div>
            
            {/* Process Steps */}
            <div className="space-y-24">
              {[
                {
                  title: 'Requirements Analysis',
                  description: 'We start by understanding your specific technical needs, company culture, and project requirements to identify the ideal candidate profile.',
                  icon: '📋'
                },
                {
                  title: 'Candidate Sourcing',
                  description: 'Our recruiters leverage our extensive network and advanced sourcing techniques to identify qualified candidates with the right skills and experience.',
                  icon: '🔍'
                },
                {
                  title: 'Rigorous Screening',
                  description: 'Candidates undergo thorough technical assessments, interviews, and background checks to ensure they meet our high standards.',
                  icon: '✓'
                },
                {
                  title: 'Presentation & Selection',
                  description: 'We present you with a shortlist of pre-vetted candidates, providing detailed profiles and facilitating interviews to help you make the best choice.',
                  icon: '👥'
                },
                {
                  title: 'Onboarding & Support',
                  description: 'Once selected, we assist with the onboarding process and provide ongoing support to ensure a successful integration into your team.',
                  icon: '🚀'
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <h3 className="text-2xl font-bold text-dark mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className="my-6 md:my-0 z-10 bg-white">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <FeatureSection
        title="Benefits of Our IT Staffing Solutions"
        subtitle="Why leading companies choose InfoShare Systems for their technical staffing needs"
        features={benefits}
        image="/images/services/technical-staffing-benefits.jpg"
        imageAlt="Technical Staffing Benefits"
        imageOnRight={false}
        bgColor="bg-gray-50"
      />

      {/* Technical Roles */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark">Technical Roles We Staff</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide top talent across a wide range of technical specialties
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {roles.map((role, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center"
                whileHover={{ y: -5, backgroundColor: '#f8f0e6' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span className="text-dark font-medium">{role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl text-primary opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-lg text-gray-700 italic mb-6">
                  InfoShare Systems has been an invaluable partner in building our engineering team. Their thorough 
                  understanding of our technical requirements and company culture has resulted in high-quality candidates 
                  who have made immediate contributions to our projects. Their staffing process is efficient and has 
                  significantly reduced our time-to-hire.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-dark">Sarah Johnson</h4>
                    <p className="text-gray-600">CTO, TechInnovate Solutions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Find the Technical Talent You Need"
        subtitle="Let us help you build high-performing teams that drive your business forward."
        buttonText="Contact Our Staffing Team"
        buttonLink="/contact"
      />
    </PageTemplate>
  );
};

export default TechnicalStaffingPage;
