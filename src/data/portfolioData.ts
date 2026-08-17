import {
  Project,
  ExperienceItem,
  SkillCategory,
  ProcessStep,
  ToolItem,
  EducationItem,
} from '../types';
import { PLACEHOLDER_IMAGES } from './mockupImages';

export const PERSONAL_INFO = {
  name: 'Pooja Panchal',
  role: 'UI/UX Designer · Web Developer',
  badge: 'UI/UX Designer · Web Developer',
  headline: 'Designing & Building Digital Experiences That Matter.',
  subheadline:
    'I design beautiful interfaces and build responsive websites using modern frontend technologies, WordPress and Webflow.',
  availability: 'Available for Opportunities',
  email: 'poojapanchal1911@gmail.com',
  linkedin: 'https://in.linkedin.com/in/pooja-panchal-616b55272',
  github: 'https://github.com/pooja-panchal1911/pooja-panchal1911',
  location: 'Open to Remote / Global Opportunities / on Site',
  yearsExperience: '4+',
  projectsCompleted: '40+',
  satisfactionRate: '100%',
};

export const ABOUT_DATA = {
  heading: 'A Little About Me',
paragraphs: [
  "I'm Pooja Panchal, a UI/UX Designer and Web Developer focused on creating clean, modern, and purposeful digital experiences that balance strong visual design with usability.",
  "I bridge the gap between design and development, transforming ideas and Figma concepts into polished, responsive, and performance-focused websites with attention to detail across every screen size.",
  "My experience spans modern frontend development along with WordPress, Elementor, and Webflow, allowing me to build flexible, scalable, and engaging digital experiences tailored to different project requirements."
],
  stats: [
    { label: 'Design + Development', value: 'Pixel-Perfect' },
    { label: 'Responsive Websites', value: '100% Mobile Ready' },
    { label: 'UI/UX Focused', value: 'User-Centered' },
    { label: 'Creative Problem Solving', value: 'Fast & Scalable' },
  ],
  highlights: [
    {
      title: 'Design-Driven Engineering',
      desc: 'Bridging aesthetic visual design with maintainable, performant code architecture.',
    },
    {
      title: 'Platform Versatility',
      desc: 'Expertise across React SPAs, headless architectures, WordPress CMS, and Webflow visual setups.',
    },
    {
      title: 'Performance & Accessibility',
      desc: 'Crafting lightweight, semantic, WCAG-compliant digital products with sub-second load times.',
    },
  ],
  image: PLACEHOLDER_IMAGES.about,
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: '01',
    title: 'UI/UX Design',
    iconName: 'Palette',
    description:
      'Crafting intuitive user interfaces, cohesive design systems, and delightful digital journeys with high fidelity.',
    skills: [
      'Figma',
      'Photoshop',
      'Canva',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Responsive UI',
    ],
    gradient: 'from-blue-600/20 to-sky-500/5',
    accent: '#2563eb',
  },
  {
    number: '02',
    title: 'Frontend Development',
    iconName: 'Code2',
    description:
      'Writing clean, semantic, and maintainable frontend code that translates visual ideas into blazing-fast web apps.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'SCSS',
    ],
    gradient: 'from-blue-500/20 to-indigo-500/5',
    accent: '#38bdf8',
  },
  {
    number: '03',
    title: 'Website Development',
    iconName: 'Globe',
    description:
      'Building dynamic, SEO-optimized, client-friendly content management systems and visual web platforms.',
    skills: [
      'WordPress',
      'Elementor',
      'Webflow',
      'UiChemy',
      'Custom Websites',
      'Figma → Website',
    ],
    gradient: 'from-emerald-500/20 to-teal-500/5',
    accent: '#10b981',
  },
  {
    number: '04',
    title: 'Motion & Interaction',
    iconName: 'Sparkles',
    description:
      'Elevating digital experiences with choreographed scroll animations, fluid micro-interactions, and engaging physics.',
    skills: [
      'GSAP',
      'Framer Motion',
      'CSS Animation',
      'Micro-interactions',
      'Scroll Animations',
      'Interactive UI',
    ],
    gradient: 'from-purple-500/20 to-pink-500/5',
    accent: '#c084fc',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'exp-2',
    jobTitle: 'Senior UI/UX Designer & Web Developer',
    company: 'Sparkle Infotech',
    location: 'On-site · Surat',
    duration: '2022 — Present',
    period: '4 Years',
    isCurrent: true,
    description:
      'Designing and developing modern, responsive digital experiences for a diverse range of client projects, combining user-centered design with practical frontend development.',
    responsibilities: [
      'Designing intuitive, responsive websites and scalable UI systems using Figma, with a strong focus on usability, visual consistency, and accessibility',
      'Translating Figma designs into high-quality, responsive websites and frontend interfaces with close attention to pixel accuracy and cross-device consistency',
      'Developing interactive frontend experiences using modern technologies such as React, TypeScript, Tailwind CSS, and JavaScript',
      'Building and maintaining websites using WordPress, Elementor, Webflow, and other modern web development tools based on project requirements',
      'Collaborating with designers, developers, and clients to refine interfaces, resolve implementation challenges, and deliver polished digital experiences',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Figma',
      'WordPress',
      'Elementor',
      'Webflow',
      'Tailwind CSS',
      'JavaScript',
    ],
  },

  {
    id: 'exp-1',
    jobTitle: 'UI/UX Designer ',
    company: 'Topaz Infotech',
    location: 'On-site · Ahmedabad',
    duration: '2021 — 2022',
    period: '1 Year',
    description:
      'Worked across UI/UX design and frontend development, creating responsive websites and digital interfaces while collaborating with clients and development teams.',
    responsibilities: [
      'Creating wireframes, user flows, high-fidelity designs, and interactive prototypes in Figma based on project requirements',
      'Converting Figma designs into responsive websites using semantic HTML, CSS, JavaScript, and modern design practices',
      'Using UiChemy to efficiently transform Figma designs into WordPress and Elementor-based websites while refining the final implementation manually',
      'Developing responsive interfaces, forms, navigation systems, and interactive components with a strong focus on usability and consistency',
      'Creating and customizing Webflow websites and landing pages according to client requirements and design specifications',
      'Collaborating with team members to improve designs, troubleshoot frontend issues, and deliver responsive experiences across desktop, tablet, and mobile devices',
    ],
    technologies: [
      'Figma',
      'Photoshop',
      'UiChemy',
      'WordPress',
      'Elementor',
      'Webflow',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
    ],
  },
];
export const PROJECTS_DATA: Project[] = [
{
  id: 'lovedevani',
  title: 'Love Devani',
  category: ['All', 'WordPress', 'Frontend'],
  categoryDisplay: 'WordPress · Frontend',
  description:
    'A content-focused relationship and dating website designed to deliver helpful advice, engaging articles, and an easy-to-navigate responsive experience.',
  longDescription:
    'Love Devani is a relationship and lifestyle content website built to share practical advice across dating, love, relationships, marriage, friendship, and personal experiences. The website combines a clean content structure with responsive layouts, intuitive navigation, article-focused sections, and an engaging reading experience across devices.',
  technologies: [
    'WordPress',
    'Responsive UI',
    'HTML5',
    'CSS3',
    'JavaScript',
    'UI/UX'
  ],
  image: PLACEHOLDER_IMAGES.lovedevani,
  featured: true,
  link: 'https://lovedevani.com/',
  accentColor: '#2563eb',
  metrics: [
    { label: 'Platform', value: 'WordPress' },
    { label: 'Design', value: 'Responsive' },
    { label: 'Content', value: 'Relationship & Dating' },
  ],
  challenge:
    'Creating a clear and engaging content experience where visitors can easily discover relationship advice, dating tips, marriage resources, and other lifestyle content while maintaining a consistent experience across desktop and mobile devices.',
  solution:
    'Developed a structured WordPress experience with clear content categories, responsive layouts, intuitive navigation, article-focused sections, and a clean visual hierarchy that makes the content easy to explore and read.',
  features: [
    'Relationship & Dating Advice Categories',
    'Responsive WordPress Website',
    'Blog & Article Listing Sections',
    'Popular & Recent Articles',
    'Author Story & Profile Section',
    'Contact & Information Pages',
  ],
},
{
  id: 'zync-ai',
  title: 'Zync AI',
  category: ['All', 'Next.js', 'UI/UX'],
  categoryDisplay: 'Next.js · UI/UX',
  description:
    'An AI-powered content creation platform designed to help founders and creators research ideas, capture their thoughts, produce engaging content, and build their personal brand.',
  longDescription:
    'Zync AI is an AI-powered content platform built to streamline the complete content creation workflow. The experience helps founders and creators discover topics, capture ideas, create video content, repurpose content into multiple formats, and distribute it across digital channels through a modern, responsive interface.',
  technologies: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'JavaScript',
    'Swiper',
    'UI/UX',
    'Responsive Design'
  ],
  image: PLACEHOLDER_IMAGES.zyncAi,
  featured: true,
  link: 'https://zync.ai/',
  accentColor: '#146EF5',
  metrics: [
    { label: 'Framework', value: 'Next.js' },
    { label: 'UI Library', value: 'React' },
    { label: 'Styling', value: 'Tailwind CSS' },
  ],
  challenge:
    'Presenting a complex AI-powered content workflow in a simple and engaging way while making the platform easy to understand for founders, creators, and marketing teams.',
  solution:
    'Created a modern responsive interface with clear content hierarchy, interactive sections, smooth slider experiences, and a structured presentation of Zync AI’s content creation workflow and platform capabilities.',
  features: [
    'AI-Powered Content Creation',
    'Topic Research & Idea Capture',
    'AI Video Production',
    'Content Repurposing',
    'Social Media Distribution',
    'Founder Brand Building',
    'Interactive Content Sections',
    'Responsive Modern UI',
  ],
},
{
  id: 'bear-analytics',
  title: 'Bear Analytics',
  category: ['All', 'Webflow', 'UI/UX'],
  categoryDisplay: 'Webflow · UI/UX',
  description:
    'A modern event analytics platform website designed to showcase data-driven insights, audience intelligence, revenue analytics, and performance solutions for event professionals.',
  longDescription:
    'Bear Analytics is an event intelligence platform that helps event organizers, technology providers, and brands turn complex event data into actionable insights. The website presents Bear IQ’s no-code analytics platform, audience acquisition tools, sales intelligence, portfolio performance, integrations, customer stories, and data-driven solutions through a structured and conversion-focused digital experience.',
  technologies: [
    'Webflow',
    'UI/UX',
    'HTML5',
    'CSS3',
    'JavaScript',
    'jQuery',
    'Slick',
    'Redux',
    'Responsive Design'
  ],
  image: PLACEHOLDER_IMAGES.bearAnalytics,
  featured: true,
  link: 'https://www.bearanalytics.com/',
  accentColor: '#2563eb',
  metrics: [
    { label: 'Registrations Tracked', value: '2.2M+' },
    { label: 'Revenue Analyzed', value: '$339M+' },
    { label: 'Companies Analyzed', value: '26K+' },
  ],
  challenge:
    'Presenting complex event data, analytics capabilities, and business intelligence solutions in a clear and approachable way while communicating value to event organizers, technology platforms, and brands.',
  solution:
    'Created a structured Webflow experience with clear product storytelling, audience and sales-focused sections, data-driven visuals, integration showcases, customer testimonials, and strong conversion paths for exploring Bear IQ and requesting a demo.',
  features: [
    'Bear IQ Event Analytics Platform',
    'Audience Acquisition & Demographic Insights',
    'Sales & Revenue Performance Analytics',
    'Event Portfolio Performance Tracking',
    'Technology Integration Showcase',
    'Customer Success Stories & Testimonials',
    'Data-Driven Event Intelligence',
    'Demo & Lead Generation Experience',
  ],
},
 {
  id: 'prisma-sentinel',
  title: 'Prisma Sentinel',
  category: ['All', 'Webflow', 'UI/UX'],
  categoryDisplay: 'Webflow · UI/UX',
  description:
    'A professional IT services website focused on helping organizations secure, modernize, and optimize their technology infrastructure through tailored business solutions.',
  longDescription:
    'Prisma Sentinel is a technology services website offering IT services, managed IT support, software resale and licensing, and human capital management solutions. The website presents these services through a clean, professional interface designed to communicate reliability, tailored execution, and business-focused technology solutions.',
  technologies: [
    'Webflow',
    'UI/UX',
    'Responsive Design',
    'HTML5',
    'CSS3',
    'JavaScript'
  ],
  image: PLACEHOLDER_IMAGES.prismaSentinel,
  featured: true,
  link: 'https://www.prismasentinel.com/',
  accentColor: '#38bdf8',
  metrics: [
    { label: 'Platform', value: 'Webflow' },
    { label: 'Services', value: 'IT Solutions' },
    { label: 'Experience', value: 'Responsive' },
  ],
  challenge:
    'Presenting a broad range of technology and business services in a clear and professional way while making it easy for organizations to understand the available solutions and their business value.',
  solution:
    'Created a structured Webflow experience with clear service categories, concise messaging, responsive layouts, and strong content hierarchy to communicate Prisma Sentinel’s IT, managed services, software licensing, and human capital management offerings.',
  features: [
    'IT Services & Infrastructure Solutions',
    'Managed IT Services',
    'Remote Monitoring & Endpoint Protection',
    'Software Resale & Licensing',
    'Human Capital Management Services',
    'Tailored Technology Solutions',
    'Responsive Web Experience',
    'Business-Focused Service Presentation',
  ],
},
  {
  id: 'realestate-sparkle',
  title: 'Sparkle Real Estate',
  category: ['All', 'Frontend', 'UI/UX'],
  categoryDisplay: 'Frontend · UI/UX',
  description:
    'A modern real estate technology showcase website presenting property portal development solutions, advanced search capabilities, IDX/MLS integrations, and lead generation features.',
  longDescription:
    'Sparkle Real Estate is a real estate technology-focused website created to showcase Sparkle Infotech’s property portal development capabilities. The website presents solutions ranging from WordPress and premium real estate themes to MERN, React, Angular, Node.js, PHP, Laravel, and Next.js-based platforms, along with IDX/MLS integration, map-based property search, agent management, CRM integration, and lead generation tools.',
  technologies: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'UI/UX',
    'Responsive Design'
  ],
  image: PLACEHOLDER_IMAGES.realestateSparkle,
  featured: true,
  link: 'https://realestate.sparkleinfotech.com/',
  accentColor: '#0284c7',
  metrics: [
    { label: 'Real Estate Solutions', value: '10+' },
    { label: 'Technology Stacks', value: '5+' },
    { label: 'Support', value: '24/7' },
  ],
  challenge:
    'Presenting a wide range of real estate technology solutions and development capabilities in a clear and visually engaging way while helping potential clients understand the available platforms, integrations, and property management features.',
  solution:
    'Created a structured and responsive real estate technology showcase with clear service categories, technology stack sections, property portal examples, feature highlights, client testimonials, and strong lead-generation calls to action.',
  features: [
    'Real Estate Website & Portal Solutions',
    'IDX / MLS Integration Showcase',
    'Advanced Property Search Features',
    'Map-Based Property Discovery',
    'Agent & Office Management Solutions',
    'Lead Generation Tools',
    'Real Estate CRM Integration',
    'Virtual Tour Support',
    'Property Market Analytics',
    'Responsive Real Estate UI',
  ],
},
{
  id: 'gross-gruppe',
  title: 'Gross Gruppe',
  category: ['All', 'WordPress', 'UI/UX'],
  categoryDisplay: 'WordPress · UI/UX',
  description:
    'A professional corporate website for a German mobility and logistics group, presenting its automotive, transport, towing, and business services through a structured and responsive WordPress experience.',
  longDescription:
    'GROSS Gruppe is a German family-owned company with a long history in mobility, transport, logistics, automotive services, and related business operations. The website provides a structured digital presence for presenting the company, its diverse services, locations, career opportunities, news, and contact information through a professional and responsive WordPress-based experience.',
  technologies: [
    'WordPress',
    'PHP',
    'MySQL',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Nginx',
    'Responsive Design'
  ],
  image: PLACEHOLDER_IMAGES.grossGruppe,
  featured: true,
  link: 'https://www.gross-gruppe.com/',
  accentColor: '#2563eb',
  metrics: [
    { label: 'Platform', value: 'WordPress' },
    { label: 'Industry', value: 'Mobility & Logistics' },
    { label: 'Market', value: 'Germany' },
  ],
  challenge:
    'Organizing a broad range of mobility, automotive, transport, and logistics services into a clear corporate experience while making company information, services, locations, careers, and contact options easy to discover.',
  solution:
    'Created a structured responsive WordPress experience with clearly organized service sections, corporate information, company history, location details, career content, news, and accessible contact pathways.',
  features: [
    'Mobility & Logistics Service Presentation',
    'Towing & Roadside Assistance',
    'Transport & Logistics Services',
    'Crane & Heavy Load Services',
    'Automotive Services',
    'Car Rental & Related Services',
    'Company Information & History',
    'Locations & Service Areas',
    'Career & Apprenticeship Information',
    'News & Contact Sections',
  ],
},
{
  id: 'clear-cyber',
  title: 'Clear Cyber Australia',
  category: ['All', 'WordPress', 'UI/UX'],
  categoryDisplay: 'WordPress · UI/UX',
  description:
    'A professional Australian cybersecurity consultancy website built on WordPress, focused on presenting security services, compliance solutions, and cybersecurity guidance through a clear and trustworthy digital experience.',
  longDescription:
    'Clear Cyber Australia is a WordPress-based cybersecurity consultancy website serving businesses across Australia. The website presents cybersecurity services, security assessments, compliance guidance, advisory solutions, and educational content through a professional and responsive interface. The experience combines structured service presentation with informative content and clear contact pathways for businesses seeking cybersecurity support.',
  technologies: [
    'WordPress',
    'PHP',
    'MySQL',
    'HTML5',
    'CSS3',
    'JavaScript',
    'jQuery',
    'Swiper',
    'Yoast SEO',
    'Responsive Design'
  ],
  image: PLACEHOLDER_IMAGES.clearCyber,
  featured: true,
  link: 'https://clearcyber.com.au/',
  accentColor: '#38bdf8',
  metrics: [
    { label: 'Platform', value: 'WordPress' },
    { label: 'Database', value: 'MySQL' },
    { label: 'Market', value: 'Australia' },
  ],
  challenge:
    'Communicating complex cybersecurity services and compliance requirements in a professional and approachable way while building trust with Australian businesses looking for reliable security expertise.',
  solution:
    'Developed a structured WordPress experience with clear service sections, strong content hierarchy, responsive layouts, cybersecurity-focused messaging, educational resources, and accessible contact pathways.',
  features: [
    'Cybersecurity Consulting Services',
    'Security Assessment & Advisory',
    'Cyber Risk & Compliance Guidance',
    'Penetration Testing Services',
    'Cybersecurity Insights & Articles',
    'Professional WordPress CMS',
    'Responsive Mobile-Friendly Experience',
    'Contact & Lead Generation',
    'WhatsApp Business Chat Integration',
    'SEO-Optimized Content Structure',
  ],
},
 {
  id: 'yumaworks',
  title: 'YumaWorks',
  category: ['All', 'WordPress', 'UI/UX'],
  categoryDisplay: 'WordPress · UI/UX',
  description:
    'A professional B2B technology website for YumaWorks, presenting networking solutions, products, services, and technical information through a structured and responsive WordPress experience.',
  longDescription:
    'YumaWorks is a networking technology company focused on solutions for managing and developing network equipment. The website presents the company, its networking products and solutions, technical information, projects, and business resources through a professional WordPress-based digital experience designed for technical and enterprise audiences.',
  technologies: [
    'WordPress',
    'PHP',
    'MySQL',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Responsive Design'
  ],
  image: PLACEHOLDER_IMAGES.yumaWorks,
  featured: true,
  link: 'https://www.yumaworks.com/',
  accentColor: '#21759B',
  metrics: [
    { label: 'Platform', value: 'WordPress' },
    { label: 'Industry', value: 'Networking Technology' },
    { label: 'Market', value: 'Enterprise' },
  ],
  challenge:
    'Presenting technical networking products and solutions in a clear and accessible way while maintaining a professional B2B experience for technical teams, network engineers, and enterprise customers.',
  solution:
    'Created a structured WordPress experience with clear product and solution sections, technical content organization, responsive layouts, and straightforward navigation to help visitors understand YumaWorks offerings and business capabilities.',
  features: [
    'Networking Products & Solutions',
    'YANG-Based Network Management Solutions',
    'Technical Product Information',
    'Enterprise-Focused Content Structure',
    'Project & Solution Presentation',
    'Professional WordPress CMS',
    'Responsive Web Experience',
    'Business Contact & Inquiry Sections',
  ],
},
  {
    id: 'abba-training',
    title: 'ABBA Training Academy',
    category: ['All', 'WordPress', 'UI/UX'],
    categoryDisplay: 'WordPress · UI/UX',
    description:
      'Professional skills training and workforce development academy powered by WordPress on WP Engine with dynamic course booking.',
    longDescription:
      'ABBA Training provides professional certifications, workplace safety qualifications, and executive development. The platform features an interactive calendar of upcoming classes, instant online registration, and syllabus downloads.',
    technologies: ['WordPress', 'WP Engine', 'Elementor', 'PHP', 'JavaScript', 'UI/UX'],
    image: PLACEHOLDER_IMAGES.abbaTraining,
    featured: true,
    link: 'https://abbatrainindev.wpenginepowered.com/',
    accentColor: '#2563eb',
    metrics: [
      { label: 'Course Enrollment', value: '+70%' },
      { label: 'WP Engine Uptime', value: '99.99%' },
      { label: 'Student Satisfaction', value: '4.9 ★' },
    ],
    challenge:
      'Managing multiple live trainer schedules, location-based classroom capacities, and corporate group bookings without booking conflicts.',
    solution:
      'Engineered custom WordPress course management with real-time seat availability indicators, dynamic Elementor course cards, and streamlined checkout.',
    features: [
      'Dynamic Course Directory with Category & Location Filters',
      'Interactive Live Schedule & Seat Availability Tracker',
      'Corporate Group Discount & Invoice Booking System',
      'High-Performance WP Engine Cloud Hosting Integration',
    ],
  },
  {
    id: 'notary-course',
    title: 'Notary Course Online',
    category: ['All', 'WordPress', 'UI/UX'],
    categoryDisplay: 'WordPress · UI/UX',
    description:
      'Certified state notary e-learning and compliance certification platform featuring interactive chapter quizzes and student authentication.',
    longDescription:
      'Notary Course Online is a state-approved educational portal providing mandatory notary public training, practice examinations, and instant digital certificate issuance upon completion.',
    technologies: ['WordPress', 'Elementor', 'E-Commerce', 'PHP', 'UI/UX'],
    image: PLACEHOLDER_IMAGES.notaryCourse,
    featured: true,
    link: 'https://notarycourseonline.com/',
    accentColor: '#2563eb',
    metrics: [
      { label: 'Pass Rate', value: '99.8%' },
      { label: 'Graduates Certified', value: '15,000+' },
      { label: 'Average Completion', value: '4 Hours' },
    ],
    challenge:
      'Fulfilling strict state educational compliance standards (mandatory timer controls, identity verification, graded chapter quizzes) within an accessible LMS.',
    solution:
      'Built a custom WordPress learning environment with timed module progression, randomized question banks, and automated certificate generation.',
    features: [
      'Self-Paced State-Approved Notary Video & Text Modules',
      'Automated Quiz Scoring & Instant PDF Certificate Issuance',
      'Frictionless Student Account Portal & Progress Resume',
      'Secure Payment Gateway & Supplies Add-On Checkout',
    ],
  },
  {
    id: 'roof-hero',
    title: 'Roof Hero Australia',
    category: ['All', 'Webflow', 'UI/UX'],
    categoryDisplay: 'Webflow · UI/UX',
    description:
      'Australia-wide roof restoration and solar maintenance service engine designed in Webflow with instant quotation workflows.',
    longDescription:
      'Roof Hero is an Australian roofing and solar restoration brand. Crafted in Webflow to deliver maximum local conversion with interactive quote calculators, before/after visual sliders, and customer reviews.',
    technologies: ['Webflow', 'CMS', 'Interactions 2.0', 'Figma', 'UI/UX'],
    image: PLACEHOLDER_IMAGES.roofHero,
    featured: true,
    link: 'https://www.roofhero.com.au/',
    accentColor: '#146EF5',
    metrics: [
      { label: 'Lead Generation', value: '+75%' },
      { label: 'Mobile Conversion', value: '8.4%' },
      { label: 'Roof Audits', value: '2,500+' },
    ],
    challenge:
      'High-intent home services require high trust and immediate pricing clarity to prevent visitors from bouncing to competitors.',
    solution:
      'Designed an interactive multi-step roof estimation widget, customer before-and-after interactive slider components, and localized service area pages in Webflow.',
    features: [
      'Interactive 60-Second Roof Restoration Cost Estimator',
      'Before & After Interactive Restoration Comparison Slider',
      'Suburb-Specific Dynamic Webflow CMS Landing Pages',
      'Direct Click-to-Call & Emergency Leak Dispatch Workflow',
    ],
  },
  {
    id: 'hyper-vets',
    title: 'Hyper Vets',
    category: ['All', 'WordPress', 'UI/UX'],
    categoryDisplay: 'WordPress · UI/UX',
    description:
      'Modern veterinary care and clinical diagnostic network platform built with WordPress, doctor scheduling, and compassionate healthcare UI.',
    longDescription:
      'Hyper Vets is a modern veterinary hospital and diagnostic network offering specialized surgical, dental, and routine wellness care for pets. Features doctor profiles, online appointment booking, and emergency clinic directions.',
    technologies: ['WordPress', 'Elementor', 'PHP', 'Responsive UI', 'UI/UX'],
    image: PLACEHOLDER_IMAGES.hyperVets,
    featured: true,
    link: 'https://hypervets.com/',
    accentColor: '#2563eb',
    metrics: [
      { label: 'Appointments Booked', value: '10,000+' },
      { label: 'Client Satisfaction', value: '4.9 ★' },
      { label: 'Emergency Response', value: '24/7' },
    ],
    challenge:
      'Pet owners seeking emergency or general care need urgent, reassuring access to clinic hours, services, and online booking without friction.',
    solution:
      'Engineered a warm, trustworthy visual design with prominent 24/7 emergency hotline callouts, simple category-based service guides, and Elementor appointment booking.',
    features: [
      'One-Click Online Veterinary Appointment Scheduling',
      'Veterinary Specialty Guide (Surgery, Oncology, Wellness)',
      '24/7 Emergency Triage Banner & Direct Directions Map',
      'Pet Parent Educational Health & Preventive Care Blog',
    ],
  },
  {
    id: 'birdsong-retreat',
    title: 'Birdsong Beach Retreat',
    category: ['All', 'WordPress', 'UI/UX'],
    categoryDisplay: 'WordPress · UI/UX',
    description:
      'Luxury Australian coastal vacation haven website developed with custom WordPress styling, reservation inquiries, and photo gallery.',
    longDescription:
      'Birdsong Beach Retreat is an exclusive private beach sanctuary on the Australian coast. Designed to highlight the breathtaking natural landscape, architectural beach house amenities, and luxury guest packages.',
    technologies: ['WordPress', 'Elementor', 'SCSS', 'JavaScript', 'UI/UX'],
    image: PLACEHOLDER_IMAGES.birdsong,
    featured: true,
    link: 'https://sonyawebtest.birdsongbeachretreat.com.au/',
    accentColor: '#0284c7',
    metrics: [
      { label: 'Direct Bookings', value: '+50%' },
      { label: 'Photo Engagement', value: '3m 20s' },
      { label: 'Guest Rating', value: '5.0 ★' },
    ],
    challenge:
      'Transporting prospective guests into the serenity of the retreat through digital media while enabling seamless direct booking inquiries to bypass OTA commission fees.',
    solution:
      'Created an immersive full-bleed imagery layout, smooth scroll transitions, an interactive floorplan and amenity tour, and an availability calendar.',
    features: [
      'High-Resolution Panoramic Coastal Gallery & Amenity Explorer',
      'Direct Reservation Request & Dates Availability Calendar',
      'Local Area Guide (Beaches, Coastal Trails, Fine Dining)',
      'Custom Responsive Elementor Theme with Sub-Second Loading',
    ],
  },
  {
    id: 'solarix',
    title: 'Solarix Clean Energy',
    category: ['All', 'Frontend', 'UI/UX'],
    categoryDisplay: 'Frontend (HTML/CSS/JS) · UI/UX',
    description:
      'Clean solar energy generation and grid telemetry interface engineered with vanilla HTML5, CSS3, JavaScript, and real-time calculations.',
    longDescription:
      'Solarix is a clean energy and solar telemetry web application built with vanilla HTML5, CSS3, and JavaScript. Features interactive solar ROI sliders, dynamic energy yield curves, and responsive hardware spec cards.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Responsive UI'],
    image: PLACEHOLDER_IMAGES.solarix,
    featured: true,
    link: 'https://projects.sparkleinfotech.com/solarix/',
    accentColor: '#2563eb',
    metrics: [
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'Zero Dependencies', value: 'Pure JS' },
      { label: 'Calculation Speed', value: 'Real-Time' },
    ],
    challenge:
      'Demonstrating high-performance frontend engineering and interactive charting without relying on heavy external frameworks or build steps.',
    solution:
      'Engineered lightweight vanilla JavaScript DOM manipulation, SVG vector charts, and CSS custom property theming for an ultra-fast, accessible experience.',
    features: [
      'Pure Vanilla JavaScript Telemetry & ROI Calculator',
      'Custom SVG Dynamic Energy Curve Visualizer',
      'Ultra-Lightweight Zero-Dependency Bundle (< 50KB)',
      'Full Cross-Browser & Mobile Touchscreen Compatibility',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand requirements, goals and target users.',
    details: [
      'Stakeholder alignment & project scoping',
      'Target user persona identification',
      'Technical constraint & platform definition',
      'Deliverable roadmap & milestone setting',
    ],
    icon: 'Compass',
  },
  {
    number: '02',
    title: 'Research',
    description: 'Analyze users, competitors and visual references.',
    details: [
      'Competitor benchmarking & UX audit',
      'Information architecture & user journey mapping',
      'Moodboarding & design archetype selection',
      'Content structure & wireframe blueprints',
    ],
    icon: 'Search',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create wireframes, layouts and high-fidelity UI.',
    details: [
      'Component-driven design systems in Figma',
      'High-fidelity interactive UI prototyping',
      'Responsive multi-device layout refinement',
      'Micro-interaction & typography choreography',
    ],
    icon: 'Layers',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Convert designs into responsive functional websites.',
    details: [
      'Pixel-perfect frontend / WordPress / Webflow code',
      'Performance, SEO & accessibility optimization',
      'Interactive motion integration with GSAP / Framer',
      'Clean modular architecture & API connectivity',
    ],
    icon: 'Code',
  },
  {
    number: '05',
    title: 'Refine',
    description: 'Test, optimize and polish every detail.',
    details: [
      'Cross-browser & cross-device QA testing',
      'Lighthouse speed & Core Web Vitals audit',
      'Client review & feedback implementation',
      'Final deployment, analytics & documentation handoff',
    ],
    icon: 'CheckCircle2',
  },
];

