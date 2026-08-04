import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'resume-screening',
    title: 'Resume Screening System',
    description:
      'NLP-based resume screening system that ranks candidates against job descriptions using multi-factor scoring and semantic similarity. Automates the recruitment pipeline with deep language understanding.',
    category: 'AI / ML',
    tags: ['Python', 'NLP', 'Scikit-Learn', 'BERT', 'FastAPI'],
    githubUrl: 'https://github.com/venkatesh-m6/Resume_Screening_System',
    liveUrl: 'https://resumescreeningsystem-mxjo2nvhcwe3raz62yapfj.streamlit.app/',
    status: 'COMPLETED',
    icon: 'Brain',
  },
  {
    id: 'srmap-stationery',
    title: 'SRMAP Stationery Hub',
    description:
      'Full-stack stationery platform using Node.js and WebSockets to digitize campus printing. Features real-time order tracking, Razorpay payment integration, and an admin dashboard.',
    category: 'Full Stack',
    tags: ['Node.js', 'React', 'WebSockets', 'MongoDB', 'Razorpay'],
    githubUrl: 'https://github.com/venkatesh-614/srmap-stationery-hub',
    liveUrl: 'https://srmap-stationery-hub.onrender.com',
    image: '/images/image1.png',
    status: 'ACTIVE',
    icon: 'ShoppingCart',
  },
  {
    id: 'food-ordering',
    title: 'Food Ordering System',
    description:
      'Console-based Food Ordering System built in C++ implementing role-based access for managers and customers with OOP principles, data structures, and file persistence.',
    category: 'Systems',
    tags: ['C++', 'OOP', 'Data Structures', 'File I/O'],
    githubUrl: 'https://github.com/venkatesh-614/Food-Ordering-System/tree/main',
    image: '/images/image3.png',
    status: 'COMPLETED',
    icon: 'Utensils',
  },
  {
    id: 'sequent',
    title: 'SEQUENT',
    description:
      'Structured SQL learning platform that breaks complex database concepts into clear, progressive levels. Features an interactive query editor, live feedback, and gamified progress tracking.',
    category: 'Ed-Tech',
    tags: ['React', 'TypeScript', 'SQL', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/venkatesh-614/SEQUENT',
    image: '/images/image4.png',
    status: 'COMPLETED',
    icon: 'Database',
  },
  {
    id: 'sih-railway',
    title: 'AI Train Traffic Controller',
    description:
      'Smart India Hackathon project: AI-powered train traffic control system that optimizes scheduling and dynamically allocates track slots using real-time train data and machine learning.',
    category: 'AI / ML',
    tags: ['Python', 'Machine Learning', 'FastAPI', 'Real-time'],
    githubUrl: 'https://github.com/venkatesh-614',
    status: 'COMPLETED',
    icon: 'Train',
  },
];
