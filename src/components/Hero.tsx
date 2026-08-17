import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  FileText,
  Linkedin,
  Github,
  Mail,
  Sparkles,
  Palette,
  Code2,
  Globe,
  Layers,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PLACEHOLDER_IMAGES } from '../data/mockupImages';
import { BrandIcon } from './BrandIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-[#2563eb]/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Availability & Badge Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              {/* Role badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/30 text-[#2563eb] text-xs sm:text-sm font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.badge}</span>
              </div>

              {/* Available for Opportunities indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{PERSONAL_INFO.availability}</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[62px] font-semibold tracking-tight leading-[1.12] text-neutral-900 dark:text-white mb-6"
            >
              Designing &amp; Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#0284c7] font-semibold">
                Digital Experiences
              </span>{' '}
              That Matter.
            </motion.h1>

            {/* Supporting Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl font-normal leading-relaxed mb-8"
            >
              {PERSONAL_INFO.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              {/* View My Work Button */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                id="hero-view-work-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#2563eb]/30 hover:shadow-xl hover:shadow-[#2563eb]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                id="hero-download-resume-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white font-bold text-sm border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-200 cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#2563eb]" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Social Icons & Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-neutral-200 dark:border-neutral-800/80 w-full"
            >
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pooja Panchal on LinkedIn"
                  className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-[#2563eb] dark:hover:bg-[#2563eb] border border-neutral-200 dark:border-neutral-800 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pooja Panchal on GitHub"
                  className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-[#2563eb] dark:hover:bg-[#2563eb] border border-neutral-200 dark:border-neutral-800 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Send Email to Pooja Panchal"
                  className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-[#2563eb] dark:hover:bg-[#2563eb] border border-neutral-200 dark:border-neutral-800 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-800 hidden sm:block" />

              <div className="flex items-center gap-6 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                <div>
                  <span className="font-bold text-neutral-900 dark:text-white mr-1.5 text-sm">
                    {PERSONAL_INFO.yearsExperience}
                  </span>
                  Experience
                </div>
                <div>
                  <span className="font-bold text-neutral-900 dark:text-white mr-1.5 text-sm">
                    {PERSONAL_INFO.projectsCompleted}
                  </span>
                  Projects
                </div>
                <div>
                  <span className="font-bold text-[#2563eb] mr-1.5 text-sm">
                    {PERSONAL_INFO.satisfactionRate}
                  </span>
                  Satisfaction
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Hero Visual & Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Background Decorative Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-neutral-300 dark:border-neutral-800/80 -z-10" />
              <div className="w-[440px] h-[440px] sm:w-[520px] sm:h-[520px] rounded-full border border-neutral-200/60 dark:border-neutral-800/40 border-dashed -z-10" />
            </div>

            {/* Central Visual Art / Mockup Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[440px] aspect-square rounded-3xl overflow-hidden p-2 bg-gradient-to-br from-neutral-200/80 via-neutral-100/50 to-neutral-200/80 dark:from-neutral-800/80 dark:via-neutral-900/90 dark:to-neutral-950/90 border border-neutral-300/80 dark:border-neutral-800 shadow-2xl shadow-black/20"
            >
              <img
                src={PLACEHOLDER_IMAGES.hero}
                alt="Pooja Panchal Design & Code Studio Visual"
                className="w-full h-full object-contain rounded-2xl"
                loading="eager"
              />
            </motion.div>

            {/* Floating Card 01: UI/UX Design (Figma) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-4 -left-4 sm:-left-8 p-3 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-[#2563eb]/40 shadow-xl shadow-black/10 flex items-center gap-3 animate-float-slow z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shadow-inner">
                <BrandIcon name="figma" size={22} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-neutral-900 dark:text-white">
                  UI/UX Design
                </span>
                <span className="block text-[10px] text-[#2563eb] font-medium">
                  Figma · Prototypes
                </span>
              </div>
            </motion.div>

            {/* Floating Card 02: Frontend Development (React) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-1/4 -right-4 sm:-right-8 p-3 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-sky-500/40 shadow-xl shadow-black/10 flex items-center gap-3 animate-float-reverse z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shadow-inner">
                <BrandIcon name="react" size={22} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-neutral-900 dark:text-white">
                  Frontend Development
                </span>
                <span className="block text-[10px] text-sky-500 font-medium">
                  React · TypeScript
                </span>
              </div>
            </motion.div>

            {/* Floating Card 03: WordPress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 -left-2 sm:-left-6 p-3 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-blue-500/40 shadow-xl shadow-black/10 flex items-center gap-3 animate-float-slow z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shadow-inner">
                <BrandIcon name="wordpress" size={22} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-neutral-900 dark:text-white">
                  WordPress
                </span>
                <span className="block text-[10px] text-blue-500 font-medium">
                  Elementor · CMS
                </span>
              </div>
            </motion.div>

            {/* Floating Card 04: Webflow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-6 right-2 sm:right-0 p-3 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-indigo-500/40 shadow-xl shadow-black/10 flex items-center gap-3 animate-float-reverse z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shadow-inner">
                <BrandIcon name="webflow" size={22} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-neutral-900 dark:text-white">
                  Webflow
                </span>
                <span className="block text-[10px] text-indigo-500 font-medium">
                  Interactions · No-Code
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
