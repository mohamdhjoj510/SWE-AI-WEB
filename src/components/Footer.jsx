import Icon from './Icon.jsx';
import { GITHUB_URL, COURSE_CONTEXT } from '../data/siteConfig.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.brand}>
            <span className={styles.logo}>
              <Icon name="pulse" size={18} strokeWidth={2.2} />
            </span>
            LabTrend
          </a>
          <p className={styles.tagline}>
            Early Detection of Patient Deterioration Using Laboratory Test Trends.
          </p>
          <p className={styles.course}>{COURSE_CONTEXT}</p>
        </div>

        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#workflow">Workflow</a>
          <a href="#team">Team</a>
          <a href="#dashboard">Dashboard</a>
          {/* TODO: GitHub URL is set via GITHUB_URL in src/data/siteConfig.js */}
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={styles.github}>
            <Icon name="github" size={18} />
            GitHub
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>© {new Date().getFullYear()} LabTrend · Academic prototype</span>
          <span className={styles.disclaimer}>Not a medical decision-making system.</span>
        </div>
      </div>
    </footer>
  );
}
