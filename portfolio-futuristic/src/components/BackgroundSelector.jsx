import React, { useState } from 'react';
import VantaBackground from './VantaBackground';
import ParticleBackground from './ParticleBackground';

const BackgroundSelector = () => {
  const [selectedBackground, setSelectedBackground] = useState('vanta'); // Options: 'vanta', 'network', 'matrix', 'stars', 'bubbles', 'none'

  const backgroundOptions = [
    { id: 'vanta', name: '🌐 Vanta NET', description: '3D animated network' },
    { id: 'network', name: '🔗 Particle Network', description: 'Connected dots' },
    { id: 'matrix', name: '💚 Matrix Rain', description: 'Digital rain effect' },
    { id: 'stars', name: '⭐ Starfield', description: 'Twinkling stars' },
    { id: 'bubbles', name: '🫧 Bubbles', description: 'Floating bubbles' },
    { id: 'none', name: '🚫 None', description: 'Clean background' },
  ];

  const renderBackground = () => {
    switch (selectedBackground) {
      case 'vanta':
        return <VantaBackground />;
      case 'network':
        return <ParticleBackground config="network" />;
      case 'matrix':
        return <ParticleBackground config="matrix" />;
      case 'stars':
        return <ParticleBackground config="stars" />;
      case 'bubbles':
        return <ParticleBackground config="bubbles" />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderBackground()}
      
      {/* Background Selector UI */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 border border-cyan-500/30">
          <h3 className="text-cyan-400 font-bold mb-3 text-sm">🎨 Backgrounds</h3>
          <div className="grid grid-cols-2 gap-2">
            {backgroundOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedBackground(option.id)}
                className={`
                  px-3 py-2 rounded-md text-xs transition-all duration-300 border
                  ${selectedBackground === option.id
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                    : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-cyan-500/50'
                  }
                `}
                title={option.description}
              >
                {option.name}
              </button>
            ))}
          </div>
          <p className="text-white/50 text-xs mt-2 text-center">
            Click to switch backgrounds
          </p>
        </div>
      </div>
    </>
  );
};

export default BackgroundSelector;
