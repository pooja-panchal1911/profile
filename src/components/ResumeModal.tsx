import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  Printer,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCE_ITEMS,
  SKILL_CATEGORIES,
  EDUCATION_DATA,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate clean text/markdown/html download
    const resumeContent = `
POOJA PANCHAL
UI/UX Designer & Web Developer
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY
UI/UX Designer and Web Developer with 5+ years of experience designing high-converting user interfaces and building modern responsive websites across React, TypeScript, WordPress, Elementor, and Webflow.

CORE SKILLS
- UI/UX Design: Figma, Photoshop, Canva, Wireframing, Prototyping, Design Systems
- Frontend: HTML5, CSS3, JavaScript, React.js, TypeScript, Tailwind CSS, SCSS
- CMS & No-Code: WordPress, Elementor, Webflow, UiChemy
- Motion: GSAP, Framer Motion, CSS Animations, Micro-interactions

EXPERIENCE
${EXPERIENCE_ITEMS.map(
  (e) => `
${e.jobTitle} — ${e.company} (${e.duration})
${e.description}
Key Responsibilities:
${e.responsibilities.map((r) => `- ${r}`).join('\n')}
Tech: ${e.technologies.join(', ')}
`
).join('\n')}

EDUCATION
${EDUCATION_DATA.degree} in ${EDUCATION_DATA.field}
${EDUCATION_DATA.institution} — ${EDUCATION_DATA.grade}
    `.trim();

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Pooja_Panchal_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md -z-10"
        />

        {/* Modal Paper Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#121212] text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-10 my-auto text-left"
          id="resume-modal-content"
        >
          {/* Top action bar */}
          <div className="sticky top-0 -mt-4 sm:-mt-6 -mx-4 sm:-mx-8 px-4 sm:px-8 py-3.5 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between z-30 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" />
              <span className="text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                Official Curriculum Vitae
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-semibold transition-colors cursor-pointer"
                title="Print Resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base font-semibold text-[#2563eb] mt-0.5">
                  {PERSONAL_INFO.role}
                </p>
              </div>

              <div className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span>linkedin.com/in/poojapanchal-design</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span>github.com/pooja-panchal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Executive Summary
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
           UI/UX Designer and Web Developer focused on creating clean, modern, and user-centered digital experiences. Skilled in translating Figma designs into responsive, high-quality websites and web applications using React, TypeScript, Tailwind CSS, WordPress, Elementor, and Webflow, with a strong focus on usability, performance, and visual consistency.
            </p>
          </div>

          {/* Core Skills */}
          <div className="mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Core Technical &amp; Design Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <strong className="block text-neutral-900 dark:text-white font-semibold mb-1">
                  UI/UX Design:
                </strong>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Figma, Photoshop, Canva, Wireframing, Prototyping, Design Systems, Responsive UI
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <strong className="block text-neutral-900 dark:text-white font-semibold mb-1">
                  Frontend Development:
                </strong>
                <p className="text-neutral-600 dark:text-neutral-400">
                  HTML5, CSS3, JavaScript (ES6+), React.js, TypeScript, Tailwind CSS, SCSS
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <strong className="block text-neutral-900 dark:text-white font-semibold mb-1">
                  CMS &amp; No-Code Platforms:
                </strong>
                <p className="text-neutral-600 dark:text-neutral-400">
                  WordPress, Elementor, Webflow, UiChemy, Custom PHP Themes
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <strong className="block text-neutral-900 dark:text-white font-semibold mb-1">
                  Motion &amp; Interactions:
                </strong>
                <p className="text-neutral-600 dark:text-neutral-400">
                  GSAP, Framer Motion, CSS Animations, Micro-interactions, Git/GitHub
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
              Work Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCE_ITEMS.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                      {item.jobTitle}
                    </h4>
                    <span className="text-xs font-semibold text-[#2563eb]">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-2">
                    {item.company} • {item.location}
                  </p>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400 list-disc list-inside">
                    {item.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Education
            </h3>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {EDUCATION_DATA.degree} in {EDUCATION_DATA.field}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {EDUCATION_DATA.institution} • {EDUCATION_DATA.location}
                </p>
              </div>
              <span className="text-xs font-semibold text-[#2563eb]">
                {EDUCATION_DATA.grade}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
