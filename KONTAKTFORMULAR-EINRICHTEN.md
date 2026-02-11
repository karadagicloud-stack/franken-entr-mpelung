# KONTAKTFORMULAR EINRICHTEN - SCHRITT FÜR SCHRITT

**Ziel:** Kontaktformular funktioniert und Anfragen kommen bei dir per Email an

**Zeitaufwand:** 15-20 Minuten

---

## SCHRITT 1: SMTP-Zugangsdaten BESORGEN (10 Minuten)

Du brauchst einen Email-Versand-Dienst. **Empfehlung: Mailgun** (kostenlos für 5.000 Emails/Monat)

### Option A: Mailgun (EMPFOHLEN - kostenlos)

1. Geh auf www.mailgun.com
2. Klick auf "Sign Up" (oben rechts)
3. Registriere dich mit deiner Email (z.B. mit Gmail)
4. Bestätige deine Email
5. Nach Login: Klick auf "Sending" > "Overview"
6. Klick auf "Add Domain" ODER nutze die kostenlose Sandbox-Domain
7. Wichtig: **Notiere dir diese Daten:**

```
SMTP Hostname: smtp.mailgun.org
SMTP Port: 587
SMTP Username: postmaster@mg.deinedomain.com (steht unter "SMTP Credentials")
SMTP Password: (klick auf "Reset Password" um ein neues zu generieren)
```

### Option B: Gmail (wenn du Gmail nutzt)

**ACHTUNG:** Gmail braucht ein "App-Passwort" (nicht dein normales Gmail-Passwort!)

1. Geh auf myaccount.google.com
2. Klick auf "Sicherheit" (links)
3. Unter "Bei Google anmelden": 
   - Bestätigung in zwei Schritten muss AN sein (wenn nicht, einschalten)
4. Scrolle runter zu "App-Passwörter"
5. Klick drauf und erstelle ein neues:
   - App: "Mail"
   - Gerät: "Andere" → tippe ein "Franken Website"
   - Klick "Generieren"
6. **Kopiere das 16-stellige Passwort** (ohne Leerzeichen)

Deine Gmail SMTP-Daten:
```
SMTP Hostname: smtp.gmail.com
SMTP Port: 587
SMTP Username: deine@gmail.com
SMTP Password: (das 16-stellige App-Passwort)
```

### Option C: Anderer Email-Provider

Falls du einen anderen Email-Provider hast (Ionos, Strato, 1&1, etc.):
- Google nach: "[dein Provider] SMTP Einstellungen"
- Du brauchst: Host, Port (meist 587 oder 465), Benutzername, Passwort

---

## SCHRITT 2: VERCEL ENVIRONMENT VARIABLES SETZEN (5 Minuten)

1. Geh auf https://vercel.com
2. Login mit deinem Account
3. Klick auf dein Projekt "franken-entruempelung" (oder wie es heißt)
4. Klick oben auf "Settings"
5. Links im Menü: "Environment Variables"
6. Jetzt fügst du nacheinander diese 5 Variablen hinzu:

### Variable 1:
```
Key: SMTP_HOST
Value: smtp.mailgun.org (oder smtp.gmail.com - je nachdem was du nutzt)
Environment: Production
```
Klick "Add"

### Variable 2:
```
Key: SMTP_PORT
Value: 587
Environment: Production
```
Klick "Add"

### Variable 3:
```
Key: SMTP_USER
Value: (dein SMTP Username von Schritt 1)
Environment: Production
```
Klick "Add"

### Variable 4:
```
Key: SMTP_PASS
Value: (dein SMTP Passwort von Schritt 1)
Environment: Production
```
Klick "Add"

### Variable 5:
```
Key: CONTACT_FORM_RECIPIENT_EMAIL
Value: info@franken-entrumpelung.de
Environment: Production
```
Klick "Add"

### Variable 6 (optional):
```
Key: CONTACT_FORM_SENDER_EMAIL
Value: noreply@franken-entrumpelung.de (oder was du willst als Absender)
Environment: Production
```
Klick "Add"

**FERTIG mit Environment Variables!**

---

## SCHRITT 3: CODE DEPLOYEN (2 Minuten)

Jetzt müssen wir den neuen Code (den ich erstellt habe) online bringen.

### Im Terminal (in Cursor):

