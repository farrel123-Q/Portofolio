import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/12 backdrop-blur-lg transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b1d26]/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#0b1d26]/72 shadow-none'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-[5vw] py-[18px] flex items-center justify-between gap-8">
        <a
          href="#hero"
          className="display-title text-[24px] tracking-[0.08em] text-white no-underline flex items-center gap-1 whitespace-nowrap shrink-0"
        >
          {PORTFOLIO_DATA.brand.name}
          <span className="text-[#4db8ff]">.</span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8"
        >
          {PORTFOLIO_DATA.navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-[13px] font-medium tracking-[0.06em] whitespace-nowrap shrink-0 transition-colors duration-200 ${
                  isActive
                    ? 'text-[#4db8ff]'
                    : 'text-white/76 hover:text-[#4db8ff]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="btn-primary px-[18px] py-[8px] text-[11px] shrink-0"
          >
            Connect
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-white/12 bg-white/4 text-white hover:border-[#4db8ff] hover:text-[#4db8ff] transition-colors"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-white/12 bg-[#0b1d26]/95 backdrop-blur-xl px-[5vw] py-5 flex flex-col gap-3"
        >
          {PORTFOLIO_DATA.navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={handleNavClick}
              className={`py-2 text-sm font-medium tracking-[0.06em] transition-colors ${
                activeSection === link.id
                  ? 'text-[#4db8ff]'
                  : 'text-white/80 hover:text-[#4db8ff]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="btn-primary px-5 py-2.5 mt-2 w-fit"
          >
            Connect
          </a>
        </nav>
      )}
    </header>
  );
}
