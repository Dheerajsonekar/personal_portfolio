'use client';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'services', label: 'Services', icon: '⚙️' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'certifications', label: 'Certifications', icon: '📜' },
    { id: 'testimonials', label: 'Testimonials', icon: '💬' },
    { id: 'resume', label: 'Resume', icon: '📄' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Header for Mobile */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 lg:hidden">
        <div className="flex justify-between items-center px-4 py-3">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Dheeraj Sonekar
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 w-6 bg-current transform transition-transform duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transform transition-transform duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Desktop Right Sidebar - Always Visible */}
      <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-l-2xl shadow-lg">
        <div className="p-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex items-center justify-center w-12 h-12 mb-2 last:mb-0 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white scale-110 shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105'
              }`}
              title={item.label}
            >
              <span className="text-lg">{item.icon}</span>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {item.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-gray-100"></div>
              </div>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer - Compact */}
      <nav
        className={`fixed top-0 right-0 h-full w-20 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-all duration-300 ease-in-out lg:hidden ${
          isOpen 
            ? 'translate-x-0' 
            : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-center items-center p-2 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items - Icon Only */}
        <div className="px-2 py-4 space-y-2 overflow-y-auto max-h-[calc(100vh-100px)]">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center justify-center w-full h-12 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-gradient-to-b from-blue-600 to-purple-600 text-white shadow-md scale-105'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105'
              } ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
              style={{ 
                transitionDelay: isOpen ? `${index * 30}ms` : '0ms' 
              }}
              title={item.label}
            >
              <span className="text-lg">{item.icon}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="text-center">
            <p className="text-xs font-medium text-gray-900 dark:text-white">
              DS
            </p>
          </div>
        </div>
      </nav>

      {/* Spacer for mobile header */}
      <div className="h-16 lg:h-0"></div>
    </>
  );
};

export default Navbar;