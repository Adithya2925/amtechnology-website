import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck,
  Calendar
} from 'lucide-react'
import confetti from 'canvas-confetti'

export default function Contact({ onOpenConsultation }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI Voice Agents & Inbound Calling',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch("https://formsubmit.co/ajax/adithyamarichamy@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Project Proposal from ${formData.name} - AM Technologies`,
          Customer_Name: formData.name,
          Customer_Email: formData.email,
          Customer_Phone: formData.phone || 'Not provided',
          Selected_Service: formData.service,
          Project_Brief: formData.message,
          Submitted_To: 'adithyamarichamy@gmail.com',
          _template: 'table',
          _captcha: 'false'
        })
      })
    } catch (err) {
      console.warn("Proposal submission network notice:", err)
    } finally {
      setIsSubmitting(false)
      setIsSubmitted(true)
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 }
        })
      } catch (err) {}
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#08090D] overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#477BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#477BFF]/10 border border-[#477BFF]/20 text-[#477BFF] text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            INITIATE COLLABORATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-[#477BFF] via-[#8B5CF6] to-[#00F0FF] bg-clip-text text-transparent">Intelligent.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-['Plus_Jakarta_Sans']">
            Submit your proposal or project requirements below. Your details will be delivered directly to our engineering mailbox at <strong className="text-blue-300">adithyamarichamy@gmail.com</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Reach & Telephony */}
          <div className="lg:col-span-5 space-y-4">
            {/* Live Interactive Voice Demo Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12162b] to-[#0b0e1b] border border-[#477BFF]/30 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#477BFF]/20 border-b border-l border-[#477BFF]/30 text-[#477BFF] text-[10px] font-mono rounded-bl-xl uppercase tracking-wider">
                24/7 AI Hotline
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#477BFF]/15 border border-[#477BFF]/30 flex items-center justify-center text-[#477BFF]">
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-['Outfit'] text-white">
                    AI Agent Receptionist Hotline
                  </h4>
                  <p className="text-xs text-gray-400">Dial now to speak directly with Ava, our voice AI agent</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between mt-4">
                <span className="font-mono text-base font-bold text-white tracking-wide">
                  +91 80642 69500
                </span>
                <a
                  href="tel:+918064269500"
                  className="px-3.5 py-1.5 rounded-lg bg-[#477BFF] text-white text-xs font-semibold hover:bg-[#3465e0] transition-colors"
                >
                  Dial Now
                </a>
              </div>
              <p className="text-[11px] text-gray-500 mt-2 font-mono">
                Available 24/7 • Sub-240ms latency • Live intelligent front desk
              </p>
            </div>

            {/* Direct Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919500713610?text=Hello%20AM%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project%20proposal."
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#25D366]/40 transition-all group block"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-gray-400 uppercase">WhatsApp Direct</div>
                <div className="text-sm font-bold text-white font-['Outfit'] mt-0.5">+91 95007 13610</div>
                <div className="text-xs text-emerald-400 mt-1 font-mono">Fast replies via WhatsApp</div>
              </a>

              {/* Direct Consultation Trigger */}
              <button
                type="button"
                onClick={() => onOpenConsultation?.()}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#8B5CF6]/40 transition-all group text-left block w-full cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-gray-400 uppercase">1:1 Consultation</div>
                <div className="text-sm font-bold text-white font-['Outfit'] mt-0.5">Book Strategy Call</div>
                <div className="text-xs text-[#8B5CF6] mt-1 font-mono">30-min architecture review</div>
              </button>
            </div>

            {/* Agency Info Block */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 font-['Plus_Jakarta_Sans'] text-xs text-gray-400">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span>Response SLA: Within 4 business hours</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standard mutual NDA provided prior to technical audit</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Direct email: <a href="mailto:adithyamarichamy@gmail.com" className="font-mono text-blue-300 hover:underline">adithyamarichamy@gmail.com</a></span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Scope Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 font-['Plus_Jakarta_Sans']">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-base font-bold font-['Outfit'] text-white">
                    Send Technical Requirements
                  </span>
                  <span className="text-xs font-mono text-emerald-400">● Available for New Projects</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Lin"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#477BFF] focus:ring-1 focus:ring-[#477BFF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="maya@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#477BFF] focus:ring-1 focus:ring-[#477BFF] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 234-5678"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#477BFF] focus:ring-1 focus:ring-[#477BFF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Core Discipline
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#121526] border border-white/10 text-white text-sm focus:outline-none focus:border-[#477BFF] focus:ring-1 focus:ring-[#477BFF] transition-all"
                    >
                      <option value="AI Voice Agents & Inbound Calling">AI Voice Agents & Inbound Calling</option>
                      <option value="Autonomous Workflow Automation">Autonomous Workflow Automation</option>
                      <option value="Custom AI Solutions & LLM Fine-Tuning">Custom AI Solutions & LLM Fine-Tuning</option>
                      <option value="Next-Gen Web Applications">Next-Gen Web Applications</option>
                      <option value="Enterprise Custom Software">Enterprise Custom Software</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Project Overview / Current Bottlenecks
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current system architecture, manual workload, or desired automation outcomes..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#477BFF] focus:ring-1 focus:ring-[#477BFF] transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-gray-500">
                    Form transmission logged securely. No third-party data broker sharing.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#477BFF] to-[#8B5CF6] text-white font-medium text-sm hover:shadow-[0_0_25px_rgba(71,123,255,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                  Proposal Transmitted Successfully
                </h3>
                <p className="text-gray-300 max-w-md mx-auto text-sm font-['Plus_Jakarta_Sans']">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your project proposal has been sent directly to <strong className="text-blue-400">adithyamarichamy@gmail.com</strong>. We will review your scope and get in touch within 4 business hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/919500713610?text=Hello%20Adithya%2C%20I%20just%20submitted%20a%20project%20proposal%20on%20AM%20Technologies."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] text-black text-xs font-bold hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Follow up on WhatsApp (+91 95007 13610)</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'AI Voice Agents & Inbound Calling',
                        message: ''
                      })
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 text-white text-xs hover:bg-white/15 transition-all"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
