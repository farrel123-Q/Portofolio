import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export function IntroSection() {
  const [imgFailed, setImgFailed] = useState(false);
  const [copied, setCopied] = useState(false);
  const { intro, images } = PORTFOLIO_DATA;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(intro.inquiry.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="intro"
      className="max-w-[1280px] mx-auto px-[5vw] py-[110px] relative border-t border-white/12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-9 lg:gap-[56px] items-start">
        {/* Left Column: Portrait & Greeting Card */}
        <Reveal>
          <div className="glass-panel rounded-[12px] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)] max-w-[360px] lg:max-w-none">
            <div className="w-full aspect-square rounded-[8px] overflow-hidden border border-white/12 bg-[#163342] group">
              {!imgFailed ? (
                <img
                  src={images.profileAvatar}
                  alt="Farrel Ahmad Faruq Profile Avatar"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover block transition-transform duration-400 ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#163342] to-[#0b1d26] p-4 text-center">
                  <span className="display-title text-5xl text-[#4db8ff]">
                    FAF
                  </span>
                  <span className="text-xs text-white/60 mt-2">
                    Farrel Ahmad Faruq
                  </span>
                </div>
              )}
            </div>

            <div className="wide-label text-[#4db8ff]! mt-5">
              {intro.greetingLabel}
            </div>
            <p className="text-[16px] font-semibold leading-[1.5] mt-2.5 text-white">
              {intro.greeting}
            </p>
            <div className="text-[13px] text-white/76 mt-3 flex items-center gap-1.5">
              <span aria-hidden="true">📍</span>
              <span>{intro.location}</span>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Editorial Bio & Education/Contact subgrid */}
        <Reveal className="pt-3">
          <span className="wide-label text-[#4db8ff]! mb-2">
            {intro.kicker}
          </span>
          <h2 className="display-title text-[clamp(48px,6.5vw,84px)] mb-6 text-white">
            {intro.title}
          </h2>

          {intro.paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-[15px] leading-[1.8] text-white/76 max-w-[64ch] mb-4"
            >
              {paragraph}
            </p>
          ))}

          <hr className="border-0 h-px bg-white/12 my-9" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Column */}
            <div className="bg-white/[0.02] border border-white/12 rounded-[8px] px-6 py-5">
              <span className="wide-label text-[#4db8ff]! mb-3">
                {intro.education.label}
              </span>
              <div className="font-bold text-[16px] text-white mb-1">
                {intro.education.degree}
              </div>
              <div className="text-[14px] text-white/76">
                {intro.education.school}
              </div>
              <div className="mono-tag mt-2 inline-block px-2.5 py-1 rounded bg-white/4 border border-white/12 text-[#4db8ff]">
                {intro.education.period}
              </div>
              <div className="text-[12px] text-white/45 mt-1.5">
                {intro.education.faculty}
              </div>
            </div>

            {/* Direct Inquiry Column */}
            <div className="bg-white/[0.02] border border-white/12 rounded-[8px] px-6 py-5">
              <span className="wide-label text-[#4db8ff]! mb-3">
                {intro.inquiry.label}
              </span>
              <div className="mb-2.5 flex items-center gap-2 flex-wrap">
                <a
                  href={`mailto:${intro.inquiry.email}`}
                  className="text-white no-underline text-[15px] font-semibold inline-flex items-center gap-1.5 hover:text-[#4db8ff] hover:underline transition-colors"
                >
                  <span>✉ {intro.inquiry.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  title={copied ? 'Email copied' : 'Copy email'}
                  className="inline-flex items-center justify-center w-7 h-7 rounded border border-white/10 bg-white/[0.03] text-white/60 hover:text-[#4db8ff] hover:border-[#4db8ff]/50 transition-colors cursor-pointer"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                </button>
              </div>
              <div className="text-[13px] text-white/76 mb-3">
                Domicile:{' '}
                <strong className="text-white font-semibold">
                  {intro.inquiry.domicile}
                </strong>
              </div>
              <div>
                <a
                  href={intro.inquiry.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost px-[14px] py-[6px] text-[11px]"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
