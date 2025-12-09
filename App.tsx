import React from 'react';
import ShaderBackground from './components/ShaderBackground';
import Hero from './components/Hero';
import About from './components/About';
import EventsCarousel from './components/EventsCarousel';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-white selection:bg-cyber-blue selection:text-black">
      {/* Global Background */}
      <ShaderBackground />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <EventsCarousel />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2024 Lumina Literati. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 font-mono">
            <span className="cursor-pointer hover:text-cyber-blue transition-colors">INSTAGRAM</span>
            <span className="cursor-pointer hover:text-cyber-blue transition-colors">DISCORD</span>
            <span className="cursor-pointer hover:text-cyber-blue transition-colors">SUBSTACK</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
