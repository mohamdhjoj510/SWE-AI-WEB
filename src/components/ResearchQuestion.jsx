import Icon from './Icon.jsx';
import styles from './ResearchQuestion.module.css';

export default function ResearchQuestion() {
  return (
    <section className="section" id="research">
      <div className="container">
        <div className={`${styles.wrap} reveal`}>
          <span className="eyebrow">
            <Icon name="question" size={14} strokeWidth={2} />
            Research Question
          </span>

          <blockquote className={styles.quote}>
            <span className={styles.mark}>“</span>
            How can laboratory test trends over time be used to detect{' '}
            <span className="gradient-text">early signs of patient deterioration</span> in
            hospitalized patients?
          </blockquote>

          <p className={styles.note}>
            This question frames every design decision in the project — from how we ingest LABEVENTS
            data to how we model trends and translate them into a risk score.
          </p>
        </div>
      </div>
    </section>
  );
}
