import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Sparkles, ChevronRight, MessageSquare } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'AI Agents', href: '#ai-agents', highlight: true },
    { name: 'Process', href: '#process' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Single sticky navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090D]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40 py-2'
            : 'bg-[#08090D]/60 backdrop-blur-md border-b border-white/[0.04] py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group focus:outline-none shrink-0">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#477BFF] to-[#8B5CF6] p-[1.5px] group-hover:scale-105 transition-transform duration-200 shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-[#08090D] rounded-xl flex items-center justify-center overflow-hidden">
                  <img src="/logo-icon.svg" alt="AM Technologies" className="w-6 h-6 object-contain" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold tracking-tight text-white">
                    AM<span className="text-[#477BFF]">.</span>TECH
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AI ACTIVE
                  </span>
                </div>
                <span className="hidden sm:block text-[9px] uppercase tracking-wider text-slate-500 font-medium mt-0.5">
                  Intelligent Technology
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                    link.highlight
                      ? 'text-white bg-blue-500/15 border border-blue-400/25'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  } ${activeLink === link.name && !link.highlight ? 'text-white' : ''}`}
                >
                  {link.highlight && (
                    <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              {/* AI Receptionist phone */}
              <a
                href="tel:+918064269500"
                title="24/7 AI Receptionist"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/18 border border-blue-500/20 text-blue-300 hover:text-white text-xs font-mono font-semibold transition-all duration-150"
              >
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <Phone className="w-3.5 h-3.5 shrink-0" />
                +91 80642 69500
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919500713610?text=Hello%20AM%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                title="WhatsApp: +91 95007 13610"
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#25D366] transition-all duration-150 hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Book Consultation */}
              <button
                onClick={onOpenConsultation}
                className="relative inline-flex items-center gap-1.5 h-8 px-4 text-sm font-semibold text-white rounded-lg overflow-hidden shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 cursor-pointer focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#477BFF] to-[#8B5CF6]" />
                <span className="relative flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                  Book Consultation
                </span>
              </button>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:+918064269500"
                title="Call AI Receptionist"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/25 text-blue-300"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenConsultation}
                className="px-3 py-2 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-md shadow-blue-500/20"
              >
                Book Call
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed inset-x-3 top-[68px] z-40 lg:hidden bg-[#0c0e18]/97 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/60 px-4 py-4 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    link.highlight
                      ? 'bg-blue-500/10 border border-blue-500/25 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-white/8 flex flex-col gap-2">
                <a
                  href="tel:+918064269500"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-white text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <div>
                      <div className="text-[10px] text-blue-300">24/7 AI Receptionist</div>
                      <div className="font-mono font-bold text-white text-xs">+91 80642 69500</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-[10px] font-bold">Call</span>
                </a>

                <a
                  href="https://wa.me/919500713610?text=Hello%20AM%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-white text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <div>
                      <div className="text-[10px] text-emerald-300">WhatsApp Direct</div>
                      <div className="font-mono font-bold text-white text-xs">+91 95007 13610</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-[#25D366] text-black text-[10px] font-bold">Chat</span>
                </a>

                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 mt-1"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  Book Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

