export const personalInfo = {
  name: "Harsh Pandey",
  title: "Front-End Developer & Blockchain Enthusiast",
  subtitle: "Building the Future with Code",
  bio: "Passionate computer science student and developer with expertise in modern web technologies and blockchain development. I create innovative solutions that bridge the gap between cutting-edge technology and real-world applications. Specializing in React, JavaScript, and blockchain technologies.",
  email: "hp7556513@gmail.com",
  location: "India",
  github: "https://github.com/Harshpandey9984",
  linkedin: "https://www.linkedin.com/in/harsh-pandey-aa783925a/",
  twitter: "https://twitter.com/harshpandey9984",
  resumeUrl: "/assets/files/Harsh_Pandey_Resume.pdf",
  profileImage: "/assets/images/profile.jpg"
};

export const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", level: 90, icon: "fab fa-js-square" },
      { name: "Python", level: 85, icon: "fab fa-python" },
      { name: "C Language", level: 80, icon: "fas fa-code" },
      { name: "TypeScript", level: 75, icon: "fab fa-js-square" },
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", level: 90, icon: "fab fa-react" },
      { name: "HTML5 & CSS3", level: 95, icon: "fab fa-html5" },
      { name: "Tailwind CSS", level: 85, icon: "fas fa-palette" },
      { name: "Next.js", level: 80, icon: "fas fa-arrow-right" },
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", level: 85, icon: "fab fa-node-js" },
      { name: "Express.js", level: 80, icon: "fas fa-server" },
      { name: "MongoDB", level: 75, icon: "fas fa-database" },
      { name: "PostgreSQL", level: 70, icon: "fas fa-database" },
    ]
  },
  {
    category: "Blockchain & Web3",
    items: [
      { name: "Solidity", level: 80, icon: "fas fa-cube" },
      { name: "Web3.js", level: 75, icon: "fas fa-link" },
      { name: "Smart Contracts", level: 75, icon: "fas fa-file-contract" },
      { name: "Ethereum", level: 70, icon: "fab fa-ethereum" },
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git & GitHub", level: 90, icon: "fab fa-git-alt" },
      { name: "VS Code", level: 95, icon: "fas fa-code" },
      { name: "Docker", level: 70, icon: "fab fa-docker" },
      { name: "AWS", level: 65, icon: "fab fa-aws" },
    ]
  }
];

export const softSkills = [
  {
    name: "Problem-Solving",
    description: "Strong analytical and critical thinking abilities",
    icon: "fas fa-puzzle-piece"
  },
  {
    name: "Team Leadership",
    description: "Experience leading development teams and projects",
    icon: "fas fa-users-cog"
  },
  {
    name: "Collaboration",
    description: "Effective team player with excellent communication skills",
    icon: "fas fa-users"
  },
  {
    name: "Adaptability",
    description: "Quick learner and eager to embrace new technologies",
    icon: "fas fa-sync-alt"
  },
  {
    name: "Creative Thinking",
    description: "Innovative approach to solving complex problems",
    icon: "fas fa-lightbulb"
  },
  {
    name: "Time Management",
    description: "Efficient project planning and deadline management",
    icon: "fas fa-clock"
  },
  {
    name: "Communication",
    description: "Clear and effective verbal and written communication",
    icon: "fas fa-comments"
  }
];

export const experience = [
  {
    title: "Frontend Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Developing responsive web applications using React.js, JavaScript, and modern CSS frameworks. Working with clients to create user-friendly interfaces and optimize web performance."
  },
  {
    title: "Blockchain Developer",
    company: "Personal Projects",
    period: "2022 - Present",
    description: "Building decentralized applications (DApps) using Solidity, Web3.js, and Ethereum blockchain. Developed smart contracts for various use cases including DeFi and NFT projects."
  },
  {
    title: "Web Development Intern",
    company: "Local Tech Startup",
    period: "Summer 2023",
    description: "Assisted in developing company website using HTML, CSS, and JavaScript. Gained experience in responsive design, user experience optimization, and collaborative development workflows."
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University",
    period: "2021 - Present",
    description: "Currently pursuing Computer Science with focus on web development, data structures, algorithms, and software engineering principles. Active in coding competitions and tech clubs."
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Senior Secondary School",
    period: "2019 - 2021",
    description: "Completed higher secondary education with focus on Mathematics, Physics, and Computer Science. Developed foundational programming skills and logical thinking abilities."
  }
];

