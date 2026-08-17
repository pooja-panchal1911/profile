import React from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Search,
  Layers,
  Code,
  CheckCircle2,
  Workflow,
  Sparkles,
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/25 text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>06 · Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
            My Creative Process
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            A structured, human-centered framework transforming ambiguous requirements into elegant, high-impact digital experiences.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-3xl bg-neutral-100 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 hover:border-[#2563eb] dark:hover:border-[#2563eb] hover:shadow-xl hover:shadow-[#2563eb]/10 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-[#2563eb]">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 group-hover:text-white group-hover:bg-[#2563eb] transition-colors duration-200 flex items-center justify-center shadow-sm">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-[#2563eb] transition-colors duration-200 mb-2">
                  {step.title}
                </h3>

                {/* Main Short Description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Breakdown Details */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800/80 space-y-1.5">
                {step.details.slice(0, 2).map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400">
                    <span className="text-[#2563eb] font-bold">•</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
