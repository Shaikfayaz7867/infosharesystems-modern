import { motion } from 'framer-motion';
import Button from '../UI/Button';

const HeroSection = () => {
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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background - can be replaced with an actual image */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero-img.jpg')`,
          }}
        />

        {/* Optional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-40"></div>
      </div>


      {/* Hero Content */}
      <div className="container-custom relative z-10 py-20">
        <motion.div
          className="max-w-3xl text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Learn How We Help Organizations to drive IT Services Business!
          </motion.h1>

          <motion.p
            className="text-xl mb-8 text-gray-100"
            variants={itemVariants}
          >
            We craft best-in-class software solutions, manage your IT with unmatched expertise, and fortify your cybersecurity. Seamlessly unlock growth with our digital transformation solutions and services.          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Button
              as="link"
              to="/services"
              variant="secondary"
              className="text-lg"
            >
              Our Services
            </Button>

            <Button
              as="link"
              to="/contact"
              variant="outline"
              className="text-lg border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center items-start p-1">
          <motion.div
            className="w-1 h-3 bg-white rounded-full"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;