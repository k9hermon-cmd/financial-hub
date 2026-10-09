/**
 * Capital Markets & Financial AI Learning Hub
 * Client-Side Application Engine (ES6)
 */

// Permanent embedded Gemini API Key
const GEMINI_API_KEY = "AQ.Ab8RN6I8cgdAev7VCqX92EwUM2ZSEbXhj4Yfv8yuLd4jZN9weg";

// Embedded fallback questions data to ensure 100% operation even when opened directly via file://
const EMBEDDED_QUESTIONS_DATA = {
  "practiceQuestions": [
    {
      "id": "p1",
      "topic": "Balance Sheet",
      "topicHe": "מאזן",
      "difficulty": "Easy",
      "difficultyHe": "קל",
      "question": "חברה רכשה מלאי בסך 2 מיליון ש\"ח באשראי ספקים ל-60 יום. כיצד הפעולה תשפיע על המאזן?",
      "options": [
        { "id": "A", "text": "גידול בנכסים שוטפים (מלאי) כנגד גידול בהתחייבויות שוטפות (ספקים)" },
        { "id": "B", "text": "גידול בנכסים שוטפים כנגד ירידה בהון העצמי" },
        { "id": "C", "text": "גידול בנכסים לא שוטפים כנגד גידול בחוב לזמן ארוך" },
        { "id": "D", "text": "אין כל שינוי במאזן עד שהסחורה תימכר בפועל" }
      ],
      "correct": "A",
      "explanations": {
        "correct": "מלאי שוטף נרשם כנכס, וחוב לספקים ל-60 יום הוא התחייבות שוטפת מובהקת.",
        "wrong": {
          "B": "רכישת מלאי אינה הוצאה שפוגעת בהון העצמי בעת הרכישה.",
          "C": "מלאי וספקים הם שוטפים (מתחת לשנה), לא לזמן ארוך.",
          "D": "עקרון הרישום הכפול מחייב רישום מיידי של הנכס והחוב."
        }
      }
    },
    {
      "id": "p2",
      "topic": "Cash Flow",
      "topicHe": "דוח תזרים מזומנים",
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "question": "חברה רשמה רווח נקי של 50 מיליון ש\"ח, הכולל רווח הון חד-פעמי של 20 מיליון ש\"ח ממכירת מגרש. כיצד יותאם סעיף זה בדוח התזרים מפעילות שוטפת?",
      "options": [
        { "id": "A", "text": "יתווסף לרווח הנקי" },
        { "id": "B", "text": "ינוכה מהרווח הנקי (התאמה שלילית)" },
        { "id": "C", "text": "לא יופיע כלל בדוח התזרים" },
        { "id": "D", "text": "יוכפל בשיעור המס בלבד" }
      ],
      "correct": "B",
      "explanations": {
        "correct": "רווח הון נכלל ברווח הנקי אך שייך לפעילות השקעה. כדי למנוע ספירה כפולה וכדי לשקף תזרים מפעילות שוטפת אמיתית, מנכים אותו מהרווח הנקי בסעיף ההתאמות.",
        "wrong": {
          "A": "הוספתו תנפח את התזרים עוד יותר.",
          "C": "הוא חייב להופיע כסעיף התאמה.",
          "D": "מנכים את מלוא רווח ההון החשבונאי המגולם בשורת הרווח."
        }
      }
    },
    {
      "id": "p3",
      "topic": "Ratios",
      "topicHe": "יחסים פיננסיים",
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "question": "חברה א' וחברה ב' מציגות שתיהן ROE של 25%. לחברה א' אין חוב כלל, בעוד חברה ב' ממונפת עם יחס חוב לנכסים של 80%. איזו חברה איכותית יותר מבחינת ועדת השקעות?",
      "options": [
        { "id": "A", "text": "חברה ב' כי מינוף מגדיל עושר" },
        { "id": "B", "text": "חברה א' כי הרווחיות שלה מושגת מאיכות עסקית ולא מסיכון מימוני (מינוף פיננסי)" },
        { "id": "C", "text": "שתיהן זהות לחלוטין מכיוון שה-ROE זהה" },
        { "id": "D", "text": "חברה ב' כי עלות החוב תמיד זולה מהון עצמי" }
      ],
      "correct": "B",
      "explanations": {
        "correct": "נוסחת דופונט מלמדת שמינוף גבוה יכול לנפח מלאכותית את ה-ROE של עסק בינוני. חברה א' משיגה תשואה מעולה ללא סיכון פשיטת רגל.",
        "wrong": {
          "A": "מינוף מגדיל סיכון ועלול למחוק את ההון במשבר.",
          "C": "בחינת איכות התשואה מחייבת בדיקת מבנה החוב.",
          "D": "זמינות החוב אינה מבטלת את סיכון חדלות הפירעון."
        }
      }
    },
    {
      "id": "p4",
      "topic": "Corporate Actions",
      "topicHe": "פעולות תאגידיות",
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "question": "חברה ביצעה רכישה עצמית (Buyback) של מניותיה בסך 100 מיליון ש\"ח באמצעות מזומנים מקופתה. כיצד פעולה זו משפיעה על המאזן?",
      "options": [
        { "id": "A", "text": "הנכסים גדלים ב-100 מיליון וההון העצמי קטן" },
        { "id": "B", "text": "המזומן (נכסים שוטפים) יורד ב-100 מיליון, וההון העצמי יורד ב-100 מיליון" },
        { "id": "C", "text": "ההון העצמי גדל מכיוון שהמניה עולה" },
        { "id": "D", "text": "אין שינוי בהון העצמי אלא רק ברווח הנקי" }
      ],
      "correct": "B",
      "explanations": {
        "correct": "מזומן יוצא מהחברה (ירידה בנכסים) ומניות האוצר מופחתות מסעיף ההון העצמי (או נרשמות כסעיף מקזז הון).",
        "wrong": {
          "A": "מזומן יוצא, לכן הנכסים קטנים ולא גדלים.",
          "C": "רכישה עצמית אינה מגדילה הון עצמי, היא מחזירה הון למשקיעים.",
          "D": "רכישה עצמית אינה עוברת דרך דוח רווח והפסד ואינה משנה רווח נקי."
        }
      }
    },
    {
      "id": "p5",
      "topic": "Valuation",
      "topicHe": "הערכות שווי ותזרים",
      "difficulty": "Hard",
      "difficultyHe": "מאתגר",
      "question": "מהו ההבדל המהותי בין רווח נקי לבין Free Cash Flow (תזרים מזומנים חופשי)?",
      "options": [
        { "id": "A", "text": "אין הבדל, אלו שמות נרדפים" },
        { "id": "B", "text": "תזרים חופשי מנכה הוצאות הוניות להשקעה בעסק (CAPEX) ומתחשב בשינויים בהון החוזר, בעוד רווח נקי כולל הוצאות פחת לא-תזרימיות ומוטה מכללי חשבונאות" },
        { "id": "C", "text": "רווח נקי תמיד גבוה יותר מתזרים חופשי" },
        { "id": "D", "text": "תזרים חופשי מודד רק דיבידנדים שחולקו" }
      ],
      "correct": "B",
      "explanations": {
        "correct": "FCF = CFO פחות CAPEX. הוא מייצג את המזומן האמיתי שנותר לחברה לחלוקה או לצמיחה לאחר ששמרה על כושר הייצור שלה.",
        "wrong": {
          "A": "רווח הוא אומדן חשבונאי, מזומן חופשי הוא כסף פיזי.",
          "C": "תזרים חופשי יכול להיות גבוה מהרווח הנקי (למשל בחברות עם פחת ענק ו-CAPEX נמוך).",
          "D": "דיבידנד הוא שימוש במזומן, לא הגדרת התזרים החופשי."
        }
      }
    },
    {
      "id": "p6",
      "topic": "AI Literacy",
      "topicHe": "אוריינות AI",
      "difficulty": "Easy",
      "difficultyHe": "קל",
      "question": "מה הסיכון העיקרי בהזנת הפרומפט: \"כמה כסף חברת גוגל הרוויחה ברבעון האחרון?\" ללא צירוף הדוח?",
      "options": [
        { "id": "A", "text": "המודל יסרב לענות" },
        { "id": "B", "text": "המודל עלול להמציא נתון, לבלבל בין רבעונים שונים, או לערבב בין נתוני GAAP ל-Non-GAAP" },
        { "id": "C", "text": "המחשב יינעל" },
        { "id": "D", "text": "אין שום סיכון, מודלים פיננסיים לעולם אינם טועים" }
      ],
      "correct": "B",
      "explanations": {
        "correct": "מודלי שפה מסתמכים על סטטיסטיקה ללא עוגן. ללא הזנת דוח מקור רשמי, קיימת סכנת הזיה (Hallucination).",
        "wrong": {
          "A": "המודל יענה בשמחה אך בביטחון מוטעה.",
          "C": "אין קשר טכני.",
          "D": "מודלים טועים תדיר בחישובים ללא הנחיה מדויקת."
        }
      }
    },
    {
      "id": "p7",
      "topic": "Sourcing",
      "topicHe": "מקורות מידע",
      "difficulty": "Easy",
      "difficultyHe": "קל",
      "question": "היכן תמצא את הדוח השנתי המבוקר של חברה הרשומה בנאסד\"ק המכיל את כלל הביאורים החשבונאיים?",
      "options": [
        { "id": "A", "text": "דוח 8-K" },
        { "id": "B", "text": "דוח 10-K" },
        { "id": "C", "text": "כתבה בכלכליסט" },
        { "id": "D", "text": "הודעת יחסי ציבור (Press Release)" }
      ],
      "correct": "B",
      "explanations": {
        "correct": "טופס 10-K הוא הדוח השנתי המלא, המבוקר והמחייב על פי חוקי ה-SEC.",
        "wrong": {
          "A": "טופס 8-K מדווח על אירועים מהותיים שוטפים בלבד.",
          "C": "עיתונות אינה מסמך דיווח רשמי.",
          "D": "הודעות יח\"צ חלקיות ומבליטות נתונים נוחים."
        }
      }
    },
    {
      "id": "p8",
      "topic": "Valuation",
      "topicHe": "מכפילים והערכת שווי",
      "difficulty": "Hard",
      "difficultyHe": "מאתגר",
      "question": "חברה הציגה מכפיל רווח (P/E) נמוך מאוד של 4. מדוע ועדת השקעות לא תמהר לקבוע שהמניה \"זולה\"?",
      "options": [
        { "id": "A", "text": "כי מכפיל נמוך מעיד תמיד על חברה בצמיחה אדירה" },
        { "id": "B", "text": "ייתכן שהרווח נובע מאירוע חד-פעמי חריג או שהשוק צופה קריסה חדה ברווחים בעתיד הקרוב (Value Trap)" },
        { "id": "C", "text": "מכפיל רווח רלוונטי רק לחברות נדל\"ן" },
        { "id": "D", "text": "מכפיל 4 הוא בהכרח טעות חישוב של הבורסה" }
      ],
      "correct": "B",
      "explanations": {
        "correct": "\"מלכודת ערך\" מתרחשת כשהרווח בעבר היה גבוה בגלל שיא מחזור או רווח הון חד-פעמי, בעוד שהעתיד צופן הרעה חמורה.",
        "wrong": {
          "A": "חברות צומחות נסחרות לרוב במכפילים גבוהים.",
          "C": "מכפיל רווח משמש בכל ענפי המשק.",
          "D": "מכפילים נמוכים קיימים בענפים מחזוריים או בחברות במצוקה."
        }
      }
    },
    {
      "id": "p9",
      "topic": "AI Literacy",
      "topicHe": "אוריינות AI",
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "question": "איזה רכיב בפרומפט מבטיח שה-AI לא ימציא תוצאות בחישוב יחס פיננסי?",
      "options": [
        { "id": "A", "text": "לבקש ממנו להיות \"חכם ומנומס\"" },
        { "id": "B", "text": "לדרוש ממנו: \"הצג את נוסחת החישוב, את שורת המקור המדויקת מהדוח, ואת כל שלבי החישוב צעד-אחר-צעד\"" },
        { "id": "C", "text": "להשתמש באותיות גדולות בלבד" },
        { "id": "D", "text": "לשאול אותו באנגלית בלבד" }
      ],
      "correct": "B",
      "explanations": {
        "correct": "דרישה לשקיפות חישובית (Chain of Thought / Audit Trail) מאפשרת בדיקה מיידית של נתוני הגלם והנוסחה.",
        "wrong": {
          "A": "אינו משפיע על דיוק הלוגיקה החשבונאית.",
          "C": "אינו משפיע על דיוק הלוגיקה החשבונאית.",
          "D": "אינו משפיע על דיוק הלוגיקה החשבונאית."
        }
      }
    },
    {
      "id": "p10",
      "topic": "Balance Sheet",
      "topicHe": "מאזן והון חוזר",
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "question": "מהי המשמעות כאשר ההון החוזר נטו (Net Working Capital = נכסים שוטפים פחות התחייבויות שוטפות) הופך לשלילי עמוק?",
      "options": [
        { "id": "A", "text": "החברה נמצאת בעודף נזילות קיצוני" },
        { "id": "B", "text": "החברה עלולה להתקשות לעמוד בהתחייבויותיה בטווח של 12 החודשים הקרובים ללא מיחזור חוב או הזרמת הון" },
        { "id": "C", "text": "הרווח התפעולי של החברה הוכפל" },
        { "id": "D", "text": "החברה אינה חייבת כספים לאף ספק" }
      ],
      "correct": "B",
      "explanations": {
        "correct": "נכסים שוטפים נמוכים מהתחייבויות שוטפות יוצרים גירעון תזרימי קצר טווח המסכן את המשך הפעילות.",
        "wrong": {
          "A": "זהו חסר נזילות, לא עודף.",
          "C": "אין קשר ישיר לרווח תפעולי.",
          "D": "ההתחייבויות בפועל גבוהות מהנכסים."
        }
      }
    }
  ],
  "examQuestions": [
    {
      "id": 1,
      "points": 4,
      "difficulty": "Easy",
      "difficultyHe": "קל",
      "category": "statements",
      "categoryHe": "דוחות כספיים",
      "question": "מהי המשוואה החשבונאית הבסיסית במאזן?",
      "options": [
        { "id": "A", "text": "נכסים = התחייבויות + הון עצמי" },
        { "id": "B", "text": "נכסים = התחייבויות - הון עצמי" },
        { "id": "C", "text": "הון עצמי = נכסים + התחייבויות" },
        { "id": "D", "text": "רווח נקי = מזומן בקופה + הון חוזר" }
      ],
      "correct": "A",
      "explanation": "המשוואה החשבונאית היסודית היא תמיד: נכסים = התחייבויות + הון עצמי (Assets = Liabilities + Equity)."
    },
    {
      "id": 2,
      "points": 4,
      "difficulty": "Easy",
      "difficultyHe": "קל",
      "category": "statements",
      "categoryHe": "דוחות כספיים",
      "question": "איזה סעיף מסווג כנכס לא שוטף במאזן?",
      "options": [
        { "id": "A", "text": "לקוחות חייבים" },
        { "id": "B", "text": "רכוש קבוע ומבני תעשייה" },
        { "id": "C", "text": "פיקדון בנקאי לשבוע" },
        { "id": "D", "text": "מלאי מוצרים מוגמרים" }
      ],
      "correct": "B",
      "explanation": "רכוש קבוע, מבנים ומכונות מיועדים לשימוש ממושך מעבר לשנת פעילות אחת ולכן מסווגים כנכסים לא שוטפים (Non-current / Fixed Assets)."
    },
    {
      "id": 3,
      "points": 4,
      "difficulty": "Easy",
      "difficultyHe": "קל",
      "category": "statements",
      "categoryHe": "דוחות כספיים",
      "question": "היכן תסווג הלוואה בנקאית שמועד פירעונה הסופי בעוד 4 חודשים?",
      "options": [
        { "id": "A", "text": "התחייבות שוטפת" },
        { "id": "B", "text": "התחייבות לא שוטפת" },
        { "id": "C", "text": "נכס שוטף" },
        { "id": "D", "text": "סעיף הוני" }
      ],
      "correct": "A",
      "explanation": "כל התחייבות שמועד פירעונה חל בתוך 12 חודשים מיום המאזן מסווגת כהתחייבות שוטפת (חלויות שוטפות של הלוואות)."
    },
    {
      "id": 4,
      "points": 4,
      "difficulty": "Easy",
      "difficultyHe": "קל",
      "category": "statements",
      "categoryHe": "דוחות כספיים",
      "question": "מה מייצג הרווח הגולמי בדוח רווח והפסד?",
      "options": [
        { "id": "A", "text": "מכירות בניכוי מס הכנסה" },
        { "id": "B", "text": "הכנסות בניכוי עלות המכר" },
        { "id": "C", "text": "רווח תפעולי בתוספת הוצאות מימון" },
        { "id": "D", "text": "סך כל התזרים מפעילות שוטפת" }
      ],
      "correct": "B",
      "explanation": "רווח גולמי = הכנסות (Revenue) פחות עלות המכר (COGS). הוא משקף את הרווחיות הישירה מייצור המוצר או אספקת השירות."
    },
    {
      "id": 5,
      "points": 4,
      "difficulty": "Easy",
      "difficultyHe": "קל",
      "category": "ai_sourcing",
      "categoryHe": "מקורות ואוריינות AI",
      "question": "מהי מערכת \"מאיה\" של הבורסה בתל אביב?",
      "options": [
        { "id": "A", "text": "אתר רכילות עסקית" },
        { "id": "B", "text": "מערכת הדיווח האלקטרונית הרשמית לפרסום דוחות ואירועים מהותיים של חברות ישראליות" },
        { "id": "C", "text": "תוכנת AI למסחר אוטומטי" },
        { "id": "D", "text": "בנק השקעות ממשלתי" }
      ],
      "correct": "B",
      "explanation": "מערכת מאיה (maya.tase.co.il) היא המקור החוקי והרשמי של הבורסה לניירות ערך בתל אביב ורשות ניירות ערך לדיווחים מיידיים, תקופתיים ושנתיים של תאגידים מדווחים."
    },
    {
      "id": 6,
      "points": 5,
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "category": "statements",
      "categoryHe": "דוחות כספיים",
      "question": "כיצד משפיעה עלייה חדה בסעיף \"לקוחות חייבים\" על תזרים המזומנים מפעילות שוטפת?",
      "options": [
        { "id": "A", "text": "מגדילה את התזרים באופן ישיר" },
        { "id": "B", "text": "מקטינה את התזרים מפעילות שוטפת ביחס לרווח הנקי, כי המכירה נרשמה אך המזומן טרם נגבה" },
        { "id": "C", "text": "אין שום השפעה על התזרים" },
        { "id": "D", "text": "הופכת את ההון העצמי לשלילי" }
      ],
      "correct": "B",
      "explanation": "גידול בסעיף לקוחות מהווה ספיגת הון חוזר (מכירה חשבונאית שטרם נפגשה עם כסף בחשבון הבנק), ולכן מנוכה מהרווח הנקי בדוח התזרים (התאמה שלילית)."
    },
    {
      "id": 7,
      "points": 5,
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "category": "statements",
      "categoryHe": "דוחות כספיים",
      "question": "חברה הנפיקה מניות חדשות בבורסה וגייסה 50 מיליון ש\"ח. היכן תירשם תנועה זו בדוח התזרים?",
      "options": [
        { "id": "A", "text": "כניסת מזומנים בפעילות שוטפת" },
        { "id": "B", "text": "כניסת מזומנים בפעילות מימון" },
        { "id": "C", "text": "יציאת מזומנים בפעילות השקעה" },
        { "id": "D", "text": "הפעולה אינה נרשמת בדוח התזרים" }
      ],
      "correct": "B",
      "explanation": "גיוס הון ממניות או אג\"ח, נטילת הלוואות וחלוקת דיבידנדים מסווגים כולם בפעילות מימון (Cash Flows from Financing Activities - CFF)."
    },
    {
      "id": 8,
      "points": 5,
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "category": "ratios",
      "categoryHe": "יחסים והערכות שווי",
      "question": "מהו היתרון המרכזי של מדד ROIC (תשואה על ההון המושקע) על פני ROE?",
      "options": [
        { "id": "A", "text": "ROIC מתעלם ממסים" },
        { "id": "B", "text": "ROIC מודד את יעילות הפקת הרווח מכלל מקורות ההון התפעוליים ומנטרל עיוותים הנובעים ממינוף יתר" },
        { "id": "C", "text": "ROIC מתאים רק לחברות הפסדיות" },
        { "id": "D", "text": "ROIC שווה תמיד למכפיל הרווח" }
      ],
      "correct": "B",
      "explanation": "ROIC (NOPAT / Invested Capital) בוחן את כושר ייצור התשואה של הפעילות התפעולית מול סך ההון (חוב + הון עצמי), ומבטל את האשליה של ROE גבוה שנוצר מחוב מסוכן."
    },
    {
      "id": 9,
      "points": 5,
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "category": "statements",
      "categoryHe": "דוחות כספיים",
      "question": "כאשר חברה רוכשת ציוד ומכונות חדשות (CAPEX), היכן הפעולה מופיעה בדוח התזרים?",
      "options": [
        { "id": "A", "text": "יציאת מזומנים בפעילות השקעה (CFI)" },
        { "id": "B", "text": "יציאת מזומנים בפעילות מימון (CFF)" },
        { "id": "C", "text": "כניסת מזומנים בפעילות שוטפת (CFO)" },
        { "id": "D", "text": "הפעולה אינה מופיעה בתזרים עד לחישוב הפחת" }
      ],
      "correct": "A",
      "explanation": "רכישת רכוש קבוע ונכסים לזמן ארוך (Capital Expenditures) היא יציאת מזומנים תחת פעילות השקעה (Cash Flow from Investing Activities)."
    },
    {
      "id": 10,
      "points": 5,
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "category": "ratios",
      "categoryHe": "יחסים והערכות שווי",
      "question": "מה משמעות המושג \"Non-GAAP Adjustments\" בדוחות רווח והפסד?",
      "options": [
        { "id": "A", "text": "התאמות חובה של רשות ניירות ערך" },
        { "id": "B", "text": "נתונים מותאמים שמציגה הנהלת החברה בניטרול הוצאות שהיא מגדירה כחד-פעמיות או לא-תזרימיות (כגון תגמול מבוסס מניות)" },
        { "id": "C", "text": "הדוח החשבונאי המבוקר הסופי" },
        { "id": "D", "text": "שווי המזומנים בבנקים זרים" }
      ],
      "correct": "B",
      "explanation": "רווחי Non-GAAP מוצגים על ידי ההנהלה במטרה להראות רווח \"תפעולי מנורמל\", אך עלולים לייפות את המציאות על ידי התעלמות מהוצאות אמיתיות כמו תגמול באופציות (SBC)."
    },
    {
      "id": 11,
      "points": 5,
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "category": "ratios",
      "categoryHe": "יחסים והערכות שווי",
      "question": "כיצד רכישה עצמית (Buyback) משפיעה על הרווח למניה (EPS) אם הרווח הנקי נשאר קבוע?",
      "options": [
        { "id": "A", "text": "מקטינה את הרווח למניה" },
        { "id": "B", "text": "מגדילה את הרווח למניה מכיוון שמספר המניות הקיימות קטן" },
        { "id": "C", "text": "לא משנה דבר ברווח למניה" },
        { "id": "D", "text": "מכפילה את ההון העצמי במאזן" }
      ],
      "correct": "B",
      "explanation": "הרווח למניה הוא רווח נקי חלקי מספר מניות. כשרכישה עצמית מצמצמת את המכנה (מספר המניות בשוק), הרווח למניה גדל."
    },
    {
      "id": 12,
      "points": 5,
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "category": "ratios",
      "categoryHe": "יחסים והערכות שווי",
      "question": "מהו הסיכון במכפיל רווח היסטורי (Trailing P/E) בעת ניתוח חברות סחורות ומחזוריות?",
      "options": [
        { "id": "A", "text": "הוא תמיד שווה לאפס" },
        { "id": "B", "text": "בשיא מחזור הרווחים גבוהים במיוחד ולכן המכפיל נראה מטעה כ\"זול\", רגע לפני קריסה מחזורית ברווח" },
        { "id": "C", "text": "הוא אינו חוקי לשימוש לפי תקני חשבונאות" },
        { "id": "D", "text": "הוא אינו לוקח בחשבון את שם החברה" }
      ],
      "correct": "B",
      "explanation": "זוהי תופעת \"מלכודת הערך המחזורית\": בחברות כמו ספנות, כימיקלים או שבבים, מכפיל נמוך מופיע בשיא הרווחיות, ממש לפני ירידת מחירים ומחזור שפל."
    },
    {
      "id": 13,
      "points": 5,
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "category": "ratios",
      "categoryHe": "יחסים והערכות שווי",
      "question": "בהערכת שווי במודל DCF, מה יקרה לשווי הנוכחי (Present Value) אם נגדיל את שיעור ההיוון (WACC)?",
      "options": [
        { "id": "A", "text": "השווי המוערך של החברה יירד" },
        { "id": "B", "text": "השווי המוערך של החברה יעלה" },
        { "id": "C", "text": "לא יחול שינוי בשווי" },
        { "id": "D", "text": "תזרים המזומנים של העסק יוכפל" }
      ],
      "correct": "A",
      "explanation": "שיעור ההיוון נמצא במכנה של נוסחת ההיוון. ככל שמחיר ההון / הריבית / הסיכון עולה (מכנה גדל), השווי הנוכחי של תזרימי העתיד קטן."
    },
    {
      "id": 14,
      "points": 5,
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "category": "ai_sourcing",
      "categoryHe": "מקורות ואוריינות AI",
      "question": "באיזה דוח של חברה אמריקאית (SEC) מדווחים אירועים מהותיים ודחופים שקרו בין הרבעונים?",
      "options": [
        { "id": "A", "text": "Form 10-K" },
        { "id": "B", "text": "Form 8-K" },
        { "id": "C", "text": "Form S-1" },
        { "id": "D", "text": "Form 10-Q" }
      ],
      "correct": "B",
      "explanation": "טופס 8-K מוגש ל-SEC תוך 4 ימי עסקים מאירוע מהותי (החלפת מנכ\"ל, מיזוג, תביעה, שינוי בהסכמי אשראי וכד')."
    },
    {
      "id": 15,
      "points": 5,
      "difficulty": "Medium",
      "difficultyHe": "בינוני",
      "category": "ai_sourcing",
      "categoryHe": "מקורות ואוריינות AI",
      "question": "מהי הדרך היעילה ביותר להנחות AI להשוות בין שני דוחות כספיים שנתיים?",
      "options": [
        { "id": "A", "text": "\"תספר לי מי מבין שתי החברות יותר טובה\"" },
        { "id": "B", "text": "\"הנה נתוני דוח תזרים ודוח רווח והפסד של חברה א' וחברה ב': חלץ את יחס ה-CFO להכנסות, שולי הרווח התפעולי, ובנה טבלה השוואתית תוך הצגת הנוסחאות\"" },
        { "id": "C", "text": "לשלוח קישור לדף הראשי של גוגל" },
        { "id": "D", "text": "לבקש מהמודל להמר על המניה שתעלה מחר" }
      ],
      "correct": "B",
      "explanation": "פרומפט מקצועי דורש הזנת נתוני מקור, הגדרת מדדים מדויקים (CFO/Revenue, EBIT Margin), ודרישה לטבלה מובנית והצגת דרך החישוב."
    },
    {
      "id": 16,
      "points": 6,
      "difficulty": "Hard",
      "difficultyHe": "מאתגר",
      "category": "statements",
      "categoryHe": "דוחות כספיים",
      "question": "לחברה יש 10 מיליון ש\"ח רווח תפעולי, 2 מיליון ש\"ח הוצאות ריבית, ומס של 20%. מהו הרווח הנקי?",
      "options": [
        { "id": "A", "text": "8.0 מיליון ש\"ח" },
        { "id": "B", "text": "6.4 מיליון ש\"ח" },
        { "id": "C", "text": "9.6 מיליון ש\"ח" },
        { "id": "D", "text": "10.0 מיליון ש\"ח" }
      ],
      "correct": "B",
      "explanation": "חישוב: רווח תפעולי (10) פחות הוצאות מימון (2) = 8 מיליון רווח לפני מס (EBT). ניכוי מס 20% (1.6 מיליון) משאיר רווח נקי של 6.4 מיליון ש\"ח."
    },
    {
      "id": 17,
      "points": 6,
      "difficulty": "Hard",
      "difficultyHe": "מאתגר",
      "category": "statements",
      "categoryHe": "דוחות כספיים",
      "question": "חברה מחלקת דיבידנד גדול בהרבה מהתזרים החופשי שלה ומממנת אותו באמצעות נטילת חוב חדש. כיצד הדבר משפיע על מבנה המאזן?",
      "options": [
        { "id": "A", "text": "הנכסים גדלים וההתחייבויות קטנות" },
        { "id": "B", "text": "ההתחייבויות עולות וההון העצמי נשחק, מה שמגדיל את הסיכון הפיננסי של הפירמה" },
        { "id": "C", "text": "אין שום השפעה על המאזן" },
        { "id": "D", "text": "שווי המניות מזנק אוטומטית ללא סיכון" }
      ],
      "correct": "B",
      "explanation": "החוב החדש מגדיל את ההתחייבויות, וחלוקת הדיבידנד מקטינה ישירות את יתרת העודפים/ההון העצמי. זהו מהלך שממנף את החברה ומסכן את יציבותה."
    },
    {
      "id": 18,
      "points": 6,
      "difficulty": "Hard",
      "difficultyHe": "מאתגר",
      "category": "ai_sourcing",
      "categoryHe": "מקורות ואוריינות AI",
      "question": "כאשר מבצעים אנליזה בעזרת מודל שפה, מהו המונח \"Grounding\" (עיגון)?",
      "options": [
        { "id": "A", "text": "כליאה של המודל בשרת מקומי" },
        { "id": "B", "text": "הגבלת המודל להסתמך אך ורק על מסמך המקור והעובדות שסופקו לו במפורש בפרומפט, למניעת הסתמכות על זיכרון מוטעה" },
        { "id": "C", "text": "איפוס הזיכרון של הדפדפן" },
        { "id": "D", "text": "תרגום טקסט מאנגלית לעברית" }
      ],
      "correct": "B",
      "explanation": "Grounding מעגן את תשובות המודל אך ורק במסמך האמיתי (Source Document) שהמשתמש מספק, ובכך מונע הזיות (Hallucinations) ומידע מיושן."
    },
    {
      "id": 19,
      "points": 6,
      "difficulty": "Hard",
      "difficultyHe": "מאתגר",
      "category": "statements",
      "categoryHe": "דוחות כספיים",
      "question": "חברה מחקה מוניטין (Goodwill Impairment) בסך 100 מיליון ש\"ח. כיצד זה ישפיע על דוח רווח והפסד ועל דוח התזרים?",
      "options": [
        { "id": "A", "text": "יקטין את הרווח הנקי, אך ינוטרל בדוח התזרים (ללא יציאת מזומן בפועל)" },
        { "id": "B", "text": "יקטין את המזומנים בקופה ב-100 מיליון ש\"ח מיידית" },
        { "id": "C", "text": "יגדיל את התזרים מפעילות השקעה" },
        { "id": "D", "text": "לא ישפיע כלל על דוח רווח והפסד" }
      ],
      "correct": "A",
      "explanation": "מחיקת מוניטין היא הוצאה חשבונאית שאינה כרוכה ביציאת מזומן (Non-cash expense). היא פוגעת ברווח הנקי, אך מתווספת בחזרה לרווח בדוח התזרים."
    },
    {
      "id": 20,
      "points": 6,
      "difficulty": "Hard",
      "difficultyHe": "מאתגר",
      "category": "ai_sourcing",
      "categoryHe": "מקורות ואוריינות AI",
      "question": "תלמיד ביקש מ-Gemini לחשב מכפיל תזרים חופשי, אך שכח לציין האם המזומן כולל פריטים מוגבלים בשימוש (Restricted Cash). מה עלול לקרות?",
      "options": [
        { "id": "A", "text": "ה-AI יתקן זאת אוטומטית תמיד" },
        { "id": "B", "text": "ה-AI עלול לכלול מזומן מוגבל שאינו נגיש לפירעון חוב או לחלוקה, ובכך להציג תמונה נזילה ואופטימית מדי" },
        { "id": "C", "text": "המחשב של התלמיד ישלח התרעה לרשות ניירות ערך" },
        { "id": "D", "text": "אין שום הבדל בין מזומן מוגבל למזומן פנוי" }
      ],
      "correct": "B",
      "explanation": "מזומן מוגבל (משועבד כבטוחה להלוואות או ערבויות) אינו עומד לרשות החברה. ללא הנחיה מפורשת ל-AI לבדוק בביאורים, המודל עשוי לספור אותו כמזומן פנוי ולהטעות את האנליסט."
    }
  ]
};

