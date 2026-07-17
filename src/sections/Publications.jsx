import { useScrollReveal } from '../hooks/useScrollReveal';

const PUBLICATIONS = [
  {
    id: 'leetcode-gpt4',
    badges: ['Q1', 'IF 2.0'],
    authors: 'S. Vishnu, S. Sahil, and N. Garg,',
    title: '"Unveiling the role of GPT-4 in solving LeetCode programming problems,"',
    venue: 'Computer Applications in Engineering Education Journal, vol. 33, pp. e22815, 2025.',
    doi: 'https://doi.org/10.1002/cae.22815',
    note: 'Assessed GPT-4 performance on LeetCode problems; analysed failure patterns and compared generated code efficiency and memory usage against human programmers.',
  },
  {
    id: 'ev-ieee',
    badges: ['Best Paper Award', 'IEEE'],
    authors: 'S. G. Vishnu, S. Mehta and R. Vijh,',
    title: '"Trends and Innovations in Sustainable Electric Vehicle Charging Infrastructure: A Comprehensive Study,"',
    venue: 'IEEE SUSTAINED 2024, Faridabad, India, pp. 994–1000.',
    doi: 'https://doi.org/10.1109/SUSTAINED63638.2024.11073832',
    note: null,
  },
];

function PubEntry({ pub }) {
  const ref = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });

  return (
    <div className="pub-entry reveal" ref={ref}>
      <div className="pub-badges">
        {pub.badges.map((badge) => (
          <span key={badge} className="tag-pill">{badge}</span>
        ))}
      </div>

      <p className="pub-citation">
        {pub.authors}{' '}
        <a
          href={pub.doi}
          className="pub-citation-title pub-doi-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${pub.title} (opens DOI link)`}
        >
          {pub.title}
        </a>{' '}
        <span className="pub-citation-venue">{pub.venue}</span>
      </p>

      {pub.note && <p className="pub-note">{pub.note}</p>}
    </div>
  );
}

export default function Publications() {
  const headingRef = useScrollReveal();

  return (
    <section id="publications" className="section publications">
      <div className="reveal" ref={headingRef}>
        <h2 className="section-heading">Publications</h2>
      </div>

      <div className="publications__grid">
        {PUBLICATIONS.map((pub) => (
          <PubEntry key={pub.id} pub={pub} />
        ))}
      </div>
    </section>
  );
}
