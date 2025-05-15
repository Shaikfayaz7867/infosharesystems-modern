import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiCalendar, FiUser, FiTag } from 'react-icons/fi';

const ResourceCard = ({ 
  resource, 
  type = 'blog' // 'blog' or 'case-study'
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={resource.image} 
          alt={resource.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {type === 'case-study' && (
          <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
            Case Study
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center">
            <FiCalendar className="mr-1" />
            {resource.date}
          </div>
          
          {resource.author && (
            <div className="flex items-center">
              <FiUser className="mr-1" />
              {resource.author}
            </div>
          )}
          
          {resource.category && (
            <div className="flex items-center">
              <FiTag className="mr-1" />
              {resource.category}
            </div>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-dark mb-3">{resource.title}</h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-4 flex-grow">{resource.excerpt}</p>
        
        {/* Read More Link */}
        <Link 
          to={resource.link || '#'} 
          className="text-primary font-medium hover:underline mt-auto inline-block"
        >
          {type === 'blog' ? 'Read More' : 'View Case Study'}
        </Link>
      </div>
    </motion.div>
  );
};

ResourceCard.propTypes = {
  resource: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string,
    category: PropTypes.string,
    link: PropTypes.string
  }).isRequired,
  type: PropTypes.oneOf(['blog', 'case-study'])
};

export default ResourceCard;
