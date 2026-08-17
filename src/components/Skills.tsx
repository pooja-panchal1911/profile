import React from 'react';
import { motion } from 'motion/react';
import {
  Palette,
  Code2,
  Globe,
  Sparkles,
  ArrowRight,
  Layers,
  Zap,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { BrandIcon, hasBrandIcon } from './BrandIcons';

export const Skills: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Code2':
        return <Code2 className="w-6 h-6" />;
      case 'Globe':
        return <Globe className="w-6 h-6" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/25 text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>03 · Capabilities &amp; Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
            What I Do
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Combining empathetic design thinking with modern frontend engineering to deliver seamless, performant digital solutions.
          </p>
        </div>

        {/* Four Large Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-neutral-100/90 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 hover:border-[#2563eb] dark:hover:border-[#2563eb] hover:shadow-2xl hover:shadow-[#2563eb]/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card top row */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700/80 flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:text-white group-hover:bg-[#2563eb] group-hover:border-[#2563eb] transition-all duration-300 shadow-sm">
                    {getIcon(cat.iconName)}
                  </div>
                  <span className="font-mono text-2xl font-bold text-neutral-400 dark:text-neutral-600 group-hover:text-[#2563eb] transition-colors duration-300">
                    {cat.number}
                  </span>
                </div>

                {/* Card Title & Description */}
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-[#2563eb] transition-colors duration-200 mb-3">
                  {cat.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8">
                  {cat.description}
                </p>
              </div>

              {/* Skills Tags List */}
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                  Core Technologies &amp; Methods
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-xs font-semibold text-neutral-800 dark:text-neutral-200 group-hover:border-[#2563eb]/40 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800 transition-all duration-200 shadow-2xs"
                    >
                      {hasBrandIcon(skill) && <BrandIcon name={skill} size={14} className="shrink-0" />}
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#2563eb]/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
