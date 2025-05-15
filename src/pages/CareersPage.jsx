import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiMapPin, FiBriefcase } from 'react-icons/fi';
import PageTemplate from '../components/layout/PageTemplate';
import JobListing from '../components/careers/JobListing';
import CtaSection from '../components/sections/CtaSection';

const CareersPage = () => {
  // Sample job listings data
  const allJobs = [
    {
      id: 1,
      title: 'Senior Cybersecurity Engineer',
      type: 'Full-time',
      location: 'Washington, DC',
      postedDate: '2 days ago',
      description: 'We are seeking an experienced Cybersecurity Engineer to join our team and help protect our clients critical assets from evolving cyber threats.',
      requirements: [
        'Bachelors degree in Computer Science, Cybersecurity, or related field',
        '5+ years of experience in cybersecurity engineering',
        'Experience with security tools such as SIEM, EDR, and vulnerability scanners',
        'Knowledge of security frameworks such as NIST, ISO 27001, and MITRE ATT&CK',
        'Professional certifications (e.g., CISSP, CEH, Security+) preferred',
        'Strong analytical and problem-solving skills'
      ],
      responsibilities: [
        'Design and implement security solutions to protect client infrastructure and applications',
        'Conduct security assessments, penetration testing, and vulnerability management',
        'Respond to security incidents and lead forensic investigations',
        'Develop and maintain security documentation and procedures',
        'Stay current with emerging threats and security technologies',
        'Collaborate with cross-functional teams to ensure security best practices'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health, dental, and vision insurance',
        'Retirement plan with company matching',
        'Professional development and certification support',
        'Flexible work arrangements',
        'Paid time off and company holidays'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      type: 'Full-time',
      location: 'Remote',
      postedDate: '1 week ago',
      description: 'Join our development team to create innovative web applications and solutions for our clients across various industries.',
      requirements: [
        'Bachelors degree in Computer Science or related field',
        '3+ years of experience in full stack development',
        'Proficiency in JavaScript, React, Node.js, and modern web technologies',
        'Experience with database design and management (SQL and NoSQL)',
        'Knowledge of RESTful APIs and microservices architecture',
        'Familiarity with CI/CD pipelines and DevOps practices'
      ],
      responsibilities: [
        'Develop and maintain web applications using modern frameworks and technologies',
        'Collaborate with designers to implement responsive and intuitive user interfaces',
        'Write clean, maintainable, and efficient code',
        'Participate in code reviews and contribute to technical documentation',
        'Troubleshoot and debug applications to optimize performance',
        'Stay updated with emerging trends and technologies in web development'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health, dental, and vision insurance',
        'Retirement plan with company matching',
        'Professional development opportunities',
        'Flexible work arrangements',
        'Paid time off and company holidays'
      ]
    },
    {
      id: 3,
      title: 'IT Project Manager',
      type: 'Full-time',
      location: 'Chicago, IL',
      postedDate: '2 weeks ago',
      description: 'We are looking for an experienced IT Project Manager to lead complex technology projects from inception to successful completion.',
      requirements: [
        'Bachelors degree in Computer Science, Business Administration, or related field',
        '5+ years of experience in IT project management',
        'PMP or equivalent project management certification',
        'Strong knowledge of project management methodologies (Agile, Waterfall)',
        'Experience with project management tools and software',
        'Excellent communication and leadership skills'
      ],
      responsibilities: [
        'Plan, execute, and close IT projects according to strict deadlines and budget constraints',
        'Define project scope, goals, and deliverables in collaboration with stakeholders',
        'Develop detailed project plans and schedules',
        'Coordinate internal resources and third-party vendors for flawless execution',
        'Manage changes to project scope, schedule, and costs',
        'Report project status to management and stakeholders'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health, dental, and vision insurance',
        'Retirement plan with company matching',
        'Professional development and certification support',
        'Flexible work arrangements',
        'Paid time off and company holidays'
      ]
    },
    {
      id: 4,
      title: 'Cloud Solutions Architect',
      type: 'Full-time',
      location: 'San Francisco, CA',
      postedDate: '3 weeks ago',
      description: 'We are seeking a skilled Cloud Solutions Architect to design and implement innovative cloud-based solutions for our clients.',
      requirements: [
        'Bachelors degree in Computer Science, Information Technology, or related field',
        '5+ years of experience in cloud architecture and implementation',
        'Strong expertise in AWS, Azure, or Google Cloud Platform',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Knowledge of containerization and orchestration (Docker, Kubernetes)',
        'Cloud certifications (AWS Solutions Architect, Azure Solutions Architect, etc.)'
      ],
      responsibilities: [
        'Design and implement scalable, secure, and cost-effective cloud solutions',
        'Develop cloud migration strategies and roadmaps for clients',
        'Provide technical leadership and guidance to implementation teams',
        'Evaluate and recommend appropriate cloud services and technologies',
        'Create architecture documentation and diagrams',
        'Stay current with cloud technology trends and best practices'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health, dental, and vision insurance',
        'Retirement plan with company matching',
        'Professional development and certification support',
        'Flexible work arrangements',
        'Paid time off and company holidays'
      ]
    },
    {
      id: 5,
      title: 'Data Scientist',
      type: 'Full-time',
      location: 'Boston, MA',
      postedDate: '1 month ago',
      description: 'Join our data science team to develop advanced analytics solutions that help our clients extract valuable insights from their data.',
      requirements: [
        'Masters or PhD in Data Science, Computer Science, Statistics, or related field',
        '3+ years of experience in data science or machine learning',
        'Proficiency in Python, R, or similar programming languages',
        'Experience with data visualization tools (Tableau, Power BI)',
        'Knowledge of machine learning frameworks and libraries',
        'Strong statistical analysis and modeling skills'
      ],
      responsibilities: [
        'Develop and implement machine learning models and algorithms',
        'Analyze complex datasets to identify patterns and insights',
        'Create data visualizations and dashboards to communicate findings',
        'Collaborate with cross-functional teams to understand business requirements',
        'Optimize data collection procedures and ensure data quality',
        'Stay updated with emerging trends in data science and machine learning'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health, dental, and vision insurance',
        'Retirement plan with company matching',
        'Professional development opportunities',
        'Flexible work arrangements',
        'Paid time off and company holidays'
      ]
    }
  ];

  // State for filtering and search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedType, setSelectedType] = useState('All Types');

  // Extract unique locations and job types for filters
  const locations = ['All Locations', ...new Set(allJobs.map(job => job.location))];
  const jobTypes = ['All Types', ...new Set(allJobs.map(job => job.type))];

  // Filter jobs based on search term, location, and type
  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'All Locations' || job.location === selectedLocation;
    const matchesType = selectedType === 'All Types' || job.type === selectedType;
    return matchesSearch && matchesLocation && matchesType;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  return (
    <PageTemplate
      title="Are you ready to be the ambassador of Change and Innovation?"
      subtitle="As leaders in global IT services and cybersecurity, we empower individuals to drive innovation and create positive global impacts through transformative work. Our track record includes pioneering initiatives that have reshaped industries and empowered communities worldwide."
      heroImage="/images/careers/careers-hero.jpg"
      heroAlt="InfoShare Systems Careers"
    >
      {/* Introduction Section */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-dark">Grow Your Career with Us</h2>
          <p className="text-lg text-gray-600">
            At InfoShare Systems, we're building a team of passionate professionals who are dedicated to solving 
            complex technology challenges and delivering exceptional results for our clients. Join us and be part 
            of an innovative, collaborative, and inclusive workplace where your talents and ideas can thrive.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="mb-16">
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark">Why Join InfoShare Systems</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job – we provide an opportunity to grow, innovate, and make a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovative Work',
                description: 'Work on cutting-edge projects using the latest technologies to solve real-world challenges.',
                icon: '💡'
              },
              {
                title: 'Professional Growth',
                description: 'Continuous learning opportunities, mentorship, and career advancement pathways.',
                icon: '📈'
              },
              {
                title: 'Collaborative Culture',
                description: 'Join a supportive team that values collaboration, diversity, and inclusion.',
                icon: '🤝'
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible work arrangements and policies that respect your personal time and wellbeing.',
                icon: '⚖️'
              },
              {
                title: 'Competitive Benefits',
                description: 'Comprehensive benefits package including healthcare, retirement plans, and more.',
                icon: '🏆'
              },
              {
                title: 'Make an Impact',
                description: 'Contribute to projects that make a meaningful difference for our clients and communities.',
                icon: '🌟'
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-dark">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Location Filter */}
            <div>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full appearance-none px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
                <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Job Type Filter */}
            <div>
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full appearance-none px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {jobTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                <FiBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="mb-16">
        {filteredJobs.length > 0 ? (
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredJobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-700 mb-2">No positions found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria to find available positions.
            </p>
          </div>
        )}
      </section>

      {/* Employee Testimonials */}
      <section className="mb-16 bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark">Life at InfoShare Systems</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our team members about their experiences working with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl text-primary opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6">
                  Working at InfoShare Systems has been the highlight of my career. The collaborative environment, 
                  challenging projects, and opportunities for growth have helped me develop both professionally and personally.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-dark">Alex Thompson</h4>
                    <p className="text-gray-600">Senior Developer, 3 years</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl text-primary opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6">
                  The culture at InfoShare Systems is truly special. I've never worked at a company that so genuinely 
                  values work-life balance while still delivering exceptional results for clients. The leadership team 
                  really cares about employee wellbeing.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-dark">Samantha Lee</h4>
                    <p className="text-gray-600">Project Manager, 2 years</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-5xl text-primary opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6">
                  As someone early in my career, I couldn't have asked for a better place to start. The mentorship 
                  program and learning opportunities have accelerated my growth, and I've been able to work on 
                  meaningful projects that make a real difference.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-dark">Marcus Johnson</h4>
                    <p className="text-gray-600">Security Analyst, 1 year</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Hiring Process */}
      <section className="mb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark">Our Hiring Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What to expect when you apply to join our team
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary transform -translate-x-1/2 z-0"></div>
            
            {/* Process Steps */}
            <div className="space-y-16">
              {[
                {
                  title: 'Application Review',
                  description: 'Our recruitment team reviews your application and resume to assess your qualifications and experience.',
                  icon: '📝'
                },
                {
                  title: 'Initial Interview',
                  description: 'A conversation with our recruitment team to discuss your background, experience, and interest in the role.',
                  icon: '💬'
                },
                {
                  title: 'Technical Assessment',
                  description: 'Depending on the role, you may be asked to complete a technical assessment or case study to demonstrate your skills.',
                  icon: '💻'
                },
                {
                  title: 'Team Interview',
                  description: 'Meet with potential team members and managers to discuss technical expertise and team fit.',
                  icon: '👥'
                },
                {
                  title: 'Final Interview',
                  description: 'A final conversation with senior leadership to ensure alignment with our company values and culture.',
                  icon: '🤝'
                },
                {
                  title: 'Offer & Onboarding',
                  description: 'If selected, youll receive an offer and begin our comprehensive onboarding process to set you up for success.',
                  icon: '🚀'
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <h3 className="text-2xl font-bold text-dark mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className="my-6 md:my-0 z-10 bg-white">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Don't See a Position Section */}
      <section className="mb-16">
        <div className="bg-primary bg-opacity-5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-dark mb-3">Don't See a Position That Fits?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Submit your resume for future opportunities.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
            Submit Your Resume
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Take the Next Step in Your Career?"
        subtitle="Explore our open positions and join a team that values innovation, collaboration, and growth."
        buttonText="View All Positions"
        buttonLink="#open-positions"
      />
    </PageTemplate>
  );
};

export default CareersPage;
