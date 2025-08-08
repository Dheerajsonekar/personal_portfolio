import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dheeraj Sonekar | Full Stack Developer Portfolio",
  description: "Portfolio of Dheeraj Sonekar – MERN stack developer with experience in SQL, MongoDB, and scalable systems.",
};

// Dark mode script that runs before React hydrates
const darkModeScript = `
  (function() {
    function getTheme() {
      // Check if theme was previously set
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
      }
      return 'light';
    }
    
    function applyTheme(theme) {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme);
      }
    }
    
    // Apply theme immediately to prevent flash
    const theme = getTheme();
    applyTheme(theme);
    
    // Listen for system theme changes
    if (typeof window !== 'undefined' && window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  })();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script 
          dangerouslySetInnerHTML={{ 
            __html: darkModeScript 
          }} 
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}