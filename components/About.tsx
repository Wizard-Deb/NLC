import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, Feather } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-cyber-glass backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
              The Archivists of <span className="text-cyber-blue italic">Tomorrow</span>
            </h2>
            <div className="h-1 w-20 bg-cyber-blue mb-8"></div>
            
            <p className="font-sans text-gray-300 text-lg leading-relaxed mb-6">
              Lumina Literati is not merely a book club. We are a collective of writers, coders, and dreamers dissecting the intersection of classical narrative and the impending singularity.
            </p>
            <p className="font-sans text-gray-400 leading-relaxed mb-8">
              In an age of ephemeral content, we champion the permanence of the written word, enhanced by the immersive capabilities of modern technology. From VR poetry readings to AI-assisted philosophical debates, we are defining the new canon.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg border border-white/5 hover:border-cyber-blue/30 transition-colors">
                <Feather className="w-6 h-6 text-cyber-blue mb-2" />
                <span className="text-xs uppercase tracking-widest text-gray-400">Creation</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg border border-white/5 hover:border-cyber-blue/30 transition-colors">
                <BookOpen className="w-6 h-6 text-cyber-blue mb-2" />
                <span className="text-xs uppercase tracking-widest text-gray-400">Analysis</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg border border-white/5 hover:border-cyber-blue/30 transition-colors">
                <Cpu className="w-6 h-6 text-cyber-blue mb-2" />
                <span className="text-xs uppercase tracking-widest text-gray-400">Synthesis</span>
              </div>
            </div>
          </motion.div>

          {/* Abstract Logo / Graphic Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] flex items-center justify-center perspective-1000"
          >
             {/* Decorative Rings */}
             <div className="absolute w-64 h-64 border border-white/20 rounded-full animate-spin-slow"></div>
             <div className="absolute w-80 h-80 border border-cyber-blue/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
             <div className="absolute w-96 h-96 border border-white/10 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }}></div>
             
             {/* Center Emblem */}
             <div className="relative z-10 w-48 h-48 bg-black/80 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(71,166,255,0.3)]">
                <span className="font-serif text-6xl italic text-white">L</span>
                <span className="font-serif text-6xl text-cyber-blue -ml-2">L</span>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
