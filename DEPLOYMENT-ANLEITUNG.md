# 🚀 DEPLOYMENT-ANLEITUNG - Website Live Schalten

## 📋 ÜBERSICHT - WAS DU BRAUCHST

1. ✅ **Domain** (z.B. `franken-entruempelung.de`)
2. ✅ **Hosting** für die Next.js Website
3. ✅ **E-Mail-Adresse** mit deiner Domain
4. ✅ **SSL-Zertifikat** (für HTTPS)

**Geschätzte Kosten:** 5-15€/Monat
**Zeitaufwand:** 1-2 Stunden

---

## 🌐 SCHRITT 1: DOMAIN REGISTRIEREN

### Empfohlene Deutsche Anbieter:

#### **Option A: ALL-INKL.COM** ⭐ **EMPFEHLUNG!**
- **Warum?** Alles in einem: Domain + Hosting + E-Mail + WordPress
- **Preis:** ~8€/Monat
- **Vorteile:** 
  - Deutscher Support
  - 5 E-Mail-Adressen inklusive
  - SSL-Zertifikat gratis
  - Next.js deployen möglich
- **Link:** https://all-inkl.com

**Empfohlenes Paket:** ALL-INKL PrivatPlus (8,95€/Monat)

#### **Option B: STRATO**
- **Preis:** ~5€/Monat
- **Link:** https://strato.de

#### **Option C: IONOS (1&1)**
- **Preis:** ~6€/Monat  
- **Link:** https://ionos.de

### Domain-Namen Vorschläge:
- `franken-entruempelung.de` ✅
- `entruempelung-franken.de`
- `entruempelung-nuernberg.com`
- `nuernberg-entruempelung.de`

**WICHTIG:** Prüfe die Verfügbarkeit auf der Website des Anbieters!

---

## 🖥️ SCHRITT 2: HOSTING - WEBSITE ONLINE BRINGEN

### **ZWEI OPTIONEN:**

### **Option A: VERCEL** ⭐ **AM EINFACHSTEN FÜR NEXT.JS!**

**Vorteile:**
- ✅ Kostenlos für kleine Websites
- ✅ Perfekt für Next.js (vom selben Team entwickelt)
- ✅ Automatische Updates bei Code-Änderungen
- ✅ SSL-Zertifikat inklusive
- ✅ Sehr schnell (CDN weltweit)

**Nachteile:**
- ❌ Englische Oberfläche
- ❌ Support nur auf Englisch

#### **SO GEHTS:**

1. **Account erstellen:**
   - Gehe zu https://vercel.com
   - Klicke "Sign Up"
   - Registriere dich mit GitHub, GitLab oder E-Mail

2. **Code hochladen:**
   
   **Option 2A: Mit GitHub (empfohlen)**
   ```bash
   # Im Terminal (im Projekt-Ordner):
   git init
   git add .
   git commit -m "Initial commit"
   
   # Erstelle ein Repository auf github.com
   # Dann:
   git remote add origin https://github.com/DEIN-USERNAME/franken-entruempelung.git
   git push -u origin main
   ```
   
   Danach in Vercel:
   - "Import Project"
   - GitHub verbinden
   - Repository auswählen
   - Deploy klicken ✅

   **Option 2B: Direkt mit Vercel CLI**
   ```bash
   # Vercel CLI installieren:
   npm install -g vercel
   
   # Im Projekt-Ordner:
   vercel login
   vercel
   # Folge den Anweisungen
   ```

3. **Domain verbinden:**
   - In Vercel: Settings → Domains
   - Deine Domain eingeben (z.B. `franken-entruempelung.de`)
   - DNS-Einträge werden angezeigt
   - Diese Einträge musst du bei deinem Domain-Anbieter (ALL-INKL, etc.) eingeben

---

### **Option B: ALL-INKL / STRATO / IONOS**

**Vorteile:**
- ✅ Deutscher Support
- ✅ Domain + Hosting + E-Mail in einem
- ✅ Einfache Verwaltung

**Nachteile:**
- ❌ Next.js nicht direkt unterstützt
- ❌ Du musst die Website "exportieren"

#### **SO GEHTS:**

1. **Website als statische HTML exportieren:**
   ```bash
   # Im Terminal:
   npm run build
   npm run export
   ```
   
   Dies erstellt einen `out/` Ordner mit allen HTML-Dateien.

2. **Per FTP hochladen:**
   - FTP-Programm herunterladen (z.B. FileZilla)
   - FTP-Zugangsdaten von ALL-INKL holen
   - Alle Dateien aus `out/` Ordner hochladen

