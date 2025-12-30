# ⚠️ WICHTIG - VOR DEM LAUNCH ÄNDERN!

## 🚨 RECHTLICHE PFLICHTEN (SONST ABMAHNUNG!)

### 1. **IMPRESSUM** ⚠️ **ABSOLUT PFLICHT!**
**Datei:** `app/impressum/page.tsx`

**Aktuell:** Enthält nur Platzhalter-Text  
**Was du tun musst:** Mit echten Daten füllen!

**Generator nutzen:**
https://www.e-recht24.de/impressum-generator.html

**Muss enthalten:**
- ✅ Vollständiger Name / Firmenname
- ✅ Vollständige Anschrift
- ✅ Telefonnummer
- ✅ E-Mail-Adresse
- ✅ Umsatzsteuer-ID (falls vorhanden)
- ✅ Handelsregisternummer (falls GmbH)
- ✅ Verantwortlicher für den Inhalt

**ACHTUNG:** Ohne korrektes Impressum droht Abmahnung (bis zu 1.000€ Strafe!)

---

### 2. **DATENSCHUTZERKLÄRUNG** ⚠️ **DSGVO-PFLICHT!**
**Datei:** `app/datenschutz/page.tsx`

**Aktuell:** Enthält nur Platzhalter-Text  
**Was du tun musst:** DSGVO-konforme Datenschutzerklärung erstellen!

**Generator nutzen:**
https://www.e-recht24.de/dsgvo.html
(Kostenlos und rechtssicher!)

**Muss enthalten:**
- ✅ Welche Daten werden gesammelt
- ✅ Wie werden Daten verwendet
- ✅ Cookies-Information
- ✅ Google Analytics (falls genutzt)
- ✅ Kontaktformular-Daten
- ✅ Rechte des Nutzers (Auskunft, Löschung, etc.)
- ✅ SSL-Verschlüsselung

**ACHTUNG:** Verstöße gegen DSGVO können bis zu 20.000€ Strafe kosten!

---

### 3. **AGB** (Allgemeine Geschäftsbedingungen)
**Datei:** `app/agb/page.tsx`

**Aktuell:** Enthält nur Platzhalter-Text  
**Was du tun musst:** AGB für Dienstleistungen erstellen!

**Generator nutzen:**
https://www.agb.de (kostenpflichtig aber rechtssicher)
oder
https://www.ihk.de/agb-generator (kostenlos)

**Muss enthalten:**
- ✅ Leistungsumfang
- ✅ Preise und Zahlungsbedingungen
- ✅ Stornierungsbedingungen
- ✅ Haftungsausschlüsse
- ✅ Gewährleistung

---

## 📞 KONTAKTDATEN ÄNDERN

### **TELEFONNUMMER**
**Aktuell:** `+491234567890` (Fake-Nummer!)

**Wo ändern:**
- `components/Hero.tsx` (Zeile 63, 107)
- `components/Navigation.tsx`
- `components/Footer.tsx` (Zeile 49)
- `components/CallToAction.tsx`
- `components/HowItWorks.tsx` (Zeile 107)
- `app/kontakt/page.tsx`

**Suchen und Ersetzen:**
```bash
# Im Terminal:
cd "/Users/batuhankaradag/seo frankenentrümpelung"
grep -r "+491234567890" . --exclude-dir=node_modules
```

Dann ersetze ÜBERALL durch deine echte Nummer!

---

### **E-MAIL-ADRESSE**
**Aktuell:** Teilweise `info@franken-entruempelung.de` (noch nicht eingerichtet)

**Wo ändern:**
- `components/Footer.tsx` (Zeile 56)
- `app/kontakt/page.tsx`
- `app/impressum/page.tsx`

**Was tun:**
1. Erst E-Mail bei Domain-Anbieter einrichten
2. Dann in allen Dateien die E-Mail-Adresse eintragen

---

## 📊 FALSCHE STATISTIKEN ENTFERNEN

### **HERO-SECTION - Zeile 93-103**
**Aktuell:**
- "500+ Zufriedene Kunden"
- "15+ Jahre Erfahrung"
- "4.9★ Bewertung"

**Was du tun musst:**
Ersetze durch ECHTE Zahlen oder entferne diese Section!

**ACHTUNG:** Falsche Kundenangaben sind **Verbrauchertäuschung** und können abgemahnt werden!

**Datei:** `components/Hero.tsx` (Zeile 85-105)

---

### **TESTIMONIALS - Gefälschte Bewertungen**
**Aktuell:** 6 erfundene Kundenbewertungen mit:
- Fake-Namen (Max Mustermann, etc.)
- Fake-Bewertungen
- Fake-Orte

**Was du tun musst:**
- Echte Kundenbewertungen einholen ODER
- Diese Section erstmal entfernen

**Datei:** `components/Testimonials.tsx`

**ACHTUNG:** Gefälschte Bewertungen sind illegal (Gesetz gegen unlauteren Wettbewerb)!

---

## 🖼️ BILDER ERSETZEN

### **AKTUELL:**
Alle Bilder sind von Unsplash (Placeholder)

