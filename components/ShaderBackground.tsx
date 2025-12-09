import React, { useEffect, useState } from 'react';
import { NeuroNoise } from '@paper-design/shaders-react';
import { Dimensions } from '../types';

const ShaderBackground: React.FC = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      // Debounce resize to prevent excessive re-renders/context loss
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none opacity-60">
      <NeuroNoise
        width={dimensions.width}
        height={dimensions.height}
        colorFront="#ffffff"
        colorMid="#47a6ff"
        colorBack="#000000"
        brightness={0.26}
        contrast={0.31}
        speed={1.26}
        scale={0.8}
        rotation={40}
      />
      {/* Overlay gradient to ensure text readability at bottom/top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
    </div>
  );
};

export default ShaderBackground;