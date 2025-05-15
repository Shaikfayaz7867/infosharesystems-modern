import { motion } from 'framer-motion';
import SectionTitle from '../UI/SectionTitle';
import { FaLightbulb, FaUsers, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  // Content data
  const features = [
    {
      icon: <FaLightbulb />,
      title: 'Innovative Solutions',
      description: 'We develop cutting-edge IT solutions tailored to your specific business needs.'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Team',
      description: 'Our team consists of highly qualified professionals with extensive industry experience.'
    },
    {
      icon: <FaChartLine />,
      title: 'Growth-Oriented',
      description: 'We focus on delivering solutions that drive business growth and enhance productivity.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Reliable & Secure',
      description: 'Our systems prioritize reliability and security for your critical business operations.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="About InfoShare Systems"
          subtitle="We are a leading IT solutions provider committed to delivering exceptional value to businesses worldwide."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="/images/about-image.jpg" 
              alt="About InfoShare Systems" 
              className="w-full h-auto"
              onError={(e) => {
                // Fallback if image doesn't load
                e.target.onerror = null;
                e.target.style.height = '400px';
                e.target.style.background = '#003e5e';
                e.target.style.display = 'flex';
                e.target.style.alignItems = 'center';
                e.target.style.justifyContent = 'center';
                e.target.style.color = 'white';
                e.target.style.fontSize = '1.5rem';
                e.target.style.fontWeight = 'bold';
                e.target.innerHTML = 'InfoShare Systems';
              }}
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.p 
              className="text-lg mb-6 text-gray-700"
              variants={itemVariants}
            >
              Founded in 2005, InfoShare Systems has been at the forefront of digital transformation, helping businesses adapt and thrive in an increasingly technology-driven world.
            </motion.p>
            
            <motion.p 
              className="text-lg mb-8 text-gray-700"
              variants={itemVariants}
            >
              Our mission is to empower organizations with innovative IT solutions that drive efficiency, productivity, and growth. With a team of skilled professionals and a client-centric approach, we deliver tailored solutions that address the unique challenges of each business.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="mr-4 text-2xl text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;