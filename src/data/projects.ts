import type { Project, TimelineEntry, Certification, SkillCategory } from '../types';

export const projects: Project[] = [
  {
    id: 'staywise',
    number: '01',
    title: 'StayWise',
    subtitle: 'AI-Powered Homestay Management Assistant',
    description:
      'An AI-powered platform that helps homestay owners manage guest reviews, customer queries, and tourist assistance using the Google Gemini API.',
    problem:
      'Homestay hosts struggle to manage guest feedback, answer local tourism queries, set dynamic prices, and write property descriptions efficiently across platforms.',
    solution:
      'Built an integrated platform featuring 8 AI-driven capabilities including review reply suggestions, local tourist guide chatbot, dynamic pricing recommendations, sentiment analysis, and natural language smart search.',
    features: [
      'Interactive AI Local Tourist Guide Chatbot for guests',
      'AI Review Reply Suggestions based on guest rating/sentiment',
      'AI Dynamic Pricing Recommendations using seasonality & occupancy',
      'AI Host Analytics & Sentiment Insights on review trends',
      'Multi-Role System (Customer, Owner, Admin)',
      'Booking & checkout with dynamic bill calculator',
      'Secure JWT authentication & Google OAuth 2.0 integration',
      'Input validation, rate limiting, and database security design',
    ],
    technologies: ['React 19', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose ODM', 'Google Gemini API', 'Tailwind CSS', 'JWT', 'Google OAuth 2.0'],
    concepts: ['RESTful API Design', 'Authentication & Session Management', 'Role-Based Access Control (RBAC)', 'Generative AI Integration', 'NoSQL Database Schema Design'],
    github: 'https://github.com/ujjwal9034/AI-Powered-Homestay-Management-Assistant',
    liveDemo: 'https://staywise-kappa.vercel.app',
    color: '#f59e0b',
  },
  {
    id: 'grocery-system',
    number: '02',
    title: 'Online Grocery System',
    subtitle: 'Marketplace for Local Stores',
    description:
      'A full-stack grocery management and marketplace platform connecting local stores and customers, designed with separation of dashboards and robust backend APIs.',
    problem:
      'Local grocery stores lack an automated, secure digital portal to display products, receive orders, and track revenue while keeping customer authentication and seller capabilities isolated.',
    solution:
      'Implemented a modular marketplace containing customized dashboards for customers (browse, cart, multiple addresses, reviews), sellers (dashboard, analytics, product upload, fulfillment), and admins (approvals, user controls).',
    features: [
      'Product listing, filtering by category, sorting, and wishlists',
      'Dashboard analytics for sellers (sales, product, revenue tracking)',
      'Admin approval workflow for local store registration',
      'Role-based access control (Customer, Seller, Admin)',
      'JWT authentication with secure httpOnly cookies',
      'Security headers with Helmet, rate limiting, and input validation',
      'Account lockout mechanism after multiple failed logins',
      'Product image upload support and route-based architecture',
    ],
    technologies: ['Node.js', 'Express.js', 'MySQL', 'TypeScript', 'Next.js', 'React', 'HTML', 'CSS', 'JavaScript'],
    concepts: ['Relational Database Design', 'API Security (Helmet, CORS, Cookies)', 'Dashboard Analytics Mapping', 'Input Sanitization', 'State Management'],
    github: 'https://github.com/ujjwal9034/FreshMarket-Local-Grocery-Marketplace',
    liveDemo: 'https://my-project-azure-xi.vercel.app',
    color: '#22c55e',
  },
  {
    id: 'minilang',
    number: '03',
    title: 'MiniLang Analyzer',
    subtitle: 'Compiler Design Project',
    description:
      'A compiler front-end and analyzer implementing tokenization, parsing, semantic checking, and intermediate code generation, built inside a Java Swing-based IDE.',
    problem:
      'Understanding language analysis phases is academically complex; there is a need to visualize text transformation from source code down to parsed trees and Three Address Code.',
    solution:
      'Developed a custom language compiler in C integrated with a Swing IDE to highlight grammar validation, count keyword frequencies, generate syntax trees, and produce intermediate code.',
    features: [
      'Lexical analysis with token generation and categorization',
      'Syntax analysis with parse tree visualization',
      'Semantic checking with strict type validation',
      'Three Address Code (TAC) intermediate representation',
      'Interactive Java Swing code editor with syntax error indicators',
      'JTable displays for structured lexical tokens and counts',
      'Process timeout protection for responsive compiler output',
    ],
    technologies: ['C', 'Java', 'Java Swing'],
    concepts: ['Compiler Design', 'Grammar Validation', 'Lexical & Syntax Parsing', 'Three Address Code (TAC)', 'GUI-Compiler Integration', 'Error Handling'],
    github: 'https://github.com/ujjwal9034/MiniLang-Analyzer',
    color: '#a78bfa',
  },
  {
    id: 'warehouse',
    number: '04',
    title: 'Warehouse Management System',
    subtitle: 'Shortest Path Navigation & Inventory',
    description:
      'A Java-based desktop application to manage warehouse inventories, stock levels, and product storage locations, featuring path finding optimizations.',
    problem:
      'Navigating massive warehouse floors manually to locate and retrieve stock leads to operational delays and inventory placement inefficiencies.',
    solution:
      'Designed a desktop app implementing Dijkstra\'s Algorithm to compute the absolute shortest retrieval paths between product locations, coupled with an MVC structured GUI.',
    features: [
      'Interactive warehouse layout and floor navigation map',
      'Shortest path computation using Dijkstra\'s Algorithm',
      'Detailed product records, stock levels, and coordinate location mapping',
      'Model-View-Controller (MVC) design pattern for structure separation',
      'Responsive Java Swing interface for warehouse operations management',
    ],
    technologies: ['Java', 'Java Swing'],
    concepts: ['Graph Algorithms (Dijkstra)', 'Model-View-Controller (MVC)', 'Inventory Optimization', 'Data Structures (Graphs, Trees)', 'Desktop GUI Architecture'],
    github: 'https://github.com/ujjwal9034',
    color: '#3b82f6',
  },
  {
    id: 'firewall',
    number: '05',
    title: 'Firewall Simulator',
    subtitle: 'Packet Filter & Traffic Monitor',
    description:
      'A GUI-based network security tool designed to simulate firewall filtering rules, log network traffic, and support live packet sniffing.',
    problem:
      'Visualizing and testing firewall rules against live or simulated network packets is essential for learning network security concepts.',
    solution:
      'Created a Tkinter-based application supporting rule configuration, offline mock-file testing, and live monitoring of packets captured via Scapy.',
    features: [
      'Simulation mode testing packets against active configurations',
      'Live capture mode utilizing Scapy to sniff and inspect network interfaces',
      'Interactive rule manager (add, delete, toggle block/allow rules)',
      'Export and import rule sets as configuration files',
      'Traffic logging area showing ALLOW/BLOCK status in real time',
    ],
    technologies: ['Python', 'Scapy', 'Tkinter'],
    concepts: ['Network Protocols', 'Packet Capturing & Decoding', 'Access Control Lists (ACL)', 'Security Rule Validation', 'Asynchronous GUI Event Loop'],
    github: 'https://github.com/ujjwal9034/Firewall-Simulator',
    color: '#ef4444',
  },
  {
    id: 'performance-tracker',
    number: '06',
    title: 'Student Performance Tracker',
    subtitle: 'Academic Portal & Attendance Intelligence',
    description:
      'A full-stack academic management platform featuring secure cryptographic rotating QR attendance check-ins and automated PDF report card generation.',
    problem:
      'Institutions face challenges tracking student attendance reliably (due to proxy signing) and delivering clear, real-time academic progression reports to students and faculty.',
    solution:
      'Created a FastAPI and React platform with secure rotating QR codes containing cryptographically salted nonces to prevent scan spoofing, coupled with ReportLab PDF transcript rendering.',
    features: [
      'Role-based dashboards for Super Admins, Teachers, and Students',
      'Cryptographically secure rotating QR code attendance system to block proxy scans',
      'Visual analytics displaying attendance calendar heatmaps and grade comparisons',
      'One-click PDF transcript generator featuring institutional branding and metrics',
      'Automated onboarding and notification emails using secure SMTP',
      'Adaptive dark/light theme switching based on Material UI and CSS tokens',
      'Real-time cloud service warm-up monitor indicator for backend services',
    ],
    technologies: ['FastAPI', 'React 18', 'Vite 5', 'Material UI', 'Recharts', 'SQLAlchemy', 'SQLite', 'ReportLab PDF', 'SMTP'],
    concepts: ['Cryptographic Nonces', 'Anti-Proxy Verification', 'Role-Based Portals (RBAC)', 'Visual Performance Heatmaps', 'Automated PDF Compiling', 'Real-Time State Polling'],
    github: 'https://github.com/ujjwal9034/Student-Performance-Tracker',
    liveDemo: 'https://student-performance-tracker-v2.vercel.app',
    color: '#06b6d4',
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: '2021',
    title: 'Class 10th Completed',
    description: 'Completed secondary education at Delhi Public School, Daulatpur.',
    downloadUrl: '/marksheet_10th.pdf',
    downloadLabel: 'Download 10th Marksheet',
  },
  {
    year: '2023',
    title: 'Class 12th Completed',
    description: 'Completed higher secondary education at Delhi Public School, Daulatpur.',
    downloadUrl: '/marksheet_12th.pdf',
    downloadLabel: 'Download 12th Marksheet',
  },
  {
    year: '2023',
    title: 'B.Tech CSE Commences',
    description: 'Pursuing Bachelor of Technology (B.Tech) in Computer Science Engineering at Graphic Era Deemed to Be University, Dehradun (Current CGPA: 8.39).',
    downloadUrl: '/btech_transcript.pdf',
    downloadLabel: 'Download Transcript (Sem 1-6)',
  },
  {
    year: '2024–2026',
    title: 'Core Engineering & Development',
    description: 'Designed compilation engines, routing network packet simulators, MVC-based desktop applications, and full-stack marketplaces.',
  },
  {
    year: '2026',
    title: 'AI-Assisted Full Stack Web Development Intern',
    description: 'Completed a professional internship at Technology Business Incubator (TBI-GEU). Developed web systems utilizing AI-assisted workflows and full-stack architectures.',
    downloadUrl: '/tbi_internship_certificate.jpg',
    downloadLabel: 'TBI-GEU Internship Certificate',
  },
  {
    year: '2027',
    title: 'Graduation',
    description: 'B.Tech Computer Science degree completion at Graphic Era Deemed to Be University.',
  },
];

export const certifications: Certification[] = [
  {
    title: 'AI-Assisted Full Stack Web Development Intern',
    issuer: 'Technology Business Incubator - Graphic Era University (TBI-GEU)',
    icon: 'internship',
    credentialUrl: '/tbi_internship_certificate.jpg',
    credentialLabel: 'TBI-GEU Internship Certificate',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: 'aws',
    credentialUrl: '/aws_certified_cloud_practitioner.pdf',
    credentialLabel: 'AWS Certified Cloud Practitioner Certificate',
  },
  {
    title: 'Google Cloud Computing Foundation',
    issuer: 'Google Cloud',
    icon: 'gcp',
    credentialUrl: 'https://www.credly.com/badges/1386d00a-906c-4bc0-b7a7-f351ff94d8df/linked_in_profile',
    credentialLabel: 'Google Cloud Computing Foundation Badge',
  },
  {
    title: 'Build a Secure Google Cloud Network',
    issuer: 'Google Cloud Network Security',
    icon: 'gcp',
    credentialUrl: '/build_secure_google_cloud_network.pdf',
    credentialLabel: 'Build a Secure Google Cloud Network Certificate',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    icon: '{ }',
    skills: ['C', 'C++', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    name: 'Web Frameworks',
    icon: '< />',
    skills: ['Node.js', 'Express.js', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    name: 'Databases & ORM',
    icon: '⊞',
    skills: ['MySQL', 'MongoDB Atlas', 'Mongoose ODM'],
  },
  {
    name: 'Core Concepts',
    icon: '⊿',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'DBMS', 'Operating Systems', 'Compiler Design', 'Cybersecurity Basics'],
  },
  {
    name: 'Tools & Snippets',
    icon: '⚙',
    skills: ['Tkinter', 'Java Swing', 'Scapy', 'Git & GitHub', 'Vercel'],
  },
];
