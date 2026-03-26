# Contact Form → Google Sheets

טופס פשוט שאוסף שם וטלפון ושומר אוטומטית ב-Google Sheets.

## הגדרה (פעם אחת)

### שלב 1 — צור Google Sheet
1. פתח [Google Sheets](https://sheets.google.com) וצור גיליון חדש

### שלב 2 — הגדר Apps Script
1. בתוך הגיליון: **הרחבות → Apps Script**
2. מחק את הקוד הקיים והדבק את תוכן `apps-script.gs`
3. לחץ **Deploy → New deployment**
4. בחר **Web app**
5. הגדר **Execute as:** Me ו-**Who has access:** Anyone
6. לחץ **Deploy** ואשר הרשאות
7. העתק את ה-**Web app URL**

### שלב 3 — חבר את הטופס
1. פתח `index.html`
2. מצא את השורה: `const APPS_SCRIPT_URL = "YOUR_APPS_SCRIPT_URL_HERE";`
3. החלף את `YOUR_APPS_SCRIPT_URL_HERE` ב-URL שהעתקת

---

זהו! כל פעם שמישהו ממלא את הטופס, הפרטים יופיעו בגיליון שלך.
