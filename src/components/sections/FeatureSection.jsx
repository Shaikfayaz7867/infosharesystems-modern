import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import SectionTitle from '../UI/SectionTitle';

const FeatureSection = ({
  title,
  subtitle,
  features,
  imageOnRight = false,
  bgColor = 'bg-white',
  image,
  imageAlt = 'Feature Image'
}) => {
  // Animation variants
  const sectionVariants = {
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="mb-12 text-center"
        >
          <SectionTitle title={title} subtitle={subtitle} centered />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left 4 Features */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            {features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                variants={itemVariants}
              >
                {feature.icon && (
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-sm h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          {/* Right 4 Features */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            {features.slice(4).map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                variants={itemVariants}
              >
                {feature.icon && (
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

  );
};

FeatureSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.node
    })
  ).isRequired,
  imageOnRight: PropTypes.bool,
  bgColor: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string
};

export default FeatureSection;
