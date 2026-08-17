import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/25 text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 · Career Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
            My Experience
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            A proven track record of architecting user-centered interfaces and delivering high-performance web products.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central stem line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-neutral-200 dark:bg-neutral-800" />

          <div className="space-y-12">
            {EXPERIENCE_ITEMS.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 w-8 h-8 rounded-full bg-white dark:bg-[#0a0a0a] border-2 border-[#2563eb] flex items-center justify-center shadow-lg shadow-[#2563eb]/20 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" />
                  </div>

                  {/* Empty spacer for alternating desktop layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Container */}
                  <div
                    className={`w-full pl-12 md:pl-0 md:w-1/2 ${
                      isEven ? 'md:pr-10' : 'md:pl-10'
                    }`}
                  >
                    <div className="p-6 sm:p-8 rounded-3xl bg-neutral-100 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 hover:border-[#2563eb]/50 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                      
                      {/* Header row: Job Title & Company */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-xs font-semibold mb-2">
                            {item.duration}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                            {item.jobTitle}
                          </h3>
                          <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-1">
                            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                              {item.company}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Summary description */}
                      <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Responsibilities list */}
                      <div className="space-y-2.5 mb-6">
                        {item.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-snug">
                              {resp}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies pills */}
                      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
