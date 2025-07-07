'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/80 shadow-md' : 'bg-transparent'
      } backdrop-blur border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center items-center">
        {/* Centered Navigation */}
        <nav className="flex space-x-4">
          <Link href="#" className="nav-link">Home</Link>
          <Link href="#experience" className="nav-link">Experience</Link>
          <Link href="#projects" className="nav-link">Projects</Link>
          <Link href="#skills" className="nav-link">Skills</Link>
          <Link href="#education" className="nav-link">Education</Link>
          <Link href="#resume" className="nav-link">Resume</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