**PROBLEM:** Next.js SSR-Features funktionieren nicht!

**➡️ DESHALB EMPFEHLE ICH OPTION A (VERCEL)!**

---

## 📧 SCHRITT 3: E-MAIL EINRICHTEN

### **Option A: Bei Domain-Anbieter (ALL-INKL, STRATO, etc.)**

**Wenn du bei ALL-INKL Domain + Hosting kaufst:**

1. **E-Mail-Adressen erstellen:**
   - Login ins ALL-INKL KAS
   - E-Mail → E-Mail-Adressen
   - Neue E-Mail erstellen:
     - `info@franken-entruempelung.de`
     - `kontakt@franken-entruempelung.de`
     - `service@franken-entruempelung.de`

2. **E-Mail-Programm einrichten:**
   
   **Für Apple Mail / Outlook / Thunderbird:**
   - IMAP Server: `franken-entruempelung.de`
   - Port: 993 (SSL)
   - SMTP Server: `franken-entruempelung.de`
   - Port: 465 (SSL)
   - Benutzername: `info@franken-entruempelung.de`
   - Passwort: (dein gewähltes Passwort)

3. **Webmail nutzen:**
   - Gehe zu: `https://webmail.franken-entruempelung.de`
   - Login mit E-Mail und Passwort

### **Option B: Google Workspace / Microsoft 365**

**Wenn du professionelle Business-E-Mails willst:**

**Google Workspace:**
- Preis: 6€/Monat pro Nutzer
- Gmail-Interface mit deiner Domain
- Link: https://workspace.google.com

**Microsoft 365:**
- Preis: 5€/Monat pro Nutzer
- Outlook mit deiner Domain
- Link: https://microsoft.com/de-de/microsoft-365/business

---

## 🔗 SCHRITT 4: DOMAIN MIT WEBSITE VERBINDEN

### **Wenn du VERCEL nutzt:**

1. **Bei Vercel:**
   - Settings → Domains
   - Domain eingeben: `franken-entruempelung.de`
   - Du siehst DNS-Einträge wie:

   ```
   A-Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

2. **Bei deinem Domain-Anbieter (z.B. ALL-INKL):**
   - Login ins KAS
   - Domain → DNS-Einstellungen
   - Neue Einträge erstellen:
   
   | Typ | Host | Ziel |
   |-----|------|------|
   | A | @ | 76.76.21.21 |
   | CNAME | www | cname.vercel-dns.com |

3. **Warten:**
   - DNS-Änderungen dauern 1-24 Stunden
   - Danach ist deine Website unter `franken-entruempelung.de` erreichbar!

---

## ✅ SCHRITT 5: WEBSITE-KONFIGURATION ANPASSEN

**VOR dem Deployment musst du noch Dinge ändern:**

### 1. **Telefonnummer ersetzen**
Suche in ALLEN Dateien nach: `+491708005653`
Ersetze durch deine echte Nummer: `+49911XXXXXXX`

```bash
# Im Terminal:
cd "/Users/batuhankaradag/seo frankenentrümpelung"
grep -r "+491708005653" components/ app/
```

### 2. **E-Mail-Adressen einfügen**
- In `components/Footer.tsx`
- In `components/Hero.tsx`
- In `app/kontakt/page.tsx`

Ersetze `info@franken-entruempelung.de` durch deine echte E-Mail.

### 3. **Impressum ausfüllen** ⚠️ **SEHR WICHTIG!**
Datei: `app/impressum/page.tsx`

**MUSS enthalten:**
- Vollständiger Name / Firmenname
- Anschrift
- Telefonnummer
- E-Mail
- Umsatzsteuer-ID (falls vorhanden)
- Handelsregisternummer (falls GmbH)

**Generator nutzen:**
https://www.e-recht24.de/impressum-generator.html

### 4. **Datenschutzerklärung erstellen** ⚠️ **PFLICHT!**
Datei: `app/datenschutz/page.tsx`

**Generator nutzen:**
https://www.e-recht24.de/dsgvo.html

### 5. **Domain in der Website ändern**
In `components/SchemaMarkup.tsx` und anderen Dateien:
- Suche: `franken-entruempelung.de`
- Ersetze durch deine echte Domain

---

## 🚀 SCHRITT 6: DEPLOYMENT

### **Mit Vercel:**

```bash
# Im Terminal:
cd "/Users/batuhankaradag/seo frankenentrümpelung"

# Build testen:
npm run build

# Wenn erfolgreich:
vercel --prod
```

Das war's! 🎉

---

## 📊 SCHRITT 7: GOOGLE EINRICHTEN (NACH LAUNCH)

### **Google Search Console**
1. Gehe zu: https://search.google.com/search-console
2. Domain verifizieren
3. Sitemap einreichen: `https://deine-domain.de/sitemap.xml`

