import { motion } from 'framer-motion';
import { FiLock, FiShield, FiSearch, FiUsers } from 'react-icons/fi';
import PageTemplate from '../../components/layout/PageTemplate';
import FeatureSection from '../../components/sections/FeatureSection';
import CtaSection from '../../components/sections/CtaSection';

const MastsPage = () => {
  const features = [
    {
      title: 'Application Static Analysis',
      description: 'Target mobile application will be tested for static code (APK level) security issues. User need not to authenticate with the target mobile application for scanning.',
      icon: <FiSearch size={24} />
    },
    {
      title: 'BlackBox Testing',
      description: 'Target mobile application will be tested for vulnerabilities without logging into the application with Black Box Approach.',
      icon: <FiShield size={24} />
    },
    {
      title: 'MASTS Logcat',
      description: 'Logcat captures device logs of the target mobile device and allows pentester to download it in plain text on local machine for further analysis.',
      icon: <FiLock size={24} />
    },
    {
      title: 'MASTS SAND ',
      description: 'SAND utility provides taking a Snapshot of the target device, provide details such as number of application installed, permissions on those application, files and databases created by the application, etc.',
      icon: <FiUsers size={24} />
    },
    {
      title: 'SAND Comparator ',
      description: 'SAND Comparator provides the facility to compare any two Snapshots of the target devices to display details on any modifications done before and after installing the application or before and after login into the application, etc.',
      icon: <FiUsers size={24} />
    },
    {
      title: 'Export Detailed Report ',
      description: 'Exporting reports of the scan results, including completed scans and failed scans. Reports can be exported in PDF and HTML formats.',
      icon: <FiUsers size={24} />
    },
    {
      title: 'Reverse Engineering ',
      description: 'It extracts the source code of the application APK and analyze it for any known security issues under static testing. Also facilitates pentester in verifying reverse engineered code to check for possible modification and tampering.',
      icon: <FiUsers size={24} />
    },
    {
      title: 'TCP Sniffer',
      description: 'A TCP Sniffer acts like a proxy on the connection/communication in the network. TCP Sniffer captures the TCP traffic going from the target mobile application and coming from the server and analyze it.',
      icon: <FiUsers size={24} />
    },
  ];

  const capabilities = [
    {
      title: 'Comprehensive Visibility',
      description: 'Gain a unified view of your security posture across all systems, networks, and applications.',
      icon: '👁️'
    },
    {
      title: 'Rapid Incident Response',
      description: 'Detect, analyze, and respond to security incidents in minutes rather than hours or days.',
      icon: '⚡'
    },
    {
      title: 'Threat Hunting',
      description: 'Proactively search for hidden threats that may have evaded traditional security controls.',
      icon: '🔍'
    },
    {
      title: 'Risk Assessment',
      description: 'Continuously evaluate security risks and prioritize remediation efforts based on potential impact.',
      icon: '📊'
    },
    {
      title: 'Security Orchestration',
      description: 'Coordinate and automate security tools and processes for more efficient operations.',
      icon: '🔄'
    },
    {
      title: 'Compliance Reporting',
      description: 'Generate comprehensive reports for regulatory compliance and security audits.',
      icon: '📝'
    }
  ];

  return (
    <PageTemplate
      title="Mobile Application Security Testing Suite-MASTS"
      subtitle="The inception of MASTS was engineered with an aim to ease the Mobile Application Penetration Testing"
      heroImage="/images/products/Masts-img.png"
      heroAlt="MASTS Security Platform"
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-dark">Advanced Security Operations Platform</h2>
          <p className="text-lg text-gray-600 mb-8">
            MASTS (Managed Advanced Security Threat Solution) is a comprehensive security operations platform
            that helps organizations detect, analyze, and respond to cyber threats with unprecedented speed and
            efficiency. By combining advanced threat intelligence, automation, and expert-guided workflows,
            MASTS transforms how security teams protect their critical assets.
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
              src="/images/products/masts-dashboard.jpg"
              alt="MASTS Security Dashboard"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <FeatureSection
        title="Key Features"
        subtitle="Powerful security capabilities to protect your organization"
        features={features}
        image="/images/products/masts-logo.png"
        imageAlt="MASTS Features"
        imageOnRight={true}
        bgColor="bg-gray-50"
      />

      {/* Security Statistics */}
      <section className="py-16 bg-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">MASTS Impact</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-80">
              Transforming security operations with measurable results
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
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="text-5xl font-bold text-primary mb-2">85%</div>
              <p className="text-lg">reduction in mean time to detect threats</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="text-5xl font-bold text-primary mb-2">73%</div>
              <p className="text-lg">faster incident response times</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="text-5xl font-bold text-primary mb-2">90%</div>
              <p className="text-lg">reduction in false positives</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="text-5xl font-bold text-primary mb-2">40%</div>
              <p className="text-lg">decrease in security operations costs</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark">MASTS Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive security functions to protect your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-dark">How MASTS Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A continuous cycle of security monitoring, detection, and response
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary transform -translate-x-1/2 z-0"></div>

            {/* Process Steps */}
            <div className="space-y-24">
              {[
                {
                  title: 'Collect & Monitor',
                  description: 'MASTS collects and monitors security data from across your environment, including networks, endpoints, applications, and cloud services.',
                  icon: '📡'
                },
                {
                  title: 'Detect & Analyze',
                  description: 'Advanced analytics and machine learning algorithms analyze data to detect anomalies and potential security threats in real-time.',
                  icon: '🔍'
                },
                {
                  title: 'Prioritize & Investigate',
                  description: 'Threats are automatically prioritized based on risk level, and security analysts investigate the most critical issues first.',
                  icon: '⚠️'
                },
                {
                  title: 'Respond & Remediate',
                  description: 'Automated and guided response workflows help security teams quickly contain and remediate threats.',
                  icon: '🛡️'
                },
                {
                  title: 'Learn & Improve',
                  description: 'The system continuously learns from each incident to improve detection capabilities and response procedures.',
                  icon: '🧠'
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
                  MASTS has revolutionized our security operations. What used to take our team days to investigate
                  and resolve now happens in minutes. The platform's automation capabilities have freed our security
                  analysts to focus on strategic initiatives rather than routine tasks. Most importantly, we've
                  significantly improved our ability to detect and respond to sophisticated threats.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-dark">Jennifer Williams</h4>
                    <p className="text-gray-600">CISO, Global Enterprises Corp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark">Seamless Integration</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              MASTS integrates with your existing security tools and systems
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {['Splunk', 'CrowdStrike', 'Palo Alto', 'Microsoft Defender', 'AWS Security Hub', 'Okta', 'SentinelOne', 'Cisco', 'Fortinet'].map((integration, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md w-32 h-32 flex items-center justify-center"
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
        title="Strengthen Your Security Operations"
        subtitle="Schedule a demo today and see how MASTS can transform your organization's security posture."
        buttonText="Request a Demo"
        buttonLink="/contact"
      />
    </PageTemplate>
  );
};

export default MastsPage;
