import Icon from './Icon.jsx';
import { DASHBOARD_URL } from '../data/siteConfig.js';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">
            <Icon name="spark" size={14} strokeWidth={2} />
            MIMIC-III · Clinical Time-Series
          </span>

          <h1 className={styles.title}>
            Early Detection of <span className="gradient-text">Patient Deterioration</span> Using
            Laboratory Test Trends
          </h1>

          <p className={styles.subtitle}>
            A software system that reads patient lab time-series, analyzes how results change over
            time, flags abnormal trends, and computes a per-patient risk score to surface early
            warning signals.
          </p>

          <div className={styles.actions}>
            {/* CTA → dashboard (URL set in src/data/siteConfig.js) */}
            <a className="btn btn-primary" href={DASHBOARD_URL} target="_blank" rel="noreferrer">
              View Dashboard
              <Icon name="arrowRight" size={18} strokeWidth={2.2} />
            </a>
            <a className="btn btn-ghost" href="#about">
              Explore Project
              <Icon name="arrowDown" size={18} strokeWidth={2.2} />
            </a>
          </div>

          <dl className={styles.stats}>
            <div>
              <dt>5</dt>
              <dd>core LABEVENTS fields</dd>
            </div>
            <div>
              <dt>7</dt>
              <dd>stage analysis pipeline</dd>
            </div>
            <div>
              <dt>1</dt>
              <dd>unified risk score</dd>
            </div>
          </dl>
        </div>

        {/* Decorative "live trend" panel — pure CSS/SVG */}
        <div className={styles.panel} aria-hidden="true">
          <div className={styles.panelHead}>
            <span className={styles.dot} />
            <span className={styles.dot} style={{ background: '#fbbf24' }} />
            <span className={styles.dot} style={{ background: '#34d399' }} />
            <span className={styles.panelTitle}>patient_trend.monitor</span>
          </div>
          <div className={styles.panelBody}>
            <div className={styles.riskRow}>
              <span className={styles.riskLabel}>Risk score</span>
              <span className={styles.riskValue}>0.78</span>
              <span className={styles.riskBadge}>Elevated</span>
            </div>

            <svg className={styles.chart} viewBox="0 0 320 140" preserveAspectRatio="none">
              <defs>
                <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="rgba(34,211,238,0.35)" />
                  <stop offset="1" stopColor="rgba(34,211,238,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="35" x2="320" y2="35" className={styles.grid} />
              <line x1="0" y1="70" x2="320" y2="70" className={styles.grid} />
              <line x1="0" y1="105" x2="320" y2="105" className={styles.grid} />
              <path
                d="M0 110 L40 100 L80 104 L120 88 L160 92 L200 70 L240 60 L280 40 L320 22"
                className={styles.line}
              />
              <path
                d="M0 110 L40 100 L80 104 L120 88 L160 92 L200 70 L240 60 L280 40 L320 22 L320 140 L0 140 Z"
                fill="url(#fill)"
                stroke="none"
              />
              <circle cx="280" cy="40" r="4" className={styles.point} />
              <circle cx="320" cy="22" r="4.5" className={styles.pointAlert} />
            </svg>

            <div className={styles.alertRow}>
              <Icon name="alert" size={16} strokeWidth={2} />
              Upward trend detected — Creatinine ↑ over last 4 samples
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <Icon name="arrowDown" size={18} />
      </div>
    </section>
  );
}
