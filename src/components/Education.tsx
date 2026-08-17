import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { PLACEHOLDER_IMAGES } from '../data/mockupImages';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/25 text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>08 · Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Rigorous engineering foundation grounding modern software architecture, HCI research, and computational logic.
          </p>
        </div>

        {/* Minimal Premium Education Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Education Degree Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-neutral-100 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 hover:border-[#2563eb]/50 shadow-xl text-left"
          >
            {/* Header with Cap Icon & Honors */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#2563eb]/15 flex items-center justify-center text-[#2563eb] shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#2563eb]/10 text-[#2563eb] text-xs font-bold mb-1">
                    {EDUCATION_DATA.period}
                  </span>
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="text-base font-semibold text-[#2563eb]">
                    {EDUCATION_DATA.field}
                  </p>
                </div>
              </div>
            </div>

            {/* Institution & Location */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
              <span className="font-bold text-neutral-800 dark:text-neutral-200">
                {EDUCATION_DATA.institution}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                {EDUCATION_DATA.location}
              </span>
              <span>•</span>
              <span className="text-emerald-500 font-semibold">
                {EDUCATION_DATA.grade}
              </span>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
              {EDUCATION_DATA.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Relevant Skills Acquired */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <span className="block text-xs uppercase font-bold tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                Core Coursework &amp; Competencies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {EDUCATION_DATA.skillsGained.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 text-[11px] font-semibold text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dummy Education / Engineering Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl overflow-hidden p-2 bg-neutral-100 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 shadow-xl">
              <img
                src={PLACEHOLDER_IMAGES.education}
                alt="Engineering Academic Foundation Visual"
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
