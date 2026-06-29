import Icon from '../components/Icon.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { PAPER_GROUPS } from '../data/papers.js';
import styles from './PapersPage.module.css';

export default function PapersPage() {
  // Re-run the scroll-reveal observer when this page mounts.
  useReveal();

  return (
    <main className={styles.page}>
      <div className="container" dir="rtl">
        <a className={styles.back} href="#top">
          <Icon name="arrowRight" size={16} strokeWidth={2.4} />
          חזרה לאתר הפרויקט
        </a>

        <header className={`${styles.header} reveal`}>
          <span className="eyebrow">
            <Icon name="spark" size={14} strokeWidth={2} />
            המאמרים בעבודה שלנו
          </span>
          <h1 className={styles.pageTitle}>
            איך כל מאמר <span className="gradient-text">עיצב את הפרויקט</span>
          </h1>
          <p className={styles.pageLead}>
            כל תת-קבוצה למדה מאמר מחקרי, הציגה אותו, והכניסה את רעיונותיו לאב-טיפוס לזיהוי הידרדרות.
            למטה מופיעים לכל מאמר: המאמר עצמו, המצגת, וכתיבה קונקרטית על האופן שבו השתמשנו בו.
          </p>
        </header>

        {PAPER_GROUPS.map((p) => (
          <article key={p.id} className={`${styles.paper} reveal`}>
            <div className={styles.grid}>
              {/* Left: paper identity + actions */}
              <aside className={styles.side}>
                <div className={styles.members}>
                  {p.members.map((m) => (
                    <span key={m} className={styles.member}>
                      {m}
                    </span>
                  ))}
                </div>
                <h2 className={styles.paperTitle}>{p.title}</h2>

                <div className={styles.actions}>
                  {p.paperUrl && (
                    <a className="btn btn-ghost" href={p.paperUrl} target="_blank" rel="noreferrer">
                      <Icon name="link" size={16} strokeWidth={2} />
                      קריאת המאמר
                    </a>
                  )}
                  {p.presentationUrl && (
                    // TODO: drop the slide deck at public/papers/ — see public/papers/README.md
                    <a
                      className="btn btn-primary"
                      href={p.presentationUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name="layout" size={16} strokeWidth={2} />
                      צפייה במצגת
                    </a>
                  )}
                </div>

                {p.tags?.length > 0 && (
                  <div className={styles.tags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </aside>

              {/* Right: summary, findings, usage */}
              <div className={styles.body}>
                <section className={styles.block}>
                  <h3 className={styles.blockTitle}>
                    <Icon name="question" size={18} /> על מה המאמר
                  </h3>
                  <p className={styles.text}>{p.summary}</p>
                </section>

                {p.findings?.length > 0 && (
                  <section className={styles.block}>
                    <h3 className={styles.blockTitle}>
                      <Icon name="chart" size={18} /> ממצאים מרכזיים
                    </h3>
                    <ul className={styles.findings}>
                      {p.findings.map((f) => (
                        <li key={f}>
                          <Icon name="check" size={15} strokeWidth={2.6} className={styles.tick} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <section className={`${styles.block} ${styles.usage}`}>
                  <h3 className={styles.blockTitle}>
                    <Icon name="cpu" size={18} /> איך השתמשנו בו בפרויקט
                  </h3>
                  {p.usage.map((para, i) => (
                    <p key={i} className={styles.text}>
                      {para}
                    </p>
                  ))}
                </section>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
