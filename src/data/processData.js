export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Understand business goals and requirements',
    description: 'We initiate a deep-dive technical consultation to dissect your current operational bottlenecks, workflows, data sources, and business objectives. We outline measurable ROI targets and feasibility parameters.',
    activities: [
      'Operational workflow & bottleneck audit',
      'Data mapping and API feasibility study',
      'Target metric & KPI definition (handling time, cost per lead, throughput)',
      'Security, HIPAA/GDPR & compliance prerequisites'
    ],
    deliverables: 'Technical Discovery Matrix & Project Scope Blueprint',
    duration: 'Week 1',
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Strategize',
    tagline: 'Design the right technology solution',
    description: 'Our system architects blueprint the optimal system architecture—selecting the right LLMs, voice latency protocols, database schemas, and microservice topologies before writing a line of code.',
    activities: [
      'AI prompt engineering & conversation tree design',
      'Microservice & WebRTC/SIP telephony network topology',
      'Interactive UI/UX wireframes and client review',
      'Security encryption & secret management design'
    ],
    deliverables: 'System Architecture Specification & Interactive Wireframes',
    duration: 'Week 1–2',
    icon: 'Compass'
  },
  {
    step: '03',
    title: 'Develop',
    tagline: 'Build, integrate, and test the solution',
    description: 'We engineer your custom solution using modern frameworks and CI/CD best practices. We train custom agent prompts, configure API connectors, and conduct rigorous automated stress-testing.',
    activities: [
      'Agile sprints with weekly client demonstration checkpoints',
      'Voice cadence tuning & latency optimization (<250ms)',
      'CRM, ERP, and database integration',
      'Synthetic load testing (1,000+ simultaneous test calls/queries)'
    ],
    deliverables: 'Working Staging Deployment & Test Verification Reports',
    duration: 'Weeks 2–4',
    icon: 'Code'
  },
  {
    step: '04',
    title: 'Launch',
    tagline: 'Deploy the solution and ensure everything works',
    description: 'We roll out your solution into production with zero-downtime deployment pipelines, live telemetric monitoring, fallback protocols, and team onboarding training sessions.',
    activities: [
      'Zero-downtime production deployment on cloud clusters',
      'Live call monitoring and agent transcript auditing',
      'Human-in-the-loop fallback protocol validation',
      'Staff onboarding and administrative dashboard walkthrough'
    ],
    deliverables: 'Live Production System & Admin Credentials',
    duration: 'Week 4–5',
    icon: 'Rocket'
  },
  {
    step: '05',
    title: 'Optimize',
    tagline: 'Continuously improve and scale',
    description: 'Technology is never static. We continuously analyze real conversation telemetry, fine-tune voice models based on edge cases, and scale your infrastructure as your business expands.',
    activities: [
      'Automated weekly intent & sentiment accuracy audits',
      'Fine-tuning based on actual caller objections & edge cases',
      'Auto-scaling configuration for traffic spikes',
      'Dedicated SLA support and proactive feature additions'
    ],
    deliverables: 'Monthly Performance Analytics & Continuous Optimization',
    duration: 'Ongoing',
    icon: 'TrendingUp'
  }
];
