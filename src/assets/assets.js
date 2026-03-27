import {FaReact, FaServer, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.jpg';
import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import profileImg7 from '../assets/profile7.jpg';

export const assets = {
    profileImg,
    profileImg7,
}


export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Java']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL']
  },
 
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker' ]
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VS code','Linux']
  }
];



export const projects = [
  {
    title: "Stress Detection",
    description: "Detects stress by analyzing facial expressions using image processing and machine learning.",
    image: projectImg1,
    tech: ["Machine Learning", "OpenCV", "Python", "CNN"],
    icons: [FaRobot, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Amazon Clone",
    description: "Built an Amazon clone using HTML, CSS, and JavaScript with features like product listings, cart, and user interface design.",
    image: projectImg2,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experience with smooth animations and dark/light mode.",
    image: projectImg3,
    tech: ["React", "Tailwind CSS","JavaScript","Framer Motion","HTML"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },


  // {
  //   title: "AI Image Generator",
  //   description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  //   image: projectImg6,
  //   tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  //   icons: [FaRobot, FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // }
];


