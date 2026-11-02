import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Code2, 
  FileCode, 
  Code, 
  Zap, 
  Server, 
  Database, 
  FolderTree, 
  Sparkles, 
  Mic, 
  Workflow, 
  Cloud,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { techStackData, techCategories } from '../data/techStackData';

const techIconMap = {
  Atom: Code2,
  Layers: Layers,
  FileCode: FileCode,
  Code: Code,
  Zap: Zap,
  Server: Server,
  Database: Database,
  FolderTree: FolderTree,
  Sparkles: Sparkles,
  Mic: Mic,
  Workflow: Workflow,
  Cloud: Cloud
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTech = activeCategory === 'All'
    ? techStackData
    : techStackData.filter(item => item.category === activeCategory);

  return (
    <section id="tech-stack" className="relative py-24 sm:py-32 overflow-hidden bg-[#07080B]">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[400px] bg-blue-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Modern Engineering Foundation</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading mb-6"
          >
            Enterprise-Grade <span className="text-gradient-cyan">Technology Stack</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            We leverage battle-tested languages, high-concurrency runtimes, and frontier AI research to build resilient, ultra-fast production systems.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {techCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                  : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredTech.map((item) => {
              const Icon = techIconMap[item.icon] || Code2;
              return (
                <motion.div
                  layout
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl p-6 border border-white/10 group hover:border-blue-500/40 flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    {/* Header with Icon and Category Tag */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110 shadow-md"
                        style={{
                          backgroundColor: `${item.color}15`,
                          border: `1px solid ${item.color}35`
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: item.color }} />
                      </div>

                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 font-heading group-hover:text-blue-300 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="line-clamp-1">{item.useCase}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
