import { useScrollReveal } from '../hooks/useScrollReveal';

const METRICS = [
  {
    value: 'Q1',
    label: 'Peer-reviewed publication in financial NLP',
  },
  {
    value: 'Gold',
    label: '1st in B.Tech graduating batch, IIIT Una',
  },
  {
    value: 'Finalist',
    label: 'AccessAIthon — top ~5 of 35 teams',
  },
];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="reveal" ref={sectionRef}>
        <h2 className="section-heading">About</h2>

        <div className="about__bento">
          <div className="bento-tile about__bio-tile">
            <p className="about__bio">
              I am an MSc Artificial Intelligence student at the University of Edinburgh,
              working at the intersection of natural language processing and financial machine
              learning. My dissertation develops a transformer-based sentence embedding model
              — fine-tuning SBERT on SEC 10-K filings using contrastive learning — to capture
              nuanced risk semantics for volatility prediction and firm-level risk clustering.
            </p>
            <p className="about__bio">
              Beyond research, I build tools: from GPT-4o-powered accessibility extensions to
              vision-language benchmarks on large-scale fashion datasets. I care about
              methodological precision, reproducibility, and work that connects models to real
              problems.
            </p>
          </div>

          {METRICS.map(({ value, label }) => (
            <div key={value} className="bento-tile about__metric">
              <span className="about__metric-value">{value}</span>
              <span className="about__metric-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
