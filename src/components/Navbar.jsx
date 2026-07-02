import { useState, useEffect, useCallback } from 'react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
];

const SECTION_IDS = NAV_LINKS.map(l => l.href.replace('#', ''));

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [hidden,         setHidden]          = useState(false);
  const [menuOpen,       setMenuOpen]        = useState(false);
  const [activeSection,  setActiveSection]   = useState('');

  // Blur/border on scroll + auto-hide when scrolling down, reveal on scroll up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y > last && y > 140) setHidden(true);
      else if (y < last) setHidden(false);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const intersecting = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        });
        // Pick the topmost section currently in the hot zone
        const active = SECTION_IDS.find(id => intersecting.has(id));
        setActiveSection(active || '');
      },
      // Hot zone: top 15% to top 30% of viewport — section heading is in view
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleMonogramClick = useCallback((e) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <nav
      className={`navbar${scrolled ? ' scrolled' : ''}${hidden && !menuOpen ? ' navbar--hidden' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        <a
          href="#"
          className="navbar__monogram"
          onClick={handleMonogramClick}
          aria-label="Back to top"
        >
          SV
        </a>

        <div className="navbar__right">
          <div className="navbar__links" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              return (
                <a
                  key={href}
                  href={href}
                  className={`navbar__link${activeSection === id ? ' navbar__link--active' : ''}`}
                  onClick={(e) => handleLinkClick(e, href)}
                  role="listitem"
                  aria-current={activeSection === id ? 'true' : undefined}
                >
                  {label}
                </a>
              );
            })}
          </div>

          <ThemeToggle />

          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="navbar__hamburger-bar" />
            <span className="navbar__hamburger-bar" />
            <span className="navbar__hamburger-bar" />
          </button>
        </div>
      </div>

      <div
        className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.replace('#', '');
          return (
            <a
              key={href}
              href={href}
              className={`navbar__mobile-link${activeSection === id ? ' navbar__mobile-link--active' : ''}`}
              onClick={(e) => handleLinkClick(e, href)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
