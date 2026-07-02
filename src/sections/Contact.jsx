import { useScrollReveal } from '../hooks/useScrollReveal';

const CONTACT_ROWS = [
  {
    label: 'Email',
    href: 'mailto:sarthakvishnu10@gmail.com',
    display: 'sarthakvishnu10@gmail.com',
    external: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Sarthak-Vishnu',
    display: 'github.com/Sarthak-Vishnu',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sarthak-vishnu-563729201/',
    display: 'linkedin.com/in/sarthak-vishnu-563729201',
    external: true,
  },
];

export default function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="section contact">
      <div className="reveal" ref={sectionRef}>
        <h2 className="section-heading">Contact</h2>

        <p className="contact__tagline">
          Open to research collaborations, ML engineering roles, and interesting problems.
        </p>

        <div className="contact__rows">
          {CONTACT_ROWS.map(({ label, href, display, external }) => (
            <div key={label} className="contact__row">
              <span className="contact__label">{label}</span>
              <a
                href={href}
                className="contact__link"
                {...(external
                  ? {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      'aria-label': `${label} profile (opens in new tab)`,
                    }
                  : { 'aria-label': `Send email to Sarthak Vishnu` })}
              >
                {display}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
