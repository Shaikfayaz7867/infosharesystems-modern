import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';
import PageTemplate from '../../components/layout/PageTemplate';
import ResourceCard from '../../components/resources/ResourceCard';
import CtaSection from '../../components/sections/CtaSection';

const BlogsPage = () => {
  const allBlogs = [
    {
      id: 1,
      title: 'The Future of Cybersecurity: Trends to Watch in 2025',
      excerpt: 'Explore the emerging cybersecurity trends...',
      date: 'May 10, 2025',
      author: 'Jennifer Smith',
      category: 'Cybersecurity',
      image: 'https://source.unsplash.com/800x600/?cybersecurity',
      link: '/resources/blogs/cybersecurity-trends-2025'
    },
    {
      id: 2,
      title: 'How Digital Transformation is Reshaping Financial Services',
      excerpt: 'Discover how financial institutions are leveraging technology...',
      date: 'April 28, 2025',
      author: 'Michael Chen',
      category: 'Digital Transformation',
      image: 'https://source.unsplash.com/800x600/?fintech,technology',
      link: '/resources/blogs/digital-transformation-finance'
    },
    {
      id: 3,
      title: 'Building Resilient IT Infrastructure for Remote Workforces',
      excerpt: 'Learn best practices for creating robust IT systems...',
      date: 'April 15, 2025',
      author: 'David Rodriguez',
      category: 'IT Infrastructure',
      image: 'https://source.unsplash.com/800x600/?infrastructure,remote-work',
      link: '/resources/blogs/resilient-it-infrastructure'
    },
    {
      id: 4,
      title: 'The Role of AI in Modern Software Development',
      excerpt: 'Explore how artificial intelligence is transforming...',
      date: 'March 30, 2025',
      author: 'Sarah Johnson',
      category: 'AI & Development',
      image: 'https://source.unsplash.com/800x600/?ai,software-development',
      link: '/resources/blogs/ai-in-software-development'
    },
    {
      id: 5,
      title: 'Navigating Compliance Challenges in a Global Business Environment',
      excerpt: 'Understand the complex regulatory landscape...',
      date: 'March 18, 2025',
      author: 'Robert Williams',
      category: 'Compliance',
      image: 'https://source.unsplash.com/800x600/?compliance,law',
      link: '/resources/blogs/global-compliance-challenges'
    },
    {
      id: 6,
      title: 'Cloud Migration Strategies for Enterprise Applications',
      excerpt: 'A comprehensive guide to planning and executing...',
      date: 'March 5, 2025',
      author: 'Emily Chen',
      category: 'Cloud Computing',
      image: 'https://source.unsplash.com/800x600/?cloud,enterprise',
      link: '/resources/blogs/cloud-migration-strategies'
    },
    {
      id: 7,
      title: 'Securing IoT Devices in Industrial Environments',
      excerpt: 'Best practices for protecting IoT devices...',
      date: 'February 22, 2025',
      author: 'James Wilson',
      category: 'IoT Security',
      image: 'https://source.unsplash.com/800x600/?iot,industry,security',
      link: '/resources/blogs/securing-industrial-iot'
    },
    {
      id: 8,
      title: 'The Business Value of DevSecOps Implementation',
      excerpt: 'How integrating security into DevOps processes...',
      date: 'February 10, 2025',
      author: 'Lisa Thompson',
      category: 'DevSecOps',
      image: 'https://source.unsplash.com/800x600/?devsecops,cybersecurity',
      link: '/resources/blogs/devsecops-business-value'
    },
    {
      id: 9,
      title: 'Data Privacy Regulations: What You Need to Know in 2025',
      excerpt: 'An overview of the latest data privacy laws...',
      date: 'January 28, 2025',
      author: 'Thomas Anderson',
      category: 'Data Privacy',
      image: 'https://source.unsplash.com/800x600/?data-privacy,security',
      link: '/resources/blogs/data-privacy-regulations-2025'
    }
  ];

  const categories = ['All', ...new Set(allBlogs.map(blog => blog.category))];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
      title="Blogs"
      subtitle="Explore our diverse collection of blogs crafted by our expert team, sharing their insights on emerging technologies, industry trends, insights and best practices in the dynamic landscape of IT & IT Security."
      heroImage="/images/resources/blogs-hero.jpg"
      heroAlt="InfoShare Systems Blog"
    >
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="w-full md:w-64">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full appearance-none px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
                <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        {filteredBlogs.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredBlogs.map((blog) => (
              <ResourceCard key={blog.id} resource={blog} type="blog" />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </section>

      <section className="mb-16 bg-gray-50 rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img src="/images/resources/featured-blog.jpg" alt="Featured Article" className="w-full h-full object-cover" />
          </div>
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="text-sm text-primary font-medium mb-2">Featured Article</div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              The Convergence of AI and Cybersecurity: Protecting the Digital Future
            </h2>
            <p className="text-gray-600 mb-6">
              As artificial intelligence continues to evolve, its impact on cybersecurity is becoming increasingly significant.
              This in-depth article explores how AI is both enhancing security defenses and creating new challenges in the
              cybersecurity landscape, with insights from leading industry experts.
            </p>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <div className="font-medium text-dark">Dr. Alexandra Rivera</div>
                <div className="text-sm text-gray-500">Chief AI Researcher</div>
              </div>
            </div>
            <button className="self-start bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
              Read Article
            </button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-primary bg-opacity-5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-dark mb-3">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights, articles, and resources directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Need Expert IT Insights for Your Business?"
        subtitle="Our team of specialists can help you navigate the complex technology landscape."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </PageTemplate>
  );
};

export default BlogsPage;