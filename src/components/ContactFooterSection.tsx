import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export function ContactFooterSection() {
  const { contact } = PORTFOLIO_DATA;

  return (
    <footer
      id="contact"
      className="pt-[120px] pb-[60px] px-[5vw] text-center border-t border-white/12 relative overflow-hidden"
    >
      {/* Ambient Bottom Glow */}
      <div
        aria-hidden="true"
        className="contact-glow absolute -bottom-[150px] left-1/2 -translate-x-1/2 w-[70vw] max-w-[900px] aspect-square pointer-events-none"
      />

      <Reveal className="max-w-[800px] mx-auto relative z-10">
        <span className="wide-label text-[#4db8ff]!">{contact.kicker}</span>
        <h2 className="display-title text-[clamp(52px,8vw,110px)] mt-4 mb-5 text-white">
          {contact.title}
        </h2>
        <p className="text-[16px] text-white/76 max-w-[52ch] mx-auto mb-9 leading-[1.7]">
          {contact.subtitle}
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          <a
            href={`mailto:${contact.email}`}
            className="btn-primary px-[26px] py-[13px]"
          >
            Email Me ✉
          </a>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-[26px] py-[13px]"
          >
            Instagram ↗
          </a>
        </div>
      </Reveal>

      {/* Footer Meta Bar */}
      <div className="max-w-[1280px] mx-auto mt-24 pt-7 border-t border-white/12 flex justify-between flex-wrap gap-4 text-[13px] text-white/45 relative z-10">
        <div>{contact.copyright}</div>
        <div>{contact.footerMeta}</div>
      </div>
    </footer>
  );
}
