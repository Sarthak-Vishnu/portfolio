import { useScrollReveal } from '../hooks/useScrollReveal';

const ITEMS = [
  {
    title: 'Hackathon Finalist',
    desc: 'Reached the finalist round (top ~5) out of 35 teams at AccessAIthon, University of Edinburgh School of Informatics.',
    date: 'Mar 2026',
    size: 'mid',
    featured: true,
  },
  {
    title: 'Gold Medalist',
    desc: 'Secured 1st position in B.Tech graduating batch, IIIT Una.',
    date: '2024',
    size: 'mid',
    featured: true,
  },
  {
    title: 'Elite + Gold Medalist',
    desc: 'Ranked 7th nationwide out of 1,500 participants — NPTEL Deep Learning, IIT Madras.',
    date: 'Oct 2022',
    size: 'narrow',
  },
  {
    title: 'Elite + Silver Medalist',
    desc: 'Top 5% nationwide (under 200 of 8,000) — NPTEL Data Analytics with Python, IIT Roorkee.',
    date: 'Apr 2023',
    size: 'narrow',
  },
  {
    title: 'Best Paper Award',
    desc: 'IEEE SUSTAINED 2024 International Conference.',
    date: 'Nov 2024',
    size: 'narrow',
    featured: true,
  },
  {
    title: 'Manuscript Peer Reviewer',
    desc: 'Scientific Reports (Q1, IF: 3.8), Springer Nature.',
    date: 'Feb 2025',
    size: 'mid',
  },
  {
    title: 'Vice President',
    desc: 'AAVESH (Electronic Society), IIIT Una.',
    date: '2021–2024',
    size: 'mid',
  },
];

export default function Achievements() {
  const headingRef = useScrollReveal();
  const gridRef    = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });

  return (
    <section id="achievements" className="section achievements">
      <div className="reveal" ref={headingRef}>
        <h2 className="section-heading">Achievements</h2>
      </div>

      <div className="bento achievements__bento reveal" ref={gridRef}>
        {ITEMS.map(({ title, desc, date, size, featured }) => (
          <div
            key={title}
            className={`bento-tile ach-tile ach-tile--${size}${featured ? ' ach-tile--featured' : ''}`}
          >
            <span className="ach-tile__date">{date}</span>
            <div className="ach-tile__body">
              <h3 className="ach-tile__title">{title}</h3>
              <p className="ach-tile__desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
