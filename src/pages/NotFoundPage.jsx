import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

const NotFoundPage = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-9xl font-bold text-primary mb-6">404</div>
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button as="link" to="/" variant="primary">
                Back to Home
              </Button>
              <Button as="link" to="/contact" variant="outline">
                Contact Support
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
