import { useState, useEffect, useRef } from 'react';

const BASE = import.meta.env.BASE_URL;

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  const gridRef   = useRef(null);
  const auroraRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // Entrance — flip shortly after mount so the transition plays.
  // (setTimeout rather than rAF: rAF can be throttled when the tab isn't
  // actively painting, which would leave the hero stuck invisible.)
  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(id);
  }, []);

  // Scroll-away parallax: aurora drifts, content lifts + fades as you leave
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      if (auroraRef.current) {
        auroraRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0)`;
      }
      if (gridRef.current) {
        const p = Math.min(y / 640, 1);
        gridRef.current.style.opacity = `${1 - p * 0.85}`;
        gridRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0) scale(${1 - p * 0.04})`;
      }
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="hero" className="section hero">
      <div className="hero__aurora" aria-hidden="true" ref={auroraRef}>
        <span className="hero__aurora-blob hero__aurora-blob--1" />
        <span className="hero__aurora-blob hero__aurora-blob--2" />
      </div>

      <div className={`hero__grid${loaded ? ' is-loaded' : ''}`} ref={gridRef}>

        {/* Left column */}
        <div className="hero__left">
          <p className="hero__eyebrow">
            MSc Artificial Intelligence &nbsp;&middot;&nbsp; University of Edinburgh
          </p>

          <h1 className="hero__name">Sarthak<br />Vishnu</h1>

          <p className="hero__tagline">
            Building language models that understand financial risk.
          </p>

          <nav className="hero__cta-group" aria-label="Quick links">
            <a
              href="#projects"
              className="hero__cta"
              onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
            >
              View Projects <span className="hero__cta-arrow" aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="hero__cta"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            >
              Get in Touch <span className="hero__cta-arrow" aria-hidden="true">→</span>
            </a>
          </nav>

          <div className="hero__social">
            <a
              href="https://github.com/Sarthak-Vishnu"
              className="hero__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/sarthak-vishnu-563729201/"
              className="hero__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:sarthakvishnu10@gmail.com"
              className="hero__social-link"
              aria-label="Send email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* Right column — photo */}
        <div className="hero__photo-col">
          <div className="hero__photo-frame">
            <img
              src={`${BASE}assets/profile.jpg`}
              alt="Sarthak Vishnu"
              className="hero__photo"
              loading="eager"
            />
          </div>
        </div>

      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-dot" />
      </div>
    </section>
  );
}
