import { useScrollReveal } from '../hooks/useScrollReveal';

const ENTRIES = [
  {
    company: 'Copperpod IP',
    role: 'Research Analyst',
    type: 'Full-time',
    period: 'Jul 2024 – Oct 2024',
    location: 'Chandigarh, India',
    bullets: [
      'Performed 40+ source code reviews on ML-driven commercial software, identifying proprietary implementations using NumPy, Pandas, PyTorch, TensorFlow, and Hugging Face.',
      'Evaluated 100+ patent portfolios, achieving a 97% success rate in meeting infringement targets.',
      'Quantified infringement damages and analysed competitor ML solutions, bridging technical insights with legal strategy.',
    ],
  },
  {
    company: 'Indian Institute of Technology Ropar',
    role: 'Research Intern',
    type: 'Internship',
    period: 'Jan 2023 – Jul 2023',
    location: 'Punjab, India',
    meta: 'Supervisor: Dr. Sudarshan Iyengar',
    bullets: [
      'Pre-trained vs. Fine-tuned Language Models: Implemented a GPT model in Python inspired by "Attention Is All You Need"; demonstrated superior performance of fine-tuned models over those trained from scratch.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="section experience">
      <div className="reveal" ref={sectionRef}>
        <h2 className="section-heading">Experience</h2>

        {ENTRIES.map((entry) => (
          <div key={entry.company} className="timeline-entry">
            <span className="timeline-institution">{entry.company}</span>
            <span className="timeline-date">{entry.period}</span>
            <span className="timeline-role">
              {entry.role} &nbsp;&middot;&nbsp; {entry.type} &nbsp;&middot;&nbsp; {entry.location}
            </span>
            {entry.meta && (
              <p className="timeline-meta">{entry.meta}</p>
            )}
            <ul className="timeline-bullets">
              {entry.bullets.map((bullet, i) => (
                <li key={i} className="timeline-bullet">
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
