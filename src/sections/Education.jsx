import { useScrollReveal } from '../hooks/useScrollReveal';

const ENTRIES = [
  {
    institution: 'The University of Edinburgh',
    location: 'Edinburgh, UK',
    degree: 'MSc Artificial Intelligence',
    period: 'Sep 2025 – Aug 2026',
    notes: [
      'Dissertation: Hybrid Topic and Domain-Adaptive Modeling for Financial Risk and Forecasting',
      'Supervisor: Prof. Tiejun Ma',
    ],
  },
  {
    institution: 'Indian Institute of Information Technology Una',
    location: 'Himachal Pradesh, India',
    degree: 'B.Tech in Electronics & Communication Engineering (Minor: AI-ML)',
    period: 'Dec 2020 – May 2024',
    notes: [
      'CGPA: 9.01 / 10.0 · Gold Medalist — 1st in graduating batch',
    ],
  },
];

export default function Education() {
  const sectionRef = useScrollReveal();

  return (
    <section id="education" className="section education">
      <div className="reveal" ref={sectionRef}>
        <h2 className="section-heading">Education</h2>

        {ENTRIES.map((entry) => (
          <div key={entry.institution} className="timeline-entry">
            <span className="timeline-institution">{entry.institution}</span>
            <span className="timeline-date">{entry.period}</span>
            <span className="timeline-degree">{entry.degree} &nbsp;&middot;&nbsp; {entry.location}</span>
            {entry.notes.map((note, i) => (
              <p key={i} className="timeline-note">{note}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
