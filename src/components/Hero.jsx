import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  Zap, 
  ShieldCheck, 
  Bot, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Mic, 
  MessageSquare,
  Play
} from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse coords (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-40 -z-10" />

      {/* Floating Glowing Gradient Orbs */}
      <div 
        className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full bg-[#477BFF]/15 blur-[120px] pointer-events-none -z-10 animate-pulse-glow"
        style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full bg-[#8B5CF6]/15 blur-[120px] pointer-events-none -z-10 animate-pulse-glow"
        style={{ animationDelay: '2s', transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)` }}
      />
      <div 
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[#00F0FF]/10 blur-[90px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Badge above headline */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-blue-500/30 backdrop-blur-md mb-6 shadow-sm shadow-blue-500/20 group hover:border-blue-400 transition-colors cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#477BFF]" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-blue-200">
                NEXT-GENERATION AI &amp; TECHNOLOGY SOLUTIONS
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400 ml-0.5 group-hover:rotate-12 transition-transform" />
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight leading-[1.08] text-white mb-6 font-heading">
              Build Smarter.{' '}
              <span className="text-gradient-primary block sm:inline">Automate Faster.</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Grow Bigger.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Empowering businesses with intelligent AI agents, advanced automation, and next-generation digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#477BFF] via-[#5C7CFA] to-[#8B5CF6] shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-white/[0.04] border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.08] hover:text-white transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Book a Free Consultation</span>
              </button>

              <a
                href="tel:+918064269500"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition-colors py-2.5 px-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 hover:border-emerald-400/50 hover:bg-emerald-500/20 group"
                title="Call 24/7 AI Receptionist: +91 80642 69500"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <span>Call AI Receptionist: +91 80642 69500</span>
              </a>
            </div>

            {/* Capability highlights ticker */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/10 w-full max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                  &lt;240<span className="text-[#477BFF] text-base">ms</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Voice AI Latency</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                  99.4<span className="text-purple-400 text-base">%</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Accuracy Benchmark</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                  24/7<span className="text-cyan-400 text-base">/365</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Autonomous Ops</div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual: 3D Holographic Cybernetic Core & Floating Telemetry */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px]"
            style={{
              perspective: 1000,
            }}
          >
            {/* Parallax Container reacting to mouse movements */}
            <div 
              className="relative w-full max-w-md h-full flex items-center justify-center transition-transform duration-200 ease-out"
              style={{
                transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`
              }}
            >
              {/* Central Holographic Sphere & Rotating Rings */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                
                {/* Outer Orbit Ring 1 */}
                <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/25 animate-[spin_24s_linear_infinite]" />
                
                {/* Outer Orbit Ring 2 with glowing dots */}
                <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-[spin_18s_linear_infinite_reverse]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#00F0FF]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#8B5CF6]" />
                </div>

                {/* Inner Ring with glow */}
                <div className="absolute inset-10 rounded-full border-2 border-blue-400/40 shadow-[0_0_35px_rgba(71,123,255,0.3)] animate-pulse-glow" />

                {/* Cybernetic Neural Core */}
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-[#0D1322] via-[#101426] to-[#0A0D18] border border-blue-500/40 shadow-2xl flex flex-col items-center justify-center p-4 backdrop-blur-xl">
                  {/* Subtle inner grid */}
                  <div className="absolute inset-0 bg-grid-cyber opacity-30 rounded-3xl" />
                  
                  {/* Core glowing icon */}
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/40 mb-2">
                    <Bot className="w-8 h-8 text-white animate-pulse" />
                  </div>

                  <span className="text-xs font-bold tracking-wider text-white uppercase font-heading">
                    AM CORE v4.8
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] text-emerald-400 font-semibold font-mono">
                      SYNAPSE ACTIVE
                    </span>
                  </div>

                  {/* Simulated Waveform in Core */}
                  <div className="flex items-center gap-1 mt-2.5 h-4">
                    {[12, 24, 16, 32, 20, 28, 14, 26, 18].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full"
                        style={{
                          height: `${h * 0.4}px`,
                          animation: `wavePulse 1.${i + 2}s ease-in-out infinite`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Telemetry Card 1 (Top Left): AI Voice Telephony */}
              <div 
                className="absolute -top-4 -left-6 sm:-left-10 glass-card rounded-2xl p-3.5 border border-blue-500/30 shadow-2xl animate-float max-w-[220px] z-20"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                      <Mic className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span className="text-xs font-bold text-white">AI Receptionist</span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-medium">
                    24/7 LIVE
                  </span>
                </div>
                <a
                  href="tel:+918064269500"
                  className="text-[11px] text-blue-300 hover:text-white font-mono font-semibold flex items-center gap-1 mt-0.5 transition-colors"
                >
                  <PhoneCall className="w-3 h-3 text-emerald-400" />
                  <span>+91 80642 69500</span>
                </a>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 pt-1.5 border-t border-white/5 font-mono">
                  <span>Latency: <strong className="text-emerald-400">&lt;240ms</strong></span>
                  <span>Accuracy: <strong className="text-cyan-400">99.4%</strong></span>
                </div>
              </div>

              {/* Floating Telemetry Card 2 (Bottom Right): Autonomous Lead AI */}
              <div 
                className="absolute -bottom-6 -right-4 sm:-right-8 glass-card rounded-2xl p-3.5 border border-purple-500/30 shadow-2xl animate-float-reverse max-w-[220px] z-20"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-purple-400" />
                    </div>
                    <span className="text-xs font-bold text-white">Lead Qualification</span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-medium">
                    MATCHED
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 font-medium">
                  BANT Score: 94/100
                </div>
                <div className="flex items-center gap-1 text-[10px] text-purple-300 mt-2 pt-1.5 border-t border-white/5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>CRM Stage: Deal Qualified</span>
                </div>
              </div>

              {/* Floating Telemetry Card 3 (Bottom Left): Active Throughput */}
              <div 
                className="absolute bottom-12 -left-8 sm:-left-12 glass-card rounded-2xl p-3 border border-cyan-500/30 shadow-2xl animate-float max-w-[180px] hidden sm:block z-10"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-[11px] font-bold text-white">Ops Throughput</span>
                </div>
                <div className="text-lg font-bold font-mono text-cyan-300 leading-tight">
                  1,420<span className="text-xs text-slate-400 font-sans"> tasks/hr</span>
                </div>
                <div className="text-[10px] text-slate-400">Zero error rate</div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
