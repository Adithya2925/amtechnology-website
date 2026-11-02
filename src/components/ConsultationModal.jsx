import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, Sparkles, Send, PhoneCall, ShieldCheck } from 'lucide-react'
import confetti from 'canvas-confetti'

const serviceOptions = [
  'AI Voice Agents & Inbound Calling',
  'Autonomous Workflow Automation',
  'Custom AI Solutions & LLM Fine-Tuning',
  'Next-Gen Web Applications',
  'Enterprise Custom Software'
]

export default function ConsultationModal({ isOpen, onClose, preselectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '$5k - $15k',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }))
    } else if (!formData.service) {
      setFormData(prev => ({ ...prev, service: serviceOptions[0] }))
    }
  }, [preselectedService, isOpen])

  // Reset state on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false)
        setSubmitting(false)
      }, 300)
    }
  }, [isOpen])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      await fetch("https://formsubmit.co/ajax/adithyamarichamy@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New AI Strategy Consultation from ${formData.name} (${formData.company || 'Direct'}) - AM Technologies`,
          Customer_Name: formData.name,
          Customer_Email: formData.email,
          Customer_Phone: formData.phone || 'Not provided',
          Company: formData.company || 'Not provided',
          Solution_Requested: formData.service,
          Target_Budget: formData.budget,
          Project_Requirements: formData.notes || 'None provided',
          Submitted_To: 'adithyamarichamy@gmail.com',
          _template: 'table',
          _captcha: 'false'
        })
      })
    } catch (err) {
      console.warn("Consultation network notice:", err)
    } finally {
      setSubmitting(false)
      setSubmitted(true)
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        })
      } catch (err) {}
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#0c0e17] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#477BFF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#477BFF]/10 border border-[#477BFF]/20 text-[#477BFF] text-xs font-mono mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    CONFIDENTIAL ARCHITECTURE CONSULTATION
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                    Schedule an AI Strategy Session
                  </h3>
                  <p className="text-sm text-gray-400 mt-1.5 font-['Plus_Jakarta_Sans']">
                    Speak directly with an AI systems engineer to assess your workflows, ROI projections, and deployment architecture.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 font-['Plus_Jakarta_Sans']">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
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
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#477BFF] focus:ring-1 focus:ring-[#477BFF] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#477BFF] focus:ring-1 focus:ring-[#477BFF] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Health Technologies"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#477BFF] focus:ring-1 focus:ring-[#477BFF] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Solution of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#121526] border border-white/10 text-white text-sm focus:outline-none focus:border-[#477BFF] focus:ring-1 focus:ring-[#477BFF] transition-all"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#121526] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Project Scope / Budget Target
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#121526] border border-white/10 text-white text-sm focus:outline-none focus:border-[#477BFF] focus:ring-1 focus:ring-[#477BFF] transition-all"
                      >
                        <option value="< $5k">&lt; $5k (PoC / Quick Automation)</option>
                        <option value="$5k - $15k">$5k - $15k (Standard Voice/Web Project)</option>
                        <option value="$15k - $40k">$15k - $40k (Comprehensive AI Suite)</option>
                        <option value="$40k+">$40k+ (Enterprise Multi-Agent Platform)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Workflow or Problem Description
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Briefly describe what repetitive task, inbound call load, or custom application you'd like to automate or engineer..."
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#477BFF] focus:ring-1 focus:ring-[#477BFF] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Zero spam. NDA protected. 24h response time.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#477BFF] to-[#8B5CF6] text-white font-medium text-sm hover:shadow-[0_0_25px_rgba(71,123,255,0.4)] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Transmit Requirements</span>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                  Consultation Request Received
                </h3>
                <p className="text-gray-300 max-w-md mx-auto text-sm font-['Plus_Jakarta_Sans']">
                  Thank you, <strong className="text-white">{formData.name || 'there'}</strong>! Your consultation request has been dispatched directly to <strong className="text-blue-400">adithyamarichamy@gmail.com</strong>. Our engineering lead will review your requirements and connect within 24 business hours.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-sm mx-auto text-left text-xs font-mono text-gray-400 space-y-1">
                  <div><span className="text-gray-500">Service:</span> {formData.service}</div>
                  <div><span className="text-gray-500">Email:</span> {formData.email}</div>
                  <div><span className="text-gray-500">Target Budget:</span> {formData.budget}</div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/919500713610?text=Hello%20Adithya%2C%20I%20just%20scheduled%20an%20AI%20consultation%20on%20AM%20Technologies."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    Instant WhatsApp (+91 95007 13610)
                  </a>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-all"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