### **WAS TUN:**

1. **Eigene Fotos machen:**
   - Entrümpelungs-Projekte fotografieren
   - Vorher/Nachher-Fotos
   - Team-Fotos
   - Firmenfahrzeug

2. **Bilder optimieren:**
   - Max. 1920px Breite
   - JPG mit 80% Qualität
   - Mit TinyPNG komprimieren: https://tinypng.com

3. **Hochladen:**
   - In `/public/images/` Ordner ablegen
   - Z.B.: `/public/images/hero-bild.jpg`

4. **In Code ersetzen:**
   ```tsx
   // ALT:
   src="https://images.unsplash.com/photo-..."
   
   // NEU:
   src="/images/hero-bild.jpg"
   ```

**Dateien mit Bildern:**
- `components/Hero.tsx`
- `components/Services.tsx`
- `components/HowItWorks.tsx`
- `components/BeforeAfterGallery.tsx`

---

## 🌐 DOMAIN-ANPASSUNGEN

### **IN DER WEBSITE ÄNDERN:**

Suche nach: `franken-entruempelung.de`
Ersetze durch: `deine-echte-domain.de`

**Wo:**
- `components/SchemaMarkup.tsx`
- `app/layout.tsx` (Meta-Tags)
- Alle `page.tsx` Dateien mit Canonical URLs

---

## 🔍 SEO-ANPASSUNGEN

### **Google Analytics einbinden** (optional)
**Datei:** `app/layout.tsx`

1. Google Analytics Account erstellen
2. Tracking-Code holen
3. In `<head>` Section einfügen

### **Google Tag Manager** (optional)
Für fortgeschrittenes Tracking

---

## ✅ FINAL CHECKLIST VOR LAUNCH

### **RECHTLICHES:**
- [ ] Impressum mit echten Daten gefüllt
- [ ] Datenschutzerklärung DSGVO-konform erstellt
- [ ] AGB für Dienstleistungen erstellt
- [ ] Cookie-Banner eingebaut (falls Tracking)

### **KONTAKTDATEN:**
- [ ] Telefonnummer überall geändert
- [ ] E-Mail-Adressen eingerichtet
- [ ] E-Mail-Adressen in Website eingefügt
- [ ] Kontaktformular getestet

### **INHALTE:**
- [ ] Fake-Statistiken entfernt/ersetzt
- [ ] Fake-Bewertungen entfernt/ersetzt
- [ ] Platzhalter-Bilder durch eigene Fotos ersetzt
- [ ] Alle Texte auf Rechtschreibung geprüft

### **TECHNIK:**
- [ ] Domain registriert
- [ ] Hosting eingerichtet
- [ ] SSL-Zertifikat aktiv (HTTPS)
- [ ] Website auf Smartphone getestet
- [ ] Alle Links funktionieren
- [ ] Ladezeit unter 3 Sekunden

### **SEO:**
- [ ] Google My Business erstellt
- [ ] Google Search Console eingerichtet
- [ ] Sitemap bei Google eingereicht
- [ ] Alle Meta-Descriptions vorhanden
- [ ] Alle Bilder haben Alt-Tags

---

## 🚨 ABSOLUTES MINIMUM VOR LAUNCH:

**Diese 3 Dinge MUSST du ändern, sonst droht Abmahnung:**

1. ✅ **IMPRESSUM** mit echten Daten
2. ✅ **DATENSCHUTZERKLÄRUNG** DSGVO-konform
3. ✅ **TELEFONNUMMER** von Fake auf echte Nummer

**Alles andere kannst du nach und nach verbessern!**

---

## 📁 DATEIEN DIE DU BEARBEITEN MUSST:

**Priorität 1 (SEHR WICHTIG):**
- ⚠️ `app/impressum/page.tsx`
- ⚠️ `app/datenschutz/page.tsx`
- ⚠️ `components/Hero.tsx` (Telefonnummer)
- ⚠️ `components/Footer.tsx` (Telefonnummer + E-Mail)

**Priorität 2 (WICHTIG):**
- `app/agb/page.tsx`
- `components/Navigation.tsx` (Telefonnummer)
- `components/CallToAction.tsx` (Telefonnummer)
- `components/Testimonials.tsx` (Fake-Bewertungen entfernen)

**Priorität 3 (KANN WARTEN):**
- Alle Bilder ersetzen
- Eigene Fotos hochladen
- Texte optimieren

---

## 💡 TIPP

**Fang klein an:**

1. **Woche 1:** Domain + Hosting + Impressum/Datenschutz
2. **Woche 2:** Website live schalten (auch mit Placeholder-Bildern OK)
3. **Woche 3:** Bilder durch eigene Fotos ersetzen
4. **Woche 4:** Google My Business + SEO optimieren

**Besser eine Live-Website mit Placeholder-Bildern als gar keine Website!**

Aber: **IMPRESSUM UND DATENSCHUTZ MÜSSEN VOM START WEG KORREKT SEIN!** ⚠️

---

## 📞 FRAGEN?

Falls du unsicher bist, frag lieber vorher!

**Viel Erfolg!** 🚀

