import { useScrollReveal } from '../hooks/useScrollReveal';

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

const PROJECTS = [
  {
    id: 'vlm',
    featured: true,
    title: 'VLM Benchmark: Automated Fashion Caption Generation',
    tags: ['PyTorch', 'HuggingFace', 'LoRA', 'Florence-2', 'BLIP', 'Qwen2.5-VL', 'SLURM', 'FashionGen'],
    github: 'https://github.com/Sarthak-Vishnu/benchmarking_automated_caption_generation_for_fashion_dataset',
    bullets: [
      'Conducted a systematic comparative evaluation of six general-purpose vision-language models (BLIP, BLIP-2, CLIP-GPT2, Florence-2, OFA, Qwen2.5-VL) on the FashionGen dataset (~68k fashion products), assessing fine-tuning strategies including LoRA, QLoRA, and full fine-tuning across six evaluation metrics (CIDEr, BLEU-4, METEOR, ROUGE-L, BERTScore, CLIPScore).',
      'Florence-2 (LoRA) achieved Pareto-optimal performance across all reference-based metrics (CIDEr 1.377, BLEU-4 0.273, METEOR 0.541) while updating only 0.6% of its 781M parameters; ablation over five decoding strategies revealed that extending generation budget from 40 to 100 tokens yields a +0.241 CIDEr gain — a larger effect than increasing beam width.',
      'Identified a persistent metric divergence between reference-based scores and CLIPScore, establishing multi-metric, protocol-aligned baselines for future fashion captioning research.',
    ],
  },
  {
    id: 'accessai',
    title: 'AccessAI: AI-Powered Accessibility Chrome Extension',
    tags: ['Chrome MV3', 'GPT-4o', 'Realtime API', 'JavaScript', 'DOM', 'Chrome TTS'],
    github: 'https://github.com/Sarthak-Vishnu/AccessAI-Universal_Accessibility_Browser_Extension',
    bullets: [
      'Built a Manifest V3 Chrome extension with three GPT-4o-powered accessibility modules, reaching the finalist round out of 35 teams at AccessAIthon (University of Edinburgh School of Informatics, Mar 2026).',
      'Social-Cue streamed live meeting audio via the GPT-4o Realtime API to interpret emotional tone and flag directed questions; Web-Sight combined DOM snapshots with vision for contextual page element explanation; ClearContext synthesised audio into timestamp-grounded topic cards with Chrome TTS as the shared voice output layer.',
    ],
  },
  {
    id: 'dissertation',
    title: 'Hybrid Topic and Domain-Adaptive Modeling for Financial Risk',
    wip: true,
    tags: ['SBERT', 'SimCSE', 'Contrastive Learning', 'HuggingFace', 'BERTopic', 'SEC 10-K'],
    github: null,
    bullets: [
      'Developing a transformer-based sentence embedding model by fine-tuning SBERT on financial text from SEC 10-K filings using contrastive learning and domain-specific augmentations to capture nuanced risk semantics in corporate reports.',
      'Evaluating learned embeddings for downstream tasks including financial volatility prediction and firm-level risk clustering, alongside ablation studies across pretraining objectives.',
    ],
  },
  {
    id: 'disease',
    title: 'Integrating Neural Networks for Disease Outcome Estimation',
    tags: ['DeepWalk', 'Autoencoder', 'Random Forest', 'Graph ML', 'Python'],
    github: null,
    bullets: [
      'Assembled a heterogeneous information network encompassing drug-protein-disease interactions; employed an Autoencoder to derive biological feature vectors and DeepWalk graph representation learning to capture topological properties.',
      'Combined biological and topological representations into integrated feature vectors fed into a Random Forest Classifier to predict potential drug-disease associations.',
    ],
  },
  {
    id: 'ev',
    title: 'Intelligent Infrastructure Planning for Electric Vehicles',
    tags: ['Machine Learning', 'Scikit-Learn', 'GIS', 'Python'],
    github: null,
    bullets: [
      'Developed an ML model forecasting optimal EV charging station locations in Columbus, Ohio, achieving 93.75% accuracy.',
      'Features included population density, points of interest, security camera presence, and natural disaster history.',
    ],
  },
];

function ProjectEntry({ project }) {
  const entryRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });

  const classes = [
    'project-entry',
    project.featured ? 'project-entry--featured' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} ref={entryRef}>
      {/* Title row */}
      {project.github ? (
        <a
          href={project.github}
          className="project-title-row"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} — GitHub repository`}
        >
          <span className="project-title">
            {project.title}
            {project.wip && <span className="project-wip"> — M.Sc. Dissertation, WIP</span>}
          </span>
          <span className="project-github"><ExternalLinkIcon /></span>
        </a>
      ) : (
        <div className="project-title-row">
          <span className="project-title">
            {project.title}
            {project.wip && <span className="project-wip"> — M.Sc. Dissertation, WIP</span>}
          </span>
        </div>
      )}

      {/* Tags */}
      <div className="project-tags" aria-label="Technologies">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>

      {/* Bullets */}
      <ul className="project-bullets">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="project-bullet">
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const headingRef = useScrollReveal();

  return (
    <section id="projects" className="section projects">
      <div className="reveal" ref={headingRef}>
        <h2 className="section-heading">Projects</h2>
      </div>

      {PROJECTS.map((project) => (
        <ProjectEntry key={project.id} project={project} />
      ))}
    </section>
  );
}
