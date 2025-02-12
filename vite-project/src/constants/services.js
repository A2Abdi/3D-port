import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    Identify,
    DrawAI,
    Mandelia,
    Portfolio,
    D3Port,
    Wallkey,
    TrackerApp,
    PortWave,
    threejs,
    WSU, IB,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering intern",
      company_name: "InterviewBuddies",
      icon: IB,
      iconBg: "#E6DEDD",
      date: "June 2024 – August 2024",
      points: [
        "• Developed a scalable Spring Boot microservice to enable seamless communication with the OpenAI API, optimizing AI-driven interactions.",
        "• Architected and implemented a secure employee sign-in/sign-out system using Spring Boot, Spring Security, PostgreSQL, React, and Tailwind CSS, enhancing access management and user experience.",
        "• Integrated Spring Security with JWT authentication to enforce robust access controls, ensuring the confidentiality and integrity of sensitive data.",
        "• Collaborated closely with the development team to enhance backend performance, optimize API interactions, and ensure seamless integration between frontend and backend components."
      ],
    },
    {
      title: "IT Intern",
      company_name: "Wayne State university C&IT",
      icon: WSU,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - June 2024",
      points: [
        "• Diagnosed and resolved complex hardware, software, and network issues, ensuring optimal system performance and minimal downtime.",
        "• Administered and maintained Active Directory (AD), managing user account creation, modification, and deactivation while implementing Group Policies to enhance security and compliance.",
        "• Developed and deployed system imaging solutions, utilizing industry-standard tools to streamline workstation provisioning and ensure consistent configurations across multiple devices."
      ],
    },
    {
      title: "Data Structures and Algorithms Coach",
      company_name: "SCD wayne club",
      icon: WSU,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - current",
      points: [
        "Provided Data Structures and Algorithms tutoring to underclassmen",
        "Coached students interested in competitive programming to enhance their skills and prepare for competitions",
      ],
    },
    {

      title: "Student Assistant",
      company_name: "Wayne State Libraries",
      icon: WSU,
      iconBg: "#E6DEDD",
      dates: "Feb 2022 - Oct 2022",
      points: [
          "Assisted patrons with the use of library databases, computer equipment, and software.",
          "Processed patrons' requested materials.",
          "Inducted, informed, and supported new users with thorough library orientation."
      ]
    }
  ];
   
  const projects = [
    {
        name: "Identify",
        description:
            "A computer vision-based application that detects and captures vehicles and pedestrians as they pass through designated areas using OpenCV and MongoDB Atlas.",
        tags: [
            { name: "OpenCV", color: "cyan-text-gradient" },
            { name: "Python", color: "yellow-text-gradient" },
            { name: "MongoDB Atlas", color: "green-text-gradient" },
            { name: "GitHub", color: "gray-text-gradient" }
        ],
        image: Identify,
        source_code_link: "https://github.com/A2Abdi/OPENCV-python"
    },
    {
        name: "DrawAI",
        description:
            "A deep learning-powered application that recognizes and predicts handwritten numbers and drawings using neural networks and AI.",
        tags: [
            { name: "Python", color: "blue-text-gradient" },
            { name: "Anaconda", color: "orange-text-gradient" },
            { name: "Neural Networks", color: "purple-text-gradient" },
            { name: "ML/AI", color: "pink-text-gradient" },
            { name: "GitHub", color: "gray-text-gradient" }
        ],
        image: DrawAI,
        source_code_link: "https://github.com/A2Abdi/DrawIO"
    },
    {
        name: "Mandelbrot and Julia Set Generator",
        description:
            "A high-performance visualization tool for generating Mandelbrot and Julia fractal sets, built using C++ and SFML for rendering.",
        tags: [
            { name: "C++", color: "blue-text-gradient" },
            { name: "SFML", color: "red-text-gradient" },
            { name: "Verlet Integration", color: "purple-text-gradient" },
            { name: "Microsoft Visual Studio", color: "pink-text-gradient" },
            { name: "Linux", color: "green-text-gradient" },
            { name: "GitHub", color: "gray-text-gradient" }
        ],
        image: Mandelia,
        source_code_link: "https://github.com/A2Abdi/mandelbrot_and_julia_sets_generator"
    },
    {
        name: "Portfolio Website",
        description:
            "A personal portfolio website showcasing projects, skills, and experience. Built using React, TypeScript, and CSS.",
        tags: [
            { name: "React", color: "cyan-text-gradient" },
            { name: "TypeScript", color: "blue-text-gradient" },
            { name: "CSS", color: "pink-text-gradient" },
            { name: "NodeJS", color: "green-text-gradient" },
            { name: "GitHub", color: "gray-text-gradient" }
        ],
        image: Portfolio,
        source_code_link: "https://github.com/A2Abdi/Ali-Abdi-Software-Engineer-"
    },
    {
        name: "3D Portfolio Website",
        description:
            "An interactive 3D portfolio website developed using React and Three.js to create a visually engaging experience.",
        tags: [
            { name: "React", color: "cyan-text-gradient" },
            { name: "ThreeJS", color: "yellow-text-gradient" },
            { name: "CSS", color: "pink-text-gradient" },
            { name: "NodeJS", color: "green-text-gradient" },
            { name: "GitHub", color: "gray-text-gradient" }
        ],
        image: D3Port,
        source_code_link: "https://github.com/A2Abdi/3D-port"
    },
    {
        name: "PortWave",
        description:
            "A real-time audio communication system developed in C++ using PortAudio, enabling seamless audio transmission over a network.",
        tags: [
            { name: "C++", color: "blue-text-gradient" },
            { name: "PortAudio", color: "teal-text-gradient" },
            { name: "Ubuntu", color: "red-text-gradient" },
            { name: "UDP Sockets", color: "purple-text-gradient" },
            { name: "GitHub", color: "gray-text-gradient" }
        ],
        image: PortWave,
        source_code_link: "https://github.com/A2Abdi/PortWave"
    },
    {
        name: "Tracker App",
        description:
            "A full-stack internship tracking web application built with React, Spring Boot, and PostgreSQL, featuring OAuth2 authentication and real-time internship listings.",
        tags: [
            { name: "Java", color: "yellow-text-gradient" },
            { name: "React", color: "cyan-text-gradient" },
            { name: "Spring Boot", color: "green-text-gradient" },
            { name: "PostgreSQL", color: "blue-text-gradient" },
            { name: "Google Cloud", color: "orange-text-gradient" },
            { name: "AWS EC2", color: "purple-text-gradient" },
            { name: "GitHub", color: "gray-text-gradient" }
        ],
        image: TrackerApp,
        source_code_link: "https://github.com/A2Abdi/Tracker-App"
    },
    {
        name: "WallKey",
        description:
            "A cross-platform digital wallet application that enables users to securely store cards and electronic keys via RFID tags.",
        tags: [
            { name: "React Native", color: "cyan-text-gradient" },
            { name: "ExpressJS", color: "green-text-gradient" },
            { name: "MongoDB", color: "pink-text-gradient" },
            { name: "Android Studio", color: "blue-text-gradient" },
            { name: "GitHub", color: "gray-text-gradient" }
        ],
        image: Wallkey,
        source_code_link: "https://github.com/A2Abdi/WallKey"
    }
];

export { services, technologies, experiences, projects };