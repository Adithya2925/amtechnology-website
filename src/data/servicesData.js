export const servicesData = [
  {
    id: 'ai-voice-agents',
    title: 'AI Voice Agents',
    tagline: 'Human-like conversational intelligence for telephony',
    badge: 'Popular & High Demand',
    icon: 'PhoneCall',
    description: 'Human-like AI voice agents that handle customer calls, generate leads, answer queries, schedule appointments, and support businesses 24/7 with zero human fatigue.',
    features: [
      'Inbound and outbound calling',
      'Natural AI conversations with emotional cadence',
      'Multilingual voice support (50+ languages)',
      'Direct appointment booking & calendar sync',
      'Instant lead qualification & scoring',
      'Customer support automation & CRM logging'
    ],
    tech: ['WebRTC', 'Whisper ASR', 'ElevenLabs', 'FastAPI', 'Twilio/SIP'],
    metrics: { latency: '<250ms', availability: '24/7', accuracy: '99.4%' },
    color: 'from-blue-500 to-indigo-600',
    borderGlow: 'rgba(71, 123, 255, 0.4)'
  },
  {
    id: 'ai-agents-automation',
    title: 'AI Agents & Automation',
    tagline: 'Autonomous workflows powering mission-critical ops',
    badge: 'Core Competency',
    icon: 'Bot',
    description: 'Intelligent AI agents that automate repetitive tasks, understand unstructured customer requirements, and streamline business operations across your entire software ecosystem.',
    features: [
      'AI customer support agents with omni-channel memory',
      'AI lead generation agents with automated research',
      'AI digital receptionist for front-desk operations',
      'AI sales assistants with objection handling',
      'End-to-end workflow automation (n8n & custom scripts)',
      'Business process automation (BPA) with compliance'
    ],
    tech: ['LangChain', 'OpenAI GPT-4o', 'n8n', 'Python', 'Vector DBs'],
    metrics: { timeSaved: '75%', errorReduction: '99%', scale: 'Unlimited' },
    color: 'from-purple-500 to-pink-600',
    borderGlow: 'rgba(139, 92, 246, 0.4)'
  },
  {
    id: 'website-development',
    title: 'Website Development',
    tagline: 'Conversion-driven digital flagships & web applications',
    badge: 'High Performance',
    icon: 'Globe',
    description: 'Modern, responsive, ultra-high-performance websites and web applications that build your brand credibility and turn visitors into high-value paying customers.',
    features: [
      'High-converting business & corporate websites',
      'Modern e-commerce platforms with global payments',
      'Lead-generating interactive landing pages',
      'Futuristic portfolio websites with 3D & animations',
      'Custom web applications (SPA / SSR / PWA)',
      'Technical SEO-friendly development & Web Vitals optimization'
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    metrics: { speedScore: '98+', responsive: '100%', seoReady: 'Yes' },
    color: 'from-cyan-500 to-blue-600',
    borderGlow: 'rgba(0, 240, 255, 0.4)'
  },
  {
    id: 'software-development',
    title: 'Software Development',
    tagline: 'Tailored enterprise platforms & robust architecture',
    badge: 'Enterprise Grade',
    icon: 'Code2',
    description: 'Custom software solutions architected from the ground up to solve complex business bottlenecks, automate manual data entry, and improve organizational efficiency.',
    features: [
      'Custom CRM development with AI intelligence',
      'Tailored ERP solutions for resource planning',
      'Scalable multi-tenant SaaS applications',
      'Internal management portals & admin dashboards',
      'Scalable web applications with microservices',
      'Secure API integrations with legacy & third-party software'
    ],
    tech: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    metrics: { architecture: 'Microservices', security: 'Bank-Grade', uptime: '99.9%' },
    color: 'from-emerald-500 to-teal-600',
    borderGlow: 'rgba(16, 185, 129, 0.4)'
  },
  {
    id: 'ai-business-solutions',
    title: 'AI-Powered Business Solutions',
    tagline: 'Deep cognitive transformation for modern enterprises',
    badge: 'Strategic Innovation',
    icon: 'Cpu',
    description: 'Seamlessly integrate artificial intelligence into your business workflow to improve productivity, deliver personalized customer experiences, and unlock actionable predictive insights.',
    features: [
      'Custom trained enterprise AI chatbots & knowledge bases',
      'Intelligent digital assistants for employee onboarding',
      'AI-powered executive dashboards with predictive analytics',
      'Automated document processing & OCR parsing',
      'Business intelligence & automated reporting engines',
      'Private LLM deployments with proprietary data privacy'
    ],
    tech: ['OpenAI', 'Anthropic', 'RAG Architecture', 'FastAPI', 'PostgreSQL pgvector'],
    metrics: { dataPrivacy: '100% Private', insightsSpeed: 'Real-time', roi: '3.8x' },
    color: 'from-amber-500 to-orange-600',
    borderGlow: 'rgba(245, 158, 11, 0.4)'
  }
];
