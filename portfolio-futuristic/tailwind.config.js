/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← Important for toggling
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00FFF0',
          pink: '#FF00FF',
          green: '#00FF00',
          yellow: '#FFFF00',
          blue: '#0080FF',
        },
        dark: {
          bg: '#0a0a0a',
          card: '#1a1a2e',
          surface: '#16213e',
          deep: '#0f0f23',
        },
        // Add proper color mappings for theme switching
        darkBg: '#0a0a0a',
        lightBg: '#ffffff',
        darkText: '#ffffff',
        lightText: '#000000',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 2s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'particle-float': 'particle-float 10s infinite linear',
        'pulse-arrow': 'pulse-arrow 2s infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'skill-glow': 'skill-glow 2s ease-in-out infinite alternate',
        'grid-move': 'grid-move 20s linear infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'neon-flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            'text-shadow': '0 0 5px #00FFF0, 0 0 10px #00FFF0, 0 0 20px #00FFF0, 0 0 40px #00FFF0',
          },
          '20%, 24%, 55%': {
            'text-shadow': 'none',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(5deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-5deg)' },
          '75%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) rotate(360deg)', opacity: '0' },
        },
        'pulse-arrow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'glow-pulse': {
          'from': { filter: 'blur(10px)', opacity: '0.7' },
          'to': { filter: 'blur(20px)', opacity: '0.3' },
        },
        'skill-glow': {
          'from': { 'box-shadow': '0 0 5px rgba(0, 255, 240, 0.5)' },
          'to': { 'box-shadow': '0 0 15px rgba(0, 255, 240, 0.8)' },
        },
        'grid-move': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(10px, 10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 240, 0.5)',
        'neon-strong': '0 0 30px rgba(0, 255, 240, 0.8)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
};
