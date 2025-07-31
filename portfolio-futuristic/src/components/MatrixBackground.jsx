import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    // Matrix characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);
    
    // Glitch effect variables
    let glitchTime = 0;
    const glitchIntensity = 0.1;

    // Holographic scan lines
    let scanlineY = 0;
    const scanlineSpeed = 2;

    const drawMatrix = () => {
      // Semi-transparent black background for trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix text
      ctx.font = `${fontSize}px 'Courier New', monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Color gradient based on position
        const alpha = Math.max(0, 1 - (y / canvas.height));
        const hue = 180 + Math.sin(Date.now() * 0.001 + i * 0.1) * 30;
        
        ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${alpha})`;
        ctx.fillText(char, x, y);

        // Add glow effect
        ctx.shadowColor = `hsla(${hue}, 100%, 60%, 0.8)`;
        ctx.shadowBlur = 10;
        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        // Reset drops
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const drawGlitch = () => {
      if (Math.random() < glitchIntensity) {
        const glitchHeight = Math.random() * 50 + 10;
        const glitchY = Math.random() * canvas.height;
        const glitchOffset = (Math.random() - 0.5) * 20;

        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        // Red channel shift
        ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
        ctx.fillRect(glitchOffset - 2, glitchY, canvas.width, glitchHeight);
        
        // Blue channel shift
        ctx.fillStyle = 'rgba(0, 0, 255, 0.1)';
        ctx.fillRect(glitchOffset + 2, glitchY, canvas.width, glitchHeight);
        
        ctx.restore();
      }
    };

    const drawScanlines = () => {
      scanlineY += scanlineSpeed;
      if (scanlineY > canvas.height) scanlineY = -50;

      // Main scanline
      const gradient = ctx.createLinearGradient(0, scanlineY - 25, 0, scanlineY + 25);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(0.4, 'rgba(0, 245, 255, 0.1)');
      gradient.addColorStop(0.5, 'rgba(0, 245, 255, 0.3)');
      gradient.addColorStop(0.6, 'rgba(0, 245, 255, 0.1)');
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanlineY - 25, canvas.width, 50);

      // Secondary scanlines
      for (let i = 0; i < 3; i++) {
        const y = (scanlineY + i * 200) % canvas.height;
        ctx.fillStyle = 'rgba(0, 245, 255, 0.05)';
        ctx.fillRect(0, y, canvas.width, 2);
      }
    };

    const drawHolographicGrid = () => {
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.1)';
      ctx.lineWidth = 1;
      
      const time = Date.now() * 0.001;
      const gridSize = 50;
      const offsetX = Math.sin(time * 0.2) * 10;
      const offsetY = Math.cos(time * 0.15) * 8;

      // Vertical lines
      for (let x = offsetX % gridSize; x < canvas.width; x += gridSize) {
        const alpha = 0.05 + Math.sin(time + x * 0.01) * 0.03;
        ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offsetY % gridSize; y < canvas.height; y += gridSize) {
        const alpha = 0.05 + Math.sin(time + y * 0.01) * 0.03;
        ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawDataStreams = () => {
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < 5; i++) {
        const x = (canvas.width / 5) * i + Math.sin(time + i) * 50;
        const streamHeight = canvas.height;
        
        const gradient = ctx.createLinearGradient(x, 0, x, streamHeight);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.3, 'rgba(0, 255, 128, 0.2)');
        gradient.addColorStop(0.7, 'rgba(0, 245, 255, 0.3)');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(x - 1, 0, 2, streamHeight);

        // Data packets
        const packetY = (time * 100 + i * 50) % streamHeight;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillRect(x - 3, packetY, 6, 8);
      }
    };

    const animate = () => {
      glitchTime += 0.016;
      
      drawHolographicGrid();
      drawDataStreams();
      drawMatrix();
      drawScanlines();
      drawGlitch();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
      style={{ background: 'transparent' }}
    />
  );
};

export default MatrixBackground;
