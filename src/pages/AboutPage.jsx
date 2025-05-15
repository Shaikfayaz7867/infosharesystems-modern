import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import AboutSection from '../components/sections/AboutSection';
import CtaSection from '../components/sections/CtaSection';
import { FaAward, FaUsers, FaProjectDiagram, FaGlobe } from 'react-icons/fa';

const AboutPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Company stats
  const stats = [
    { icon: <FaAward />, value: '15+', label: 'Years Experience' },
    { icon: <FaUsers />, value: '200+', label: 'Happy Clients' },
    { icon: <FaProjectDiagram />, value: '500+', label: 'Projects Completed' },
    { icon: <FaGlobe />, value: '20+', label: 'Countries Served' }
  ];

  // Team members
  const team = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      image: '/images/team/team1.jpg',
      bio: 'John has over 20 years of experience in IT leadership and strategy.'
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      image: '/images/team/team2.jpg',
      bio: 'Sarah leads our technical teams with expertise in cloud architecture and AI.'
    },
    {
      name: 'Michael Chen',
      position: 'Director of Operations',
      image: '/images/team/team3.jpg',
      bio: 'Michael ensures smooth delivery of all our client projects and services.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Customer Success',
      image: '/images/team/team4.jpg',
      bio: 'Emily focuses on building strong relationships with our clients.'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Company</h1>
            <p className="text-xl text-gray-200">
              Learn about our journey, mission, and the team behind InfoShare Systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Company Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Impact in Numbers"
            subtitle="We take pride in our achievements and the trust our clients place in us"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg shadow-smooth hover:shadow-hover transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-4xl text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-primary">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Meet Our Leadership Team"
            subtitle="The experienced professionals guiding our company's vision and success"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-smooth hover:shadow-hover transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&size=264&background=003e5e&color=fff`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Journey"
            subtitle="How we've grown and evolved over the years"
          />

          <div className="max-w-4xl mx-auto">
            {[
              { year: '2005', title: 'Company Founded', description: 'InfoShare Systems was established with a mission to provide innovative IT solutions.' },
              { year: '2010', title: 'Expansion', description: 'Opened new offices and expanded our service offerings to include cloud solutions.' },
              { year: '2015', title: 'Global Reach', description: 'Started serving international clients and established partnerships with major tech companies.' },
              { year: '2020', title: 'Digital Transformation', description: 'Launched specialized services focused on helping businesses navigate digital transformation.' },
              { year: '2025', title: 'Innovation Hub', description: 'Established our innovation lab to research and develop cutting-edge technologies.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex mb-12 last:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
              >
                <div className="mr-8 text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                    {item.year}
                  </div>
                  <div className="h-full w-0.5 bg-gray-300 mx-auto mt-4"></div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

export default AboutPage;
