import Icon from './Icon.jsx';
import c from './content.module.css';
import styles from './Prototype.module.css';

const CAPABILITIES = [
  { icon: 'ingest', title: 'Loads lab measurements', text: 'Reads LABEVENTS records and organizes them into per-patient time-series.' },
  { icon: 'chart', title: 'Analyzes trends', text: 'Computes how each measurement moves across successive samples.' },
  { icon: 'pulse', title: 'Detects abnormal values', text: 'Identifies readings and trajectories that depart from expected ranges.' },
  { icon: 'gauge', title: 'Calculates risk scores', text: 'Aggregates detected signals into a single interpretable risk score.' },
  { icon: 'alert', title: 'Presents alerts', text: 'Surfaces early-warning alerts when a patient crosses risk thresholds.' },
  { icon: 'layout', title: 'Dashboard results', text: 'Brings trends, scores, and alerts together in one view.' },
];

export default function Prototype() {
  return (
    <section className="section" id="prototype">
      <div className="container">
        <div className={`${c.head} reveal`}>
          <span className="eyebrow">
            <Icon name="cpu" size={14} strokeWidth={2} />
            What We Built
          </span>
          <h2 className="section-title">
            The <span className="gradient-text">prototype</span> end-to-end
          </h2>
          <p className="section-lead">
            Our prototype walks a patient&apos;s lab data through the full pipeline — from loading
            raw measurements to presenting alerts and dashboard results.
          </p>
        </div>

        <div className={`${c.grid} ${c.cols3}`}>
          {CAPABILITIES.map((cap, i) => (
            <article
              key={cap.title}
              className={`${styles.cap} reveal`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className={c.iconBox}>
                <Icon name={cap.icon} />
              </div>
              <h3 className={c.cardTitle}>{cap.title}</h3>
              <p className={c.cardText}>{cap.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
