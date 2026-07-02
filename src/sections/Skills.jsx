import { useScrollReveal } from '../hooks/useScrollReveal';

const SKILL_GROUPS = [
  {
    label: 'ML & AI',
    size: 'wide',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Contrastive Learning',
      'Parameter-Efficient Fine-Tuning (LoRA/QLoRA)',
    ],
  },
  {
    label: 'Languages',
    size: 'narrow',
    items: ['Python', 'C/C++', 'SQL', 'MATLAB'],
  },
  {
    label: 'Frameworks',
    size: 'mid',
    items: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'HuggingFace Transformers',
      'Scikit-Learn',
      'OpenAI API',
    ],
  },
  {
    label: 'Libraries',
    size: 'mid',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'NLTK', 'BERTopic'],
  },
  {
    label: 'Infrastructure',
    size: 'wide',
    items: ['SLURM', 'HPC Clusters', 'Git', 'GitHub', 'GitLab', 'Jupyter'],
  },
  {
    label: 'Writing',
    size: 'narrow',
    items: ['LaTeX', 'Technical Writing', 'Academic Reporting'],
  },
];

export default function Skills() {
  const headingRef = useScrollReveal();
  const gridRef    = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });

  return (
    <section id="skills" className="section skills">
      <div className="reveal" ref={headingRef}>
        <h2 className="section-heading">Skills</h2>
      </div>

      <div className="bento skills__bento reveal" ref={gridRef}>
        {SKILL_GROUPS.map(({ label, items, size }) => (
          <div key={label} className={`bento-tile skill-tile skill-tile--${size}`}>
            <span className="skill-tile__label">{label}</span>
            <div className="skill-tile__items">
              {items.map((item) => (
                <span key={item} className="skill-chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
