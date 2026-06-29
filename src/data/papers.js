/**
 * Research papers each sub-group studied, and how each one fed into our project.
 *
 * To add another group's paper, append an object with the same shape.
 *
 * presentationUrl:
 *   Put the slide deck PDF in `public/papers/` and reference it here, e.g.
 *   'papers/tdd-presentation.pdf'. (Drop the actual file into that folder —
 *   see public/papers/README.md.) Leave as null to hide the slides button.
 */
export const PAPER_GROUPS = [
  {
    id: 'tdd-code-generation',
    members: ['Mohammad Hajuj', 'Naief Hajuj'],
    title: 'Test-Driven Development for Code Generation',
    // TODO: place the paper PDF at public/papers/2402.13521v2.pdf
    paperUrl: 'papers/2402.13521v2.pdf',
    // TODO: place the slide deck at public/papers/Test-Driven-Development-for-Code-Generation.pdf
    presentationUrl: 'papers/Test-Driven-Development-for-Code-Generation.pdf',
    tags: ['LLMs', 'TDD', 'Code Generation', 'Software Testing'],
    summary:
      'המאמר בודק האם עקרון ה-TDD עוזר כשמודל שפה (GPT-4, Llama 3) כותב את הקוד. במקום רק לבקש פתרון מהמודל, המפתח מספק את הטסטים מראש — כמפרט ולא רק כבדיקה — ולולאת remediation מריצה מחדש טסטים שנכשלו ומבקשת מהמודל לתקן את עצמו. הניסויים נערכו על MBPP, HumanEval ועל 1,100 בעיות מ-CodeChef באמצעות מסגרת בשם TGen.',
    findings: [
      'אספקת טסטים בזמן הכתיבה שיפרה את נכונות הקוד בכ-9–29% בין המודלים.',
      'לולאת תיקון עצמי (remediation) הוסיפה עוד כ-5–9%.',
      'מודלים חלשים יותר מרוויחים הכי הרבה מהגישה מבוססת-הטסטים.',
      'יותר מדי טסטים עלולים להזיק — אפקט "lost in the middle" — ולכן איכות חשובה מכמות.',
    ],
    // How this paper informed our deterioration-detection project.
    usage: [
      'המאמר עיצב את האופן שבו אנחנו בונים ובוטחים בצינור הניתוח. הלקח המרכזי שלו — לתת למערכת את הטסטים תחילה, כמפרט, ולתת לטסטים שנכשלים להוביל את התיקון — מתאים ישירות לחלקים בפרויקט שלנו שממירים רשומות LABEVENTS גולמיות למגמות, לזיהוי דפוסים חריגים ולציון סיכון.',
      'לפני מימוש לוגיקת ניתוח-המגמות וחישוב הסיכון, כתבנו טסטים שמגדירים את ההתנהגות הצפויה על רצפי מעבדה קטנים שנבדקו ידנית (למשל: סדרת קריאטינין שעולה בהתמדה חייבת להעלות את ציון הסיכון ולהפעיל התראה). הטסטים האלה הם ההגדרה שלנו ל"נכון", בדיוק כפי שהמאמר טוען שטסטים צריכים להיות.',
      'כשנעזרנו ב-LLM כדי לכתוב טיוטות קוד לצינור, סיפקנו את הטסטים האלה בתוך ה-prompt וחזרנו בלולאת remediation עד שכולם עברו — אותו תהליך עבודה שהמאמר מאמת. כך הקוד שנוצר לאיסוף הנתונים ולניתוח המגמות נשאר מותאם לדרישות שלנו, וקיבלנו דרך מהירה וחוזרת לאתר רגרסיות ככל שהאב-טיפוס התפתח.',
    ],
  },
  {
    id: 'swe-agent-aci',
    members: ['Khalil Dabbah', 'Riad Bkheet'],
    title: 'SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering',
    // TODO: place the paper PDF at public/papers/2405.15793v32.pdf
    paperUrl: 'papers/2405.15793v32.pdf',
    // TODO: place the slide deck at public/papers/SWE-agent_presentation.pdf
    presentationUrl: 'papers/SWE-agent_presentation.pdf',
    tags: ['LLM Agents', 'ACI', 'SWE-bench', 'Software Engineering'],
    summary:
      'המאמר טוען שסוכני מודל-שפה הם סוג חדש של "משתמש קצה" שמרוויח מממשק ייעודי. הוא מציג את SWE-agent ואת מושג ה-Agent-Computer Interface (ACI): סט פעולות פשוט וקומפקטי לצפייה, חיפוש ועריכת קבצים, עם משוב תמציתי ומעקות בטיחות (כמו linter שחוסם עריכות שמכניסות שגיאות תחביר). על SWE-bench הוא פותר 12.5% מהבעיות ועל HumanEvalFix מגיע ל-87.7% — הרבה מעבר לגישות לא-אינטראקטיביות.',
    findings: [
      'ממשק שמתוכנן עבור הסוכן (ACI) עדיף על ממשקים שנבנו לבני אדם כמו ה-shell.',
      'עריכה קומפקטית עם משוב מיידי ומעקות (linter) משפרת משמעותית את ההצלחה.',
      'משוב סביבתי צריך להיות אינפורמטיבי אך תמציתי — יותר מדי הקשר פוגע בביצועים.',
      'הסוכן מצליח מהר ונכשל לאט: ריצות שמסתיימות מוקדם נוטות יותר להצליח.',
    ],
    // How this paper informed our deterioration-detection project.
    usage: [
      'המאמר עיצב את האופן שבו אנחנו חושבים על הכלים והממשק שבהם נעזרנו לבניית המערכת. העיקרון המרכזי — לתכנן פעולות פשוטות וקומפקטיות עם משוב תמציתי במקום פקודות גנריות ועמוסות — הנחה אותנו כשבנינו את סקריפטי האינגסטיה והניתוח של נתוני LABEVENTS.',
      'אימצנו את עקרון מעקות-הבטיחות מהמאמר: בדיוק כפי ש-SWE-agent חוסם עריכה שמכניסה שגיאת תחביר, הוספנו בדיקות ולינטינג שעוצרים קוד שגוי מוקדם, כדי שטעות בשלב הניקוי או חישוב המגמה תיתפס לפני שהיא מתפשטת הלאה בצינור.',
      'גישת ה"לולאה האיטרטיבית" — פעולה, הרצה, בדיקת משוב ותיקון — שמשה אותנו בעבודה מול כלי ה-LLM: סיפקנו הקשר ממוקד ותמציתי, בדקנו את הפלט מול המצב בפועל, ותיקנו צעד-אחר-צעד, בדיוק כמו תבנית ה-"edit → run → verify" שהמאמר מתאר.',
    ],
  },
];