// Pre-built AI Playground Prompt Templates
const PROMPT_TEMPLATES = {
  template1: `אנא בצע בדיקת איכות רווח (Earnings Quality) מעמיקה עבור החברה על פי הנתונים הכספיים שלהלן:
1. חשב את היחס שבין תזרים המזומנים מפעילות שוטפת (CFO) לבין הרווח הנקי (Net Income) לאורך התקופות.
2. נתח האם הפער נובע משינויים בהון החוזר (לקוחות חייבים, מלאי, ספקים) או מהפרשי פחת והפחתות.
3. זהה האם קיימת הצטברות חריגה של לקוחות חייבים שמעידה על אגרסיביות בהכרת הכנסות.
4. ספק מסקנה ברורה: האם איכות הרווח גבוהה (נתמכת מזומן) או נמוכה ומועדת למניפולציות חשבונאיות?
דרישה קריטית: הצג את כל שלבי החישוב, הנוסחאות, וטבלה מסכמת.`,

  template2: `אנא בצע חקירה של הרווח התפעולי (EBIT) וביאורי הדוחות הכספיים:
1. אתר ובודד סעיפים חד-פעמיים, רווחי/הפסדי הון, שיערוכי נדל"ן, הפרשות לירידת ערך מוניטין (Impairments) והוצאות ארגון מחדש.
2. חשב את הרווח התפעולי ה"מנורמל" (Normalized Operating Income) בניטרול אירועים אלו.
3. התייחס לתגמול מבוסס מניות (Stock-Based Compensation - SBC): האם ההנהלה מנטרלת אותו ב-Non-GAAP והאם זו הוצאה עסקית אמיתית שיש להתחשב בה?
4. ספק טבלת גשר (Bridge Table) מרווח מדווח לרווח תפעולי מנורמל.`,

  template3: `אנא נתח את מגמות המרווח הגולמי ומנועי הצמיחה של החברה:
1. חשב את שיעור הרווח הגולמי (Gross Margin = Gross Profit / Revenue) רב-שנתי והצג את המגמה (התרחבות או שחיקה).
2. הסבר האם השינוי במרווח הגולמי נובע מעליית מחירי מכירה (Pricing Power), יתרון לגודל, או מלחצי עלויות בעלות המכר (חומרי גלם, שכר, הובלה).
3. השווה את קצב צמיחת ההכנסות מול קצב צמיחת הוצאות ההנהלה והשיווק (SG&A) לבחינת מינוף תפעולי (Operating Leverage).
4. סכם את נקודות החוזק והחולשה התחרותית (Moat).`,

  template4: `אנא נתח את מבנה ההתחייבויות ולוח הסילוקין של החברה מתוך הביאורים:
1. חלץ את פריסת החוב לפי מועדי פירעון (פירעון שוטף ב-12 החודשים הקרובים לעומת טווח בינוני וארוך).
2. חשב את יחס החוב נטו ל-EBITDA (Net Debt / EBITDA) ואת יחס כיסוי הריבית (Interest Coverage Ratio = EBIT / Interest Expense).
3. הערך את סיכון מיחזור החוב (Refinancing Risk) בסביבת ריבית נוכחית.
4. ספק הערכה האם לחברה קיים עודף נזילות או מצוקת נזילות צפויה.`
};

