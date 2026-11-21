import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section
      id="skills"
      className="max-w-[1280px] mx-auto px-[5vw] py-[110px] relative"
    >
      <Reveal>
        <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
          <div>
            <span className="wide-label text-[#4db8ff]! mb-2">
              {skills.kicker}
            </span>
            <h2 className="display-title text-[clamp(44px,6vw,80px)] text-white">
              {skills.title}
            </h2>
          </div>
          <div className="wide-label">{skills.rightLabel}</div>
        </div>
      </Reveal>

      <Reveal>
        <div className="glass-panel rounded-[12px] p-6 sm:p-10">
          {/* Card Header */}
          <div className="flex justify-between items-center border-b border-white/12 pb-6 flex-wrap gap-3">
            <div>
              <h3 className="display-title text-[28px] sm:text-[32px] text-white">
                {skills.cardTitle}
              </h3>
              <p className="text-[14px] text-white/76 mt-1">
                {skills.cardSubtitle}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#4db8ff]/15 border border-[#4db8ff]/40 text-[#4db8ff] text-[11px] font-bold tracking-[0.1em] whitespace-nowrap">
              <span aria-hidden="true">✦</span>
              <span>{skills.focusBadge}</span>
            </div>
          </div>

          {/* 3-Column Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1.2fr] gap-7 lg:gap-9 mt-9">
            {/* 1. Software & Tools */}
            <div>
              <span className="wide-label mb-5 text-[#4db8ff]!">
                SOFTWARE &amp; TOOLS
              </span>
              <div className="flex gap-4 flex-wrap">
                {skills.toolkit.map((tool) => (
                  <div
                    key={tool.name}
                    className="inline-flex flex-col items-center gap-2.5 p-4 bg-white/[0.05] border border-white/12 rounded-[10px] w-[110px] transition-all duration-300 ease-out hover:border-[#4db8ff] hover:-translate-y-1"
                  >
                    <div
                      className={`w-[52px] h-[52px] rounded-[8px] ${tool.colorClass} text-white grid place-items-center font-display text-[28px] font-bold shadow-[0_4px_12px_rgba(0,0,0,0.3)]`}
                    >
                      {tool.code}
                    </div>
                    <div className="text-[12px] font-semibold text-center text-white leading-snug">
                      {tool.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Hard Skills */}
            <div>
              <span className="wide-label mb-5 text-[#4db8ff]!">
                HARD SKILLS
              </span>
              <ul className="list-none">
                {skills.hardSkills.map((skill, idx) => (
                  <li
                    key={skill.number}
                    className={`flex items-center gap-4 py-3.5 text-[15px] font-semibold text-white ${
                      idx !== skills.hardSkills.length - 1
                        ? 'border-b border-white/[0.06]'
                        : ''
                    }`}
                  >
                    <span className="mono-tag text-[#4db8ff]">
                      {skill.number}
                    </span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Soft Skills */}
            <div>
              <span className="wide-label mb-5 text-[#4db8ff]!">
                SOFT SKILLS
              </span>
              <div className="flex flex-wrap gap-2.5">
                {skills.softSkills.map((softSkill) => (
                  <span
                    key={softSkill}
                    className="px-4 py-2 rounded-full bg-[#4db8ff]/[0.08] border border-[#4db8ff]/[0.28] text-[13px] text-white font-medium transition-colors duration-250 hover:bg-[#4db8ff]/20"
                  >
                    {softSkill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
