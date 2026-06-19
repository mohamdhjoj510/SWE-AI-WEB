import Icon from './Icon.jsx';
import c from './content.module.css';
import styles from './Workflow.module.css';

const STEPS = [
  { icon: 'database', title: 'LABEVENTS Dataset', text: 'Raw patient lab measurements from MIMIC-III.' },
  { icon: 'ingest', title: 'Data Ingestion', text: 'Load records and structure them per patient.' },
  { icon: 'clean', title: 'Cleaning & Preprocessing', text: 'Handle missing values, units, and outliers.' },
  { icon: 'chart', title: 'Trend Analysis', text: 'Measure direction and rate of change over time.' },
  { icon: 'pulse', title: 'Abnormal Pattern Detection', text: 'Flag deviations from expected ranges and trajectories.' },
  { icon: 'gauge', title: 'Risk Score Engine', text: 'Combine signals into a single per-patient score.' },
  { icon: 'alert', title: 'Early Warning Alerts', text: 'Raise alerts when risk crosses thresholds.' },
  { icon: 'layout', title: 'Dashboard', text: 'Present trends, scores, and alerts to the user.' },
];

export default function Workflow() {
  return (
    <section className="section" id="workflow">
      <div className="container">
        <div className={`${c.head} reveal`}>
          <span className="eyebrow">
            <Icon name="flow" size={14} strokeWidth={2} />
            System Workflow
          </span>
          <h2 className="section-title">
            From raw lab records to <span className="gradient-text">actionable alerts</span>
          </h2>
          <p className="section-lead">
            Data flows through eight stages — each one transforming the signal a step closer to an
            interpretable early-warning output.
          </p>
        </div>

        <ol className={styles.pipeline}>
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className={`${styles.step} reveal`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className={styles.node}>
                <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.nodeIcon}>
                  <Icon name={step.icon} size={24} />
                </div>
                <h3 className={styles.nodeTitle}>{step.title}</h3>
                <p className={styles.nodeText}>{step.text}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className={styles.connector} aria-hidden="true">
                  <Icon name="arrowRight" size={18} strokeWidth={2.4} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
