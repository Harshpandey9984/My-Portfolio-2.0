import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div
        className="fixed w-4 h-4 rounded-full bg-cyan-400 pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.05s linear',
        }}
      />
      <div
        className="fixed w-10 h-10 rounded-full border border-cyan-400 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
    </>
  );
};

export default Cursor;
