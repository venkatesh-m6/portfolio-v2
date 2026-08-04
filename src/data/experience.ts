import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'sih-2025',
    company: 'Smart India Hackathon',
    role: 'Participant & Developer',
    period: 'Sep 2025 – Oct 2025',
    type: 'HACKATHON',
    logo: '/images/sih.png',
    description: [
      'Built an AI-powered train traffic control system to optimize scheduling and dynamically allocate track slots.',
      'Developed a real-time decision-making model using live train data (position, speed, delays) to improve routing.',
      'Combined machine learning with intelligent traffic management logic to minimize station idle time.',
    ],
    tags: ['AI/ML', 'Python', 'Real-time Systems', 'Team Lead'],
  },
  {
    id: 'salesforce-2025',
    company: 'Salesforce',
    role: 'CRM Intern',
    period: 'May 2025 – Jul 2025',
    type: 'INTERNSHIP',
    logo: '/images/Salesforce-logo.webp',
    description: [
      'Gained hands-on experience with Salesforce CRM, Apex programming, and Lightning Web Components (LWC).',
      'Implemented automation and business logic using Apex triggers and SOQL queries.',
      'Built scalable LWC components integrated with Salesforce data models.',
    ],
    tags: ['Salesforce', 'Apex', 'LWC', 'SOQL', 'CRM'],
  },
  {
    id: 'srmap-intern-2024',
    company: 'SRM University-AP',
    role: 'Web Development Intern',
    period: 'Jul 2024 – Apr 2025',
    type: 'INTERNSHIP',
    logo: '/images/SRM_logo.png',
    description: [
      'Built a full-stack stationery platform using Node.js and WebSockets to digitize campus printing.',
      'Developed a Python-based automated page counter to calculate document pages and pricing instantly.',
      'Integrated the Razorpay payment gateway and created a real-time admin dashboard for order tracking.',
    ],
    tags: ['Node.js', 'React', 'WebSockets', 'Python', 'Razorpay', 'MongoDB'],
  },
];
