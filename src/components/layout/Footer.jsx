import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="relative text-white">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: "url('/images/footer-img.jpg')",
          backgroundSize: "100%", // Slight zoom out (100% is default for "cover")

        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85 z-0"></div>

      {/* Footer Content */}
      <div className="relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {/* Company Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
            >
              <img
                src="/images/infoshare-logo.png"
                alt="InfoShare Systems"
                className="h-12 mb-6"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentElement.innerHTML = 'InfoShare Systems';
                }}
              />
              <p className="mb-4 text-sm leading-relaxed">
                InfoShare Systems provides innovative IT solutions to businesses worldwide. Our commitment to excellence
                and cutting-edge technology makes us a trusted partner for all your IT needs.
              </p>
              <div className="flex space-x-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  <FaFacebook size={20} />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Industries', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-secondary transition-colors flex items-center">
                      <span className="mr-1">›</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {[
                  'IT Consulting',
                  'Software Development',
                  'Cloud Services',
                  'Cybersecurity',
                  'Data Analytics'
                ].map((service, index) => (
                  <li key={index}>
                    <Link to="/services" className="hover:text-secondary transition-colors flex items-center">
                      <span className="mr-1">›</span> {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-secondary" />
                  <span>123 Business Avenue, Suite 100, San Francisco, CA 94107</span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-3 text-secondary" />
                  <a href="tel:+1234567890" className="hover:text-secondary transition-colors">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-secondary" />
                  <a href="mailto:info@infosharesystems.com" className="hover:text-secondary transition-colors">info@infosharesystems.com</a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="py-4 border-t border-white/20 text-center text-sm">
            <p>© {new Date().getFullYear()} InfoShare Systems. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>


  );
};

export default Footer;