import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { PORTFOLIO_DATA, type ProjectItem } from '../data/portfolioData';
import { Reveal } from './Reveal';

export function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="max-w-[1280px] mx-auto px-[5vw] py-[110px] relative"
    >
      <Reveal>
        <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
          <div>
            <span className="wide-label text-[#4db8ff]! mb-2">
              {projects.kicker}
            </span>
            <h2 className="display-title text-[clamp(44px,6vw,80px)] text-white">
              {projects.title}
            </h2>
          </div>
          <div className="wide-label">{projects.rightLabel}</div>
        </div>
      </Reveal>

      {projects.items.map((project, idx) => (
        <Reveal key={project.id}>
          <div
            className={`grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center py-14 border-b border-white/12 ${
              idx === 0 ? 'border-t border-white/12' : ''
            }`}
          >
            {/* Visual Browser Mockup Frame */}
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-label={`Inspect ${project.title} architecture details`}
              className="group block w-full text-left aspect-[16/10] rounded-[10px] overflow-hidden bg-[#163342] border border-white/12 shadow-[0_24px_48px_rgba(0,0,0,0.45)] relative cursor-pointer focus-visible:outline-2 focus-visible:outline-[#4db8ff]"
            >
              <div className="project-mockup-bg w-full h-full p-5 sm:p-6 flex flex-col justify-between border border-white/[0.05] transition-transform duration-400 ease-out group-hover:scale-[1.02]">
                {/* Window Bar */}
                <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="mono-tag text-[11px]! text-white/45 ml-2.5">
                    {project.domain}
                  </span>
                </div>

                {/* Center Preview Card */}
                <div className="flex items-center justify-center flex-1 text-center p-3 sm:p-5">
                  <div className="bg-[#0b1d26]/70 border border-white/12 px-5 py-5 sm:px-8 sm:py-6 rounded-[8px] backdrop-blur-sm">
                    <span className="mono-tag text-[#4db8ff]">
                      {project.previewBadge}
                    </span>
                    <h4 className="display-title text-[24px] sm:text-[32px] my-2 text-white">
                      {project.previewTitle}
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-white/76">
                      {project.previewSubtitle}
                    </p>
                  </div>
                </div>

                {/* Window Status Footer */}
                <div className="flex justify-between items-center text-[11px] text-white/45">
                  <span className="mono-tag text-[11px]!">
                    {project.buildTag}
                  </span>
                  <span className="mono-tag text-[11px]! text-[#4db8ff]">
                    {project.statusTag}
                  </span>
                </div>
              </div>
            </button>

            {/* Text Column */}
            <div>
              <div className="mono-tag text-[13px]! text-[#4db8ff] mb-2">
                {project.meta}
              </div>
              <h3 className="display-title text-[clamp(32px,4vw,52px)] mt-2 mb-4 text-white">
                {project.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-white/76 mb-6">
                {project.tagline}
              </p>

              <ul className="list-none mb-7">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight.label}
                    className="mb-2.5 text-[14px] text-white/76 flex items-start gap-2.5"
                  >
                    <span
                      aria-hidden="true"
                      className="text-[#4db8ff] text-[14px] leading-[1.4]"
                    >
                      ✦
                    </span>
                    <div>
                      <span className="text-white font-semibold">
                        {highlight.label}
                      </span>{' '}
                      {highlight.value}
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={project.liveHref}
                className="btn-ghost px-[26px] py-[13px]"
              >
                View Live ↗
              </a>
            </div>
          </div>
        </Reveal>
      ))}

      {/* Architecture Lightbox Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-[#04151e]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel max-w-2xl w-full rounded-[12px] p-6 sm:p-8 shadow-[0_28px_60px_rgba(0,0,0,0.65)]"
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/12">
              <div>
                <div className="mono-tag text-[#4db8ff] mb-1">
                  {selectedProject.meta}
                </div>
                <h3
                  id="project-modal-title"
                  className="display-title text-3xl sm:text-4xl text-white"
                >
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="inline-flex items-center justify-center w-9 h-9 rounded border border-white/12 bg-white/4 text-white/80 hover:border-[#4db8ff] hover:text-[#4db8ff] transition-colors cursor-pointer shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            <div className="py-6 space-y-4">
              <p className="text-[15px] leading-relaxed text-white/80">
                {selectedProject.tagline}
              </p>
              <div>
                <span className="wide-label text-[#4db8ff]! mb-3">
                  ARCHITECTURE HIGHLIGHTS
                </span>
                <ul className="list-none space-y-2.5">
                  {selectedProject.architectureNotes.map((note, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[14px] text-white/76"
                    >
                      <span className="mono-tag text-[#4db8ff] shrink-0">
                        0{idx + 1}
                      </span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-5 border-t border-white/12 flex items-center justify-between flex-wrap gap-3">
              <span className="mono-tag text-white/45">
                {selectedProject.domain} · {selectedProject.buildTag}
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="btn-ghost px-4 py-2 text-[11px]"
                >
                  Close
                </button>
                <a
                  href={selectedProject.liveHref}
                  onClick={() => setSelectedProject(null)}
                  className="btn-primary px-5 py-2 text-[11px]"
                >
                  View Live ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
