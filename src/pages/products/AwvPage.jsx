import { motion } from 'framer-motion';
import { FiShield, FiBarChart2, FiClock, FiCheck } from 'react-icons/fi';
import PageTemplate from '../../components/layout/PageTemplate';
import FeatureSection from '../../components/sections/FeatureSection';
import CtaSection from '../../components/sections/CtaSection';

const AwvPage = () => {
  const features = [
    {
      title: 'Automated Compliance',
      description: 'Streamline the AWV compliance process with automated workflows, reducing manual effort and ensuring all regulatory requirements are met.',
      icon: <FiCheck size={24} />
    },
    {
      title: 'Real-time Monitoring',
      description: 'Monitor transaction activities in real-time to identify potential compliance issues before they become problems.',
      icon: <FiBarChart2 size={24} />
    },
    {
      title: 'Enhanced Security',
      description: 'Protect sensitive financial data with enterprise-grade security features and encryption protocols.',
      icon: <FiShield size={24} />
    },
    {
      title: 'Efficient Processing',
      description: 'Reduce processing time by up to 70% with our intelligent automation and streamlined workflows.',
      icon: <FiClock size={24} />
    }
  ];

  const benefits = [
    {
      title: 'Regulatory Compliance',
      description: 'Stay compliant with all CFIUS regulations and requirements, avoiding penalties and legal issues.',
      icon: <div className="text-3xl font-bold text-primary">01</div>
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs associated with manual compliance processes and potential non-compliance penalties.',
      icon: <div className="text-3xl font-bold text-primary">02</div>
    },
    {
      title: 'Improved Efficiency',
      description: 'Automate repetitive tasks and streamline workflows to free up your team for more strategic activities.',
      icon: <div className="text-3xl font-bold text-primary">03</div>
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and address potential compliance risks before they impact your business operations.',
      icon: <div className="text-3xl font-bold text-primary">04</div>
    }
  ];

  return (
    <PageTemplate
      title="Annual Wellness Visits (AWV)"
      subtitle="The Annual Wellness Visit (AWV) is a comprehensive preventive care appointment designed to assess and promote overall health in Medicare beneficiaries."
      heroImage="/images/products/AWV-img.jpg"
      heroAlt="Infoshare AWV Product"
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-dark">Simplifying CFIUS Compliance</h2>
          <p className="text-lg text-gray-600 mb-8">
            InfoShare AWV is a comprehensive solution designed to streamline and automate the Committee on Foreign Investment
            in the United States (CFIUS) compliance process. Our platform helps financial institutions, investment firms, and
            multinational corporations efficiently manage their regulatory requirements while reducing operational costs and risks.
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
              src="/images/products/awv-dashboard.jpg"
              alt="Infoshare AWV Dashboard"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <FeatureSection
        title="Key Features"
        subtitle="Powerful tools to streamline your compliance processes"
        features={features}
        image="/images/products/awv-features.jpg"
        imageAlt="AWV Features"
        imageOnRight={true}
        bgColor="bg-gray-50"
      />

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-dark">How Infoshare AWV Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A seamless process that transforms your compliance operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Integration',
                description: 'Connect with your existing systems to automatically import transaction data and relevant information.',
                icon: '🔄'
              },
              {
                title: 'Automated Analysis',
                description: 'Our AI-powered engine analyzes transactions against CFIUS requirements and flags potential compliance issues.',
                icon: '🔍'
              },
              {
                title: 'Reporting & Documentation',
                description: 'Generate comprehensive reports and maintain audit-ready documentation for regulatory requirements.',
                icon: '📊'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <FeatureSection
        title="Benefits"
        subtitle="Why leading organizations choose Infoshare AWV"
        features={benefits}
        image="/images/products/awv-benefits.jpg"
        imageAlt="AWV Benefits"
        imageOnRight={false}
        bgColor="bg-gray-50"
      />

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-primary bg-opacity-5 p-8 rounded-lg relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-7xl text-primary opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-xl text-gray-700 italic mb-6">
                  Implementing Infoshare AWV has transformed our compliance operations. What used to take our team days
                  to process now happens automatically in minutes. The system has not only improved our efficiency but
                  also significantly reduced our compliance risks.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-dark">Michael Chen</h4>
                    <p className="text-gray-600">Compliance Director, Global Financial Group</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-dark">Flexible Pricing Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your organization's needs and scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Standard',
                price: '$1,999',
                period: 'per month',
                description: 'Perfect for small to medium businesses with basic compliance needs',
                features: [
                  'Up to 1,000 transactions per month',
                  'Basic compliance reporting',
                  'Email support',
                  'Data retention for 1 year',
                  'Single user access'
                ],
                highlighted: false
              },
              {
                name: 'Professional',
                price: '$3,999',
                period: 'per month',
                description: 'Ideal for growing organizations with moderate compliance requirements',
                features: [
                  'Up to 5,000 transactions per month',
                  'Advanced compliance reporting',
                  'Priority email and phone support',
                  'Data retention for 3 years',
                  'Up to 5 user access',
                  'API integration'
                ],
                highlighted: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'tailored solution',
                description: 'Comprehensive solution for large organizations with complex needs',
                features: [
                  'Unlimited transactions',
                  'Custom compliance workflows',
                  '24/7 dedicated support',
                  'Unlimited data retention',
                  'Unlimited user access',
                  'Full API integration',
                  'Custom reporting'
                ],
                highlighted: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`rounded-lg overflow-hidden ${plan.highlighted ? 'shadow-xl ring-2 ring-primary' : 'shadow-lg'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`p-8 ${plan.highlighted ? 'bg-primary text-white' : 'bg-white text-dark'}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="ml-2 text-sm opacity-80">{plan.period}</span>
                  </div>
                  <p className={`${plan.highlighted ? 'text-white opacity-90' : 'text-gray-600'}`}>{plan.description}</p>
                </div>
                <div className="p-8 bg-white">
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <FiCheck className="text-primary mt-1 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <button
                      className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-300 ${plan.highlighted
                          ? 'bg-primary text-white hover:bg-primary-dark'
                          : 'bg-gray-100 text-dark hover:bg-gray-200'
                        }`}
                    >
                      {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Transform Your Compliance Process?"
        subtitle="Schedule a demo today and see how Infoshare AWV can streamline your CFIUS compliance operations."
        buttonText="Request a Demo"
        buttonLink="/contact"
      />
    </PageTemplate>
  );
};

export default AwvPage;
