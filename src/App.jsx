import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Service Pages
import ProductDevelopmentPage from './pages/services/ProductDevelopmentPage';
import CyberSecurityPage from './pages/services/CyberSecurityPage';
import TechnicalStaffingPage from './pages/services/TechnicalStaffingPage';

// Product Pages
import AwvPage from './pages/products/AwvPage';
import NightingalePage from './pages/products/NightingalePage';
import MastsPage from './pages/products/MastsPage';

// Resource Pages
import BlogsPage from './pages/resources/BlogsPage';
import CaseStudiesPage from './pages/resources/CaseStudiesPage';

// Careers Page
import CareersPage from './pages/CareersPage';

const App = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/product-development" element={<ProductDevelopmentPage />} />
          <Route path="/services/cyber-security" element={<CyberSecurityPage />} />
          <Route path="/services/it-staffing" element={<TechnicalStaffingPage />} />
          
          {/* Products Routes */}
          <Route path="/products/awv" element={<AwvPage />} />
          <Route path="/products/nightingale" element={<NightingalePage />} />
          <Route path="/products/masts" element={<MastsPage />} />
          
          {/* Resources Routes */}
          <Route path="/resources/blogs" element={<BlogsPage />} />
          <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
          
          {/* Other Routes */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;