import { motion } from 'framer-motion';
import Button from '../UI/Button';

const CtaSection = () => {
  // Animation variants
  const containerVariants = {
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

  // Background circle animation
  const circleAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section
      className="py-20 relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/join-hands.jpg')",
        backgroundSize: "100%", // Slight zoom out (100% is default for "cover")
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center" // Moves it slightly towards top
      }}
    >
      {/* Overlay to darken the image for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Animated background circles */}
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-[-10%] right-[-5%] h-64 w-64 rounded-full bg-white opacity-10"
          variants={circleAnimation}
        />
        <motion.div
          className="absolute bottom-[-15%] left-[-10%] h-96 w-96 rounded-full bg-white opacity-10"
          variants={circleAnimation}
          transition={{ delay: 0.2 }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="container-custom relative z-20">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            Transform Your Business with Innovative IT Solutions
          </motion.h2>

          <motion.p className="text-lg md:text-xl mb-8" variants={itemVariants}>
            Ready to take your business to the next level? Contact us today to learn
            how our customized IT solutions can help you achieve your goals.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button
              as="link"
              to="/contact"
              variant="white"
              className="text-secondary font-medium px-8 py-3 text-lg"
            >
              Get Started Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

  );
};

export default CtaSection;