import { FiCode, FiLayers, FiUsers, FiSettings } from 'react-icons/fi';
import PageTemplate from '../../components/layout/PageTemplate';
import FeatureSection from '../../components/sections/FeatureSection';
import CtaSection from '../../components/sections/CtaSection';

const ProductDevelopmentPage = () => {
  const features = [
    {
      title: 'Custom Software Development',
      description: 'We build tailor-made software solutions that address your specific business challenges and requirements, ensuring scalability and performance.',
      icon: <FiCode size={24} />
    },
    {
      title: 'Web & Mobile Applications',
      description: 'Create responsive web applications and native mobile apps that provide seamless user experiences across all devices and platforms.',
      icon: <FiLayers size={24} />
    },
    {
      title: 'UI/UX Design',
      description: 'Our design team creates intuitive, user-friendly interfaces that enhance user engagement and satisfaction while reflecting your brand identity.',
      icon: <FiUsers size={24} />
    },
    {
      title: 'DevOps & Maintenance',
      description: 'Continuous integration, deployment, and maintenance services to ensure your applications remain up-to-date, secure, and optimized.',
      icon: <FiSettings size={24} />
    }
  ];

  const processSteps = [
    {
      title: 'Discovery & Planning',
      description: 'We begin by understanding your business objectives, target audience, and technical requirements to create a comprehensive project roadmap.',
      icon: <div className="text-3xl font-bold text-primary">01</div>
    },
    {
      title: 'Design & Prototyping',
      description: 'Our team creates wireframes and interactive prototypes to visualize the solution before development begins, allowing for early feedback.',
      icon: <div className="text-3xl font-bold text-primary">02</div>
    },
    {
      title: 'Development & Testing',
      description: 'We follow agile methodologies to develop your solution iteratively, with rigorous testing at each stage to ensure quality and reliability.',
      icon: <div className="text-3xl font-bold text-primary">03</div>
    },
    {
      title: 'Deployment & Support',
      description: 'After successful deployment, we provide ongoing support and maintenance to ensure your product continues to meet your evolving needs.',
      icon: <div className="text-3xl font-bold text-primary">04</div>
    }
  ];

  return (
    <PageTemplate
      title="Product Development"
      subtitle="Building innovative software solutions that drive business growth and digital transformation"
      heroImage="/images/services/product-development-hero.jpg"
      heroAlt="Product Development Services"
    >
      {/* Introduction Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-dark">Transforming Ideas into Powerful Solutions</h2>
          <p className="text-lg text-gray-600 mb-8">
            At InfoShare Systems, we specialize in developing custom software solutions that help businesses streamline operations, 
            improve efficiency, and create exceptional digital experiences for their customers. Our expert team combines technical 
            expertise with strategic thinking to deliver products that provide real business value.
          </p>
        </div>
      </section>

      {/* Services Features */}
      <FeatureSection
        title="Our Product Development Services"
        subtitle="Comprehensive development solutions tailored to your business needs"
        features={features}
        image="/images/services/product-development-features.jpg"
        imageAlt="Product Development Services"
        imageOnRight={true}
        bgColor="bg-gray-50"
      />

      {/* Development Process */}
      <FeatureSection
        title="Our Development Process"
        subtitle="A structured approach to turning your vision into reality"
        features={processSteps}
        image="/images/services/product-development-process.jpg"
        imageAlt="Development Process"
        imageOnRight={false}
        bgColor="bg-white"
      />

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark">Technologies We Work With</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['React', 'Angular', 'Node.js', 'Python', 'Java', 'AWS', 'Azure', 'Flutter', 'React Native', '.NET', 'PHP', 'MongoDB'].map((tech, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24"
              >
                <span className="text-lg font-medium text-dark">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Ready to Build Your Next Digital Product?"
        subtitle="Let's discuss how our product development services can help you achieve your business goals."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </PageTemplate>
  );
};

export default ProductDevelopmentPage;
