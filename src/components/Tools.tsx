import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Wrench,
  Sparkles,
  Layers,
  Code,
  Palette,
  Check,
} from 'lucide-react';
import { TOOLS_DATA } from '../data/portfolioData';
import { BrandIcon } from './BrandIcons';

export const Tools: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Design', 'Frontend', 'CMS & No-Code', 'Animation & Dev'];

  const filteredTools =
    activeCategory === 'All'
      ? TOOLS_DATA
      : TOOLS_DATA.filter((t) => t.category === activeCategory);

  return (
    <section id="tools" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/25 text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>07 · Toolkit &amp; Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
            Tools I Use
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Industry-standard design applications, development toolchains, and modern no-code platforms I leverage daily.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2563eb] text-white shadow-md shadow-[#2563eb]/20'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Elegant Tool Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {filteredTools.map((tool, idx) => (
            <motion.div
              layout
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              whileHover={{ y: -4 }}
              className="group relative p-5 rounded-2xl bg-neutral-100 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 hover:border-[#2563eb] dark:hover:border-[#2563eb] hover:shadow-xl hover:shadow-[#2563eb]/10 transition-all duration-200 flex flex-col items-center text-center justify-between"
            >
              {/* Tool Icon container */}
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:border-[#2563eb] group-hover:scale-110 transition-all duration-200 shadow-sm mb-3">
                <BrandIcon name={tool.name} size={26} />
              </div>

              {/* Tool Name */}
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#2563eb] transition-colors duration-200 mb-1">
                {tool.name}
              </h3>

              {/* Sub-badge / Category */}
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-medium">
                {tool.category}
              </span>

              {/* Proficiency pill */}
              {tool.badge && (
                <span className="mt-3 px-2 py-0.5 rounded-md bg-white dark:bg-neutral-800 text-[9px] font-bold text-[#2563eb] border border-neutral-200 dark:border-neutral-700">
                  {tool.badge}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
