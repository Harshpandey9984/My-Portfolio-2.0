# Futuristic Portfolio - React Version

A modern, futuristic portfolio website built with React, Tailwind CSS, and Framer Motion featuring glassmorphism design, particle animations, and smooth interactions.

## 🚀 Features

- **Modern Tech Stack**: React 18, Tailwind CSS, Framer Motion
- **Futuristic Design**: Glassmorphism effects, neon gradients, particle animations
- **Responsive**: Optimized for all devices and screen sizes
- **Interactive**: Custom cursor, smooth scroll, hover effects
- **Performance**: Optimized loading, service worker, lazy loading
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## 🛠 Technologies Used

- **Frontend**: React, JavaScript ES6+
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion, CSS animations
- **Icons**: Font Awesome
- **Fonts**: Orbitron, Rajdhani, Poppins
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/futuristic-portfolio.git
cd futuristic-portfolio/portfolio-futuristic
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗 Project Structure

```
portfolio-futuristic/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── files/
│   ├── index.html
│   ├── favicon.svg
│   └── sw.js
├── src/
│   ├── components/
│   │   ├── Cursor.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── data.js
│   ├── App.jsx
│   └── globals.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Components

### Core Components
- **Cursor**: Custom animated cursor with hover effects
- **Navbar**: Responsive navigation with glassmorphism design
- **Hero**: Animated hero section with particle background
- **About**: Personal information with timeline and stats
- **Skills**: Interactive skill bars with progress animations
- **Projects**: Filterable project gallery with modal views
- **Contact**: Contact form with validation and animations
- **Footer**: Comprehensive footer with social links

### Key Features
- **Glassmorphism Effects**: Modern frosted glass appearance
- **Particle System**: Dynamic background animations
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Lazy loading and code splitting

## 🔧 Customization

### Personal Information
Update your personal information in `src/utils/data.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Skills
Add or modify skills in the skills array:

```javascript
export const skills = [
  {
    category: "Your Category",
    items: [
      { name: "Skill Name", level: 90, icon: "fas fa-icon" }
    ]
  }
];
```

### Projects
Update projects in the projects array with your own work:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description",
    technologies: ["React", "Node.js"],
    category: "Web Application",
    // ... other details
  }
];
```

### Styling
Customize colors and theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'neon-cyan': '#00f5ff',
      'neon-pink': '#ff007f',
      // Add your custom colors
    }
  }
}
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1920px and above
- **Laptop**: 1024px to 1919px
- **Tablet**: 768px to 1023px
- **Mobile**: 320px to 767px

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure domain and SSL

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy
3. Configure custom domain if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🔍 SEO & Performance

- **Meta Tags**: Comprehensive SEO meta tags
- **Open Graph**: Social media sharing optimization
- **Service Worker**: Offline caching capability
- **Performance**: Optimized images and lazy loading
- **Analytics**: Google Analytics ready

## 🛡 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Harsh Pandey - [harshpandey9984@gmail.com](mailto:harshpandey9984@gmail.com)

Project Link: [https://github.com/yourusername/futuristic-portfolio](https://github.com/yourusername/futuristic-portfolio)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ and modern web technologies
