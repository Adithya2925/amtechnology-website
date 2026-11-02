import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneCall, 
  Bot, 
  Globe, 
  Code2, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  X, 
  Layers, 
  Zap, 
  Server,
  Activity
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap = {
  PhoneCall: PhoneCall,
  Bot: Bot,
  Globe: Globe,
  Code2: Code2,
  Cpu: Cpu
};

export default function ServicesSection({ onOpenConsultation, onSelectAgent }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none -z-10" />

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
            <span>Core Capabilities</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading mb-6"
          >
            What We <span className="text-gradient-primary">Build</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            From intelligent AI agents to powerful digital products, we help businesses move forward with technology.
          </motion.p>
        </div>

        {/* Services Grid (5 cards: 3 on top row, 2 on bottom row or responsive grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Bot;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card rounded-3xl p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 ${
                  index >= 3 ? 'md:col-span-1 lg:col-span-1.5' : ''
                }`}
              >
                {/* Top glow hover accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${service.id === 'ai-voice-agents' ? '#477BFF, #8B5CF6' : service.id === 'ai-agents-automation' ? '#8B5CF6, #EC4899' : service.id === 'website-development' ? '#00F0FF, #477BFF' : service.id === 'software-development' ? '#10B981, #06B6D4' : '#F59E0B, #EF4444'})`
                  }}
                />

                <div>
                  {/* Badge & Icon header */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-3 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-7 h-7 text-white group-hover:text-blue-400 transition-colors" />
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-400 mb-4">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Actions */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4 mt-auto">
                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tech.slice(0, 3).map((t, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Learn More Button */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-blue-300 transition-colors shrink-0 p-1"
                  >
                    <span>Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Architecture & Deep-Dive Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0E121E] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {selectedService.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  ENTERPRISE ARCHITECTURE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-3">
                {selectedService.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedService.description}
              </p>

              {/* Architecture Blueprint Block */}
              <div className="bg-[#08090D] border border-white/10 rounded-2xl p-4 sm:p-5 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
                    <Server className="w-4 h-4 text-blue-400" />
                    <span>ENGINEERING STACK &amp; SPECIFICATIONS</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">99.9% Production Ready</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  {Object.entries(selectedService.metrics).map(([key, val], mIdx) => (
                    <div key={mIdx} className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                      <div className="text-[10px] uppercase text-slate-400 tracking-wider font-mono">{key}</div>
                      <div className="text-base font-bold text-white font-heading">{val}</div>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-slate-400 mb-2 font-mono">Integrated Technologies:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-200 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Complete Capabilities */}
              <div className="mb-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Full Scope of Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation(selectedService.title);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:scale-[1.01] transition-transform"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Request Custom Proposal for this Service</span>
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 text-sm font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
