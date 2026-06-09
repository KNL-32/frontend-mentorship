import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Destinations from './components/Destinations';
import Hotels from './components/Hotels';
import Culture from './components/Culture';
import Gallery from './components/Gallery';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Destinations isDark={isDark} />
        <Hotels isDark={isDark} />
        <Statistics isDark={isDark} />
        <Culture isDark={isDark} />
        <Gallery isDark={isDark} />
        <Testimonials isDark={isDark} />
        <Newsletter isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
