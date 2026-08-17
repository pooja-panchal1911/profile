import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
  Eye,
  Play,
} from 'lucide-react';
import { Project } from '../types';
import { FALLBACK_PROJECT_SVGS } from '../data/mockupImages';
import { BrandIcon, hasBrandIcon } from './BrandIcons';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'solution' | 'interactive'>('overview');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8 lg:p-10 my-auto text-left"
          id="case-study-modal-container"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            id="close-case-study-btn"
            aria-label="Close Case Study"
            className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-white hover:bg-[#2563eb] dark:hover:bg-[#2563eb] transition-colors duration-200 cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-xs font-bold uppercase tracking-wider">
                {project.categoryDisplay}
              </span>
              <span className="text-xs text-neutral-500 font-medium">
                Deep Dive Case Study
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Large Project Visual Display */}
          <div className="relative rounded-2xl overflow-hidden mb-8 border border-neutral-200 dark:border-neutral-800 bg-neutral-950 aspect-[16/9]">
            <img
              src={project.image}
              alt={`${project.title} Interface Showcase`}
              className="w-full h-full object-contain"
              onError={(e) => {
                const fallback = FALLBACK_PROJECT_SVGS[project.id];
                if (fallback && e.currentTarget.src !== fallback) {
                  e.currentTarget.src = fallback;
                }
              }}
            />
          </div>

          {/* Key Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center sm:text-left"
                >
                  <span className="block text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 mb-1">
                    {metric.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#2563eb]">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeTab === 'overview'
                  ? 'bg-[#2563eb] text-white shadow-md shadow-[#2563eb]/20'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              Challenge &amp; Architecture
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeTab === 'solution'
                  ? 'bg-[#2563eb] text-white shadow-md shadow-[#2563eb]/20'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              Key Features &amp; Outcomes
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6 text-sm text-neutral-700 dark:text-neutral-300">
              {project.challenge && (
                <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#2563eb]" />
                    The Design &amp; Technical Challenge
                  </h4>
                  <p className="leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#2563eb]" />
                    The Implemented Solution
                  </h4>
                  <p className="leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'solution' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-3">
                Core Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features?.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack Badges */}
          <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                >
                  {hasBrandIcon(tech) && <BrandIcon name={tech} size={14} className="shrink-0" />}
                  <span>{tech}</span>
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="modal-visit-live-link"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold shadow-md shadow-[#2563eb]/25 transition-all cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Visit Live Website</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white text-xs font-bold transition-all cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
