import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-white/90 dark:bg-black/50 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/20 dark:border-cyan-500/20 hologram-card">
    <h1 className="text-2xl font-bold holographic-text font-orbitron">Harsh Pandey</h1>
    <div className="flex gap-6 items-center">
      <a href="#projects" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-cyan-300 transition-colors duration-300 cursor-hover relative data-stream">Projects</a>
      <a href="#skills" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-cyan-300 transition-colors duration-300 cursor-hover relative data-stream">Skills</a>
      <a href="#contact" className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-cyan-300 transition-colors duration-300 cursor-hover relative data-stream">Contact</a>
      <ThemeToggle />
    </div>
  </nav>
);

export default Navbar;
