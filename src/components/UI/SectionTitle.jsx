import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center',
  light = false,
  className = '' 
}) => {
  // Animation variants
  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const subtitleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, delay: 0.2 }
    }
  };
  
  return (
    <div 
      className={`mb-12 ${
        align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'
      } ${className}`}
    >
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-dark'}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleAnimation}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`text-lg md:text-xl max-w-3xl mx-auto ${
            light ? 'text-gray-200' : 'text-gray-600'
          } ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={subtitleAnimation}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;