export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
  {
    title: 'SmartCruit - Intelligent CV Analysis',
    desc: 'AI-powered PDF CV analysis tool for automated extraction of key information (skills, experience, education) and semantic matching with job offers.',
    subdesc: 'Developed with Spring Boot backend and Angular frontend, implementing NLP techniques and machine learning for intelligent candidate-job matching and ranking system.',
    href: '#',
    texture: '/textures/project/smartcruit.mp4',
    logo: '/assets/smartcruit.png',
    logoStyle: {
      backgroundColor: '#1E3A8A',
      border: '0.2px solid #2563EB',
      boxShadow: '0px 0px 60px 0px #3B82F64D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Spring Boot',
        path: '/assets/spring.png',
      },
      {
        id: 2,
        name: 'Angular',
        path: '/assets/angular.png',
      },
      {
        id: 3,
        name: 'Python',
        path: '/assets/python.png',
      }
    
    ],
  },
  {
    title: 'SpeedyGo - Transport Application',
    desc: 'A comprehensive transport application offering urban, intercity, and package delivery solutions with AI-powered route optimization and time estimation features.',
    subdesc: 'Developed with Angular for the frontend and Spring for the backend, implementing AI algorithms to enhance route planning and user experience.',
    href: '#',
    texture: '/textures/project/speedyGo.mp4',
    logo: '/assets/speedyGo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Angular',
        path: '/assets/angular.png',
      },
      {
        id: 2,
        name: 'Spring',
        path: 'assets/spring.png',
      },
      {
        id: 3,
        name: 'AI',
        path: '/assets/python.png',
      },
    ],
  },
  {
    title: 'E-Learning Platform',
    desc: 'An educational platform for institutions featuring course management, event scheduling, student forums, and an intelligent chatbot for real-time student assistance.',
    subdesc: 'Built with PHP and Symfony framework, ensuring a robust, maintainable, and secure system for educational institutions.',
    href: '#',
    texture: '/textures/project/symphony.mp4',
    logo: '/assets/techPioneers.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'PHP',
        path: '/assets/php.png',
      },
      {
        id: 2,
        name: 'Symfony',
        path: 'assets/symfonyy.png',
      },
    ],
  },
  {
    title: 'Blood Bank Management System',
    desc: 'Application for managing blood transfusion centers, tracking donations, donors, and blood transfer operations with a centralized information system.',
    subdesc: 'Developed in C with Glade interface, demonstrating strong system architecture and database management skills.',
    href: '#',
    texture: '/textures/project/Hemato.mp4',
    logo: '/assets/hemato.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background: 'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'C',
        path: '/assets/c.png',
      },
      {
        id: 2,
        name: 'Glade',
        path: 'assets/glade.png',
      },
    ],
  },
  {
    title: 'Stack Overflow-inspired Q&A Platform',
    desc: 'Web platform developed during internship at MEDIANET featuring question/answer functionality similar to Stack Overflow.',
    subdesc: 'Built with Laravel backend and React frontend, showcasing full-stack development capabilities and teamwork skills.',
    href: '#',
    texture: '/textures/project/stackOverFlow.mp4',
    logo: '/assets/stackOverFlow.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Laravel',
        path: '/assets/Laravel.png',
      },
      {
        id: 2,
        name: 'React',
        path: 'assets/react.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Private Higher School of Engineering and Technology (ESPRIT)",
    pos: "Computer Engineering Degree Program",
    duration: "2023 - Present",
    title:
      "Specialized training in Computer Engineering, focusing on software development, embedded systems, artificial intelligence, and project management. Acquisition of practical skills through multiple complex academic projects.",
    icon: '/assets/computer.png',
    animation: 'reading',
  },
  {
    id: 2,
    name: "El Manar Preparatory Institute for Engineering Studies (IPEIEM)",
    pos: "Preparatory Class MP (Mathematics-Physics)",
    duration: "2021 - 2023",
    title:
      "Intensive program in mathematics and physics, preparing for the national competitive exam for engineering schools. Development of scientific rigor, resilience, and in-depth analytical skills.",
    icon: '/assets/math.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: "El Menzeh 6 High School",
    pos: "Baccalaureate in Experimental Sciences",
    duration: "2021",
    title:
      "Graduated with High Honors (Mention Très Bien). Solid scientific foundation in biology, chemistry, and physics, marking the beginning of a path of academic excellence.",
    icon: '/assets/lycée.png',
    animation: 'salute',
  },
];