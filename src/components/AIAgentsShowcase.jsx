import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  PhoneCall, 
  PhoneOff, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  Send, 
  Calendar, 
  Clock, 
  Target, 
  ShieldCheck, 
  MessageSquare, 
  TrendingUp, 
  Share2, 
  Headphones, 
  User, 
  Mic, 
  Check, 
  RefreshCw,
  Building,
  RotateCcw
} from 'lucide-react';
import { aiAgentsData } from '../data/aiAgentsData';

export default function AIAgentsShowcase({ onOpenConsultation }) {
  const [activeAgentId, setActiveAgentId] = useState(aiAgentsData[0].id);
  const [isCalling, setIsCalling] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [customUserQuery, setCustomUserQuery] = useState('');
  const [supportChat, setSupportChat] = useState([
    { role: 'assistant', text: 'Hello! I am the AM Technologies AI Support Agent. How can I assist you with your software or voice agent deployment?' }
  ]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('Monday, 9:30 AM');
  const [crmSynced, setCrmSynced] = useState(false);

  const activeAgent = aiAgentsData.find(a => a.id === activeAgentId) || aiAgentsData[0];

  // Auto-advance conversation dialog preview every few seconds if in calling state
  useEffect(() => {
    setActiveStep(0);
    setBookingConfirmed(false);
    setCrmSynced(false);
  }, [activeAgentId]);

  // Audio Speech Simulation using Web Speech Synthesis API
  const handleToggleSpeech = (text) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.05;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Support chat interaction
  const handleSendSupportMessage = (e) => {
    e?.preventDefault();
    if (!customUserQuery.trim()) return;

    const query = customUserQuery.trim();
    const newMessages = [...supportChat, { role: 'user', text: query }];
    setSupportChat(newMessages);
    setCustomUserQuery('');

    // Simulated instant AI answer
    setTimeout(() => {
      let reply = "Our AI system has analyzed your request. We specialize in custom high-concurrency telephony gateways and enterprise web systems. Would you like to schedule a deep-dive architecture session with our engineers?";
      
      const lower = query.toLowerCase();
      if (lower.includes('price') || lower.includes('cost')) {
        reply = "Our pricing is tiered according to call concurrency and customized integration needs. Pilots start quickly, and full enterprise packages include dedicated SLA support. Tap 'Book Consultation' to receive a formal pricing matrix.";
      } else if (lower.includes('voice') || lower.includes('latency')) {
        reply = "Our voice pipeline operates with sub-250ms latency using WebSocket streams, custom Whisper ASR, and neural TTS engines. It handles natural interruptions and multi-speaker turn-taking effortlessly.";
      } else if (lower.includes('hospital') || lower.includes('clinic')) {
        reply = "Our Hospital Appointment Agent integrates directly with EHR/EMR calendar systems, reducing patient hold times to zero while adhering to HIPAA-grade encryption standards.";
      }

      setSupportChat(prev => [...prev, { role: 'assistant', text: reply }]);
    }, 700);
  };

  return (
    <section id="ai-agents" className="relative py-24 sm:py-32 overflow-hidden bg-[#07080B]">
      {/* Background glow and subtle mesh */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Bot className="w-3.5 h-3.5 text-purple-400" />
            <span>Interactive Live Showcase</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading mb-6"
          >
            Meet Your Future <span className="text-gradient-purple">AI Workforce</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Discover how intelligent AI agents can work alongside your business, automate conversations, and deliver better customer experiences.
          </motion.p>

          {/* Sandbox disclaimer pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 text-xs mt-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Interactive Simulator Sandbox • Test realistic conversation logic in real-time</span>
          </div>
        </div>

        {/* Agent Navigation Grid — responsive 2 cols on mobile, 3 cols on tablet, 6 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10">
          {aiAgentsData.map((agent) => {
            const isSelected = agent.id === activeAgentId;
            const metaMap = {
              'ai-receptionist': {
                shortTitle: 'Voice Receptionist',
                sub: 'Ava • 24/7 Hotline',
                tag: 'HOTLINE',
                icon: Headphones,
              },
              'ai-lead-generation': {
                shortTitle: 'Lead Generation',
                sub: 'Outbound BANT',
                tag: 'OUTBOUND',
                icon: Target,
              },
              'ai-hospital-appointment': {
                shortTitle: 'Hospital Booking',
                sub: 'EHR Coordinator',
                tag: 'CLINICAL',
                icon: Calendar,
              },
              'ai-customer-support': {
                shortTitle: 'Customer Support',
                sub: 'Instant Resolution',
                tag: 'SUPPORT',
                icon: MessageSquare,
              },
              'ai-sales-agent': {
                shortTitle: 'Sales Specialist',
                sub: 'Deals & Pitching',
                tag: 'SALES',
                icon: TrendingUp,
              },
              'ai-whatsapp-assistant': {
                shortTitle: 'WhatsApp Hub',
                sub: 'Direct Automation',
                tag: 'WHATSAPP',
                icon: Share2,
              },
            };
            const meta = metaMap[agent.id] || {
              shortTitle: agent.name.replace('AI ', ''),
              sub: agent.badge,
              tag: 'AGENT',
              icon: Bot,
            };
            const Icon = meta.icon;

            return (
              <button
                key={agent.id}
                onClick={() => setActiveAgentId(agent.id)}
                className={`group relative text-left p-3 sm:p-3.5 rounded-2xl transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#131c38] to-[#121424] border-blue-400/60 shadow-xl shadow-blue-500/20 ring-1 ring-blue-500/30 -translate-y-0.5'
                    : 'bg-[#090b14]/80 hover:bg-[#111425] border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Top row: Icon + Tag */}
                <div className="flex items-center justify-between gap-1.5 mb-2.5">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/40'
                        : 'bg-white/[0.06] text-slate-400 group-hover:text-white group-hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected ? (
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE
                    </span>
                  ) : (
                    <span className="text-[9px] font-mono text-slate-500 group-hover:text-slate-400 uppercase tracking-wider">
                      {meta.tag}
                    </span>
                  )}
                </div>

                {/* Agent Name */}
                <div>
                  <div
                    className={`font-semibold text-xs sm:text-sm leading-tight transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {meta.shortTitle}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5 font-medium">
                    {meta.sub}
                  </div>
                </div>

                {/* Active indicator line */}
                {isSelected && (
                  <div className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Agent Stage Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Agent Overview & Capabilities */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${activeAgent.accentClass}`}>
                  {activeAgent.badge}
                </span>

                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  SIMULATOR READY
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-heading">
                {activeAgent.name}
              </h3>
              <p className="text-xs font-mono text-blue-400 mb-4">
                {activeAgent.role}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeAgent.description}
              </p>

              {/* Core Capabilities */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Automated Capabilities
                </div>
                {activeAgent.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Live Telemetry Box */}
              <div className="bg-[#0A0D15] rounded-2xl p-4 border border-white/5 mb-6">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Engine Telemetry</span>
                  <span className="text-cyan-400 font-mono">Live Sync</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {Object.entries(activeAgent.liveMetrics).map(([k, v], idx) => (
                    <div key={idx} className="bg-white/[0.03] p-2 rounded-xl">
                      <div className="text-[10px] text-slate-400 font-mono uppercase">{k}</div>
                      <div className="text-xs sm:text-sm font-bold text-white font-heading mt-0.5">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenConsultation(`Deploy ${activeAgent.name}`)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:scale-[1.02] transition-transform"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Deploy This Agent For Your Business</span>
              </button>
            </div>
          </div>

          {/* Right Column: Realistic Live Simulation Console */}
          <div className="lg:col-span-7 glass-card-interactive rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl relative overflow-hidden">
            
            {/* Top Bar: Call / Channel Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0E121E]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{activeAgent.callState.caller}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono">
                      {activeAgent.callState.type}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {activeAgent.callState.phone} • {activeAgent.callState.status}
                  </div>
                </div>
              </div>

              {/* Status & Audio Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleSpeech(activeAgent.conversation[activeStep]?.text || activeAgent.conversation[0].text)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isSpeaking 
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30 animate-pulse' 
                      : 'bg-white/[0.06] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                  title="Toggle Web Speech Voice Synthesis"
                >
                  {isSpeaking ? <Volume2 className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isSpeaking ? 'Speaking...' : 'Listen Voice'}</span>
                </button>

                <button
                  onClick={() => setIsCalling(!isCalling)}
                  className={`p-2 rounded-lg text-xs transition-colors ${
                    isCalling 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30' 
                      : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30'
                  }`}
                  title={isCalling ? "End Call Simulation" : "Start Call Simulation"}
                >
                  {isCalling ? <PhoneOff className="w-4 h-4" /> : <PhoneCall className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Audio Waveform Visualization Indicator */}
            {isCalling && (
              <div className="bg-[#090C14] rounded-2xl p-4 border border-white/5 mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>VOICE TELEPHONY STREAM</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-emerald-400">DUPLEX 240ms</span>
                </div>

                {/* Animated Waveform Bars */}
                <div className="flex items-center gap-1 h-7">
                  {[8, 18, 12, 28, 20, 32, 14, 24, 10, 30, 16, 22, 12, 26, 18].map((val, idx) => (
                    <span
                      key={idx}
                      className="w-1 bg-gradient-to-t from-blue-500 via-indigo-400 to-cyan-300 rounded-full transition-all"
                      style={{
                        height: isCalling ? `${val}px` : '4px',
                        animation: isCalling ? `wavePulse ${0.8 + (idx % 5) * 0.2}s ease-in-out infinite` : 'none'
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Simulated Conversation Feed */}
            <div className="space-y-3.5 max-h-[310px] overflow-y-auto pr-1 mb-6 scrollbar-thin">
              {activeAgent.conversation.map((msg, i) => {
                const isAgent = msg.speaker === 'agent';
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`flex flex-col ${isAgent ? 'items-start' : 'items-end'}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-slate-400">{msg.time}</span>
                      <span className={`text-[11px] font-semibold ${isAgent ? 'text-blue-400' : 'text-purple-400'}`}>
                        {isAgent ? activeAgent.name : activeAgent.callState.caller.split(' ')[0]}
                      </span>
                    </div>

                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                        isAgent
                          ? 'bg-[#121726] border border-blue-500/20 text-slate-100 rounded-tl-sm shadow-md'
                          : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white rounded-tr-sm shadow-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Interactive Agent-Specific Sandbox Action Triggers */}
            <div className="pt-5 border-t border-white/10">
              
              {/* Agent 1 & 5: AI Receptionist / Sales Quick Call Transfer Simulation */}
              {activeAgent.id === 'ai-receptionist' && (
                <div className="flex flex-wrap items-center justify-between gap-3 bg-blue-500/10 p-3.5 rounded-2xl border border-blue-500/25">
                  <div className="text-xs text-slate-200">
                    <span className="font-bold text-white block">Test Real AI Receptionist Live:</span>
                    <span className="text-[11px] text-blue-300">Dial from your phone to speak with Ava right now</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="tel:+918064269500"
                      className="px-3.5 py-2 rounded-xl bg-[#477BFF] hover:bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-500/30 flex items-center gap-1.5 transition-all"
                    >
                      <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
                      <span>Dial +91 80642 69500</span>
                    </a>
                    <button
                      onClick={() => alert('Simulated action: Call routed to Technical Architecture Director.')}
                      className="px-3 py-2 rounded-xl bg-white/[0.06] text-slate-200 border border-white/10 text-xs font-semibold hover:bg-white/10 transition-colors"
                    >
                      Simulate Transfer
                    </button>
                  </div>
                </div>
              )}

              {activeAgent.id === 'ai-sales-agent' && (
                <div className="flex flex-wrap items-center justify-between gap-3 bg-white/[0.02] p-3 rounded-2xl border border-white/5">
                  <div className="text-xs text-slate-300">
                    <span className="font-semibold text-white">Call Actions:</span> Test live simulated call actions
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert('Simulated action: Call transferred to Solutions Architecture Executive Desk (Line 4).')}
                      className="px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold hover:bg-blue-500/30 transition-colors"
                    >
                      Transfer Call
                    </button>
                    <button
                      onClick={() => alert('Simulated action: SMS with appointment confirmation and directions dispatched to caller.')}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.05] text-slate-200 border border-white/10 text-xs font-semibold hover:bg-white/10 transition-colors"
                    >
                      Send SMS Invite
                    </button>
                  </div>
                </div>
              )}

              {/* Agent 2: AI Lead Generation Live CRM Field Extraction Preview */}
              {activeAgent.id === 'ai-lead-generation' && (
                <div className="bg-[#0B0E18] p-3.5 rounded-2xl border border-purple-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-purple-400" />
                      Extracted BANT Parameters
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Confidence: 98.7%</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                    <div className="bg-white/[0.04] p-1.5 rounded">Budget: <strong className="text-white">$35k</strong></div>
                    <div className="bg-white/[0.04] p-1.5 rounded">Authority: <strong className="text-white">VP Growth</strong></div>
                    <div className="bg-white/[0.04] p-1.5 rounded">Need: <strong className="text-white">Voice Bot</strong></div>
                    <div className="bg-white/[0.04] p-1.5 rounded">Timeline: <strong className="text-white">Q3</strong></div>
                  </div>
                  <button
                    onClick={() => setCrmSynced(true)}
                    className="mt-3 w-full py-2 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    {crmSynced ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <RefreshCw className="w-3.5 h-3.5" />}
                    <span>{crmSynced ? 'Synced to CRM Pipeline • Deal #8919' : 'Simulate Direct CRM Sync (HubSpot / Salesforce)'}</span>
                  </button>
                </div>
              )}

              {/* Agent 3: AI Hospital Appointment Calendar Slot Picker */}
              {activeAgent.id === 'ai-hospital-appointment' && (
                <div className="bg-[#0B0E18] p-3.5 rounded-2xl border border-cyan-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      Doctor Appointment Schedule Simulation
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300">EHR Live Sync</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['Monday, 9:30 AM', 'Tuesday, 10:15 AM', 'Wednesday, 2:00 PM'].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          selectedSlot === slot
                            ? 'bg-cyan-500 text-black font-semibold'
                            : 'bg-white/[0.05] text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setBookingConfirmed(true)}
                    className="w-full py-2 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 border border-cyan-500/40 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    {bookingConfirmed ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Calendar className="w-3.5 h-3.5" />}
                    <span>{bookingConfirmed ? `Booked for ${selectedSlot} • SMS Dispatched!` : `Confirm Appointment for ${selectedSlot}`}</span>
                  </button>
                </div>
              )}

              {/* Agent 4: AI Customer Support Live Question Tester */}
              {activeAgent.id === 'ai-customer-support' && (
                <div className="space-y-3">
                  <div className="text-xs text-slate-400">
                    Ask this simulated customer support agent a question:
                  </div>
                  <form onSubmit={handleSendSupportMessage} className="flex gap-2">
                    <input
                      type="text"
                      value={customUserQuery}
                      onChange={(e) => setCustomUserQuery(e.target.value)}
                      placeholder="e.g., What is your voice latency or pricing?"
                      className="flex-1 bg-[#090C14] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Ask AI</span>
                    </button>
                  </form>
                </div>
              )}

              {/* Agent 6: AI WhatsApp Assistant Interactive Response */}
              {activeAgent.id === 'ai-whatsapp-assistant' && (
                <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0B1410] p-3 rounded-2xl border border-emerald-500/30">
                  <div className="text-xs text-emerald-300 flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Business Cloud API Connected</span>
                  </div>
                  <a
                    href="https://wa.me/919500713610?text=Hello%20AM%20Technologies%2C%20I%20would%20like%20to%20know%20more%20about%20your%20AI%20solutions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-[#25D366] text-black text-xs font-bold hover:bg-[#20ba59] transition-colors flex items-center gap-1.5"
                  >
                    <span>Chat on WhatsApp (+91 95007 13610)</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
