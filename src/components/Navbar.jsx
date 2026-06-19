import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { DASHBOARD_URL, GITHUB_URL } from '../data/siteConfig.js';
import styles from './Navbar.module.css';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#dataset', label: 'Dataset' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#team', label: 'Team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.logo}>
            <Icon name="pulse" size={20} strokeWidth={2.2} />
          </span>
          <span className={styles.brandText}>
            LabTrend<span className={styles.brandDot}>.</span>
          </span>
        </a>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          {/* GitHub repository button */}
          <a
            className={styles.githubBtn}
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="View source on GitHub"
          >
            <Icon name="github" size={18} />
            <span className={styles.githubLabel}>GitHub</span>
          </a>

          {/* Single CTA — shown on both desktop and mobile */}
          <a
            className={`btn btn-primary ${styles.cta}`}
            href={DASHBOARD_URL}
            target="_blank"
            rel="noreferrer"
          >
            View Dashboard
          </a>
        </div>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span style={{ transform: open ? 'translateY(6px) rotate(45deg)' : '' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'translateY(-6px) rotate(-45deg)' : '' }} />
        </button>
      </div>
    </header>
  );
}
