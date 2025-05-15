import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  as = 'button', 
  to = '/', 
  href = '#',
  onClick,
  ...props 
}) => {
  // Base classes
  const baseClasses = `inline-flex items-center justify-center px-6 py-2.5 rounded-md font-medium transition-all duration-300 ${className}`;
  
  // Variant specific classes
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-hover',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark hover:shadow-hover',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-gray-100 hover:shadow-hover',
    link: 'text-primary hover:underline px-0 py-0'
  };
  
  // Combine classes
  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.primary}`;
  
  // Animation
  const buttonAnimation = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  };
  
  // Render based on 'as' prop
  if (as === 'link') {
    return (
      <motion.div
        whileHover="hover"
        whileTap="tap"
        variants={buttonAnimation}
      >
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  } else if (as === 'a') {
    return (
      <motion.div
        whileHover="hover"
        whileTap="tap"
        variants={buttonAnimation}
      >
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      </motion.div>
    );
  } else {
    return (
      <motion.button
        className={classes}
        onClick={onClick}
        whileHover="hover"
        whileTap="tap"
        variants={buttonAnimation}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
};

export default Button;