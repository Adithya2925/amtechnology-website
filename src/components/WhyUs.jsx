import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Hammer, 
  TrendingUp, 
  Network, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle,
  Zap,
  Activity,
  Award
} from 'lucide-react';
import { capabilityStats, valuePillars, comparisonData } from '../data/whyUsData';

const pillarIcons = {
  Sparkles: Sparkles,
  Hammer: Hammer,
  TrendingUp: TrendingUp,
  Network: Network,
  Layers: Layers,
  ShieldCheck: ShieldCheck
};

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            <span>The AM Technologies Advantage</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading mb-6"
          >
            Technology That Moves Your <span className="text-gradient-primary">Business Forward.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            We combine high-level AI research with pragmatic full-stack software craftsmanship, engineering scalable autonomous systems tailored specifically to your operational goals.
          </motion.p>
        </div>

        {/* Animated Capability Counters (Neutral Highlights as requested) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {capabilityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-2 group-hover:text-blue-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-200 mb-1.5 font-heading">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {valuePillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card rounded-3xl p-7 flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-purple-500/40 transition-all shadow-md">
                    <Icon className="w-6 h-6 text-purple-400 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-purple-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table: Traditional vs AM Technologies */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          <div className="max-w-xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
              ENGINEERING RIGOR
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
              How AM Technologies Compares
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Why leading companies partner with us instead of relying on generic SaaS or legacy agencies.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider font-mono text-slate-400">
                  <th className="py-4 px-4">Evaluation Dimension</th>
                  <th className="py-4 px-4 text-slate-500">Traditional Agency / SaaS</th>
                  <th className="py-4 px-4 text-blue-400">AM Technologies Engineering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="py-4 px-4 text-slate-200 font-medium">
                      <div className="flex items-center gap-2 text-cyan-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.amTech}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
