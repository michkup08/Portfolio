import { PersonalInfo, Project, Service, ExperienceItem, SkillCategory } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Michał Kupka',
  titles: [
    'Software developer',
  ],
  bio: 'Creative Engineer specializing in developing high-performance applications.',
  status: 'Open for freelance hire or job offerts',
  location: 'Silesia',
  residence: 'Poland',
  email: 'michal1309k@gmail.com',
  socials: {
    linkedin: 'https://www.linkedin.com/in/micha%C5%82-kupka-5a5761314/',
    github: 'https://github.com/michkup08',
    discord: 'michal1309'
  },
  stats: {
    yearsExperience: 2,
    completedSoftware: 10
  }
};

export const services: Service[] = [
  {
    id: 'simplewebsides',
    title: 'Simple Websides',
    description: 'Websides with similar scope of work to that portfolio.',
    iconName: '',
    techStack: ['Typescript', 'React js + Next js']
  },
  {
    id: 'compleywebsides',
    title: 'Complex Websystems',
    description: 'System with division for 2 or mode aplication, can include user veryfication, payment systems, database management and more.',
    iconName: '',
    techStack: ['Typescript', 'React js + Next js/React native', 'Any backend language', 'Postgres']
  }
];

export const projects: Project[] = [
  {
    id: 'training-app',
    title: 'TrainingApp',
    category: 'Full Stack Development',
    description: 'A web application that combines workout planning with social features, allowing users to create training routines, track progress, and communicate in real-time.',
    content: '<p><strong>TrainingApp</strong> is a comprehensive full-stack web application designed to support the implementation of training plans while integrating social interaction features. It allows users to create personalized weekly workout schedules, track their execution progress, and find personal trainers directly within the platform.</p><br/><p>Built with React, TypeScript, and Spring Boot, the application offers real-time communication via WebSockets for chatting and sharing workout plans, alongside a community feed for posts and comments. It also leverages an AI API to provide intelligent feedback on user-generated workout routines.</p>',
    tags: ['React', 'Spring Boot', 'TypeScript', 'WebSockets', 'MySQL'],
    image: '/images/trainingapp.png',
    githubUrl: 'https://github.com/michkup08/TrainingApp',
    featured: true
  },
  {
    id: 'UnityMLAgents',
    title: 'Unity ML Agents',
    category: 'Machine Learning + Graphics',
    description: 'A research project evaluating the effectiveness and stability of various reinforcement learning algorithms for generating movement in 3D animations using Unity and ML-Agents.',
    content: '<p><strong>RL Movement Generation</strong> focuses on researching and evaluating the effectiveness and stability '
    + 'of selected reinforcement learning algorithms used to generate movement in 3D animations. The experiments and '
    + 'simulations were conducted using the Unity game engine alongside the ML-Agents toolkit.</p><br/><p>The project '
    + 'compares default framework algorithms like PPO (Proximal Policy Optimization) and SAC (Soft Actor-Critic) with '
    + 'alternative approaches designed to bypass their limitations, namely PPG (Phasic Policy Gradient) '
    + 'and DroQ (Dropout Q-Functions).</p>',
    tags: ['Unity', 'Machine Learning', 'Reinforcement Learning', 'ML-Agents'],
    image: '/images/rl.png',
    githubUrl: 'https://github.com/michkup08/RL-Movement-Generation',
    featured: true
  },
  {
    id: 'organoid-review',
    title: 'Organoid Review',
    category: 'Computer Vision + Full Stack Development',
    description: "A tool leveraging computer vision technologies, Python, and software such as Blender, Flask, and React, designed for the processing, analysis, and review of organoid data. It streamlines workflows involving research and medical data.",
    content: "<p><strong>Organoid Review</strong> is an advanced research project focused on data analysis. "
      + "It automates information processing and the visualization of experimental results.</p>"
      + "<br/><p>By utilizing Python-based analytical libraries, the project facilitates and accelerates the generation of reports and statistical analyses based on extensive medical datasets.</p>",
    tags: ['Python', 'Data Analysis', 'Blender', 'Flask', 'React js'],
    image: '/images/organoid.gif',
    githubUrl: 'https://github.com/michkup08/Organoid-Review',
    featured: true
  },
  {
    id: 'rocket',
    title: 'Rakieta',
    category: 'Graphic',
    "description": "A Unity-based VR space flight simulator integrated with the Yaw 3 motion chair for a highly immersive physical experience.",
    "content": "<p><strong>Space Rocket Simulator</strong> is an immersive VR project built in Unity that lets users fly a rocket through space.</p><br/><p>By integrating with the <strong>Yaw 3</strong> motion simulator (shown in image_710f08.png), every in-game maneuver—pitch, roll, and yaw—is instantly translated into real physical movement, providing an incredibly realistic space flight experience.</p>",
    tags: ['C#', 'Unity', 'Virtual Reality', 'Yaw 3'],
    image: '/images/yaw3.jpg',
    githubUrl: 'https://github.com/michkup08/Rakieta',
    featured: true
  }
];

export const experience: ExperienceItem[] = [
  {
    id: 'edu-1',
    title: 'Master of Engineering - Computer Science',
    organization: 'Silesian University of Technology, Gliwice',
    period: 'Oct 2025 - Sep 2026',
    roleType: 'education',
    description: 'Master\'s degree studies in Computer Science.'
  },
  {
    id: 'exp-1',
    title: 'Full-Stack Developer',
    organization: 'Junisoftex',
    period: 'Jan 2025 - Current',
    roleType: 'work',
    description: 'Integration of the e-invoicing system with a newly implemented mobile application (React Native + PHP). Development of employee time-tracking and leave request management systems.'
  },
  {
    id: 'edu-2',
    title: 'Bachelor of Engineering - Computer Science',
    organization: 'Silesian University of Technology, Gliwice',
    period: 'Oct 2021 - Feb 2025',
    roleType: 'education',
    description: 'Bachelor\'s degree studies in Computer Science.'
  },
  {
    id: 'exp-2',
    title: 'Full-Stack Developer Intern',
    organization: 'ENTE Sp. Z o.o',
    period: 'Jul 2024 - Aug 2024',
    roleType: 'work',
    description: 'Worked on a dynamic passenger information system using Spring Boot and Angular. Collaborated in a cross-functional team, gaining experience in backend APIs, frontend components, and database interactions.'
  },
  {
    id: 'exp-3',
    title: 'C++ Developer Intern',
    organization: 'ENTE Sp. Z o.o',
    period: 'Jul 2023 - Sep 2023',
    roleType: 'work',
    description: 'Participated in software development for embedded systems. Contributed to performance optimization of C++ code.'
  }
];