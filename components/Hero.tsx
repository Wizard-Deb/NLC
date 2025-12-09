import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const quote = "NIT Agartala Literary Club";
  
  // Split quote into characters for staggering
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      <div className="text-center max-w-4xl z-10 mix-blend-difference">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-cyber-blue font-sans text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80 border border-cyber-blue/30 px-4 py-2 rounded-full backdrop-blur-md">
            Est. 2024 • The Digital Renaissance
          </span>
        </motion.div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white leading-tight mb-8">
          {Array.from(quote).map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: index * 0.05 + 0.5, // Start after initial fade in
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="text-cyber-blue"
          >
            _
          </motion.span>
        </h1>
        
        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.7 }}
           transition={{ delay: 3, duration: 1 }}
           className="font-sans text-sm md:text-lg text-gray-300 tracking-wide max-w-xl mx-auto"
        >
           Words are truly source of magic.
        </motion.p>
      </div>

      <motion.div 
        className="absolute bottom-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <ChevronDown className="w-8 h-8 text-cyber-blue/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
