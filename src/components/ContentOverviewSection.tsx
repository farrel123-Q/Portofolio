import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export function ContentOverviewSection() {
  const { contentOverview } = PORTFOLIO_DATA;

  return (
    <section
      id="contents"
      className="max-w-[1280px] mx-auto px-[5vw] py-[70px] relative"
    >
      <Reveal>
        <div className="border border-white/12 bg-[#0b1d26]/65 backdrop-blur-md rounded-[12px] px-6 sm:px-10 py-12 sm:py-14">
          <div className="wide-label block! text-center text-[#4db8ff]! mb-1.5">
            {contentOverview.kicker}
          </div>
          <h2 className="display-title text-[clamp(40px,5vw,64px)] mb-11 text-center text-white">
            {contentOverview.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {contentOverview.items.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="group block no-underline bg-white/[0.02] border border-white/[0.06] rounded-[8px] p-5 sm:p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#4db8ff] hover:bg-[#4db8ff]/[0.05]"
              >
                <div className="display-title tabular-nums text-[clamp(48px,6vw,84px)] text-white leading-[0.9] mb-3 transition-colors duration-300 group-hover:text-[#4db8ff]">
                  {item.number}
                </div>
                <div className="wide-label text-[11px]! tracking-[0.2em]! text-white/76">
                  {item.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
