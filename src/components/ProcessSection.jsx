import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Compass, 
  Code, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { processSteps } from '../data/processData';

const iconMap = {
  Search: Search,
  Compass: Compass,
  Code: Code,
  Rocket: Rocket,
  TrendingUp: TrendingUp
};

export default function ProcessSection({ onOpenConsultation }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = processSteps[activeStepIndex];

  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden bg-[#08090D]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Engineering Lifecycle</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading mb-6"
          >
            Our Working <span className="text-gradient-primary">Process</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            A battle-tested 5-stage methodology ensuring on-time delivery, robust AI accuracy, and measurable business impact.
          </motion.p>
        </div>

        {/* Horizontal Process Steps Bar with Connecting Animated Line */}
        <div className="relative mb-12 sm:mb-16">
          {/* Background Track Line */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-white/10 -translate-y-1/2 -z-0" />
          
          {/* Active Highlight Line */}
          <div 
            className="hidden md:block absolute top-1/2 left-8 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 -translate-y-1/2 transition-all duration-500 -z-0"
            style={{ width: `${(activeStepIndex / (processSteps.length - 1)) * 88}%` }}
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = iconMap[step.icon] || Search;
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-4 rounded-2xl transition-all duration-300 flex flex-col items-start gap-2 ${
                    isActive
                      ? 'bg-gradient-to-b from-blue-600/30 to-purple-600/20 border border-blue-500/50 shadow-xl shadow-blue-500/20 scale-[1.02]'
                      : 'bg-[#0E121E]/80 border border-white/5 hover:border-white/20 hover:bg-[#121828]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-blue-500 text-white' : 'bg-white/10 text-slate-400'
                    }`}>
                      {step.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-300' : 'text-slate-500'}`} />
                  </div>

                  <div className={`text-sm sm:text-base font-bold font-heading ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}>
                    {step.title}
                  </div>

                  <span className="text-[10px] text-slate-400 line-clamp-1 font-mono">
                    {step.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-blue-500/30 shadow-2xl relative overflow-hidden"
          >
            {/* Top accent badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <span className="text-lg font-bold font-mono">{activeStep.step}</span>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                    {activeStep.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-blue-400">
                    {activeStep.tagline}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-300">
                <Clock className="w-3.5 h-3.5 text-cyan-300" />
                <span>Estimated Phase Duration: <strong>{activeStep.duration}</strong></span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8 max-w-4xl">
              {activeStep.description}
            </p>

            {/* Core Phase Activities & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
              
              {/* Activities Checklist */}
              <div className="md:col-span-7 bg-[#0A0D16] p-5 sm:p-6 rounded-2xl border border-white/5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Key Engineering Milestones in Phase {activeStep.step}</span>
                </h4>
                <div className="space-y-3">
                  {activeStep.activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase Deliverable Banner */}
              <div className="md:col-span-5 bg-gradient-to-br from-blue-900/30 via-[#0E1322] to-purple-900/30 p-5 sm:p-6 rounded-2xl border border-blue-500/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 uppercase tracking-wider font-mono mb-2">
                    <FileText className="w-4 h-4 text-cyan-300" />
                    <span>Tangible Client Deliverable</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white font-heading mb-2">
                    {activeStep.deliverables}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Formal documentation and runnable code artifacts handed over with full testing sign-off.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-mono">Full IP Rights Retained</span>
                  <button
                    onClick={() => onOpenConsultation(`Process Phase ${activeStep.step}: ${activeStep.title}`)}
                    className="text-xs font-semibold text-blue-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Inquire Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  activeStepIndex === 0 
                    ? 'opacity-30 cursor-not-allowed text-slate-500' 
                    : 'bg-white/[0.05] hover:bg-white/10 text-slate-200'
                }`}
              >
                ← Previous Stage
              </button>

              <div className="text-xs font-mono text-slate-400">
                Stage {activeStepIndex + 1} of {processSteps.length}
              </div>

              <button
                disabled={activeStepIndex === processSteps.length - 1}
                onClick={() => setActiveStepIndex(prev => Math.min(processSteps.length - 1, prev + 1))}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  activeStepIndex === processSteps.length - 1
                    ? 'opacity-30 cursor-not-allowed text-slate-500' 
                    : 'bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 border border-blue-500/30'
                }`}
              >
                Next Stage →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
