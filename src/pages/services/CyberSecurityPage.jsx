import { FiShield, FiSearch, FiLock, FiAlertCircle } from 'react-icons/fi';
import PageTemplate from '../../components/layout/PageTemplate';
import FeatureSection from '../../components/sections/FeatureSection';
import CtaSection from '../../components/sections/CtaSection';
import { motion } from 'framer-motion';

const CyberSecurityPage = () => {
  const services = [
    {
      title: 'Security Assessment & Auditing',
      description: 'Comprehensive evaluation of your current security posture to identify vulnerabilities and compliance gaps in your systems and infrastructure.',
      icon: <FiSearch size={24} />
    },
    {
      title: 'Threat Detection & Response',
      description: 'Advanced monitoring and rapid response capabilities to detect, analyze, and mitigate security threats before they impact your business.',
      icon: <FiAlertCircle size={24} />
    },
    {
      title: 'Security Implementation',
      description: 'Design and implementation of robust security controls and technologies to protect your critical assets and sensitive data.',
      icon: <FiShield size={24} />
    },
    {
      title: 'Compliance & Governance',
      description: 'Ensure your organization meets industry regulations and standards including GDPR, HIPAA, PCI DSS, and more.',
      icon: <FiLock size={24} />
    }
  ];

  const benefits = [
    {
      title: 'Reduced Security Risks',
      description: 'Identify and address vulnerabilities before they can be exploited, significantly reducing the risk of data breaches and cyber attacks.',
      icon: <div className="text-3xl font-bold text-primary">01</div>
    },
    {
      title: 'Business Continuity',
      description: 'Maintain operations even in the face of cyber threats with robust incident response and disaster recovery capabilities.',
      icon: <div className="text-3xl font-bold text-primary">02</div>
    },
    {
      title: 'Regulatory Compliance',
      description: 'Meet industry-specific compliance requirements and avoid costly penalties while building trust with your customers.',
      icon: <div className="text-3xl font-bold text-primary">03</div>
    },
    {
      title: 'Competitive Advantage',
      description: 'Demonstrate your commitment to security, building customer confidence and differentiating your business in the marketplace.',
      icon: <div className="text-3xl font-bold text-primary">04</div>
    }
  ];

  // Animation variants
  const counterVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageTemplate
      title="Cyber Security"
      subtitle="Protecting your business against evolving cyber threats with comprehensive security solutions"
      heroImage="/images/services/cyber-security-hero.jpg"
      heroAlt="Cyber Security Services"
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-dark">Safeguarding Your Digital Assets</h2>
          <p className="text-lg text-gray-600 mb-8">
            In today's digital landscape, cyber threats are constantly evolving and becoming more sophisticated. 
            InfoShare Systems provides comprehensive cybersecurity solutions designed to protect your organization's 
            critical assets, sensitive data, and reputation from emerging threats and vulnerabilities.
          </p>
        </div>
      </section>

      {/* Services Features */}
      <FeatureSection
        title="Our Cyber Security Services"
        subtitle="Comprehensive protection for your digital infrastructure"
        features={services}
        image="/images/services/cyber-security-features.jpg"
        imageAlt="Cyber Security Services"
        imageOnRight={true}
        bgColor="bg-gray-50"
      />

      {/* Security Statistics */}
      <section className="py-16 bg-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cyber Security by the Numbers</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-80">
              The growing importance of robust cyber security solutions in today's digital landscape
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={counterVariants}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <div className="text-5xl font-bold text-primary mb-2">60%</div>
              <p className="text-lg">of small businesses close within 6 months of a cyber attack</p>
            </motion.div>
            
            <motion.div className="text-center" variants={itemVariants}>
              <div className="text-5xl font-bold text-primary mb-2">$4.35M</div>
              <p className="text-lg">average cost of a data breach in 2022</p>
            </motion.div>
            
            <motion.div className="text-center" variants={itemVariants}>
              <div className="text-5xl font-bold text-primary mb-2">300%</div>
              <p className="text-lg">increase in reported cybercrimes since 2020</p>
            </motion.div>
            
            <motion.div className="text-center" variants={itemVariants}>
              <div className="text-5xl font-bold text-primary mb-2">95%</div>
              <p className="text-lg">of breaches are caused by human error</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <FeatureSection
        title="Benefits of Our Cyber Security Solutions"
        subtitle="Why investing in cyber security is critical for your business"
        features={benefits}
        image="/images/services/cyber-security-benefits.jpg"
        imageAlt="Cyber Security Benefits"
        imageOnRight={false}
        bgColor="bg-white"
      />

      {/* Security Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark">Our Security Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We employ industry-leading technologies and methodologies to protect your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Network Security', icon: '🔒' },
              { title: 'Cloud Security', icon: '☁️' },
              { title: 'Endpoint Protection', icon: '💻' },
              { title: 'Identity & Access Management', icon: '🔑' },
              { title: 'Security Awareness Training', icon: '👥' },
              { title: 'Incident Response', icon: '🚨' }
            ].map((solution, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{solution.title}</h3>
                <div className="w-16 h-1 bg-primary mb-4"></div>
                <p className="text-gray-600">
                  Comprehensive {solution.title.toLowerCase()} solutions to protect your critical assets and data from evolving threats.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Strengthen Your Security Posture Today"
        subtitle="Let our security experts help you build a robust defense against cyber threats."
        buttonText="Get a Security Assessment"
        buttonLink="/contact"
      />
    </PageTemplate>
  );
};

export default CyberSecurityPage;
