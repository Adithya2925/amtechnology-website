import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Mic,
  Target,
  Database,
  CalendarCheck,
  Globe,
  Code2,
  CheckCircle2,
  Eye,
  Layers,
  Activity,
  Bot
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryColors = {
  'AI Telephony & Voice': { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  'AI Automation & Sales': { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
  'Custom Software & AI': { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30' },
  'Healthcare AI Solutions': { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  'Web Development': { text: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30' },
  'Custom Software Development': { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
};

// Visual mockups for each card type
function MockupPreview({ type }) {
  if (type === 'telephony-dashboard') {
    return (
      <div className="w-full h-full bg-[#060810] p-3 rounded-xl relative overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <div className="text-[8px] font-mono text-slate-500">AM Voice Platform • Live Dashboard</div>
        </div>
        {/* Waveform bars */}
        <div className="flex items-end gap-0.5 mb-2 h-8">
          {[12,20,16,28,18,32,14,24,20,16,28,18,22,14,26].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-sm" style={{ height: `${h}px`, opacity: 0.7 + (i % 3) * 0.1 }} />
          ))}
        </div>
        {/* Stat rows */}
        <div className="grid grid-cols-3 gap-1.5">
          {[{ l: 'Active', v: '847' }, { l: 'Latency', v: '218ms' }, { l: 'ASR', v: '99.2%' }].map((s, i) => (
            <div key={i} className="bg-white/[0.03] rounded p-1 text-center">
              <div className="text-[7px] text-slate-500">{s.l}</div>
              <div className="text-[9px] font-bold text-white">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'lead-pipeline') {
    return (
      <div className="w-full h-full bg-[#060810] p-3 rounded-xl overflow-hidden">
        <div className="flex items-center gap-1 mb-2">
          <Target className="w-3 h-3 text-purple-400" />
          <span className="text-[8px] font-mono text-purple-300">LEAD PIPELINE</span>
        </div>
        {[
          { name: 'Marcus Sterling', score: 94, stage: 'Qualified' },
          { name: 'Sarah Chen', score: 87, stage: 'Demo Set' },
          { name: 'Raj Patel', score: 76, stage: 'Contacted' },
        ].map((lead, i) => (
          <div key={i} className="flex items-center justify-between mb-1.5 bg-white/[0.03] rounded p-1.5">
            <span className="text-[8px] text-slate-300">{lead.name}</span>
            <div className="flex items-center gap-1.5">
              <div className="w-10 h-1 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-purple-500" style={{ width: `${lead.score}%` }} />
              </div>
              <span className="text-[7px] text-purple-400">{lead.stage}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'crm-dashboard') {
    return (
      <div className="w-full h-full bg-[#060810] p-3 rounded-xl overflow-hidden">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[8px] font-mono text-cyan-300">AI-CRM PIPELINE</span>
          <div className="text-[7px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">+28% MoM</div>
        </div>
        {/* Kanban Columns */}
        <div className="grid grid-cols-3 gap-1 h-16">
          {[['New', '#477BFF', 8], ['Active', '#8B5CF6', 12], ['Closed', '#10B981', 5]].map(([lbl, clr, n]) => (
            <div key={lbl} className="rounded bg-white/[0.03] p-1">
              <div className="text-[7px] font-bold mb-1" style={{ color: clr }}>{lbl} ({n})</div>
              {Array.from({ length: Math.min(n, 3) }).map((_, i) => (
                <div key={i} className="w-full h-1.5 rounded bg-white/10 mb-0.5" />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'hospital-scheduler') {
    return (
      <div className="w-full h-full bg-[#060810] p-3 rounded-xl overflow-hidden">
        <div className="flex items-center gap-1 mb-2">
          <CalendarCheck className="w-3 h-3 text-cyan-400" />
          <span className="text-[8px] font-mono text-cyan-300">APPOINTMENT SYSTEM</span>
        </div>
        <div className="space-y-1.5">
          {[
            { time: '9:30 AM', doc: 'Dr. Reynolds', status: 'Booked', clr: 'text-emerald-400' },
            { time: '10:15 AM', doc: 'Dr. Nguyen', status: 'Available', clr: 'text-blue-400' },
            { time: '2:00 PM', doc: 'Dr. Patel', status: 'Booked', clr: 'text-emerald-400' },
          ].map((slot, i) => (
            <div key={i} className="flex items-center justify-between bg-white/[0.03] rounded px-1.5 py-1">
              <span className="text-[7px] text-slate-400 font-mono">{slot.time}</span>
              <span className="text-[8px] text-slate-300">{slot.doc}</span>
              <span className={`text-[7px] ${slot.clr}`}>{slot.status}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'web-showcase') {
    return (
      <div className="w-full h-full bg-[#060810] rounded-xl overflow-hidden relative">
        {/* Browser chrome */}
        <div className="flex items-center gap-1 px-2 py-1.5 bg-[#0A0D18] border-b border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <div className="flex-1 mx-2 bg-white/5 rounded px-1 py-0.5 text-[6px] text-slate-500 text-center">amtechnologies.ai</div>
        </div>
        {/* Page preview */}
        <div className="p-2">
          <div className="h-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded mb-1" />
          <div className="grid grid-cols-2 gap-1 mb-1">
            <div className="h-1.5 bg-white/10 rounded" />
            <div className="h-1.5 bg-white/5 rounded" />
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[1,2,3].map(i => <div key={i} className="h-8 bg-white/[0.04] rounded border border-white/5" />)}
          </div>
        </div>
      </div>
    );
  }

  // Default: custom software
  return (
    <div className="w-full h-full bg-[#060810] p-3 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[8px] font-mono text-amber-300">ENTERPRISE PORTAL</span>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[7px] text-emerald-400">Live</span>
        </div>
      </div>
      {/* Sidebar + content mock */}
      <div className="flex gap-1 h-16">
        <div className="w-8 bg-white/[0.04] rounded flex flex-col gap-1 p-1">
          {[1,2,3,4].map(i => <div key={i} className="h-1 rounded bg-white/10" />)}
        </div>
        <div className="flex-1 space-y-1">
          <div className="h-2 bg-amber-500/20 rounded" />
          <div className="grid grid-cols-2 gap-1">
            <div className="h-4 rounded bg-white/[0.04] border border-white/5" />
            <div className="h-4 rounded bg-white/[0.04] border border-white/5" />
          </div>
          <div className="h-1.5 bg-white/5 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ onOpenConsultation }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Solution Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading mb-6"
          >
            Solutions Built for <span className="text-gradient-primary">Real-World Impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Concept architectures and capability showcases representing the type of solutions we engineer for enterprise clients.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData.map((project, index) => {
            const colors = categoryColors[project.category] || { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-3xl overflow-hidden group flex flex-col transition-all duration-300 hover:border-blue-500/30"
              >
                {/* Mockup Preview Area */}
                <div className="relative h-44 p-3 bg-gradient-to-b from-[#0D1119] to-[#080A10] border-b border-white/5 overflow-hidden">
                  <MockupPreview type={project.mockupType} />

                  {/* Concept Label Overlay */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] font-semibold bg-black/60 text-slate-400 border border-white/10 backdrop-blur-sm">
                    {project.label}
                  </div>

                  {/* View Details Overlay on Hover */}
                  <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-xl hover:bg-blue-500 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Architecture</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-blue-300 font-medium mb-3 italic">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 flex-1">
                    {project.summary}
                  </p>

                  {/* Metrics Row */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {Object.entries(project.metrics).map(([k, v], mIdx) => (
                      <div key={mIdx} className="bg-white/[0.04] rounded-lg px-2.5 py-1 border border-white/5">
                        <div className="text-[8px] uppercase text-slate-500 font-mono">{k}</div>
                        <div className="text-xs font-bold text-white">{v}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-slate-400 font-mono">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-blue-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <span>Full Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenConsultation(`Build similar: ${project.title}`)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                    >
                      Build Similar
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0D111E] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-4"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>

              {/* Category */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  (categoryColors[selectedProject.category] || { bg: 'bg-blue-500/10', text: 'text-blue-300', border: 'border-blue-500/30' }).bg
                } ${(categoryColors[selectedProject.category] || {}).text} border ${(categoryColors[selectedProject.category] || {}).border}`}>
                  {selectedProject.category}
                </span>
                <span className="text-[10px] text-slate-500 font-mono uppercase">{selectedProject.label}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-blue-300 italic mb-4">{selectedProject.tagline}</p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">{selectedProject.summary}</p>

              {/* Architecture Pipeline */}
              <div className="bg-[#08090D] rounded-2xl p-4 border border-white/5 mb-6">
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider font-mono mb-2">
                  System Architecture Flow
                </div>
                <div className="text-xs text-slate-300 font-mono leading-relaxed">
                  {selectedProject.architecture}
                </div>
              </div>

              {/* Highlights + Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Engineering Highlights
                  </div>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Performance Targets
                  </div>
                  <div className="space-y-2">
                    {Object.entries(selectedProject.metrics).map(([k, v], idx) => (
                      <div key={idx} className="flex items-center justify-between bg-white/[0.04] px-3 py-2 rounded-lg border border-white/5">
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">{k}</span>
                        <span className="text-sm font-bold text-white font-heading">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* All Technologies */}
              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Full Stack</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-200 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenConsultation(`Build: ${selectedProject.title}`);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-blue-500/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Build This for My Business</span>
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-3 rounded-xl bg-white/[0.05] text-slate-300 text-sm font-medium hover:bg-white/10 transition-colors"
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
