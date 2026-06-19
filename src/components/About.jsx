import Icon from './Icon.jsx';
import c from './content.module.css';

const CARDS = [
  {
    icon: 'cpu',
    title: 'What the system does',
    text: 'Ingests patient laboratory time-series from the MIMIC-III LABEVENTS table, analyzes how each measurement evolves over time, detects abnormal trends, and produces a per-patient risk score with early warning alerts.',
  },
  {
    icon: 'alert',
    title: 'The problem in hospitals',
    text: 'Deterioration often develops gradually. A single lab value can look normal in isolation, so subtle but meaningful shifts across many tests and many hours are easy to miss in a busy ward.',
  },
  {
    icon: 'chart',
    title: 'Why trends help',
    text: 'Looking at the direction and rate of change across repeated measurements exposes patterns a single reading hides — turning isolated data points into an early, interpretable signal of decline.',
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className={`${c.head} reveal`}>
          <span className="eyebrow">
            <Icon name="cpu" size={14} strokeWidth={2} />
            About the Project
          </span>
          <h2 className="section-title">
            Turning repeated lab measurements into an{' '}
            <span className="gradient-text">early-warning signal</span>
          </h2>
          <p className="section-lead">
            Our system studies laboratory results as a time-series rather than as one-off numbers,
            so that the way a patient&apos;s values move over time becomes visible and actionable.
          </p>
        </div>

        <div className={`${c.grid} ${c.cols3}`}>
          {CARDS.map((card, i) => (
            <article
              key={card.title}
              className="card reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={c.iconBox}>
                <Icon name={card.icon} />
              </div>
              <h3 className={c.cardTitle}>{card.title}</h3>
              <p className={c.cardText}>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