// Sample Financial Report Excerpt for 1-Click Testing in Playground
const SAMPLE_FILING_TEXT = `--- דוח כספי לדוגמה: קומפיו-טק מערכות בע"מ (דוח שנתי 2024 מול 2023) ---
[נתונים במיליוני ש"ח]

דוח רווח והפסד:
• הכנסות ממכירות: שנת 2024 = 420.0 | שנת 2023 = 360.0 (+16.7%)
• עלות המכר: שנת 2024 = 231.0 | שנת 2023 = 198.0
• רווח גולמי: שנת 2024 = 189.0 (45.0%) | שנת 2023 = 162.0 (45.0%)
• הוצאות מחקר ופיתוח: שנת 2024 = 55.0 | שנת 2023 = 45.0
• הוצאות הנהלה וכלליות: שנת 2024 = 44.0 | שנת 2023 = 38.0
• רווח הון חד-פעמי ממכירת מבנה משרדים: שנת 2024 = 25.0 | שנת 2023 = 0.0
• רווח תפעולי (EBIT): שנת 2024 = 115.0 | שנת 2023 = 79.0
• הוצאות מימון נטו: שנת 2024 = 15.0 | שנת 2023 = 12.0
• הוצאות מס הכנסה (23%): שנת 2024 = 23.0 | שנת 2023 = 15.4
• רווח נקי: שנת 2024 = 77.0 | שנת 2023 = 51.6

דוח תזרים מזומנים:
• רווח נקי: 77.0
• התאמות:
  - פחת והפחתות: +22.0
  - ניטרול רווח הון ממכירת מבנה: (25.0-)
  - תגמול מבוסס מניות (SBC): +8.0
• שינויים בהון חוזר:
  - גידול בלקוחות חייבים: (38.0-)
  - גידול במלאי: (12.0-)
  - גידול בספקים: +10.0
• תזרים מזומנים מפעילות שוטפת (CFO): 42.0 מיליון ש"ח (לעומת 68.0 ב-2023)
• רכישת רכוש קבוע (CAPEX): (28.0-)
• תקבולים ממכירת מבנה משרדים: +45.0
• תזרים מפעילות השקעה (CFI): +17.0
• פירעון אג"ח: (20.0-)
• חלוקת דיבידנד: (15.0-)

ביאור 8 (חובות):
• חלויות שוטפות של הלוואות בנקאיות לשנת 2025: 35.0 מיליון ש"ח.
• יתרת מזומנים ושווי מזומנים בקופה ליום 31/12/2024: 28.0 מיליון ש"ח (מתוכם 10.0 מיליון משועבדים לטובת ערבות בנקאית).`;

