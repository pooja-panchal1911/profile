import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Tools } from './components/Tools';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function PortfolioApp() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white selection:bg-[#2563eb] selection:text-white transition-colors duration-300 relative overflow-x-hidden font-sans">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Single-Page Scrolling Content */}
      <main>
        {/* 01 — Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 02 — About Me */}
        <About />

        {/* 03 — Skills & Expertise */}
        <Skills />

        {/* 04 — Experience Timeline */}
        <Experience />

        {/* 05 — Selected Projects Showcase */}
        <Projects />

        {/* 06 — Design Process */}
        <Process />

        {/* 07 — Tools & Technologies */}
        <Tools />

        {/* 08 — Education */}
        <Education />

        {/* 09 — Contact & Call to Action */}
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* 10 — Footer */}
      <Footer />

      {/* Global Interactive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
