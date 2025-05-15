import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';

const JobApplicationForm = ({ jobTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: jobTitle || '',
    experience: '',
    resume: null,
    coverLetter: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrorMessage('File size should not exceed 5MB');
        return;
      }
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
      setErrorMessage('');
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.position || !formData.resume) {
      setErrorMessage('Please fill all required fields');
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: jobTitle || '',
        experience: '',
        resume: null,
        coverLetter: ''
      });
    }, 1500);
  };
  
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
      >
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
        <p className="text-green-700 mb-6">
          Thank you for your interest in joining InfoShare Systems. We have received your application and will review it shortly.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          className="bg-primary hover:bg-primary-dark"
        >
          Apply for Another Position
        </Button>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formVariants}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <h3 className="text-2xl font-bold mb-6">Apply for {jobTitle || 'This Position'}</h3>
      
      {errorMessage && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
          {errorMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label htmlFor="position" className="block text-gray-700 font-medium mb-2">
              Position Applying For *
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">
              Years of Experience
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
              Resume/CV (PDF, DOC, DOCX) *
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="coverLetter" className="block text-gray-700 font-medium mb-2">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>
        
        <div className="flex justify-end">
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary-dark"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default JobApplicationForm;
