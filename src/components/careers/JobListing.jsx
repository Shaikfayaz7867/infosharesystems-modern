import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiBriefcase, FiMapPin, FiClock } from 'react-icons/fi';
import Button from '../UI/Button';
import JobApplicationForm from './JobApplicationForm';

const JobListing = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (showApplicationForm) {
      setShowApplicationForm(false);
    }
  };
  
  const toggleApplicationForm = () => {
    setShowApplicationForm(!showApplicationForm);
  };
  
  return (
    <motion.div 
      layout
      className="bg-white rounded-lg shadow-md overflow-hidden mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Job Header */}
      <div 
        className="p-6 cursor-pointer flex justify-between items-center"
        onClick={toggleExpand}
      >
        <div>
          <h3 className="text-xl font-bold text-dark">{job.title}</h3>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center">
              <FiBriefcase className="mr-1" />
              {job.type}
            </div>
            <div className="flex items-center">
              <FiMapPin className="mr-1" />
              {job.location}
            </div>
            <div className="flex items-center">
              <FiClock className="mr-1" />
              Posted {job.postedDate}
            </div>
          </div>
        </div>
        <div className="text-primary">
          {isExpanded ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
        </div>
      </div>
      
      {/* Job Details */}
      {isExpanded && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          {/* Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Description</h4>
            <p className="text-gray-700">{job.description}</p>
          </div>
          
          {/* Requirements */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Requirements</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          
          {/* Responsibilities */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Responsibilities</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
          
          {/* Benefits */}
          {job.benefits && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Benefits</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Apply Button */}
          <div className="mt-8">
            <Button 
              onClick={toggleApplicationForm}
              className="bg-primary hover:bg-primary-dark"
            >
              {showApplicationForm ? 'Hide Application Form' : 'Apply Now'}
            </Button>
          </div>
          
          {/* Application Form */}
          {showApplicationForm && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              <JobApplicationForm jobTitle={job.title} />
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default JobListing;
