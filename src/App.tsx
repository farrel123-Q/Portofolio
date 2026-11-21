import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { ContentOverviewSection } from './components/ContentOverviewSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactFooterSection } from './components/ContactFooterSection';

const SECTION_IDS = ['hero', 'intro', 'contents', 'skills', 'projects', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: 0.05,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-white selection:bg-[#4db8ff]/30 selection:text-white">
      <Navbar activeSection={activeSection} />
      {/* ss1: Hero Section */}
      <HeroSection />
      {/* ss2: Introduction Section */}
      <IntroSection />
      {/* ss3 (top): Content Overview Index */}
      <ContentOverviewSection />
      {/* ss3 (bottom): Skills & Toolkit */}
      <SkillsSection />
      {/* ss4: Projects Showcase */}
      <ProjectsSection />
      {/* ss5: Contact & Footer */}
      <ContactFooterSection />
    </div>
  );
}
