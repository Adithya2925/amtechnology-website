export const portfolioData = [
  {
    id: 'ai-voice-platform',
    title: 'Enterprise AI Voice Agent Platform',
    category: 'AI Telephony & Voice',
    label: 'Architecture Concept Preview',
    tagline: 'Ultra-low latency conversational telephony engine handling 10,000+ simultaneous inbound/outbound calls',
    summary: 'A complete end-to-end AI telephony infrastructure combining WebSockets, custom speech recognition, LLM reasoning, and natural voice synthesis with seamless CRM integration.',
    technologies: ['FastAPI', 'WebRTC', 'Whisper ASR', 'ElevenLabs', 'PostgreSQL', 'Docker'],
    highlights: [
      'Sub-250ms voice turnaround time for natural human cadence',
      'Interactive visual dashboard with real-time audio waveform monitoring',
      'Dynamic call transfer protocol to human escalation desks',
      'Automated transcript analysis and sentiment tagging'
    ],
    architecture: 'Twilio / SIP Trunk → WebRTC Gateway → Whisper Streaming ASR → LLM Agent Orchestrator → TTS Engine → Audio Stream Buffer',
    metrics: {
      concurrency: '10,000+ Calls',
      latency: '<240ms',
      accuracy: '99.4%'
    },
    mockupType: 'telephony-dashboard'
  },
  {
    id: 'ai-lead-generation-system',
    title: 'Autonomous AI Lead Generation System',
    category: 'AI Automation & Sales',
    label: 'Interactive System Prototype',
    tagline: 'Self-driving outbound outreach & multi-channel qualification pipeline with automated BANT scoring',
    summary: 'An autonomous pipeline that extracts prospect intelligence, personalizes multi-touch outbound voice and email sequences, qualifies interest, and schedules meetings directly onto account executive calendars.',
    technologies: ['Python', 'n8n', 'OpenAI GPT-4o', 'HubSpot API', 'FastAPI', 'PostgreSQL'],
    highlights: [
      'Autonomous B2B prospect research and enrichment',
      'Dynamic voice script personalization based on target industry',
      'Automated objection handling and follow-up cadence',
      'Direct two-way CRM sync with deal stage progression'
    ],
    architecture: 'Lead Source Ingestion → Data Enrichment Pipeline → Multi-Agent Research → Outbound Dialing Engine → BANT Classifier → CRM Stage Updater',
    metrics: {
      pipelineSpeed: '12x Faster',
      qualificationScore: '94/100',
      crmSync: 'Real-time'
    },
    mockupType: 'lead-pipeline'
  },
  {
    id: 'ai-powered-crm',
    title: 'AI-Powered CRM Suite',
    category: 'Custom Software & AI',
    label: 'Enterprise Concept Preview',
    tagline: 'Next-generation customer relationship management platform with predictive deal forecasting and automated intelligence',
    summary: 'A unified CRM platform built specifically for high-velocity sales and service teams. Features embedded AI co-pilots that summarize meetings, predict closing probabilities, and automate client follow-ups.',
    technologies: ['React', 'Next.js', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
    highlights: [
      'Embedded voice dialer with automated call transcription',
      'Predictive deal probability scoring using historical win-loss patterns',
      'Automated task creation from client voice notes and emails',
      'Customizable Kanban pipelines and executive KPI analytics'
    ],
    architecture: 'Frontend SPA → API Gateway → CRM Microservices → Vector Search Engine → Event Queue → PostgreSQL / Redis Cache',
    metrics: {
      salesCycle: '-28% Shorter',
      dataEntry: '90% Automated',
      pipelineVisibility: '100%'
    },
    mockupType: 'crm-dashboard'
  },
  {
    id: 'hospital-booking-system',
    title: 'Hospital Appointment Booking System',
    category: 'Healthcare AI Solutions',
    label: 'Healthcare Solution Architecture',
    tagline: 'Automated clinic receptionist and patient scheduling system with EHR calendar synchronization',
    summary: 'An empathetic medical voice and web booking solution designed to eliminate hospital phone hold times, triage appointment requests by specialty, and dramatically reduce patient no-shows with automated SMS reminders.',
    technologies: ['FastAPI', 'WebRTC', 'React', 'PostgreSQL', 'HIPAA compliant encryption', 'Twilio'],
    highlights: [
      'Multi-doctor schedule conflict resolution engine',
      'Automated patient triage and doctor specialty matching',
      'HIPAA-ready secure transmission and data protection',
      'Automated appointment reminders, preparation instructions and cancellation handling'
    ],
    architecture: 'Inbound Patient Call/Web → Specialty Triage Module → EHR Schedule Integration → Booking Confirmation Engine → Multi-channel SMS/Email Dispatcher',
    metrics: {
      holdTimes: 'Zero Wait',
      noShowRate: '-40%',
      schedulingEfficiency: '99.8%'
    },
    mockupType: 'hospital-scheduler'
  },
  {
    id: 'business-website-development',
    title: 'Conversion-Engineered Business Websites',
    category: 'Web Development',
    label: 'Production-Grade Showcase',
    tagline: 'Ultra-fast, responsive digital flagships engineered for international technology and service firms',
    summary: 'Bespoke corporate web platforms crafted with fluid 3D graphics, high-converting layouts, clean typography, sub-second load times, and frictionless lead capture forms that boost visitor inquiries.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Cloudflare Edge'],
    highlights: [
      'Lighthouse 98+ performance score across mobile and desktop',
      'Fluid micro-interactions and interactive component state',
      'Built-in conversion funnels with UTM analytics tracking',
      'Full cross-browser compatibility and accessible WCAG 2.1 design'
    ],
    architecture: 'Edge CDN → Modern Component Architecture → Responsive CSS System → Interactive Client State → Serverless Form Handling',
    metrics: {
      lighthouseSpeed: '99/100',
      conversionLift: '+45%',
      mobileOptimized: '100%'
    },
    mockupType: 'web-showcase'
  },
  {
    id: 'custom-software-applications',
    title: 'Enterprise Custom Management Applications',
    category: 'Custom Software Development',
    label: 'Enterprise Architecture Model',
    tagline: 'Mission-critical internal ERP, resource planning, and automated workflow management portals',
    summary: 'Tailor-made cloud software platforms designed to replace fragmented spreadsheets and legacy tools. Features role-based access control, automated invoice generation, inventory tracking, and complex business logic.',
    technologies: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    highlights: [
      'Granular Role-Based Access Control (RBAC) and audit trails',
      'Custom data pipelines connecting disparate enterprise databases',
      'Real-time inventory and resource tracking with automated triggers',
      'High-throughput bulk document generation and PDF export'
    ],
    architecture: 'Microservices Mesh → Secure Auth Guard → Core Business Rules Engine → Distributed Database Cluster → Background Task Queue',
    metrics: {
      operationalLag: '-60%',
      securityCompliance: 'Enterprise Grade',
      scalability: '10x Ready'
    },
    mockupType: 'custom-software'
  }
];