### **Google My Business**
1. Gehe zu: https://business.google.com
2. Standort hinzufügen
3. Verifizierung per Postkarte
4. Öffnungszeiten, Fotos, etc. eintragen

**SEHR WICHTIG für Local SEO!** 🎯

### **Google Analytics** (optional)
1. Gehe zu: https://analytics.google.com
2. Property erstellen
3. Tracking-Code in Website einbauen

---

## 💰 KOSTEN-ÜBERSICHT

### **Variante A: ALL-INKL + Vercel (EMPFOHLEN)**
- Domain + Hosting bei ALL-INKL: **8,95€/Monat**
- Vercel (für Website): **0€** (kostenlos)
- E-Mail: **Inklusive**
- SSL-Zertifikat: **Inklusive**

**TOTAL: ~9€/Monat**

### **Variante B: Alles bei ALL-INKL**
- Domain + Hosting + E-Mail: **8,95€/Monat**
- SSL-Zertifikat: **Inklusive**

**TOTAL: ~9€/Monat**

### **Variante C: Premium Setup**
- Domain bei ALL-INKL: **5€/Monat**
- Vercel Pro: **20$/Monat** (~18€)
- Google Workspace: **6€/Monat**

**TOTAL: ~29€/Monat** (nur wenn du viel Traffic erwartest)

---

## 📝 CHECKLISTE VOR DEM LAUNCH

- [ ] Domain registriert
- [ ] Hosting ausgewählt (Vercel empfohlen)
- [ ] Telefonnummer überall geändert
- [ ] E-Mail-Adressen eingerichtet
- [ ] E-Mail-Adressen in Website eingefügt
- [ ] **Impressum mit echten Daten gefüllt** ⚠️
- [ ] **Datenschutzerklärung mit echten Daten gefüllt** ⚠️
- [ ] **AGB erstellt** ⚠️
- [ ] Placeholder-Statistiken ersetzt (500+ Kunden, etc.)
- [ ] Domain mit Website verbunden
- [ ] SSL-Zertifikat aktiv (HTTPS)
- [ ] Website auf allen Geräten getestet
- [ ] Google Search Console eingerichtet
- [ ] Google My Business erstellt
- [ ] Sitemap eingereicht

---

## 🆘 HILFE & SUPPORT

### **Vercel:**
- Dokumentation: https://vercel.com/docs
- Support: https://vercel.com/support

### **ALL-INKL:**
- Support: https://all-inkl.com/kontakt/
- Telefon: 06664 - 93013
- E-Mail: info@all-inkl.com

### **Next.js:**
- Dokumentation: https://nextjs.org/docs

---

## 🎯 MEINE EMPFEHLUNG

**FÜR DICH IDEAL:**

1. **Domain + E-Mail bei ALL-INKL** (8,95€/Monat)
   - Deutscher Support
   - 5 E-Mail-Adressen
   - Einfache Verwaltung

2. **Website auf VERCEL** (kostenlos)
   - Perfekt für Next.js
   - Automatische Updates
   - Super schnell

3. **Domain mit Vercel verbinden** (DNS-Einträge)

**➡️ TOTAL: ~9€/Monat für alles!**

---

## 🚀 SCHNELLSTART-ANLEITUNG

**Wenn du heute starten willst:**

### Tag 1: Domain kaufen (15 Min)
1. Gehe zu https://all-inkl.com
2. Paket "PrivatPlus" wählen
3. Domain-Namen eingeben (z.B. `franken-entruempelung.de`)
4. Registrieren und bezahlen

### Tag 2: Vercel einrichten (30 Min)
1. Account auf https://vercel.com erstellen
2. Projekt deployen (mit GitHub oder CLI)
3. Testen unter `dein-projekt.vercel.app`

### Tag 3: Impressum/Datenschutz (1-2 Stunden)
1. Impressum Generator nutzen
2. Datenschutz Generator nutzen
3. Beide in Website einfügen

### Tag 4: Domain verbinden (30 Min)
1. DNS-Einträge bei ALL-INKL anpassen
2. Auf Propagierung warten (1-24h)
3. Website testen

### Tag 5: Google einrichten (30 Min)
1. Google My Business
2. Google Search Console
3. Sitemap einreichen

**➡️ Nach 5 Tagen bist du LIVE!** 🎉

---

## 📞 FRAGEN?

Falls du Fragen hast, melde dich einfach!

**Viel Erfolg mit deiner Website!** 🚀💚