```bash
cd "/Users/batuhankaradag/seo frankenentrümpelung"
git add .
git commit -m "Kontaktformular mit Email-Versand eingerichtet"
git push
```

**Was passiert:**
- Vercel erkennt automatisch den Push
- Deployed die neue Version (dauert 1-2 Minuten)
- Das Formular funktioniert jetzt mit den SMTP-Daten die du hinterlegt hast

---

## SCHRITT 4: TESTEN (2 Minuten)

1. Geh auf deine Website: www.franken-entrumpelung.de
2. Scrolle runter zum Kontaktformular
3. Fülle es aus mit Test-Daten:
   - Name: Test
   - Email: deine@email.de
   - Telefon: 0170 123456
   - Ort: Nürnberg
   - Nachricht: Test
4. Klick auf "Anfrage senden"

**Was passieren sollte:**
- Du siehst "Vielen Dank! Wir haben Ihre Anfrage erhalten..."
- Nach 1-2 Minuten kommt eine Email bei info@franken-entrumpelung.de an

**Falls KEINE Email kommt:**
- Geh auf vercel.com → dein Projekt → "Logs" (oben)
- Schau nach Fehlermeldungen
- Häufigster Fehler: SMTP-Daten falsch eingegeben

---

## FEHLERSUCHE

### Problem: "Beim Senden ist ein Fehler aufgetreten"

**Lösung 1:** SMTP-Daten nochmal prüfen
- Geh auf Vercel → Settings → Environment Variables
- Prüfe ob alle 5 Variablen da sind
- Prüfe auf Tippfehler (Leerzeichen, falsche Zeichen)

**Lösung 2:** Vercel Logs checken
- Vercel → dein Projekt → "Logs"
- Schau nach Fehlermeldungen wie "Invalid login", "Connection refused", etc.
- Google die Fehlermeldung + "mailgun" oder "gmail"

### Problem: Email kommt nicht an

**Check 1:** Spam-Ordner prüfen
- Emails von Mailgun/Gmail landen oft erstmal im Spam

**Check 2:** Bei Mailgun: Authorized Recipients
- Mailgun Sandbox-Domain kann nur an vorher autorisierte Emails senden
- Geh auf Mailgun → Sending → Domain Settings
- Unter "Authorized Recipients": Füge info@franken-entrumpelung.de hinzu

---

## ALTERNATIVE: WEB3FORMS (noch einfacher)

Falls SMTP zu kompliziert ist, gibt es Web3Forms - **noch einfacher, dauert 3 Minuten:**

1. Geh auf www.web3forms.com
2. Gib deine Email ein: info@franken-entrumpelung.de
3. Bestätige die Email
4. Kopiere den API Key
5. Vercel → Environment Variables → Neue Variable:
   ```
   Key: WEB3FORMS_ACCESS_KEY
   Value: (der kopierte API Key)
   Environment: Production
   ```
6. Sag mir Bescheid, dann baue ich den Code auf Web3Forms um (dauert 2 Minuten)

Web3Forms Vorteile:
- Kein SMTP nötig
- Kein Email-Provider
- Kostenlos bis 250 Submissions/Monat
- Emails kommen sofort

---

## CHECKLISTE

Zum Abhaken:

**SMTP-Zugangsdaten:**
- [ ] SMTP_HOST notiert
- [ ] SMTP_PORT notiert  
- [ ] SMTP_USER notiert
- [ ] SMTP_PASS notiert

**Vercel Environment Variables:**
- [ ] SMTP_HOST hinzugefügt
- [ ] SMTP_PORT hinzugefügt
- [ ] SMTP_USER hinzugefügt
- [ ] SMTP_PASS hinzugefügt
- [ ] CONTACT_FORM_RECIPIENT_EMAIL hinzugefügt

**Deploy:**
- [ ] Code gepusht (git push)
- [ ] Vercel hat deployed (Check auf vercel.com)

**Test:**
- [ ] Formular ausgefüllt
- [ ] "Vielen Dank" Meldung gesehen
- [ ] Email erhalten

---

## FERTIG!

Wenn alles geklappt hat, funktioniert dein Kontaktformular jetzt und Anfragen kommen bei dir an.

Falls du hängen bleibst, melde dich - dann helfe ich dir weiter oder wir wechseln zu Web3Forms.
