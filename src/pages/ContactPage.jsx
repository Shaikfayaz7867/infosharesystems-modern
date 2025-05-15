import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/UI/Button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'Select a service'
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message || formData.service === 'Select a service') {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // In a real application, you would send the form data to a server here
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: 'Select a service'
    });
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-secondary" />,
      title: 'Email Us',
      details: 'info@infosharesystems.com',
      link: 'mailto:info@infosharesystems.com'
    },
    {
      icon: <FaPhone className="text-secondary" />,
      title: 'Call Us',
      details: '+1 (234) 567-890',
      link: 'tel:+1234567890'
    },
    {
      icon: <FaMapMarkerAlt className="text-secondary" />,
      title: 'Visit Us',
      details: '123 Business Avenue, Suite 100, San Francisco, CA 94107',
      link: 'https://maps.google.com/?q=123+Business+Avenue+San+Francisco+CA+94107'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Get in touch with our team to discuss how we can help your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center h-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-3xl mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <a 
                  href={item.link} 
                  className="text-gray-700 hover:text-primary transition-colors"
                  target={item.title === 'Visit Us' ? '_blank' : undefined}
                  rel={item.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
                >
                  {item.details}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
            >
              <SectionTitle 
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible"
                align="left"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Status Message */}
                {formStatus.submitted && (
                  <div className={`p-4 rounded-md ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="Select a service" disabled>Select a service</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Cloud Services">Cloud Services</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="h-full"
            >
              <SectionTitle 
                title="Our Location"
                subtitle="Visit our office to meet our team in person"
                align="left"
              />
              
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-smooth">
                {/* In a real application, you would embed a Google Map here */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <div className="text-center p-6">
                    <FaMapMarkerAlt className="text-5xl text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">InfoShare Systems Headquarters</h3>
                    <p className="text-gray-700">123 Business Avenue, Suite 100</p>
                    <p className="text-gray-700">San Francisco, CA 94107</p>
                    <a 
                      href="https://maps.google.com/?q=123+Business+Avenue+San+Francisco+CA+94107" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-primary hover:text-primary-dark transition-colors"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Connect With Us"
            subtitle="Follow us on social media for the latest updates and news"
          />
          
          <div className="flex justify-center space-x-8">
            {[
              { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com' },
              { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com' },
              { icon: <FaFacebook />, name: 'Facebook', url: 'https://facebook.com' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-600 hover:text-primary transition-colors"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-4xl mb-2">
                  {social.icon}
                </div>
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services"
          />
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'What industries do you specialize in?',
                answer: 'We provide IT solutions for a wide range of industries including Financial Services, Healthcare, Retail, Manufacturing, Education, and more. Our team has specialized knowledge in each sector to deliver tailored solutions.'
              },
              {
                question: 'How do you ensure the security of your solutions?',
                answer: 'Security is a top priority for us. We implement industry best practices, conduct regular security audits, and stay updated with the latest security protocols. Our solutions comply with relevant regulations such as GDPR, HIPAA, and PCI DSS.'
              },
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary depending on the scope and complexity. We work closely with clients to establish realistic timelines and milestones. Our agile approach allows for flexibility while ensuring timely delivery.'
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Yes, we offer comprehensive support and maintenance services to ensure your solutions continue to perform optimally. We provide different support packages tailored to your specific needs.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 last:mb-0 bg-white rounded-lg shadow-smooth p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
