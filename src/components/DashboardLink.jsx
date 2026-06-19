import Icon from './Icon.jsx';
import { DASHBOARD_URL } from '../data/siteConfig.js';
import styles from './DashboardLink.module.css';

export default function DashboardLink() {
  return (
    <section className="section" id="dashboard">
      <div className="container">
        <div className={`${styles.cta} reveal`}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.content}>
            <span className="eyebrow">
              <Icon name="layout" size={14} strokeWidth={2} />
              Live Dashboard
            </span>
            <h2 className={styles.title}>
              Explore the <span className="gradient-text">interactive dashboard</span>
            </h2>
            <p className={styles.text}>
              The dashboard, developed by our teammate, visualizes patient lab trends, risk scores,
              and early-warning alerts in one place.
            </p>

            {/* TODO: The dashboard URL is set via DASHBOARD_URL in src/data/siteConfig.js */}
            <a className="btn btn-primary" href={DASHBOARD_URL} target="_blank" rel="noreferrer">
              <Icon name="link" size={18} strokeWidth={2} />
              Open Dashboard
              <Icon name="arrowRight" size={18} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