export const projects = [
  {
    id: 1,
    title: "Bookwarm",
    description: "A blockchain-based platform for book sharing and digital library management leveraging Web3 technology.",
    fullDescription: "A decentralized book exchange platform where users can lend, borrow, and sell books securely using blockchain technology. Features smart contract implementation for secure transactions, digital library management system, and user authentication using Web3 wallets.",
    category: "Blockchain",
    technologies: ["Blockchain", "Web3", "JavaScript", "Smart Contracts", "Solidity"],
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2tzJTIwdGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/Harshpandey9984/Bookwarm",
    features: [
      "Smart contract implementation for secure transactions",
      "Digital library management system",
      "User authentication using Web3 wallets",
      "Real-time book availability tracking",
      "Decentralized book exchange platform",
      "Blockchain-based security"
    ]
  },
  {
    id: 2,
    title: "My Portfolio",
    description: "My professional portfolio website showcasing my skills, projects, and experience.",
    fullDescription: "A responsive portfolio website with modern design and interactive elements to showcase my professional work. Features responsive design for all devices, interactive UI elements and animations, dark/light theme toggle, and project showcase with filtering.",
    category: "Web Development",
    technologies: ["HTML/CSS", "JavaScript", "TypeScript", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://harshpandey9984.github.io/portfolio/",
    githubUrl: "https://github.com/Harshpandey9984/portfolio",
    features: [
      "Responsive design for all devices",
      "Interactive UI elements and animations",
      "Dark/light theme toggle",
      "Project showcase with filtering",
      "Modern design patterns",
      "Performance optimized"
    ]
  },
  {
    id: 3,
    title: "My React App",
    description: "A modern React application demonstrating advanced features and best practices.",
    fullDescription: "This project demonstrates various React concepts including hooks, context API, and responsive design patterns. Features state management with Context API and Hooks, API integration using Fetch/Axios, and modern UI components.",
    category: "React",
    technologies: ["React", "JavaScript", "CSS", "API Integration", "Hooks"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/Harshpandey9984/My-React-App",
    features: [
      "State management with Context API and Hooks",
      "API integration using Fetch/Axios",
      "Modern UI components with CSS-in-JS",
      "Responsive design implementation",
      "React best practices",
      "Component-based architecture"
    ]
  },
  {
    id: 4,
    title: "Smart Loan",
    description: "A platform to provide microloans to customers using smart contracts and blockchain technology.",
    fullDescription: "A decentralized finance (DeFi) platform that allows users to obtain microloans without traditional banking requirements. Features smart contract-based loan processing, automated credit assessment, and peer-to-peer lending functionality.",
    category: "Blockchain",
    technologies: ["Blockchain", "Smart Contracts", "DeFi", "Web3", "Solidity"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/Harshpandey9984/Smart-Loan",
    features: [
      "Smart contract-based loan processing",
      "Automated credit assessment",
      "Transparent loan terms on blockchain",
      "Peer-to-peer lending functionality",
      "DeFi protocol implementation",
      "Secure transaction processing"
    ]
  },
  {
    id: 5,
    title: "Paw-some City",
    description: "A platform to create pet-friendly communities where every tail wags with joy.",
    fullDescription: "A community-based website connecting pet owners, showcasing pet-friendly locations, and promoting pet welfare. Features interactive map of pet-friendly locations, community forum for pet owners, and resources for pet adoption and care.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/Harshpandey9984/Paw-some-City",
    features: [
      "Interactive map of pet-friendly locations",
      "Community forum for pet owners",
      "Resources for pet adoption and care",
      "Event calendar for pet-related activities",
      "Pet welfare promotion",
      "Community building features"
    ]
  },
  {
    id: 6,
    title: "Digital Tools Help Chatbot",
    description: "An AI-powered chatbot to help users with digital tools and provide technical assistance.",
    fullDescription: "A Python-based chatbot designed to assist users with digital tools and provide technical support. Features natural language processing, automated responses, and integration with various digital platforms.",
    category: "AI/Python",
    technologies: ["Python", "NLP", "AI", "Chatbot", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXRib3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/Harshpandey9984/Digital-Tools-help-Chatbot",
    features: [
      "Natural language processing",
      "Automated technical support",
      "Digital tools integration",
      "User-friendly interface",
      "Machine learning capabilities",
      "24/7 assistance availability"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Manager at TechCorp",
    content: "Harsh delivered exceptional work on our blockchain project. His technical expertise and attention to detail made the difference.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer at StartupXYZ",
    content: "Working with Harsh was a pleasure. He consistently delivered high-quality code and innovative solutions to complex problems.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CTO at WebSolutions",
    content: "Harsh's expertise in React and blockchain technologies helped us build a cutting-edge platform. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Dean's List",
    description: "Achieved Dean's List recognition for academic excellence in Computer Science",
    year: "2023",
    icon: "fas fa-award"
  },
  {
    id: 2,
    title: "Hackathon Winner",
    description: "1st place in National Blockchain Hackathon for innovative DeFi solution",
    year: "2023",
    icon: "fas fa-trophy"
  },
  {
    id: 3,
    title: "Open Source Contributor",
    description: "Active contributor to major open-source projects with 50+ contributions",
    year: "2022-2023",
    icon: "fab fa-github"
  },
  {
    id: 4,
    title: "Tech Speaker",
    description: "Speaker at university tech talks on blockchain and web development",
    year: "2023",
    icon: "fas fa-microphone"
  }
];

export const contactInfo = {
  email: "harshpandey9984@gmail.com",
  phone: "+91 XXXXXXXXXX",
  location: "India",
  availability: "Available for freelance projects and full-time opportunities",
  responseTime: "Usually responds within 24 hours"
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Harshpandey9984",
    icon: "fab fa-github",
    color: "#333"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harsh-pandey-aa783925a/",
    icon: "fab fa-linkedin",
    color: "#0077b5"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/harshpandey9984",
    icon: "fab fa-twitter",
    color: "#1da1f2"
  },
  {
    name: "Email",
    url: "mailto:harshpandey9984@gmail.com",
    icon: "fas fa-envelope",
    color: "#ea4335"
  }
];
