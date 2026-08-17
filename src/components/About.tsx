import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  CheckCircle,
  Layout,
  Smartphone,
  Compass,
  Cpu,
} from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const statIcons = [
    <Layout className="w-5 h-5 text-[#2563eb]" key="layout" />,
    <Smartphone className="w-5 h-5 text-sky-500" key="smartphone" />,
    <Compass className="w-5 h-5 text-emerald-500" key="compass" />,
    <Cpu className="w-5 h-5 text-purple-500" key="cpu" />,
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/25 text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 · Background &amp; Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            {ABOUT_DATA.heading}
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Professional Portrait Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-300 dark:border-neutral-800 shadow-xl">
              <img
                src={ABOUT_DATA.image}
                alt="Pooja Panchal Portrait and Studio Craft"
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />

              {/* Floating aesthetic stamp */}
              <div className="absolute bottom-6 right-6 px-4 py-2.5 rounded-xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-[#2563eb]/30 shadow-lg flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb] animate-pulse" />
                <span className="text-xs font-bold text-neutral-900 dark:text-white">
                  Design · Code · Deliver
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Four Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Story Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed mb-8">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'text-neutral-900 dark:text-white font-medium' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* Four Required Stats / Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ABOUT_DATA.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 hover:border-[#2563eb]/40 transition-colors duration-200 flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-xl bg-white dark:bg-neutral-800 shadow-sm shrink-0">
                    {statIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-[#2563eb] font-semibold mt-0.5">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Value Highlights */}
            <div className="space-y-3 pt-6 border-t border-neutral-200 dark:border-neutral-800/80">
              {ABOUT_DATA.highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                    <strong className="text-neutral-900 dark:text-white font-semibold mr-1.5">
                      {item.title}:
                    </strong>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