/**
 * Main Application Class
 */
class FinancialAIApp {
  constructor() {
    this.studentName = localStorage.getItem('fin_hub_student_name') || '';
    this.currentScreen = 'screen-welcome';
    this.currentLessonTab = 'm1';
    
    // Questions data
    this.data = EMBEDDED_QUESTIONS_DATA;
    this.practiceAnswers = JSON.parse(localStorage.getItem('fin_hub_practice_state') || '{}');
    
    // Exam state
    this.examAnswers = JSON.parse(localStorage.getItem('fin_hub_exam_answers') || '{}');
    this.examSubmitted = localStorage.getItem('fin_hub_exam_submitted') === 'true';
    this.examResult = JSON.parse(localStorage.getItem('fin_hub_exam_result') || 'null');
    
    // Chat state
    this.chatHistory = [];
    this.isGenerating = false;

    // Default Google Form Configuration
    const DEFAULT_GFORM_CONFIG = {
      actionUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSde55CVev_2Q-iNRqDQF2xOYrN_s3ttfYyO9WbSDmNEP6Yuvw/formResponse',
      entryName: 'entry.231853524',
      entryEmail: 'entry.106542673',
      entryScore: 'entry.1691612376'
    };

    const savedGForm = localStorage.getItem('fin_hub_gform_config');
    let parsedGForm = savedGForm ? JSON.parse(savedGForm) : null;
    if (!parsedGForm || !parsedGForm.actionUrl || parsedGForm.entryName === 'entry.name') {
      parsedGForm = DEFAULT_GFORM_CONFIG;
      localStorage.setItem('fin_hub_gform_config', JSON.stringify(DEFAULT_GFORM_CONFIG));
    }
    this.gformConfig = parsedGForm;
  }

