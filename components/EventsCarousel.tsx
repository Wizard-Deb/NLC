import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { EVENTS } from '../constants';

const EventsCarousel: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardCount = EVENTS.length;
  const radius = 380; // Distance from center
  const cardWidth = 300; // Width of a card
  
  // Calculate the rotation angle per card
  const theta = 360 / cardCount;

  return (
    <section id="events" className="py-24 overflow-hidden relative min-h-[900px]">
      <div className="text-center mb-16 relative z-10 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-white mb-4"
        >
          Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyber-blue">Gatherings</span>
        </motion.h2>
        <p className="text-gray-400 max-w-lg mx-auto font-sans">
          Immerse yourself in our curated selection of literary events. 
          Swipe or gaze at the carousel below.
        </p>
      </div>

      {/* Mobile View (Horizontal Scroll) */}
      <div className="lg:hidden flex gap-6 overflow-x-auto px-6 pb-12 snap-x">
        {EVENTS.map((event) => (
          <div key={event.id} className="min-w-[300px] snap-center bg-gray-900/80 border border-white/10 rounded-xl overflow-hidden shadow-lg">
             <div className="h-48 overflow-hidden relative">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur text-xs px-2 py-1 rounded text-cyber-blue border border-cyber-blue/30 uppercase">
                  {event.category}
                </div>
             </div>
             <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <h3 className="font-serif text-xl mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{event.description}</p>
                <button className="text-cyber-blue text-sm uppercase tracking-wider flex items-center hover:text-white transition-colors">
                  Reserve <ArrowRight className="w-4 h-4 ml-1" />
                </button>
             </div>
          </div>
        ))}
      </div>

      {/* Desktop 3D Carousel */}
      <div className="hidden lg:flex justify-center items-center relative h-[600px] perspective-1000">
        <div 
          className="relative w-[300px] h-[500px] preserve-3d transition-transform duration-1000"
          style={{
            transformStyle: 'preserve-3d',
            animation: isHovered ? 'none' : 'spin 25s infinite linear',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {EVENTS.map((event, index) => {
            const rotation = theta * index;
            
            return (
              <div
                key={event.id}
                className="absolute top-0 left-0 w-full h-full backface-hidden"
                style={{
                  transform: `rotateY(${rotation}deg) translateZ(${radius}px)`,
                }}
              >
                {/* The Card */}
                <div className="group w-full h-full bg-black/60 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyber-blue hover:shadow-[0_0_30px_rgba(71,166,255,0.2)] flex flex-col">
                  {/* Image Area */}
                  <div className="h-3/5 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                    />
                    <div className="absolute top-4 left-4 z-20">
                       <span className="flex items-center gap-1 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs border border-white/10 text-white">
                         <Tag className="w-3 h-3 text-cyber-blue" /> {event.category}
                       </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 p-6 flex flex-col justify-between relative z-20 bg-gradient-to-b from-transparent to-black/90">
                    <div>
                      <div className="flex items-center text-cyber-blue text-sm mb-2 font-mono">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <h3 className="font-serif text-2xl text-white mb-2 leading-tight group-hover:text-cyber-blue transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3 group-hover:text-gray-300">
                        {event.description}
                      </p>
                    </div>

                    <button className="mt-4 w-full py-2 border border-white/20 text-xs uppercase tracking-widest hover:bg-cyber-blue hover:text-black hover:border-cyber-blue transition-all duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Floor Reflection Gradient */}
        <div className="absolute -bottom-20 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-0"></div>
      </div>
      
      {/* Styles for the keyframe animation since Tailwind config doesn't support complex keyframes easily in arbitrary values */}
      <style>{`
        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
    </section>
  );
};

export default EventsCarousel;
