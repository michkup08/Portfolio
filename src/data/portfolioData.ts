import { PersonalInfo, Project, Service, ExperienceItem, SkillCategory } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Michał Kupka',
  titles: [
    'Software developer',
  ],
  bio: 'Creative Engineer',
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
    yearsExperience: 2
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
  },
  // {
  //   id: 'gamedev',
  //   title: 'Game Development',
  //   description: '...',
  //   iconName: 'Gamepad2',
  //   techStack: ['C#', 'Unity']
  // },
  // {
  //   id: 'frontend',
  //   title: 'Frontend',
  //   description: '',
  //   iconName: 'Terminal',
  //   techStack: ['React-JS', 'React-Native', 'Typescript/Javascript']
  // },
  // {
  //   id: 'backend',
  //   title: 'Backend',
  //   description: '',
  //   iconName: 'Terminal',
  //   techStack: ['Java + Spring Boot', 'Node js']
  // },
  // {
  //   id: 'databases',
  //   title: 'Databases',
  //   description: '',
  //   iconName: 'Terminal',
  //   techStack: ['Postgres', 'SQL Server', 'Oracle']
  // },
  // {
  //   id: 'machineLerning',
  //   title: 'Focused on reinforcement learning',
  //   description: '',
  //   iconName: 'Terminal',
  //   techStack: ['Python', 'PyTorch', 'Unity ML-Agents Toolkit']
  // },
];

export const projects: Project[] = [
  {
    id: 'python-gestures',
    title: 'Python Gestures',
    category: 'Computer Vision',
    description: 'System rozpoznawania gestów w czasie rzeczywistym napisany w języku Python. Wykorzystuje zaawansowane biblioteki do śledzenia dłoni i mapowania ruchu na konkretne akcje.',
    content: '<p><strong>Python Gestures</strong> to innowacyjny projekt bazujący na widzeniu komputerowym (Computer Vision). Program analizuje obraz z kamery w czasie rzeczywistym, wykrywając dłonie i ich ułożenie. Dzięki zaawansowanym algorytmom, aplikacja potrafi przetłumaczyć fizyczne gesty użytkownika na konkretne komendy w systemie komputerowym.</p><br/><p>Główne technologie wykorzystane w projekcie to <strong>Python</strong>, <strong>OpenCV</strong> oraz biblioteki do uczenia maszynowego zajmujące się detekcją (np. MediaPipe). Projekt ten świetnie demonstruje połączenie sztucznej inteligencji z interfejsami człowiek-maszyna (HMI).</p>',
    tags: ['Python', 'Computer Vision', 'OpenCV', 'MediaPipe'],
    image: '/images/project1.jpg',
    githubUrl: 'https://github.com/michkup08/PythonGestures',
    featured: true
  },
  {
    id: 'organoid-review',
    title: 'Organoid Review',
    category: 'Data Science',
    description: 'Narzędzie oparte o Pythona służące do przetwarzania, analizy i przeglądu danych dotyczących organoidów. Usprawnia pracę z danymi badawczymi i medycznymi.',
    content: '<p><strong>Organoid Review</strong> to zaawansowany projekt badawczy ukierunkowany na analizę danych. Służy do automatyzacji procesów przetwarzania informacji i wizualizacji eksperymentów z wykorzystaniem nowoczesnych narzędzi data science.</p><br/><p>Dzięki zastosowaniu bibliotek analitycznych w Pythonie, projekt ułatwia i przyspiesza generowanie raportów i analiz statystycznych na dużych zbiorach danych medycznych.</p>',
    tags: ['Python', 'Data Analysis', 'Research', 'Machine Learning'],
    image: '/images/project2.jpg',
    githubUrl: 'https://github.com/michkup08/Organoid-Review',
    featured: true
  },
  {
    id: 'gk-project',
    title: 'Grafika Komputerowa (GK)',
    category: 'Graphics Development',
    description: 'Rozbudowany silnik lub projekt renderowania grafiki komputerowej stworzony w języku C#. Skupia się na symulacjach, oświetleniu i interakcji z trójwymiarowymi obiektami.',
    content: '<p>Złożony projekt programistyczny napisany w <strong>C#</strong>, eksplorujący zagadnienia grafiki komputerowej. Rozwiązuje problemy związane z transformacjami w przestrzeni 3D, optymalizacją wyświetlania i shadingiem.</p><br/><p>Jest to świetny dowód na dogłębne zrozumienie matematyki stojącej za grafiką trójwymiarową oraz umiejętność budowania wydajnego kodu do symulacji.</p>',
    tags: ['C#', '3D Graphics', 'Rendering', 'Math'],
    image: '/images/project3.jpg',
    githubUrl: 'https://github.com/michkup08/GK-Project'
  },
  {
    id: 'mapa-cen',
    title: 'Mapa Cen API',
    category: 'Backend Architecture',
    description: 'Silnik serwerowy (API) napisany w środowisku C#. Służy do gromadzenia, weryfikowania i udostępniania danych o cenach, zapewniając wydajną komunikację z aplikacją kliencką.',
    content: '<p><strong>MapaCenBackend</strong> to kluczowa część architektury aplikacji do śledzenia i mapowania cen. Projekt to w pełni funkcjonalne <strong>REST API</strong> zbudowane w oparciu o framework C# / .NET.</p><br/><p>Odpowiada za bezpieczną komunikację z bazą danych, uwierzytelnianie użytkowników oraz przetwarzanie zapytań o statystyki cenowe z niskim opóźnieniem.</p>',
    tags: ['C#', '.NET', 'REST API', 'Backend'],
    image: '/images/project4.jpg',
    githubUrl: 'https://github.com/michkup08/MapaCenBackend'
  }
];

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'AI/ML Engineer',
    organization: 'Tech University',
    period: 'Feb 2024 - Present',
    roleType: 'work',
    description: 'Working on computer vision programs for character feature detection and a chatbot project based on LLM models with RAG database integration.'
  },
  {
    id: 'edu-1',
    title: 'Computer Science - Master\'s degree',
    organization: 'Tech University',
    period: 'Feb 2022 - Sep 2023',
    roleType: 'education',
    description: 'Specialization in design and programming of games and simulations in engines and graphics APIs. Classes in computer vision and advanced rendering.',
    link: '#',
    linkText: 'Thesis'
  },
  {
    id: 'exp-2',
    title: 'Unity 3D / HLSL Developer',
    organization: 'VR Innovations',
    period: 'Jan 2022 - Jan 2024',
    roleType: 'work',
    description: 'Design and implementation of 3D simulations in a virtual environment. Specializing in developing custom AR/VR solutions and communicating with specialized hardware.'
  }
];
