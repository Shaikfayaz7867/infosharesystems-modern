import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { IoChevronDownOutline } from 'react-icons/io5';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);
  
  // Refs for dropdown menus
  const dropdownRefs = useRef({});
  
  // Navigation items with dropdown menus
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Company', path: '/about' },
    { 
      title: 'Services', 
      path: '/services',
      dropdown: [
        { title: 'Product Development', path: '/services/product-development' },
        { title: 'Cyber Security', path: '/services/cyber-security' },
        { title: 'Technical IT Staffing', path: '/services/it-staffing' },
        { title: 'CMMC 2.0 Certification', path: '/services/cmmc-certification' }
      ] 
    },
    { 
      title: 'Products', 
      path: '/products',
      dropdown: [
        { title: 'Infoshare AWV', path: '/products/awv' },
        { title: 'Nightingale', path: '/products/nightingale' },
        { title: 'MASTS', path: '/products/masts' }
      ] 
    },
    { title: 'Industry', path: '/industries' },
    { 
      title: 'Resources', 
      path: '/resources',
      dropdown: [
        { title: 'Blogs', path: '/resources/blogs' },
        { title: 'Case Studies', path: '/resources/case-studies' }
      ] 
    },
    { title: 'Careers', path: '/careers' },
    { title: 'Contact Us', path: '/contact' },
  ];
  
  // Handle scroll effect and click outside dropdown
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    const handleClickOutside = (event) => {
      if (activeDropdown !== null) {
        const currentRef = dropdownRefs.current[activeDropdown];
        if (currentRef && !currentRef.contains(event.target)) {
          setActiveDropdown(null);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Close mobile menu on resize
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeDropdown, isOpen]);
  
  // Animation variants
  const navAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.4,
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: -8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  const dropdownAnimation = {
    hidden: { opacity: 0, y: -5, scaleY: 0.9, transformOrigin: 'top' },
    visible: { 
      opacity: 1, 
      y: 0, 
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      scaleY: 0.9,
      transition: {
        duration: 0.15,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const mobileMenuAnimation = {
    hidden: { 
      opacity: 0,
      x: '100%',
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };
  
  // Toggle dropdown menu
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  
  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);
  
  return (
    <header 
      ref={headerRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="group flex items-center"
          >
            <img 
              src="/images/infoshare-logo.png" 
              alt="InfoShare Systems" 
              className={`h-9 md:h-10 transition-all duration-300 ${scrolled ? 'brightness-100' : 'brightness-110'}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.parentElement.innerHTML = 
                  '<span className="font-bold text-lg md:text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">InfoShare Systems</span>';
              }}
            />
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <motion.ul 
            className="flex items-center space-x-1 xl:space-x-2"
            initial="hidden"
            animate="visible"
            variants={navAnimation}
          >
            {navItems.map((item, index) => (
              <motion.li 
                key={index} 
                variants={itemAnimation}
                className="relative"
                ref={el => item.dropdown && (dropdownRefs.current[index] = el)}
              >
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`flex items-center px-3 py-2 font-medium text-sm xl:text-base rounded-md transition-all duration-200 ${
                        activeDropdown === index 
                          ? scrolled ? 'text-blue-600 bg-blue-50/80' : 'text-white bg-white/20' 
                          : scrolled 
                              ? 'text-gray-800 hover:text-blue-600 hover:bg-gray-50' 
                              : 'text-white hover:text-white hover:bg-white/20'
                      }`}
                      aria-expanded={activeDropdown === index}
                      aria-haspopup="true"
                    >
                      {item.title}
                      <IoChevronDownOutline 
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          className="absolute top-full left-0 mt-1 py-2 bg-white rounded-lg shadow-xl border border-gray-100 z-20 min-w-[240px] overflow-hidden"
                          variants={dropdownAnimation}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.path}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => 
                      `block px-3 py-2 text-sm xl:text-base font-medium rounded-md transition-all duration-200 ${
                        isActive 
                          ? scrolled ? 'text-blue-600 bg-blue-50/80' : 'text-white bg-white/20'
                          : scrolled 
                              ? 'text-gray-800 hover:text-blue-600 hover:bg-gray-50' 
                              : 'text-white hover:text-white hover:bg-white/20'
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                )}
              </motion.li>
            ))}
            
            
          </motion.ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md transition-colors duration-200 focus:outline-none ${
              isOpen ? 'text-gray-900' : scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? (
              <IoCloseOutline className="h-7 w-7" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuAnimation}
          >
            {/* Overlay */}
            <motion.div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div 
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl flex flex-col"
              variants={mobileMenuAnimation}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-bold text-lg">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <IoCloseOutline className="h-6 w-6" />
                </button>
              </div>
              
              <div className="overflow-y-auto flex-1">
                <motion.ul 
                  className="flex flex-col py-4"
                  initial="hidden"
                  animate="visible"
                  variants={navAnimation}
                >
                  {navItems.map((item, index) => (
                    <motion.li key={index} variants={itemAnimation} className="w-full">
                      {item.dropdown ? (
                        <div className="w-full">
                          <button
                            onClick={() => toggleDropdown(index)}
                            className={`flex items-center justify-between w-full px-6 py-3 text-left ${
                              activeDropdown === index 
                                ? 'text-blue-600 bg-blue-50' 
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <span className="font-medium">{item.title}</span>
                            <IoChevronDownOutline 
                              className={`transition-transform duration-200 ml-2 ${activeDropdown === index ? 'rotate-180' : ''}`} 
                            />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === index && (
                              <motion.div
                                className="bg-gray-50/80 border-y border-gray-100"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ 
                                  height: 'auto',
                                  opacity: 1,
                                  transition: { duration: 0.3 }
                                }}
                                exit={{ 
                                  height: 0,
                                  opacity: 0,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <div className="py-1">
                                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                    <Link
                                      key={dropdownIndex}
                                      to={dropdownItem.path}
                                      className="block px-10 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                                      onClick={() => {
                                        setActiveDropdown(null);
                                        setIsOpen(false);
                                      }}
                                    >
                                      {dropdownItem.title}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <NavLink 
                          to={item.path}
                          className={({ isActive }) => 
                            `block px-6 py-3 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="font-medium">{item.title}</span>
                        </NavLink>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-auto p-6 border-t">
                <Link 
                  to="/contact" 
                  className="block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-medium rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;