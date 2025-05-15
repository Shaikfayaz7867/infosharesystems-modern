import { motion } from 'framer-motion';
import { FiActivity, FiPieChart, FiAlertTriangle, FiServer } from 'react-icons/fi';
import PageTemplate from '../../components/layout/PageTemplate';
import FeatureSection from '../../components/sections/FeatureSection';
import CtaSection from '../../components/sections/CtaSection';

const NightingalePage = () => {
  const features = [
    {
      title: 'Continuous Monitoring',
      description: 'Monitor your IT infrastructure 24/7 with real-time alerts and notifications for potential issues before they impact your business.',
      icon: <FiActivity size={24} />
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain valuable insights with comprehensive analytics and reporting tools that help you make data-driven decisions.',
      icon: <FiPieChart size={24} />
    },
    {
      title: 'Proactive Threat Detection',
      description: 'Identify and mitigate security threats with our advanced threat detection algorithms and machine learning capabilities.',
      icon: <FiAlertTriangle size={24} />
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Our cloud-based platform scales with your business, ensuring optimal performance regardless of your organizations size.',
      icon: <FiServer size={24} />
    }
  ];

  const benefits = [
    {
      title: 'Minimize Downtime',
      description: 'Reduce system outages and disruptions by identifying and resolving issues before they cause downtime.',
      icon: <div className="text-3xl font-bold text-primary">01</div>
    },
    {
      title: 'Enhance Security',
      description: 'Protect your critical systems and data with proactive security monitoring and threat detection.',
      icon: <div className="text-3xl font-bold text-primary">02</div>
    },
    {
      title: 'Optimize Performance',
      description: 'Improve system performance and user experience by identifying bottlenecks and optimization opportunities.',
      icon: <div className="text-3xl font-bold text-primary">03</div>
    },
    {
      title: 'Reduce IT Costs',
      description: 'Lower operational costs by preventing major incidents and streamlining IT management processes.',
      icon: <div className="text-3xl font-bold text-primary">04</div>
    }
  ];

  return (
    <PageTemplate
      title="Nightingale"
      subtitle="Intelligent IT Monitoring and Management Platform"
      heroImage="/images/products/nightingale-hero.jpg"
      heroAlt="Nightingale IT Monitoring Platform"
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-dark">Proactive IT Management</h2>
          <p className="text-lg text-gray-600 mb-8">
            Nightingale is a comprehensive IT monitoring and management platform designed to help organizations 
            maintain optimal system performance, enhance security, and prevent costly downtime. With its 
            intelligent alerting system and powerful analytics, Nightingale transforms how businesses manage 
            their IT infrastructure.
          </p>
        </div>
      </section>

      {/* Product Demo/Screenshot */}
      <section className="mb-16">
        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/images/products/nightingale-dashboard.jpg" 
              alt="Nightingale Dashboard" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <FeatureSection
        title="Key Features"
        subtitle="Powerful tools to transform your IT operations"
        features={features}
        image="/images/products/nightingale-features.jpg"
        imageAlt="Nightingale Features"
        imageOnRight={true}
        bgColor="bg-gray-50"
      />

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-dark">Nightingale in Action</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How organizations across industries leverage Nightingale to transform their IT operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Healthcare',
                description: 'A leading hospital network uses Nightingale to monitor critical systems that support patient care, ensuring 99.99% uptime for life-saving equipment and applications.',
                icon: '🏥'
              },
              {
                title: 'Financial Services',
                description: 'A global bank relies on Nightingale to secure and monitor their transaction processing systems, protecting sensitive financial data and ensuring regulatory compliance.',
                icon: '🏦'
              },
              {
                title: 'E-Commerce',
                description: 'An online retail giant uses Nightingale to optimize website performance during peak shopping seasons, preventing costly downtime and maintaining customer satisfaction.',
                icon: '🛒'
              },
              {
                title: 'Manufacturing',
                description: 'A smart manufacturing facility leverages Nightingale to monitor production systems and IoT devices, preventing equipment failures and optimizing production efficiency.',
                icon: '🏭'
              }
            ].map((useCase, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <FeatureSection
        title="Benefits"
        subtitle="Why organizations choose Nightingale for IT monitoring"
        features={benefits}
        image="/images/products/nightingale-benefits.jpg"
        imageAlt="Nightingale Benefits"
        imageOnRight={false}
        bgColor="bg-gray-50"
      />

      {/* Dashboard Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark">Comprehensive Dashboard</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A unified view of your entire IT infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'System Health Monitoring',
              'Network Performance Metrics',
              'Security Threat Visualization',
              'Resource Utilization Tracking',
              'Application Performance Monitoring',
              'Custom Alert Configuration',
              'Historical Data Analysis',
              'Automated Reporting',
              'User Activity Monitoring'
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-5 rounded-lg"
                whileHover={{ y: -5, backgroundColor: '#f8f0e6' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary mr-3">
                    <FiCheck size={16} />
                  </div>
                  <span className="text-dark font-medium">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
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
              <div className="text-7xl text-primary opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-xl text-gray-700 italic mb-6">
                  Nightingale has completely transformed how we manage our IT infrastructure. Before implementing 
                  the platform, we were constantly in reactive mode, responding to issues after they impacted our 
                  business. Now, we identify and resolve potential problems before users even notice. The ROI has 
                  been tremendous, both in terms of cost savings and improved system reliability.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-dark">David Rodriguez</h4>
                    <p className="text-gray-600">CIO, Enterprise Solutions Inc.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark">Seamless Integration</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nightingale integrates with your existing tools and systems
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Slack', 'PagerDuty', 'Jira', 'ServiceNow'].map((integration, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-4 rounded-lg w-32 h-32 flex items-center justify-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span className="text-dark font-medium text-center">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Transform Your IT Operations?"
        subtitle="Schedule a demo today and see how Nightingale can help your organization prevent downtime and optimize performance."
        buttonText="Request a Demo"
        buttonLink="/contact"
      />
    </PageTemplate>
  );
};

export default NightingalePage;
