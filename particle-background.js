// 🌌 PARTICLE.JS FUTURISTIC BACKGROUND CONFIGURATION 🌌

class ParticleBackground {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.connections = [];
        this.mousePosition = { x: 0, y: 0 };
        this.init();
    }

    init() {
        this.createCanvas();
        this.createParticles();
        this.setupEvents();
        this.animate();
    }

    createCanvas() {
        // Create canvas element
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'particle-canvas';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        `;
        
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        this.resizeCanvas();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.8 + 0.2,
                hue: Math.random() * 60 + 180, // Blue-cyan range
                life: Math.random() * 100 + 100
            });
        }
    }

    setupEvents() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });

        document.addEventListener('mousemove', (e) => {
            this.mousePosition.x = e.clientX;
            this.mousePosition.y = e.clientY;
        });
    }

    updateParticles() {
        this.particles.forEach((particle, index) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Mouse interaction
            const dx = this.mousePosition.x - particle.x;
            const dy = this.mousePosition.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                const force = (150 - distance) / 150;
                particle.vx += (dx / distance) * force * 0.01;
                particle.vy += (dy / distance) * force * 0.01;
            }

            // Boundary collision
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
            }

            // Keep particles within bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));

            // Update life
            particle.life--;
            if (particle.life <= 0) {
                this.particles[index] = {
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 3 + 1,
                    opacity: Math.random() * 0.8 + 0.2,
                    hue: Math.random() * 60 + 180,
                    life: Math.random() * 100 + 100
                };
            }
        });
    }

    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity;
            
            // Create gradient for particle
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size
            );
            gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, 1)`);
            gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 70%, 0)`);
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.restore();
        });
    }

    drawConnections() {
        this.connections = [];
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    const opacity = (120 - distance) / 120 * 0.3;
                    
                    this.ctx.save();
                    this.ctx.globalAlpha = opacity;
                    this.ctx.strokeStyle = '#00FFF0';
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
        }
    }

    animate() {
        // Clear canvas with fade effect
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.updateParticles();
        this.drawConnections();
        this.drawParticles();
        
        requestAnimationFrame(() => this.animate());
    }
}

// Alternative: Three.js implementation for more complex 3D effects
class ThreeJSBackground {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.init();
    }

    init() {
        if (typeof THREE === 'undefined') {
            console.log('Three.js not loaded, falling back to canvas particles');
            return;
        }

        this.setupScene();
        this.createParticles();
        this.setupEvents();
        this.animate();
    }

    setupScene() {
        // Scene
        this.scene = new THREE.Scene();

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 5;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.domElement.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            z-index: -1;
            pointer-events: none;
        `;
        document.body.appendChild(this.renderer.domElement);
    }

    createParticles() {
        const particleCount = 1500;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

            // Cyan-blue color palette
            const hue = Math.random() * 0.2 + 0.5; // 0.5-0.7 range
            colors[i * 3] = hue;
            colors[i * 3 + 1] = 1;
            colors[i * 3 + 2] = 1;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    setupEvents() {
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        document.addEventListener('mousemove', (e) => {
            const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            
            this.particles.rotation.x = mouseY * 0.1;
            this.particles.rotation.y = mouseX * 0.1;
        });
    }

    animate() {
        this.particles.rotation.x += 0.001;
        this.particles.rotation.y += 0.002;

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize background based on available libraries
document.addEventListener('DOMContentLoaded', () => {
    // Try Three.js first, fallback to canvas
    if (typeof THREE !== 'undefined') {
        new ThreeJSBackground();
    } else {
        new ParticleBackground();
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ParticleBackground, ThreeJSBackground };
}
