import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Blog from './pages/Blog';

const AnimatedRoutes = () => {
  const location = useLocation();
  const hideHeaderOnPages = [ "/blog"]; // List of paths where the header should be hidden

  const shouldShowHeader = !hideHeaderOnPages.includes(location.pathname);

  return (
    <>
      {/* Conditionally render the Header */}
      {shouldShowHeader && <Header />}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} /> {/* Blog Page */}
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  const [theme, setTheme] = useState('dark'); // Default to dark theme

  useEffect(() => {
    // Apply the dark or light class based on the theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between dark and light mode
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className={`App relative transition-colors duration-500 ease-in-out min-h-screen flex flex-col bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText`}>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 m-4 transform transition-transform duration-1000 ease-in-out dark:text-amber-100 absolute top-[6px] -right-1 md:top-6 lg:right-4 lg:top-4 z-50 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="text-lg" />
        </button>

        {/* Animated Routes */}
        <AnimatedRoutes />

        {/* Footer positioned at the bottom */}
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
