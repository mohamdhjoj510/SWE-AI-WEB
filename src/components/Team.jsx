import Icon from './Icon.jsx';
import c from './content.module.css';
import styles from './Team.module.css';
import { TEAM } from '../data/siteConfig.js';

// To use a real photo, import it here and set `image` in src/data/siteConfig.js:
//   import mohammad from '../assets/team/mohammad.jpg';
//   ...then set image: mohammad on the matching member.

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <div className={`${c.head} ${c.headCenter} reveal`}>
          <span className="eyebrow">
            <Icon name="spark" size={14} strokeWidth={2} />
            The Team
          </span>
          <h2 className="section-title">
            Built by our <span className="gradient-text">project group</span>
          </h2>
          <p className="section-lead" style={{ marginInline: 'auto' }}>
            Six contributors, each owning a part of the pipeline from data to dashboard.
          </p>
        </div>

        <div className={`${c.grid} ${c.cols3}`}>
          {TEAM.map((member, i) => (
            <article
              key={member.name}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className={styles.avatarWrap}>
                {/* Replace with <img> once `image` is set in siteConfig.js */}
                {member.image ? (
                  <img className={styles.avatarImg} src={member.image} alt={member.name} />
                ) : (
                  <span className={styles.avatar}>{initials(member.name)}</span>
                )}
              </div>
              <h3 className={styles.name}>{member.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
