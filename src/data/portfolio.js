export const portfolio = {
  personal: {
    name: 'Akshita Chaudhary',
    email: 'meakshitachaudhary@gmail.com',
    phone: '+91 9258092280',
    displayPhone: false,
    linkedin: 'linkedin.com/in/akshita-chaudhary29',
    github: 'github.com/Aksh2908',
    location: 'Uttarakhand',
    headline: 'Software Engineer',
    tagline: 'Computer Science & Engineering student interested in software development, AI/ML, and building practical systems.'
  },

  education: {
    primary: {
      degree: 'B.Tech, Computer Science & Engineering',
      institution: 'Graphic Era Hill University, Uttarakhand',
      dates: 'Aug 2023 - Jul 2027 (Expected)',
      cgpa: '9.42 / 10.0',
      coursework: ['AI/ML', 'Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks']
    },
    secondary: {
      degree: 'Class 12th',
      institution: 'Riverdale International School, Bazpur, Uttarakhand',
      dates: 'Apr 2021 - Apr 2022',
      percentage: '96%'
    }
  },

  experience: {
    role: 'Management Intern',
    organization: 'The Rogers Group',
    dates: '2023 - Present',
    responsibilities: [
      'Coordinated 10+ university events',
      'Streamlined vendor operations',
      'Boosted engagement'
    ]
  },

  skills: {
    languages: ['Python', 'C++', 'Java', 'C'],
    web: ['HTML', 'CSS', 'React.js', 'Tailwind'],
    backend: ['Node.js', 'Express', 'Flask', 'Solidity'],
    aiMl: ['TensorFlow', 'Keras', 'OpenCV', 'NLTK'],
    databases: ['PostgreSQL', 'MongoDB', 'SQL'],
    methodologies: ['Agile Development', 'REST APIs', 'SDLC']
  },

  projects: [
    {
      id: 1,
      number: '01',
      title: 'Cyber Crime Analysis System',
      description: 'Aggregated 5+ years of cybercrime data and performed exploratory data analysis using Pandas, SQL, and Matplotlib.',
      problem: 'Need to analyze and visualize cybercrime patterns to identify high-risk regions and trends.',
      approach: 'Trained Logistic Regression, Random Forest, and XGBoost models for prediction. Designed dashboard to track crime patterns.',
      technologies: ['Pandas', 'SQL', 'Matplotlib', 'Logistic Regression', 'Random Forest', 'XGBoost'],
      metrics: [
        { label: 'Model Accuracy', value: '87%' },
        { label: 'Dashboard Visualizations', value: '10+' },
        { label: 'Years of Data', value: '5+' }
      ],
      results: 'Designed dashboard to track crime patterns and high-risk regions.',
      github: 'github.com/NJ2612/Cyber_Crime_Analysis_System',
      liveDemo: null,
      screenshot: '/data/cyberanalysis.jpg',
      dates: 'Nov 2025 - Present',
      visualType: 'data'
    },
    {
      id: 2,
      number: '02',
      title: 'Smart Task Manager',
      description: 'Built a real-time system monitor using FastAPI, psutil, and React.js with approximately 1-second latency.',
      problem: 'Need for real-time monitoring of system resources with anomaly detection and alerting.',
      approach: 'Implemented 5 ML components including IsolationForest anomaly detection and CPU forecasting. Rendered CPU scheduling simulations via React-based dashboard.',
      technologies: ['FastAPI', 'psutil', 'React.js', 'IsolationForest'],
      metrics: [
        { label: 'Anomaly Detection Precision', value: '96%' },
        { label: 'System Latency', value: '~1s' }
      ],
      results: 'Rendered CPU scheduling simulations and automated alerts via React-based dashboard.',
      github: 'github.com/Aksh2908/smart_task_manager',
      liveDemo: null,
      screenshot: '/data/taskmanagement.webp',
      dates: 'Sep 2025 - Oct 2025',
      visualType: 'system'
    },
    {
      id: 3,
      number: '03',
      title: 'Votix',
      description: 'Designed a secure voting platform using Solidity and Web3 with smart contract validation.',
      problem: 'Need for transparent, secure, and tamper-proof voting system.',
      approach: 'Implemented smart contracts that processed test votes without conflicts. Developed user-friendly interface for seamless voter participation.',
      technologies: ['Solidity', 'Web3'],
      metrics: [
        { label: 'Test Votes Processed', value: '200+' }
      ],
      results: 'Developed and deployed a user-friendly interface for seamless voter participation.',
      github: 'github.com/Aksh2908/MyVotix',
      liveDemo: null,
      screenshot: '/data/blockchainvoting system.webp',
      dates: 'Apr 2025 - May 2025',
      visualType: 'network'
    },
    {
      id: 4,
      number: '04',
      title: 'AI-Driven Institutional Inspection System',
      description: 'Engineered an AI-based inspection system using TensorFlow, OpenCV, and Flask.',
      problem: 'Manual institutional inspection is time-consuming and error-prone.',
      approach: 'Applied image recognition and NLP to evaluate building conditions and estimate lifespan. Automated document processing for institutions.',
      technologies: ['TensorFlow', 'OpenCV', 'Flask', 'NLP'],
      metrics: [
        { label: 'Verification Time Reduction', value: '65%' },
        { label: 'Turnaround Time Reduction', value: '80%' },
        { label: 'Documents per Institution', value: '100+' }
      ],
      results: 'Smart India Hackathon finalist.',
      github: 'github.com/Aksh2908/U.I.W.A',
      liveDemo: null,
      screenshot: '/data/institutioninspectionsystem.jpg',
      dates: 'Nov 2024 - Dec 2024',
      visualType: 'document'
    }
  ],

  achievements: [
    {
      title: 'Smart India Hackathon 2024',
      detail: 'Finalist - Ranked in the top 2.4% nationwide',
      year: '2024'
    },
    {
      title: 'Google Girl Hackathon 2025',
      detail: 'Qualified coding rounds - among the top 2% performers',
      year: '2025'
    },
    {
      title: 'Flipkart Grid 7.0',
      detail: 'Qualified coding rounds - among the top 2% performers',
      year: '2025'
    },
    {
      title: 'Amazon HackOn 5',
      detail: 'Qualified coding rounds - among the top 2% performers',
      year: '2025'
    },
    {
      title: 'Flipkart Grid 6.0 Tech Quiz',
      detail: 'Cleared - outperformed 480,000+ participants',
      year: '2025'
    }
  ],



  assets: {
    resume: '/data/AkshitaChaudhary_Resume.pdf',
    favicon: '/data/favicon.png'
  },

  navigation: [
    { label: 'Work', href: '#work' },
    { label: 'Tools', href: '#tools' },
    { label: 'Milestones', href: '#milestones' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ]
};
