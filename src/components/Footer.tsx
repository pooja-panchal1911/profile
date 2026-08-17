import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.substring(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-[#0a0a0a] py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-200 dark:border-neutral-800/80">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-md bg-[#2563eb] flex items-center justify-center text-white font-bold text-xs">
                P
              </div>
              <span className="font-bold text-lg text-neutral-900 dark:text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {PERSONAL_INFO.role}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="hover:text-[#2563eb] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-[#2563eb] border border-neutral-200 dark:border-neutral-800 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-[#2563eb] border border-neutral-200 dark:border-neutral-800 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send email"
              className="p-2 rounded-lg bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-[#2563eb] border border-neutral-200 dark:border-neutral-800 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-[#2563eb] border border-neutral-200 dark:border-neutral-800 transition-all ml-2 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 gap-4">
          <p>© 2026 Pooja Panchal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed &amp; Built with <span className="text-[#2563eb] font-semibold">React &amp; Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
