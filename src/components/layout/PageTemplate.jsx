import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import SectionTitle from '../UI/SectionTitle';

const PageTemplate = ({ 
  title, 
  subtitle, 
  children, 
  heroImage, 
  heroAlt = 'Hero Image',
  bgColor = 'bg-white'
}) => {
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className={`w-full ${bgColor}`}
    >
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Hero Image with Overlay */}
        <div className="relative w-full h-[50vh] min-h-[500px] overflow-hidden">
          <img 
            src={heroImage} 
            alt={heroAlt} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark bg-opacity-60 flex items-center justify-center">
            <div className="container-custom text-center text-white">
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                {title}
              </motion.h1>
              {subtitle && (
                <motion.p 
                  variants={itemVariants}
                  className="text-lg md:text-xl max-w-3xl mx-auto"
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="container-custom py-16">
        {children}
      </div>
    </motion.div>
  );
};

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  heroImage: PropTypes.string.isRequired,
  heroAlt: PropTypes.string,
  bgColor: PropTypes.string
};

export default PageTemplate;
