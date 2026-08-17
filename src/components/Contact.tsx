import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  Send,
  Sparkles,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PLACEHOLDER_IMAGES } from '../data/mockupImages';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    budget: '$3k — $5k',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: 'Web Development',
        budget: '$3k — $5k',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card Wrapper */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-neutral-100 to-neutral-200/80 dark:from-[#111111] dark:to-[#090909] border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2563eb]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Bio, Buttons & Form */}
            <div className="lg:col-span-7 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/25 text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-6">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>09 · Start a Conversation</span>
              </div>

              {/* Main Section Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-[1.15] mb-6">
                Let's Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#0284c7]">
                  Great Together.
                </span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-xl">
                Have a website, product or creative idea in mind? Let's turn your idea into a modern and engaging digital experience.
              </p>

              {/* Buttons: Let's Talk & Download Resume */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20for%20Pooja%20Panchal`}
                  id="contact-lets-talk-btn"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#2563eb]/30 hover:shadow-xl hover:shadow-[#2563eb]/40 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Let's Talk</span>
                </a>

                <button
                  onClick={onOpenResume}
                  id="contact-download-resume-btn"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white font-bold text-sm border border-neutral-300 dark:border-neutral-700 transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <FileText className="w-4 h-4 text-[#2563eb]" />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Interactive Direct Message Form */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#161616] border border-neutral-200 dark:border-neutral-800 shadow-lg mb-8">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-4 flex items-center justify-between">
                  <span>Send Direct Message</span>
                  <span className="text-xs font-medium text-emerald-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Fast Response
                  </span>
                </h3>

                {formStatus === 'success' ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-2">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-neutral-900 dark:text-white">Message Sent Successfully!</h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                      Thank you! Pooja will review your inquiry and get back to you promptly.
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="mt-4 px-4 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-bold"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#2563eb]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#2563eb]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                          Project Focus
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#2563eb]"
                        >
                          <option value="UI/UX Design">UI/UX Design &amp; Figma</option>
                          <option value="Web Development">Frontend Web Development</option>
                          <option value="WordPress Site">WordPress &amp; Elementor</option>
                          <option value="Webflow Project">Webflow Platform</option>
                          <option value="Full Project">Full Design + Development</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#2563eb]"
                        >
                          <option value="Under $2k">&lt; $2,000</option>
                          <option value="$2k — $5k">$2,000 — $5,000</option>
                          <option value="$5k — $10k">$5,000 — $10,000</option>
                          <option value="$10k+">$10,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                        Project Brief / Message *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your goals, timelines, and requirements..."
                        className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#2563eb]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#2563eb]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {formStatus === 'submitting' ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Submit Project Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Social Channels & Email Copy */}
              <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                {/* Copy Email Button */}
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:border-[#2563eb] transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span>{PERSONAL_INFO.email}</span>
                  {copied ? (
                    <span className="text-emerald-500 font-bold ml-1">Copied!</span>
                  ) : (
                    <Copy className="w-3 h-3 text-neutral-400 ml-1" />
                  )}
                </button>

                {/* Social Links */}
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="p-2.5 rounded-xl bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-[#2563eb] dark:hover:bg-[#2563eb] border border-neutral-200 dark:border-neutral-800 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="p-2.5 rounded-xl bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-[#2563eb] dark:hover:bg-[#2563eb] border border-neutral-200 dark:border-neutral-800 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Dummy Abstract Technology / Creative Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="rounded-3xl overflow-hidden p-2 bg-white dark:bg-[#161616] border border-neutral-200 dark:border-neutral-800 shadow-2xl w-full max-w-[460px]">
                <img
                  src={PLACEHOLDER_IMAGES.contact}
                  alt="Creative Design & Digital Studio Visual"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