export const TOOLS_DATA: ToolItem[] = [
  { name: 'Figma', category: 'Design', icon: 'figma', description: 'UI/UX Design, Auto-Layout & Design Systems', badge: 'Expert' },
  { name: 'Photoshop', category: 'Design', icon: 'photoshop', description: 'Visual Asset Editing & Mockup Composition', badge: 'Advanced' },
  { name: 'Canva', category: 'Design', icon: 'canva', description: 'Rapid Social Media & Marketing Visuals', badge: 'Proficient' },
  { name: 'HTML5', category: 'Frontend', icon: 'html', description: 'Semantic, Accessible Markup Structure', badge: 'Expert' },
  { name: 'CSS3', category: 'Frontend', icon: 'css', description: 'Modern CSS, Grid, Flexbox & Custom Props', badge: 'Expert' },
  { name: 'JavaScript', category: 'Frontend', icon: 'javascript', description: 'ES6+, DOM Manipulation & Modern Logic', badge: 'Expert' },
  { name: 'React.js', category: 'Frontend', icon: 'react', description: 'Component Architecture, Hooks & State Mgmt', badge: 'Expert' },
  { name: 'TypeScript', category: 'Frontend', icon: 'typescript', description: 'Type-Safe Web Applications & Scalability', badge: 'Advanced' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwind', description: 'Utility-First Scalable Responsive Styling', badge: 'Expert' },
  { name: 'SCSS', category: 'Frontend', icon: 'scss', description: 'Pre-processed Modular Stylesheets', badge: 'Advanced' },
  { name: 'WordPress', category: 'CMS & No-Code', icon: 'wordpress', description: 'Custom Theme Development & CMS Setup', badge: 'Expert' },
  { name: 'Elementor', category: 'CMS & No-Code', icon: 'elementor', description: 'Visual Page Building & Theme Customization', badge: 'Expert' },
  { name: 'Webflow', category: 'CMS & No-Code', icon: 'webflow', description: 'Visual No-Code Platforms & CMS Hosting', badge: 'Expert' },
  { name: 'UiChemy', category: 'CMS & No-Code', icon: 'uichemy', description: 'Figma to Elementor & Webflow Automation', badge: 'Advanced' },
  { name: 'GSAP', category: 'Animation & Dev', icon: 'gsap', description: 'High-Performance Timeline & Scroll Motion', badge: 'Advanced' },
  { name: 'Framer Motion', category: 'Animation & Dev', icon: 'framer', description: 'React Layout Animations & Micro-Interactions', badge: 'Expert' },
  { name: 'GitHub', category: 'Animation & Dev', icon: 'github', description: 'Version Control, CI/CD & Team Collaboration', badge: 'Advanced' },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Engineering',
  field: 'Information Technology',
  institution: 'Gujarat Technological University (GTU)',
  period: 'Graduated with Distinction',
  location: 'Gujarat, India',
  grade: 'First Class with Distinction (Honors)',
  highlights: [
    'Comprehensive foundation in Human-Computer Interaction, Web Architectures, and Algorithm Design',
    'Specialized research in Responsive Web Usability and Modern Frontend Performance Optimization',
    'Led student developer initiatives organizing design hackathons and UI prototyping workshops',
  ],
  skillsGained: [
    'Data Structures & Algorithms',
    'Human-Computer Interaction (HCI)',
    'Full Stack Web Development',
    'Object-Oriented Software Engineering',
    'Database Systems & Web APIs',
    'Responsive UI Design Principles',
  ],
};