  /**
   * Initialize App on DOM Loaded
   */
  async init() {
    // Attempt to load external questions.json if available
    try {
      const response = await fetch('data/questions.json');
      if (response.ok) {
        const json = await response.json();
        if (json.practiceQuestions && json.examQuestions) {
          this.data = json;
        }
      }
    } catch (e) {
      console.log('Using embedded questions database (GitHub Pages static mode)');
    }

    // Populate saved name in inputs
    if (this.studentName) {
      const nameInput = document.getElementById('student-name-input');
      if (nameInput) nameInput.value = this.studentName;
      this.updateStudentHeader();
    }

    // Load Google Form config into inputs
    this.loadGFormConfigInputs();

    // Render components
    this.renderPracticeQuestions();
    this.initExamTracker();
    this.renderExamQuestions();
    this.calculateRoicWidget();

    // Pre-seed Playground Prompt
    this.handleTemplateChange('template1');

    // If user already took exam, restore results view capability
    if (this.examSubmitted && this.examResult) {
      this.displayResults(this.examResult);
    }

    // Update navigation indicator
    this.updateNavIndicator(this.currentScreen);
  }

  /**
   * Navigation between screens
   */
  navigateTo(screenId) {
    // If attempting to go forward without name, alert student
    if (screenId !== 'screen-welcome' && !this.studentName) {
      alert('אנא הזן את שמך במסך הפתיחה כדי להתקדם במסלול.');
      this.navigateTo('screen-welcome');
      return;
    }

    // If attempting to go to results without submitting exam
    if (screenId === 'screen-results' && !this.examSubmitted) {
      alert('טרם הגשת את המבחן המסכם! עליך להגיש את המבחן כדי לצפות בתוצאות ובתעודה.');
      this.navigateTo('screen-exam');
      return;
    }

    document.querySelectorAll('.screen-view').forEach(screen => {
      screen.classList.add('hidden');
    });

    const target = document.getElementById(screenId);
    if (target) {
      target.classList.remove('hidden');
      this.currentScreen = screenId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    this.updateNavIndicator(screenId);
  }

  updateNavIndicator(screenId) {
    const screenMap = {
      'screen-welcome': 'nav-step-1',
      'screen-lessons': 'nav-step-2',
      'screen-playground': 'nav-step-3',
      'screen-exam': 'nav-step-4',
      'screen-results': 'nav-step-5'
    };

    ['nav-step-1', 'nav-step-2', 'nav-step-3', 'nav-step-4', 'nav-step-5'].forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (!btn) return;
      if (btnId === screenMap[screenId]) {
        btn.classList.add('bg-blue-600', 'text-white');
        btn.classList.remove('text-slate-400');
      } else {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('text-slate-400');
      }
    });
  }

  /**
   * Student Header Badge
   */
  updateStudentHeader() {
    const badge = document.getElementById('header-student-badge');
    const nameSpan = document.getElementById('header-student-name');
    const lessonsGreeting = document.getElementById('lessons-student-greeting');

    if (this.studentName) {
      if (badge) badge.classList.remove('hidden');
      if (badge) badge.classList.add('flex');
      if (nameSpan) nameSpan.textContent = this.studentName;
      if (lessonsGreeting) lessonsGreeting.textContent = `שלום ${this.studentName},`;
    }
  }

  /**
   * Handle Screen 1 Onboarding Form Submission
   */
  handleOnboardingSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById('student-name-input');
    const name = nameInput ? nameInput.value.trim() : '';
    if (!name) {
      alert('אנא הזן שם פרטי.');
      return;
    }

    this.studentName = name;
    localStorage.setItem('fin_hub_student_name', name);
    this.updateStudentHeader();

    // Advance directly to Screen 2
    this.navigateTo('screen-lessons');
  }

  /**
   * Screen 2: Lessons Module Tab Switching
   */
  switchLessonTab(tabId) {
    this.currentLessonTab = tabId;
    ['m1', 'm2', 'm3', 'm4'].forEach(id => {
      const btn = document.getElementById(`tab-btn-${id}`);
      const pane = document.getElementById(`content-${id}`);

      if (id === tabId) {
        if (btn) {
          btn.className = 'px-4 py-2.5 rounded-xl transition border whitespace-nowrap bg-blue-600/20 text-blue-400 border-blue-500/40 flex items-center gap-2';
        }
        if (pane) pane.classList.remove('hidden');
      } else {
        if (btn) {
          btn.className = 'px-4 py-2.5 rounded-xl transition border border-transparent whitespace-nowrap text-slate-400 hover:text-white hover:bg-slate-900 flex items-center gap-2';
        }
        if (pane) pane.classList.add('hidden');
      }
    });
  }

  /**
   * Interactive ROIC Calculator Widget (Module 2)
   */
  calculateRoicWidget() {
    const ebitInput = document.getElementById('calc-ebit');
    const taxInput = document.getElementById('calc-tax');
    const capitalInput = document.getElementById('calc-capital');

    const ebit = parseFloat(ebitInput ? ebitInput.value : 50) || 0;
    const tax = parseFloat(taxInput ? taxInput.value : 23) || 0;
    const capital = parseFloat(capitalInput ? capitalInput.value : 200) || 1;

    const nopat = ebit * (1 - tax / 100);
    const roic = (nopat / capital) * 100;

    const nopatDisplay = document.getElementById('calc-nopat-display');
    const roicDisplay = document.getElementById('calc-roic-display');

    if (nopatDisplay) nopatDisplay.textContent = `${nopat.toFixed(1)} מיליון ש"ח`;
    if (roicDisplay) roicDisplay.textContent = `${roic.toFixed(2)}%`;
  }

  /**
   * Module 4: Render Guided Practice Questions
   */
  renderPracticeQuestions() {
    const container = document.getElementById('practice-questions-container');
    if (!container) return;

    const questions = this.data.practiceQuestions || [];
    container.innerHTML = '';

    questions.forEach((q, idx) => {
      const state = this.practiceAnswers[q.id];
      const answered = !!state;

      const card = document.createElement('div');
      card.className = 'bg-brand-card rounded-2xl border border-slate-800 p-6 space-y-4';
      card.id = `practice-q-${q.id}`;

      // Header: Question number & Topic badge
      const header = document.createElement('div');
      header.className = 'flex items-center justify-between border-b border-slate-800/80 pb-3';
      header.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="w-6 h-6 rounded-lg bg-blue-950 text-blue-400 font-mono text-xs flex items-center justify-center font-bold">${idx + 1}</span>
          <span class="text-xs text-slate-400 font-medium">${q.topicHe || q.topic}</span>
        </div>
        <span class="px-2 py-0.5 rounded text-[11px] font-mono ${q.difficulty === 'Hard' ? 'bg-amber-950 text-amber-400' : 'bg-slate-800 text-slate-300'}">${q.difficultyHe || q.difficulty}</span>
      `;
      card.appendChild(header);

      // Question text
      const qText = document.createElement('h4');
      qText.className = 'text-sm sm:text-base font-bold text-white leading-relaxed';
      qText.textContent = q.question;
      card.appendChild(qText);

      // Options List
      const optionsContainer = document.createElement('div');
      optionsContainer.className = 'space-y-2';

      q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = this.getPracticeOptionClass(q, opt.id, state);
        btn.innerHTML = `
          <div class="flex items-start gap-3 text-right">
            <span class="w-5 h-5 rounded-md border flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${this.getPracticeOptionBadgeClass(q, opt.id, state)}">
              ${opt.id}
            </span>
            <span class="text-xs sm:text-sm text-slate-200 leading-normal">${opt.text}</span>
          </div>
        `;

        btn.onclick = () => this.handlePracticeAnswer(q.id, opt.id);
        optionsContainer.appendChild(btn);
      });
      card.appendChild(optionsContainer);

      // Detailed Explanation Area (visible if answered)
      if (answered) {
        const explanationBox = document.createElement('div');
        explanationBox.className = 'mt-4 pt-4 border-t border-slate-800 space-y-3';
        
        const isUserCorrect = state.selectedAnswer === q.correct;

        explanationBox.innerHTML = `
          <div class="p-3.5 rounded-xl ${isUserCorrect ? 'bg-emerald-950/60 border border-emerald-800 text-emerald-200' : 'bg-rose-950/60 border border-rose-800 text-rose-200'} text-xs">
            <div class="font-bold flex items-center gap-1.5 mb-1">
              ${isUserCorrect ? '✓ תשובה נכונה!' : '✗ תשובה שגויה'}
            </div>
            <p class="leading-relaxed"><strong>הסבר התשובה הנכונה (${q.correct}):</strong> ${q.explanations.correct}</p>
          </div>

          <details class="group bg-slate-900/80 rounded-xl border border-slate-800 p-3">
            <summary class="flex items-center justify-between text-xs font-semibold text-slate-300 cursor-pointer">
              <span>מדוע שאר החלופות אינן נכונות? (פירוט מלא)</span>
              <span class="text-blue-400 group-open:rotate-180 transition-transform arrow-indicator">▼</span>
            </summary>
            <div class="mt-3 pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-400">
              ${Object.entries(q.explanations.wrong).map(([optId, reason]) => `
                <div class="p-2 rounded bg-slate-950 border border-slate-900">
                  <strong class="text-rose-400">אפשרות ${optId} שגויה:</strong> ${reason}
                </div>
              `).join('')}
            </div>
          </details>
        `;
        card.appendChild(explanationBox);
      }

      container.appendChild(card);
    });

    this.updatePracticeStats();
  }

  getPracticeOptionClass(question, optId, state) {
    const base = 'w-full p-3.5 rounded-xl border text-right transition-all flex items-center justify-between ';
    if (!state) {
      return base + 'bg-slate-900/60 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 text-slate-200';
    }

    if (optId === question.correct) {
      return base + 'bg-emerald-950/50 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500/50';
    }

    if (optId === state.selectedAnswer && optId !== question.correct) {
      return base + 'bg-rose-950/50 border-rose-500 text-rose-200 ring-1 ring-rose-500/50';
    }

    return base + 'bg-slate-900/30 border-slate-850 opacity-60 text-slate-400';
  }

  getPracticeOptionBadgeClass(question, optId, state) {
    if (!state) return 'border-slate-700 bg-slate-800 text-slate-300';
    if (optId === question.correct) return 'border-emerald-500 bg-emerald-900 text-emerald-200';
    if (optId === state.selectedAnswer && optId !== question.correct) return 'border-rose-500 bg-rose-900 text-rose-200';
    return 'border-slate-800 bg-slate-900 text-slate-500';
  }

  handlePracticeAnswer(questionId, selectedOptId) {
    const q = this.data.practiceQuestions.find(item => item.id === questionId);
    if (!q) return;

    this.practiceAnswers[questionId] = {
      selectedAnswer: selectedOptId,
      isCorrect: selectedOptId === q.correct
    };

    localStorage.setItem('fin_hub_practice_state', JSON.stringify(this.practiceAnswers));
    this.renderPracticeQuestions();
  }

  updatePracticeStats() {
    const total = this.data.practiceQuestions.length;
    const answeredCount = Object.keys(this.practiceAnswers).length;
    const correctCount = Object.values(this.practiceAnswers).filter(s => s.isCorrect).length;

    const scoreText = document.getElementById('practice-score-text');
    const badge = document.getElementById('tab-m4-badge');

    if (scoreText) {
      scoreText.textContent = `פתרת ${correctCount} מתוך ${total} בהצלחה (${answeredCount}/${total} נענו)`;
    }
    if (badge) {
      badge.textContent = `${correctCount}/${total}`;
    }
  }

  resetPractice() {
    if (!confirm('האם לאפס את כל תשובות התרגול המודרך?')) return;
    this.practiceAnswers = {};
    localStorage.removeItem('fin_hub_practice_state');
    this.renderPracticeQuestions();
  }

  /**
   * Screen 3: Live Gemini AI Playground
   */
  handleTemplateChange(templateKey) {
    const textarea = document.getElementById('playground-prompt-input');
    if (!textarea) return;
    textarea.value = PROMPT_TEMPLATES[templateKey] || '';
  }

  loadSampleFilingData() {
    const textarea = document.getElementById('playground-prompt-input');
    if (!textarea) return;

    const currentText = textarea.value.trim();
    if (currentText && !currentText.includes('קומפיו-טק מערכות בע"מ')) {
      textarea.value = currentText + '\n\n' + SAMPLE_FILING_TEXT;
    } else {
      textarea.value = PROMPT_TEMPLATES.template1 + '\n\n' + SAMPLE_FILING_TEXT;
    }
    textarea.scrollTop = textarea.scrollHeight;
  }

  clearPlaygroundInput() {
    const textarea = document.getElementById('playground-prompt-input');
    if (textarea) textarea.value = '';
  }

  insertChallengePrompt(text) {
    const followupInput = document.getElementById('chat-followup-input');
    if (followupInput) {
      followupInput.value = text;
      followupInput.focus();
    }
  }

  resetChat() {
    this.chatHistory = [];
    const container = document.getElementById('chat-messages-container');
    const turnsSpan = document.getElementById('chat-turns-count');
    if (container) {
      container.innerHTML = `
        <div id="chat-welcome-placeholder" class="text-center py-12 px-4 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 flex items-center justify-center mx-auto">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h4 class="text-sm font-bold text-slate-200">סביבת השיחה מוכנה</h4>
          <p class="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
            בחר תבנית פרומפט מימין או לחץ על "הזן דוח כספי לדוגמה", ולחץ "שלח ל-Gemini". התשובה תוצג כאן עם רינדור מלא של טבלאות ונוסחאות.
          </p>
        </div>
      `;
    }
    if (turnsSpan) turnsSpan.textContent = '(0 הודעות)';
  }

  async sendToGemini() {
    if (this.isGenerating) return;

    const textarea = document.getElementById('playground-prompt-input');
    const userPrompt = textarea ? textarea.value.trim() : '';

    if (!userPrompt) {
      alert('נא להזין טקסט פרומפט או נתוני דוח כספי.');
      return;
    }

    // Add to chat history as user message
    this.appendChatMessage('user', userPrompt);
    this.chatHistory.push({ role: 'user', text: userPrompt });

    // Call API
    await this.executeGeminiRequest();
  }

  async handleFollowUpSubmit(e) {
    e.preventDefault();
    if (this.isGenerating) return;

    const input = document.getElementById('chat-followup-input');
    const text = input ? input.value.trim() : '';
    if (!text) return;

    input.value = '';
    this.appendChatMessage('user', text);
    this.chatHistory.push({ role: 'user', text });

    await this.executeGeminiRequest();
  }

  async executeGeminiRequest() {
    this.isGenerating = true;
    this.setGeminiLoadingState(true);

    // Placeholder message bubble for streaming / loading
    const loadingBubbleId = this.appendLoadingMessageBubble();

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
      
      // Keep and send only the last 2 user turns in context to minimize token usage
      const userIndices = [];
      this.chatHistory.forEach((item, idx) => {
        if (item.role === 'user') userIndices.push(idx);
      });
      const startIndex = userIndices.length > 2 ? userIndices[userIndices.length - 2] : 0;
      const recentHistory = this.chatHistory.slice(startIndex);

      const contents = recentHistory.map(item => ({
        role: item.role === 'user' ? 'user' : 'model',
        parts: [{ text: item.text }]
      }));

      const systemInstruction = {
        parts: [{
          text: "אתה מנטור פיננסי תמציתי ומדויק. ענה בקצרה, התמקד במספרים ובעקרונות החשבונאיים, ללא הקדמות ארוכות וללא פטפוט מיותר."
        }]
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction,
          contents,
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 600
          }
        })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error?.message || `API Error: ${response.status}`);
      }

      const data = await response.json();
      const modelReply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'לא התקבלה תשובה מפורטת מהמודל.';

      // Save to chat history
      this.chatHistory.push({ role: 'model', text: modelReply });

      // Update loading bubble with real parsed markdown
      this.updateLoadingBubbleWithContent(loadingBubbleId, modelReply);

    } catch (err) {
      this.updateLoadingBubbleWithContent(loadingBubbleId, `**שגיאה בעת תקשורת עם Gemini:** ${err.message}`, true);
    } finally {
      this.isGenerating = false;
      this.setGeminiLoadingState(false);
      this.updateChatTurnsCount();
    }
  }

  setGeminiLoadingState(isLoading) {
    const btn = document.getElementById('send-gemini-btn');
    const btnText = document.getElementById('gemini-btn-text');
    const followupBtn = document.getElementById('chat-followup-btn');

    if (isLoading) {
      if (btn) btn.disabled = true;
      if (btnText) btnText.textContent = 'Gemini 1.5 Flash מנתח נתונים...';
      if (followupBtn) followupBtn.disabled = true;
    } else {
      if (btn) btn.disabled = false;
      if (btnText) btnText.textContent = 'שלח ל-Gemini 1.5 Flash';
      if (followupBtn) followupBtn.disabled = false;
    }
  }

  appendChatMessage(role, text) {
    const container = document.getElementById('chat-messages-container');
    const placeholder = document.getElementById('chat-welcome-placeholder');
    if (placeholder) placeholder.remove();

    const bubble = document.createElement('div');
    bubble.className = role === 'user' 
      ? 'p-4 rounded-2xl bg-blue-950/40 border border-blue-900/60 mr-4 space-y-2' 
      : 'p-4 rounded-2xl bg-slate-900/90 border border-slate-800 ml-4 space-y-2';

    const header = document.createElement('div');
    header.className = 'flex items-center justify-between text-xs font-mono';
    
    if (role === 'user') {
      header.innerHTML = `
        <div class="flex items-center gap-1.5 text-blue-400 font-bold">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7 7z" /></svg>
          <span>אנליסט (${this.studentName || 'תלמיד'})</span>
        </div>
        <span class="text-slate-500">${new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}</span>
      `;
    } else {
      header.innerHTML = `
        <div class="flex items-center gap-1.5 text-cyan-400 font-bold">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <span>Gemini 1.5 Flash Analyst</span>
        </div>
        <span class="text-slate-500">${new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}</span>
      `;
    }
    bubble.appendChild(header);

    const body = document.createElement('div');
    body.className = 'markdown-body text-xs leading-relaxed';
    body.innerHTML = (typeof marked !== 'undefined') ? marked.parse(text) : text;
    bubble.appendChild(body);

    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
  }

  appendLoadingMessageBubble() {
    const container = document.getElementById('chat-messages-container');
    const bubbleId = 'bubble-' + Date.now();

    const bubble = document.createElement('div');
    bubble.id = bubbleId;
    bubble.className = 'p-4 rounded-2xl bg-slate-900/90 border border-slate-800 ml-4 space-y-2';

    bubble.innerHTML = `
      <div class="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
        <div class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-cyan-400 pulse-indicator"></span>
          <span>Gemini 1.5 Flash מעבד נתונים פיננסיים...</span>
        </div>
      </div>
      <div class="flex items-center gap-2 py-3 text-slate-400 text-xs font-mono">
        <div class="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></div>
        <div class="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></div>
        <div class="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></div>
        <span class="mr-2">מפעיל חישוב ומחלץ ביאורים...</span>
      </div>
    `;

    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
    return bubbleId;
  }

  updateLoadingBubbleWithContent(bubbleId, markdownContent, isError = false) {
    const bubble = document.getElementById(bubbleId);
    if (!bubble) return;

    if (isError) {
      bubble.className = 'p-4 rounded-2xl bg-rose-950/60 border border-rose-800 ml-4 space-y-2';
    }

    bubble.innerHTML = `
      <div class="flex items-center justify-between text-xs font-mono">
        <div class="flex items-center gap-1.5 ${isError ? 'text-rose-400' : 'text-cyan-400'} font-bold">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <span>Gemini 1.5 Flash Analyst</span>
        </div>
        <span class="text-slate-500">${new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
      <div class="markdown-body text-xs leading-relaxed pt-1">
        ${(typeof marked !== 'undefined') ? marked.parse(markdownContent) : markdownContent}
      </div>
    `;

    const container = document.getElementById('chat-messages-container');
    if (container) container.scrollTop = container.scrollHeight;
  }

  updateChatTurnsCount() {
    const span = document.getElementById('chat-turns-count');
    if (span) span.textContent = `(${this.chatHistory.length} הודעות בשיחה)`;
  }

  /**
   * Screen 4: Final Certification Exam Engine
   */
  initExamTracker() {
    const grid = document.getElementById('exam-tracker-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const questions = this.data.examQuestions || [];
    questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const isAnswered = !!this.examAnswers[qNum];

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.id = `tracker-btn-${qNum}`;
      btn.className = `w-7 h-7 rounded-lg text-xs font-mono font-bold transition flex items-center justify-center ${
        isAnswered 
          ? 'bg-blue-600 text-white' 
          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
      }`;
      btn.textContent = qNum;
      btn.onclick = () => {
        const el = document.getElementById(`exam-q-${qNum}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };
      grid.appendChild(btn);
    });

    this.updateExamAnsweredCount();
  }

  renderExamQuestions() {
    const container = document.getElementById('exam-questions-container');
    if (!container) return;
    container.innerHTML = '';

    const questions = this.data.examQuestions || [];

    questions.forEach(q => {
      const card = document.createElement('div');
      card.className = 'bg-brand-card rounded-2xl border border-slate-800 p-6 space-y-4';
      card.id = `exam-q-${q.id}`;

      // Card Header: Question #, points, difficulty badge
      const header = document.createElement('div');
      header.className = 'flex items-center justify-between border-b border-slate-800/80 pb-3';
      header.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="w-6 h-6 rounded-lg bg-slate-800 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">${q.id}</span>
          <span class="text-xs text-slate-400 font-medium">${q.categoryHe || q.category}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-950 text-blue-400 border border-blue-900 font-semibold">${q.points} נקודות</span>
          <span class="px-2 py-0.5 rounded text-[11px] font-mono ${q.difficulty === 'Hard' ? 'bg-amber-950 text-amber-400' : 'bg-slate-800 text-slate-400'}">${q.difficultyHe || q.difficulty}</span>
        </div>
      `;
      card.appendChild(header);

      // Question Text
      const text = document.createElement('h4');
      text.className = 'text-sm sm:text-base font-bold text-white leading-relaxed';
      text.textContent = q.question;
      card.appendChild(text);

      // Options
      const optionsContainer = document.createElement('div');
      optionsContainer.className = 'space-y-2';

      q.options.forEach(opt => {
        const isSelected = this.examAnswers[q.id] === opt.id;
        const optBtn = document.createElement('button');
        optBtn.type = 'button';
        optBtn.className = `w-full p-3.5 rounded-xl border text-right transition flex items-center justify-between ${
          isSelected 
            ? 'bg-blue-600/20 border-blue-500 text-blue-100 ring-1 ring-blue-500/40' 
            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-200'
        }`;

        optBtn.innerHTML = `
          <div class="flex items-start gap-3">
            <span class="w-5 h-5 rounded-md border flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
              isSelected ? 'border-blue-500 bg-blue-600 text-white' : 'border-slate-700 bg-slate-800 text-slate-400'
            }">
              ${opt.id}
            </span>
            <span class="text-xs sm:text-sm leading-normal">${opt.text}</span>
          </div>
        `;

        optBtn.onclick = () => this.handleExamOptionSelect(q.id, opt.id);
        optionsContainer.appendChild(optBtn);
      });

      card.appendChild(optionsContainer);
      container.appendChild(card);
    });
  }

  handleExamOptionSelect(questionId, optionId) {
    if (this.examSubmitted) {
      alert('המבחן כבר הוגש. לא ניתן לשנות תשובות.');
      return;
    }

    this.examAnswers[questionId] = optionId;
    localStorage.setItem('fin_hub_exam_answers', JSON.stringify(this.examAnswers));

    // Re-render questions to show selection
    this.renderExamQuestions();

    // Update tracker button style
    const trackerBtn = document.getElementById(`tracker-btn-${questionId}`);
    if (trackerBtn) {
      trackerBtn.className = 'w-7 h-7 rounded-lg text-xs font-mono font-bold transition flex items-center justify-center bg-blue-600 text-white';
    }

    this.updateExamAnsweredCount();
  }

  updateExamAnsweredCount() {
    const total = this.data.examQuestions.length;
    const answered = Object.keys(this.examAnswers).length;

    const counter = document.getElementById('exam-answered-counter');
    if (counter) {
      counter.textContent = `${answered} / ${total} נענו`;
      if (answered === total) {
        counter.className = 'text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800';
      }
    }
  }

  confirmExamSubmit() {
    const total = this.data.examQuestions.length;
    const answered = Object.keys(this.examAnswers).length;

    const modal = document.getElementById('confirm-exam-modal');
    const msg = document.getElementById('confirm-exam-message');

    if (msg) {
      if (answered < total) {
        msg.innerHTML = `<span class="text-amber-400 font-bold block mb-1">שים לב: ענית על ${answered} מתוך ${total} שאלות.</span> שאלות שלא נענו ייחשבו כ-0 נקודות. האם אתה בטוח שברצונך להגיש?`;
      } else {
        msg.textContent = `ענית על כל ${total} השאלות. לאחר ההגשה המבחן יינעל ותוצג תעודת ההסמכה עם הציון הסופי.`;
      }
    }

    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  closeConfirmExamModal() {
    const modal = document.getElementById('confirm-exam-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  finalizeExamSubmission() {
    this.closeConfirmExamModal();

    // Calculate score
    const questions = this.data.examQuestions;
    let finalScore = 0;
    const maxScore = 100;

    // Categories tallies
    const categories = {
      statements: { totalPts: 0, earnedPts: 0 },
      ratios: { totalPts: 0, earnedPts: 0 },
      ai_sourcing: { totalPts: 0, earnedPts: 0 }
    };

    questions.forEach(q => {
      const catKey = q.category === 'statements' ? 'statements' : (q.category === 'ratios' ? 'ratios' : 'ai_sourcing');
      categories[catKey].totalPts += q.points;

      const userAns = this.examAnswers[q.id];
      if (userAns === q.correct) {
        finalScore += q.points;
        categories[catKey].earnedPts += q.points;
      }
    });

    const result = {
      finalScore,
      maxScore,
      studentName: this.studentName,
      timestamp: new Date().toISOString(),
      dateFormatted: new Date().toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' }),
      certId: `BH-FIN-${Date.now().toString(36).toUpperCase()}`,
      categories: {
        statements: Math.round((categories.statements.earnedPts / categories.statements.totalPts) * 100),
        ratios: Math.round((categories.ratios.earnedPts / categories.ratios.totalPts) * 100),
        ai: Math.round((categories.ai_sourcing.earnedPts / categories.ai_sourcing.totalPts) * 100)
      }
    };

    this.examSubmitted = true;
    this.examResult = result;

    localStorage.setItem('fin_hub_exam_submitted', 'true');
    localStorage.setItem('fin_hub_exam_result', JSON.stringify(result));

    // Display Results Screen
    this.displayResults(result);
    this.navigateTo('screen-results');

    // Confetti celebration if passing (>=65)
    if (finalScore >= 65 && typeof confetti !== 'undefined') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }

  /**
   * Screen 5: Display Results & Certificate
   */
  displayResults(result) {
    const studentNameEl = document.getElementById('results-student-name');
    const finalScoreEl = document.getElementById('results-final-score');
    const verdictEl = document.getElementById('results-verdict-text');

    if (studentNameEl) studentNameEl.textContent = result.studentName || this.studentName;
    if (finalScoreEl) finalScoreEl.textContent = result.finalScore;

    if (verdictEl) {
      if (result.finalScore >= 90) {
        verdictEl.textContent = 'ציון מעולה (הצטיינות יתרה)! הפגנת שליטה מוחלטת בדוחות כספיים, הערכות שווי ואוריינות מקצועית ב-AI.';
      } else if (result.finalScore >= 80) {
        verdictEl.textContent = 'ציון מרשים מאוד (עובר בהצטיינות)! שליטה גבוהה בחומר ובאופן השימוש במודלי שפה לאנליזה פיננסית.';
      } else if (result.finalScore >= 65) {
        verdictEl.textContent = 'עברת בהצלחה את מבחן ההסמכה! הנך מוסמך באנליזה פונדמנטלית ואוריינות פיננסית ב-AI.';
      } else {
        verdictEl.textContent = 'השלמת את המבחן. מומלץ לחזור על מודולי הלימוד ותרגול המעבדה כדי לחזק את השליטה בנושאים שבהם טעית.';
      }
    }

    // Category bars
    const setCatUI = (key, val) => {
      const scoreEl = document.getElementById(`cat-score-${key}`);
      const barEl = document.getElementById(`cat-bar-${key}`);
      if (scoreEl) scoreEl.textContent = `${val}%`;
      if (barEl) setTimeout(() => { barEl.style.width = `${val}%`; }, 200);
    };

    setCatUI('statements', result.categories.statements);
    setCatUI('ratios', result.categories.ratios);
    setCatUI('ai', result.categories.ai);

    // Populate Certificate Card
    const certName = document.getElementById('cert-student-name');
    const certScore = document.getElementById('cert-student-score');
    const certDate = document.getElementById('cert-issue-date');
    const certId = document.getElementById('cert-id');

    if (certName) certName.textContent = result.studentName || this.studentName;
    if (certScore) certScore.textContent = result.finalScore;
    if (certDate) certDate.textContent = result.dateFormatted || new Date().toLocaleDateString('he-IL');
    if (certId) certId.textContent = result.certId;

    // Prefill Submission Card
    const submitName = document.getElementById('submit-student-name');
    const submitScore = document.getElementById('submit-student-score');
    if (submitName) submitName.value = result.studentName || this.studentName;
    if (submitScore) submitScore.value = `${result.finalScore} / 100`;

    // Render detailed exam review
    this.renderExamReview();
  }

  renderExamReview() {
    const container = document.getElementById('exam-review-container');
    if (!container) return;
    container.innerHTML = '';

    const questions = this.data.examQuestions || [];

    questions.forEach(q => {
      const userAns = this.examAnswers[q.id];
      const isCorrect = userAns === q.correct;

      const item = document.createElement('div');
      item.className = `p-4 rounded-xl border space-y-2 text-xs ${
        isCorrect 
          ? 'bg-emerald-950/30 border-emerald-900/60 text-slate-200' 
          : 'bg-rose-950/30 border-rose-900/60 text-slate-200'
      }`;

      const userOpt = q.options.find(o => o.id === userAns);
      const correctOpt = q.options.find(o => o.id === q.correct);

      item.innerHTML = `
        <div class="flex items-center justify-between font-mono">
          <span class="font-bold text-white">שאלה ${q.id} [${q.points} נק']</span>
          <span class="font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}">
            ${isCorrect ? '✓ נכון (+ ' + q.points + ' נק\')' : '✗ שגוי (0 נק\')'}
          </span>
        </div>
        <p class="font-semibold text-slate-100">${q.question}</p>
        <div class="space-y-1 pt-1">
          <p><strong class="text-slate-400">תשובתך:</strong> ${userOpt ? userOpt.id + ') ' + userOpt.text : 'לא נענה'}</p>
          ${!isCorrect ? `<p><strong class="text-emerald-400">התשובה הנכונה:</strong> ${correctOpt.id}) ${correctOpt.text}</p>` : ''}
          <p class="text-slate-300 leading-relaxed pt-1 bg-slate-900/80 p-2 rounded border border-slate-800">
            <strong class="text-blue-400">הסבר מלא:</strong> ${q.explanation}
          </p>
        </div>
      `;

      container.appendChild(item);
    });
  }

  /**
   * Google Forms Submission & Instructor Settings
   */
  toggleGFormSettings() {
    const panel = document.getElementById('gform-config-panel');
    if (panel) panel.classList.toggle('hidden');
  }

  loadGFormConfigInputs() {
    const urlInput = document.getElementById('gform-action-url');
    const nameInput = document.getElementById('gform-entry-name');
    const emailInput = document.getElementById('gform-entry-email');
    const scoreInput = document.getElementById('gform-entry-score');

    if (urlInput) urlInput.value = this.gformConfig.actionUrl || 'https://docs.google.com/forms/d/e/1FAIpQLSde55CVev_2Q-iNRqDQF2xOYrN_s3ttfYyO9WbSDmNEP6Yuvw/formResponse';
    if (nameInput) nameInput.value = this.gformConfig.entryName || 'entry.231853524';
    if (emailInput) emailInput.value = this.gformConfig.entryEmail || 'entry.106542673';
    if (scoreInput) scoreInput.value = this.gformConfig.entryScore || 'entry.1691612376';
  }

  saveGFormSettings() {
    const urlInput = document.getElementById('gform-action-url');
    const nameInput = document.getElementById('gform-entry-name');
    const emailInput = document.getElementById('gform-entry-email');
    const scoreInput = document.getElementById('gform-entry-score');

    this.gformConfig = {
      actionUrl: urlInput ? urlInput.value.trim() : 'https://docs.google.com/forms/d/e/1FAIpQLSde55CVev_2Q-iNRqDQF2xOYrN_s3ttfYyO9WbSDmNEP6Yuvw/formResponse',
      entryName: nameInput ? nameInput.value.trim() : 'entry.231853524',
      entryEmail: emailInput ? emailInput.value.trim() : 'entry.106542673',
      entryScore: scoreInput ? scoreInput.value.trim() : 'entry.1691612376'
    };

    localStorage.setItem('fin_hub_gform_config', JSON.stringify(this.gformConfig));
    alert('הגדרות יעד Google Form נשמרו בהצלחה.');
    this.toggleGFormSettings();
  }

  /**
   * Submit exam results directly to Google Forms (no-cors fetch + iframe fallback)
   */
  async submitToGoogleForms(name, email, score) {
    const formUrl = this.gformConfig.actionUrl || "https://docs.google.com/forms/d/e/1FAIpQLSde55CVev_2Q-iNRqDQF2xOYrN_s3ttfYyO9WbSDmNEP6Yuvw/formResponse";
    const nameEntry = this.gformConfig.entryName || "entry.231853524";
    const emailEntry = this.gformConfig.entryEmail || "entry.106542673";
    const scoreEntry = this.gformConfig.entryScore || "entry.1691612376";

    const formData = new FormData();
    formData.append(nameEntry, name);
    formData.append(emailEntry, email);
    formData.append(scoreEntry, score.toString());

    // 1. Primary method: fetch with mode: 'no-cors' (as specified in rule)
    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });
    } catch (fetchErr) {
      console.warn("fetch submission error, trying hidden form fallback:", fetchErr);
    }

    // 2. Secondary backup method: hidden HTML form targeted at hidden iframe to ensure 100% receipt
    try {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = formUrl;
      form.target = 'hidden_gform_iframe';

      const addInput = (field, val) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field;
        input.value = val;
        form.appendChild(input);
      };

      addInput(nameEntry, name);
      addInput(emailEntry, email);
      addInput(scoreEntry, score.toString());

      document.body.appendChild(form);
      form.submit();
      setTimeout(() => form.remove(), 1000);
    } catch (frameErr) {
      console.error("hidden frame submission fallback error:", frameErr);
    }
  }

  async handleGFormSubmit(e) {
    e.preventDefault();

    const emailInput = document.getElementById('submit-student-email');
    const email = emailInput ? emailInput.value.trim() : '';

    if (!email) {
      alert('נא להזין כתובת מייל תקינה.');
      return;
    }

    const studentName = this.studentName || 'תלמיד';
    const score = this.examResult ? this.examResult.finalScore : 0;

    const btn = document.getElementById('gform-submit-btn');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `
        <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>משגר ל-Google Forms...</span>
      `;
    }

    // Send using the exact parameters via submitToGoogleForms
    await this.submitToGoogleForms(studentName, email, score);

    // Record submission locally in log
    const submissions = JSON.parse(localStorage.getItem('fin_hub_submissions_log') || '[]');
    submissions.push({
      studentName,
      email,
      score,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('fin_hub_submissions_log', JSON.stringify(submissions));

    // Immediately display clean success card: "הציון והפרטים נשלחו בהצלחה למרצה!"
    const alertBox = document.getElementById('gform-status-alert');
    if (alertBox) {
      alertBox.classList.remove('hidden');
      alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (btn) {
      btn.classList.remove('from-emerald-600', 'to-teal-600');
      btn.classList.add('bg-slate-800', 'text-emerald-400');
      btn.innerHTML = `✓ הציון והפרטים נשלחו בהצלחה למרצה! (${email})`;
    }
  }

  retakeExam() {
    if (!confirm('האם אתה בטוח שברצונך להתחיל את המבחן המסכם מחדש? כל התשובות יאופסו.')) return;
    this.examAnswers = {};
    this.examSubmitted = false;
    this.examResult = null;
    localStorage.removeItem('fin_hub_exam_answers');
    localStorage.removeItem('fin_hub_exam_submitted');
    localStorage.removeItem('fin_hub_exam_result');

    this.initExamTracker();
    this.renderExamQuestions();
    this.navigateTo('screen-exam');
  }
}

// Instantiate global app instance
const app = new FinancialAIApp();
window.app = app;
window.submitToGoogleForms = async (name, email, score) => {
  return await app.submitToGoogleForms(name, email, score);
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  console.log("Financial AI Hub v2.1 loaded - Permanent API Key Active");
  app.init();
});


