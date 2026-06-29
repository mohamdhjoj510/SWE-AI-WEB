import Icon from './Icon.jsx';
import c from './content.module.css';
import styles from './Papers.module.css';
import { PAPER_GROUPS } from '../data/papers.js';

export default function Papers() {
  return (
    <section className="section" id="papers">
      <div className="container" dir="rtl">
        <div className={`${c.head} reveal`}>
          <span className="eyebrow">
            <Icon name="spark" size={14} strokeWidth={2} />
            מאמרים
          </span>
          <h2 className="section-title">
            המאמרים שמאחורי <span className="gradient-text">הגישה שלנו</span>
          </h2>
          <p className="section-lead">
            כל תת-קבוצה למדה מאמר מחקרי והציגה אותו. הנה מה שכל זוג קרא — ואיך זה תרם לפרויקט הזה.
          </p>
        </div>

        <div className={styles.list}>
          {PAPER_GROUPS.map((p, i) => (
            <article
              key={p.id}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={styles.cardMain}>
                <div className={styles.members}>
                  {p.members.map((m) => (
                    <span key={m} className={styles.member}>
                      {m}
                    </span>
                  ))}
                </div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.summary}>{p.summary}</p>
                {p.tags?.length > 0 && (
                  <div className={styles.tags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.cardSide}>
                <a className={`btn btn-primary ${styles.sideBtn}`} href="#/papers">
                  איך השתמשנו בו
                  <Icon name="arrowRight" size={18} strokeWidth={2.2} />
                </a>
                {p.paperUrl && (
                  <a
                    className={`btn btn-ghost ${styles.sideBtn}`}
                    href={p.paperUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="link" size={16} strokeWidth={2} />
                    קריאת המאמר
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
