export const aiAgentsData = [
  {
    id: 'ai-receptionist',
    name: 'Ava - AI Voice Receptionist',
    role: 'Autonomous Inbound Telephony Operator (+91 80642 69500)',
    badge: 'Live 24/7 Hotline Active',
    avatar: 'Headphones',
    color: '#477BFF',
    accentClass: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    description: 'Our live production AI receptionist answers inbound phone calls 24/7 on +91 80642 69500 with sub-240ms latency. Ava greets callers, answers questions about AM Technologies services, qualifies business requirements, and books meetings into our calendar.',
    capabilities: [
      'Live dialable anytime on +91 80642 69500 with zero hold time',
      'Ultra-low <240ms latency with natural human-like voice conversation',
      'Provides accurate details on AI voice agents, web development & automation',
      'Schedules consultations and notifies team at adithyamarichamy@gmail.com'
    ],
    callState: {
      type: 'INBOUND PHONE CALL',
      caller: 'Prospective Client (Direct Caller)',
      phone: 'Dialed Hotline: +91 80642 69500',
      status: 'Live Call Active • Connected',
      duration: '01:32',
      sentiment: 'Engaged & Meeting Scheduled'
    },
    conversation: [
      {
        speaker: 'agent',
        text: 'Thank you for calling AM Technologies! My name is Ava, your autonomous AI receptionist. How can I assist you with our AI voice agents or digital engineering solutions today?',
        time: '10:02 AM'
      },
      {
        speaker: 'user',
        text: 'Hi Ava! I dialed +91 80642 69500 to test your receptionist bot. We need a voice agent for our business to handle inbound client inquiries and bookings.',
        time: '10:02 AM'
      },
      {
        speaker: 'agent',
        text: 'You are speaking directly with our live voice AI pipeline right now! At AM Technologies, we engineer custom AI receptionists that handle unlimited concurrent callers, integrate with your CRM, and book appointments automatically. What kind of daily call volume are you aiming to automate?',
        time: '10:03 AM'
      },
      {
        speaker: 'user',
        text: 'We receive about 60 to 80 calls every day and our front desk is struggling to keep up.',
        time: '10:03 AM'
      },
      {
        speaker: 'agent',
        text: 'Our AI receptionist handles 100+ simultaneous calls with zero queuing. I can schedule a 30-minute technical architecture session with our founder Adithya for tomorrow. Would 3:00 PM IST or 5:00 PM IST suit your schedule?',
        time: '10:03 AM'
      },
      {
        speaker: 'user',
        text: '3:00 PM IST tomorrow works perfectly.',
        time: '10:04 AM'
      },
      {
        speaker: 'agent',
        text: 'Confirmed for tomorrow at 3:00 PM IST! I have logged the details and dispatched an email to adithyamarichamy@gmail.com. You can also chat directly with our team on WhatsApp at +91 95007 13610. We look forward to engineering your AI voice agent!',
        time: '10:04 AM'
      }
    ],
    liveMetrics: {
      latency: '<240ms',
      intentScore: '99.4%',
      concurrency: 'Unlimited'
    }
  },
  {
    id: 'ai-lead-generation',
    name: 'AI Lead Generation Agent',
    role: 'Autonomous Outbound & Lead Qualification',
    badge: 'Revenue Accelerator',
    avatar: 'Target',
    color: '#8B5CF6',
    accentClass: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    description: 'Proactively identifies prospective enterprise buyers, dials verified contacts, holds high-level consultative conversations, and extracts budget, authority, need, and timeline (BANT).',
    capabilities: [
      'Makes compliant outbound calls at scale without agent fatigue',
      'Accurately identifies decision-makers and key stakeholders',
      'Qualifies BANT criteria in real time with dynamic objection handling',
      'Syncs structured lead scores & notes straight into HubSpot, Salesforce or Custom CRM'
    ],
    callState: {
      type: 'OUTBOUND CAMPAIGN',
      caller: 'Marcus Sterling (VP Growth, FinScale)',
      phone: '+1 (212) 555-0199',
      status: 'Call in Progress • BANT Identified',
      duration: '02:45',
      sentiment: 'High Buying Intent'
    },
    conversation: [
      {
        speaker: 'agent',
        text: 'Hello Marcus, this is Jordan calling from AM Technologies. We saw FinScale expanded its B2B operations recently—congratulations! We noticed your support volume might have doubled. Are you evaluating AI voice automation to scale handle time?',
        time: '02:15 PM'
      },
      {
        speaker: 'user',
        text: 'Hey Jordan. We actually are—our tier-1 support tickets are overwhelming our 12 reps. But our budget is capped around $35k this quarter.',
        time: '02:15 PM'
      },
      {
        speaker: 'agent',
        text: 'Understood Marcus. Our enterprise tier-1 automation package starts well within that bracket and typically eliminates 65% of repetitive tickets within 3 weeks. Would an interactive proof-of-concept be valuable for your leadership team this week?',
        time: '02:16 PM'
      },
      {
        speaker: 'user',
        text: 'Yes, if you can show me live telemetry, I can bring our head of engineering on Wednesday.',
        time: '02:16 PM'
      },
      {
        speaker: 'agent',
        text: 'Done. Meeting reserved for Wednesday at 11:00 AM. I have marked this as a Qualified Deal ($35k budget) in our sync queue. Expect the invitation in your inbox shortly.',
        time: '02:17 PM'
      }
    ],
    liveMetrics: {
      qualificationRate: '42.8%',
      bantAccuracy: '98.5%',
      avgCallDuration: '2m 14s'
    }
  },
  {
    id: 'ai-hospital-appointment',
    name: 'AI Hospital Appointment Agent',
    role: 'Clinical Receptionist & Care Coordinator',
    badge: 'HIPAA & Healthcare Ready',
    avatar: 'CalendarCheck',
    color: '#00F0FF',
    accentClass: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    description: 'Empathetic medical voice assistant designed for clinics and hospitals to handle appointment bookings, cancellations, doctor availability checks, and prep instructions.',
    capabilities: [
      'Answers clinical and patient inquiries with zero waiting time',
      'Real-time EHR/EMR calendar slot verification across multiple specialists',
      'Handles frictionless booking, rescheduling, and doctor matching',
      'Sends automated reminders, dietary instructions, and SMS confirmations'
    ],
    callState: {
      type: 'PATIENT PORTAL TELEPHONY',
      caller: 'Eleanor Brooks (Patient ID #48291)',
      phone: '+1 (312) 420-9912',
      status: 'Active • Appointment Confirmed',
      duration: '01:50',
      sentiment: 'Reassured & Relieved'
    },
    conversation: [
      {
        speaker: 'agent',
        text: 'Good afternoon, St. Jude Medical Clinic booking line. I am MediBot, your virtual assistant. Are you calling to book a new appointment or modify an existing visit?',
        time: '03:10 PM'
      },
      {
        speaker: 'user',
        text: 'Hi, I need to see Dr. Reynolds in Cardiology for my routine echocardiogram follow-up next Monday or Tuesday morning.',
        time: '03:10 PM'
      },
      {
        speaker: 'agent',
        text: 'Let me check Dr. Reynolds\' clinical schedule for next week... I have an opening on Monday at 9:30 AM, or Tuesday at 10:15 AM. Would 9:30 AM on Monday work for you, Ms. Brooks?',
        time: '03:11 PM'
      },
      {
        speaker: 'user',
        text: 'Monday at 9:30 AM works well. Do I need to fast beforehand?',
        time: '03:11 PM'
      },
      {
        speaker: 'agent',
        text: 'Your follow-up does not require fasting, but please arrive 10 minutes early. Your appointment is confirmed for Monday, Oct 12 at 9:30 AM with Dr. Reynolds. A digital confirmation with parking details has been texted to your mobile.',
        time: '03:12 PM'
      }
    ],
    liveMetrics: {
      noShowReduction: '38%',
      bookingTime: '<90 sec',
      satisfactionScore: '4.9/5.0'
    }
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Agent',
    role: 'Omni-Channel Autonomous Resolution Bot',
    badge: 'Instant Resolution',
    avatar: 'MessageSquare',
    color: '#10B981',
    accentClass: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    description: 'Resolves customer questions with deep semantic search across your product documentation, guides users step-by-step, processes returns, and seamlessly escalates edge cases.',
    capabilities: [
      'Resolves 80%+ of repetitive tier-1 customer inquiries immediately',
      'Provides accurate troubleshooting based on company knowledge base',
      'Tracks order statuses, subscription updates, and billing inquiries',
      'Smooth handoff to human support with full context summary'
    ],
    callState: {
      type: 'LIVE CHAT SUPPORT',
      caller: 'David Kim (Customer #8921)',
      phone: 'david.kim@enterprise.io',
      status: 'Ticket Resolved • 0s Queue',
      duration: '00:48',
      sentiment: 'Delighted'
    },
    conversation: [
      {
        speaker: 'agent',
        text: 'Welcome to CloudSync Support! How can I assist you with your deployment or account today?',
        time: '04:05 PM'
      },
      {
        speaker: 'user',
        text: 'Our API webhook is returning a 403 Forbidden error after our SSL renewal.',
        time: '04:05 PM'
      },
      {
        speaker: 'agent',
        text: 'That typically occurs when the webhook certificate fingerprint is not refreshed in your dashboard security settings. Here is the direct link to your Webhook Settings: 1. Click "Refresh TLS Handshake", 2. Re-verify the domain token. Would you like me to trigger an automated test ping?',
        time: '04:06 PM'
      },
      {
        speaker: 'user',
        text: 'I just clicked it. Yes please trigger a test ping.',
        time: '04:06 PM'
      },
      {
        speaker: 'agent',
        text: 'Test payload transmitted! Status: 200 OK (Latency: 42ms). Webhook communication is fully restored. I have resolved ticket #CS-9182. Can I assist with anything else?',
        time: '04:07 PM'
      }
    ],
    liveMetrics: {
      resolutionRate: '86.4%',
      csat: '98.8%',
      firstResponse: '0.4s'
    }
  },
  {
    id: 'ai-sales-agent',
    name: 'AI Sales Agent',
    role: 'High-Impact Digital Sales Specialist',
    badge: 'Conversion Engine',
    avatar: 'TrendingUp',
    color: '#F59E0B',
    accentClass: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    description: 'Engages inbound prospects, identifies enterprise requirements, pitches tailored software capabilities, answers pricing objections, and collects buyer contact information.',
    capabilities: [
      'Explains nuanced software products and custom packages',
      'Understands technical requirements and suggests optimal architecture',
      'Handles pricing comparisons and calculates business ROI in real time',
      'Gathers qualified lead information and schedules executive demos'
    ],
    callState: {
      type: 'INBOUND PIPELINE',
      caller: 'Priya Sharma (Tech Lead, Omnitech)',
      phone: '+91 98210 44820',
      status: 'Demo Scheduled • High Value',
      duration: '02:10',
      sentiment: 'Enthusiastic'
    },
    conversation: [
      {
        speaker: 'agent',
        text: 'Hi Priya! I am Leo, AI Solutions Advisor at AM Technologies. Are you exploring custom AI agents or software development for Omnitech?',
        time: '05:30 PM'
      },
      {
        speaker: 'user',
        text: 'We need both actually. We want a custom CRM with an integrated AI voice dialer for our sales reps in India and the US.',
        time: '05:30 PM'
      },
      {
        speaker: 'agent',
        text: 'That is our flagship architecture! We build unified CRM suites with WebRTC-based AI voice pipelines capable of both Indian regional accents and US standard cadence. Would you like to review our recent case study on an AI-powered CRM with 3.4x conversion lift?',
        time: '05:31 PM'
      },
      {
        speaker: 'user',
        text: 'Yes please. How quickly could a prototype be delivered?',
        time: '05:31 PM'
      },
      {
        speaker: 'agent',
        text: 'Our rapid development sprint delivers an interactive working prototype within 14 business days. I can schedule a technical scoping session with our Head of Architecture for tomorrow at 3 PM IST. Shall I send the invite?',
        time: '05:32 PM'
      }
    ],
    liveMetrics: {
      pipelineAddition: '+$140K/mo',
      demoConversion: '34%',
      reboundSpeed: '<1s'
    }
  },
  {
    id: 'ai-whatsapp-assistant',
    name: 'AI WhatsApp Assistant',
    role: 'Automated 24/7 WhatsApp Conversational Hub (+91 95007 13610)',
    badge: 'Omnipresent Messaging',
    avatar: 'Share2',
    color: '#25D366',
    accentClass: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    description: 'Instant, intelligent WhatsApp automation on +91 95007 13610 that handles customer inquiries, shares catalogs, qualifies prospects, books meetings, and routes technical briefs directly to adithyamarichamy@gmail.com.',
    capabilities: [
      'Responds instantly to customer messages on WhatsApp (+91 95007 13610)',
      'Captures lead inquiries and updates CRM without manual copy-pasting',
      'Shares interactive product brochures, rate cards, and voice demo samples',
      'Conducts smart automated re-engagement and proposal dispatch'
    ],
    callState: {
      type: 'WHATSAPP OFFICIAL BUSINESS',
      caller: 'Client Inquiry (WhatsApp Chat)',
      phone: 'WhatsApp: +91 95007 13610',
      status: 'Active Chat • Verified',
      duration: 'Ongoing',
      sentiment: 'Highly Engaged'
    },
    conversation: [
      {
        speaker: 'agent',
        text: 'Hello! 👋 Welcome to AM Technologies. How can our AI engineering team assist your business today?',
        time: '11:15 AM'
      },
      {
        speaker: 'user',
        text: 'Hey! Can you share details and pricing for your custom AI Voice Agent and Web development?',
        time: '11:16 AM'
      },
      {
        speaker: 'agent',
        text: 'Certainly! 📄 We engineer custom voice agents (like our 24/7 AI receptionist at +91 80642 69500), workflow automation, and high-performance web platforms. What is your primary objective?',
        time: '11:16 AM'
      },
      {
        speaker: 'user',
        text: 'We want an AI receptionist to handle inbound calls and book meetings automatically.',
        time: '11:17 AM'
      },
      {
        speaker: 'agent',
        text: 'You can test our live voice receptionist right now by dialing +91 80642 69500! I can also arrange a proposal sent to your email and connect you with Adithya directly. Tap "Book Consultation" below to submit your requirements!',
        time: '11:17 AM'
      }
    ],
    liveMetrics: {
      openRate: '98%',
      avgReplySpeed: '1.2s',
      leadCapture: '4.8x'
    }
  }
];
