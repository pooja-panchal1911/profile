import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderGit2,
  ArrowUpRight,
  Eye,
  FileText,
  Sparkles,
  Layers,
  ExternalLink,
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { FALLBACK_PROJECT_SVGS } from '../data/mockupImages';
import { CaseStudyModal } from './CaseStudyModal';
import { BrandIcon, hasBrandIcon } from './BrandIcons';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'UI/UX',
  'Frontend',
  'WordPress',
  'Webflow',
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(
    null
  );

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/25 text-[#2563eb] text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>05 · Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
            Selected Work
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            A curated collection of client websites, web applications, and UI/UX design systems engineered for real-world impact.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`filter-btn-${cat.toLowerCase()}`}
                className={`relative px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/25 scale-105'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col rounded-3xl bg-neutral-100 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 hover:border-[#2563eb] dark:hover:border-[#2563eb] hover:shadow-2xl hover:shadow-[#2563eb]/10 transition-all duration-300 overflow-hidden text-left"
              >
                {/* Project Image Container with Zoom & Overlay */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const fallback = FALLBACK_PROJECT_SVGS[project.id];
                      if (fallback && e.currentTarget.src !== fallback) {
                        e.currentTarget.src = fallback;
                      }
                    }}
                  />

                  {/* Dark Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="flex items-center gap-2">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-lg bg-[#2563eb] text-white text-xs font-bold shadow-md hover:bg-[#1d4ed8] transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Site</span>
                        </a>
                      ) : null}
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="px-3.5 py-1.5 rounded-lg bg-white/20 backdrop-blur-md text-white text-xs font-bold hover:bg-white/30 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold tracking-wide">
                    {project.categoryDisplay}
                  </div>
                </div>

                {/* Project Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Project Title */}
                    <div className="mb-2 flex items-center justify-between">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-[#2563eb] transition-colors duration-200 flex items-center gap-1.5"
                        >
                          <span>{project.title}</span>
                          <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#2563eb] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedCaseStudy(project)}
                          className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-[#2563eb] transition-colors duration-200 flex items-center gap-1.5 text-left cursor-pointer"
                        >
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-[#2563eb] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                        </button>
                      )}
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags & Action Buttons */}
                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/70"
                        >
                          {hasBrandIcon(tech) && <BrandIcon name={tech} size={13} className="shrink-0" />}
                          <span>{tech}</span>
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 rounded-md bg-white dark:bg-neutral-800 text-[10px] font-semibold text-[#2563eb]">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Buttons: Live Website & Case Study */}
                    <div className="grid grid-cols-2 gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`visit-live-${project.id}`}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold shadow-md shadow-[#2563eb]/20 transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Site</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedCaseStudy(project)}
                          id={`view-project-${project.id}`}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold shadow-md shadow-[#2563eb]/20 transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Project</span>
                        </button>
                      )}

                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        id={`case-study-${project.id}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white text-xs font-bold border border-neutral-200 dark:border-neutral-700 transition-colors cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#2563eb]" />
                        <span>Case Study</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal display when case study is active */}
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      </div>
    </section>
  );
};
