import Icon from './Icon.jsx';
import c from './content.module.css';
import styles from './Dataset.module.css';

const FIELDS = [
  { name: 'SUBJECT_ID', type: 'integer', desc: 'Unique identifier for an individual patient.' },
  { name: 'HADM_ID', type: 'integer', desc: 'Hospital admission identifier tied to a single stay.' },
  { name: 'ITEMID', type: 'integer', desc: 'Identifier for the specific laboratory measurement.' },
  { name: 'CHARTTIME', type: 'timestamp', desc: 'When the sample was charted — the time axis for trends.' },
  { name: 'VALUENUM', type: 'numeric', desc: 'Numeric result of the lab test used in analysis.' },
];

export default function Dataset() {
  return (
    <section className="section" id="dataset">
      <div className="container">
        <div className={`${c.head} reveal`}>
          <span className="eyebrow">
            <Icon name="database" size={14} strokeWidth={2} />
            Dataset
          </span>
          <h2 className="section-title">
            Built on <span className="gradient-text">MIMIC-III · LABEVENTS</span>
          </h2>
          <p className="section-lead">
            MIMIC-III is a large, de-identified critical-care research database. The{' '}
            <span className={c.mono}>LABEVENTS</span> table records individual laboratory
            measurements over time, which makes it a natural source for trend analysis.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Field reference table */}
          <div className={`${styles.tableCard} reveal`}>
            <div className={styles.tableHead}>
              <Icon name="database" size={18} />
              <span>LABEVENTS — core input fields</span>
            </div>
            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {FIELDS.map((f) => (
                    <tr key={f.name}>
                      <td className={styles.fieldName}>{f.name}</td>
                      <td>
                        <span className={styles.typeTag}>{f.type}</span>
                      </td>
                      <td className={styles.desc}>{f.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sample record card */}
          <aside className={`${styles.sampleCard} reveal`} style={{ transitionDelay: '120ms' }}>
            <div className={styles.sampleHead}>Sample record</div>
            <pre className={styles.code}>
              <code>{`{
  "SUBJECT_ID": 10006,
  "HADM_ID":   142345,
  "ITEMID":    50912,  // Creatinine
  "CHARTTIME": "2150-04-17 06:14",
  "VALUENUM":  1.9
}`}</code>
            </pre>
            <p className={styles.sampleNote}>
              Grouping records by <span className={c.mono}>SUBJECT_ID</span> and{' '}
              <span className={c.mono}>ITEMID</span>, then ordering by{' '}
              <span className={c.mono}>CHARTTIME</span>, reconstructs each patient&apos;s lab
              trajectory.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
