import Icon from './Icon.jsx';
import c from './content.module.css';
import styles from './WhyItHelps.module.css';

const BENEFITS = [
  { icon: 'spark', title: 'Earlier detection', text: 'Highlights deterioration signals as they emerge, rather than after a value is already critical.' },
  { icon: 'pulse', title: 'Continuous monitoring', text: 'Watches lab trajectories across an admission instead of relying on isolated snapshots.' },
  { icon: 'gauge', title: 'Patient prioritization', text: 'A unified risk score helps direct attention toward the highest-risk patients first.' },
  { icon: 'chart', title: 'Better clinical awareness', text: 'Makes subtle multi-test patterns visible and easy to interpret at a glance.' },
];

export default function WhyItHelps() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className={`${c.head} reveal`}>
          <span className="eyebrow">
            <Icon name="shield" size={14} strokeWidth={2} />
            Why It Helps
          </span>
          <h2 className="section-title">
            Supporting <span className="gradient-text">earlier, clearer</span> awareness
          </h2>
          <p className="section-lead">
            By making lab trends explicit, the system can support the people watching over patients —
            without replacing their judgment.
          </p>
        </div>

        <div className={`${c.grid} ${c.cols4}`}>
          {BENEFITS.map((b, i) => (
            <article key={b.title} className="card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className={c.iconBox}>
                <Icon name={b.icon} />
              </div>
              <h3 className={c.cardTitle}>{b.title}</h3>
              <p className={c.cardText}>{b.text}</p>
            </article>
          ))}
        </div>

        <div className={`${styles.disclaimer} reveal`}>
          <div className={styles.disclaimerIcon}>
            <Icon name="shield" size={22} />
          </div>
          <div>
            <strong className={styles.disclaimerTitle}>Academic prototype — not a medical device</strong>
            <p className={styles.disclaimerText}>
              This is a university Software Engineering project built for research and learning. It is
              <strong> not </strong>
              a medical decision-making system, is not validated for clinical use, and must not be
              used to diagnose, treat, or make decisions about any patient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
