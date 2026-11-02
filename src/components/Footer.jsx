import { Phone, MessageSquare, Mail, ArrowUpRight, Sparkles } from 'lucide-react'

export default function Footer({ onOpenConsultation }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-[#050609] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-gray-400 font-['Plus_Jakarta_Sans'] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/3 w-[600px] h-32 bg-[#477BFF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo-icon.svg" alt="AM Technologies" className="w-9 h-9" />
              <span className="text-xl font-extrabold font-['Outfit'] text-white tracking-wider">
                AM <span className="bg-gradient-to-r from-[#477BFF] to-[#8B5CF6] bg-clip-text text-transparent">TECHNOLOGIES</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Transforming Businesses with Intelligent Technology. We architect production-grade AI voice agents, autonomous workflows, and custom enterprise software for high-growth operations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#477BFF] hover:bg-[#477BFF]/10 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.46a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#477BFF] hover:bg-[#477BFF]/10 transition-all"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#477BFF] hover:bg-[#477BFF]/10 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column: Core Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Voice Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Workflow Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Custom LLM &amp; RAG
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Modern Web Platforms
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Enterprise Software
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('ai-agents')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Agent Simulator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('why-us')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Why AM Technologies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('process')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  5-Stage Blueprint
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('tech-stack')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tech Stack
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Direct Telephony & Hotline */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+918064269500"
                className="flex items-center gap-2 hover:text-[#477BFF] transition-colors"
                title="Call 24/7 AI Receptionist"
              >
                <Phone className="w-3.5 h-3.5 text-[#477BFF]" />
                <span className="font-mono text-xs text-white">+91 80642 69500 <span className="text-[10px] text-blue-300 font-sans">(AI Receptionist)</span></span>
              </a>
              <a
                href="https://wa.me/919500713610?text=Hello%20AM%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="font-mono text-xs text-white">+91 95007 13610 <span className="text-[10px] text-emerald-300 font-sans">(WhatsApp)</span></span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <a href="mailto:adithyamarichamy@gmail.com" className="text-xs font-mono text-slate-300 hover:text-white hover:underline">
                  adithyamarichamy@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation?.()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#477BFF]/10 border border-[#477BFF]/30 text-[#477BFF] text-xs font-medium hover:bg-[#477BFF]/20 transition-all cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} AM Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-gray-400">Systems Operational • AI Infrastructure Active</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
