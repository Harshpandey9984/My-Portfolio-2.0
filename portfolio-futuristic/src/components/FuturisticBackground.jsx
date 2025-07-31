import React, { useEffect, useRef } from 'react';

const FuturisticBackground = () => {
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

    // Particle system
    const particles = [];
    const particleCount = 80;
    
    // Geometric shapes
    const shapes = [];
    const shapeCount = 15;

    // Neural network nodes
    const nodes = [];
    const nodeCount = 25;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.3,
        hue: Math.random() * 60 + 180, // Cyan to blue range
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Initialize geometric shapes
    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: Math.floor(Math.random() * 4), // 0: circle, 1: triangle, 2: square, 3: hexagon
        opacity: Math.random() * 0.2 + 0.1,
        hue: Math.random() * 120 + 180,
      });
    }

    // Initialize neural network nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 4 + 2,
        connections: [],
        energy: Math.random(),
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Create connections between nodes
    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach((otherNode, j) => {
        const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
        if (distance < 150 && Math.random() < 0.3) {
          node.connections.push(j + i + 1);
        }
      });
    });

    const drawParticle = (particle) => {
      particle.pulse += 0.02;
      const pulseFactor = (Math.sin(particle.pulse) + 1) * 0.5;
      const currentSize = particle.size * (0.8 + pulseFactor * 0.4);
      
      ctx.save();
      ctx.globalAlpha = particle.opacity * (0.7 + pulseFactor * 0.3);
      
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, currentSize * 3
      );
      gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, 1)`);
      gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 50%, 0.6)`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawShape = (shape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.globalAlpha = shape.opacity;
      ctx.strokeStyle = `hsla(${shape.hue}, 80%, 60%, 0.8)`;
      ctx.lineWidth = 2;
      ctx.fillStyle = `hsla(${shape.hue}, 80%, 60%, 0.1)`;

      ctx.beginPath();
      switch (shape.type) {
        case 0: // Circle
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
          break;
        case 1: // Triangle
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.closePath();
          break;
        case 2: // Square
          ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
          break;
        case 3: // Hexagon
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * shape.size / 2;
            const y = Math.sin(angle) * shape.size / 2;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          break;
      }
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    };

    const drawNode = (node) => {
      node.pulsePhase += 0.03;
      const energy = 0.5 + Math.sin(node.pulsePhase) * 0.5;
      
      ctx.save();
      ctx.globalAlpha = 0.8;
      
      // Core node
      const gradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, node.size * 3
      );
      gradient.addColorStop(0, `hsla(${180 + energy * 60}, 100%, 70%, 1)`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Energy ring
      ctx.strokeStyle = `hsla(${180 + energy * 60}, 100%, 60%, ${energy * 0.8})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size + energy * 10, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.restore();
    };

    const drawConnections = () => {
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          if (connectionIndex < nodes.length) {
            const connectedNode = nodes[connectionIndex];
            const distance = Math.hypot(node.x - connectedNode.x, node.y - connectedNode.y);
            
            if (distance < 200) {
              ctx.save();
              ctx.globalAlpha = (200 - distance) / 200 * 0.4;
              
              const gradient = ctx.createLinearGradient(
                node.x, node.y, connectedNode.x, connectedNode.y
              );
              gradient.addColorStop(0, '#00f5ff');
              gradient.addColorStop(0.5, '#0080ff');
              gradient.addColorStop(1, '#00f5ff');
              
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(connectedNode.x, connectedNode.y);
              ctx.stroke();
              
              // Flowing energy along connections
              const progress = (Date.now() * 0.001) % 1;
              const energyX = node.x + (connectedNode.x - node.x) * progress;
              const energyY = node.y + (connectedNode.y - node.y) * progress;
              
              ctx.fillStyle = '#ffffff';
              ctx.globalAlpha = 0.8;
              ctx.beginPath();
              ctx.arc(energyX, energyY, 3, 0, Math.PI * 2);
              ctx.fill();
              
              ctx.restore();
            }
          }
        });
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary bouncing
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        drawParticle(particle);
      });

      // Update and draw geometric shapes
      shapes.forEach(shape => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        // Boundary wrapping
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

        drawShape(shape);
      });

      // Update and draw neural network
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Boundary bouncing
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        drawNode(node);
      });

      drawConnections();

      // Particle connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const distance = Math.hypot(particle.x - otherParticle.x, particle.y - otherParticle.y);
          
          if (distance < 80) {
            ctx.save();
            ctx.globalAlpha = (80 - distance) / 80 * 0.3;
            ctx.strokeStyle = '#00f5ff';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

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
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default FuturisticBackground;
