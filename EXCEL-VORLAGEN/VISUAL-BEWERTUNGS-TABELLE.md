# ⭐ SO SIEHT DIE BEWERTUNGS-TABELLE AUS

## 🎯 KOPIERE DIESE STRUKTUR 1:1 IN GOOGLE SHEETS

---

### ZEILE 1 (ÜBERSCHRIFTEN - FETT + GELB HINTERLEGT):

```
A1: Nr. | B1: Datum Job | C1: Name | D1: Telefon | E1: Angefragt am | F1: Methode | G1: Erhalten? | H1: Datum Bewertung | I1: Plattform | J1: Sterne | K1: Link | L1: Notizen
```

---

### BEISPIEL-EINTRÄGE (Zeilen 2-8):

**Zeile 2:**
```
1 | 10.02.2026 | Max Mustermann | 0911 123456 | 12.02.2026 | WhatsApp | Ja | 13.02.2026 | Google | ⭐⭐⭐⭐⭐ | [Link kopieren] | Sehr schnell bewertet!
```

**Zeile 3:**
```
2 | 11.02.2026 | Anna Schmidt | 0170 987654 | 13.02.2026 | WhatsApp | Nein | - | - | - | - | Noch keine Reaktion - Follow-up 18.02?
```

**Zeile 4:**
```
3 | 15.02.2026 | Peter Müller | 0911 555333 | 17.02.2026 | WhatsApp | Ja | 17.02.2026 | Google | ⭐⭐⭐⭐⭐ | [Link kopieren] | Hat sofort reagiert, super!
```

**Zeile 5:**
```
4 | 16.02.2026 | Lisa Wagner | 0170 111222 | 18.02.2026 | WhatsApp | Ja | 19.02.2026 | Google | ⭐⭐⭐⭐⭐ | [Link kopieren] | Sehr zufrieden
```

**Zeile 6:**
```
5 | 18.02.2026 | Thomas Klein | 0911 444555 | 20.02.2026 | WhatsApp | Nein | - | - | - | - | Nach 3 Tagen nochmal nachfragen
```

**Zeile 7:**
```
6 | 20.02.2026 | Maria Becker | 0170 333444 | 22.02.2026 | WhatsApp | Ja | 23.02.2026 | Google | ⭐⭐⭐⭐ | [Link kopieren] | 4 Sterne - trotzdem gut!
```

**Zeile 8:**
```
7 | 22.02.2026 | Klaus Schmidt | 0911 666777 | 24.02.2026 | WhatsApp | Ja | 24.02.2026 | Google | ⭐⭐⭐⭐⭐ | [Link kopieren] | Am gleichen Tag bewertet!
```

---

## 🎨 FORMATIERUNG:

### Zeile 1 (Überschriften):
- **Fett:** Markiere A1:L1 → "Fett"
- **Hintergrund Gelb:** A1:L1 → Füllfarbe → Gelb
- **Text zentriert:** A1:L1 → Ausrichtung → Mitte

### Spalte G (Erhalten?):
- **"Ja"** → Grün hinterlegen
- **"Nein"** → Orange hinterlegen

### Spalte J (Sterne):
- **5 Sterne** → Grün hinterlegen
- **4 Sterne** → Hellgrün
- **3 Sterne** → Gelb
- **1-2 Sterne** → Rot

### Spaltenbreiten:
- **A:** 50 Pixel
- **B:** 100 Pixel
- **C:** 150 Pixel
- **D:** 120 Pixel
- **E-F:** 100 Pixel
- **G:** 80 Pixel
- **H:** 120 Pixel
- **I:** 100 Pixel
- **J:** 120 Pixel
- **K:** 150 Pixel
- **L:** 300 Pixel

---

## 🔢 STATISTIKEN & FORMELN:

### UNTEN IN DER TABELLE (Zeile 50):

```
A50: STATISTIKEN:

A52: Gesamt Jobs:
B52: =COUNTA(B2:B100)

A53: Bewertungen angefragt:
B53: =COUNTA(E2:E100)

A54: Bewertungen erhalten:
B54: =COUNTIF(G2:G100;"Ja")

A55: BEWERTUNGS-RATE:
B55: =B54/B53*100 & "%"

A57: 5-Sterne Bewertungen:
B57: =COUNTIF(J2:J100;"⭐⭐⭐⭐⭐")

A58: 4-Sterne Bewertungen:
B58: =COUNTIF(J2:J100;"⭐⭐⭐⭐")

A59: Durchschnitt Sterne:
B59: =(B57*5 + B58*4) / (B57+B58)
```

**Formatierung Statistik-Bereich:**
- A50:B59 → Fett + Hellblau Hinterlegt

---

### ZIELE (Zeile 62):

```
A62: MONATLICHES ZIEL:
B62: 10 neue Bewertungen

A63: AKTUELL DIESEN MONAT:
B63: [Manuelle Eingabe oder Formel mit Datum-Filter]

A64: NOCH FEHLEN:
B64: =B62-B63
```

---

## 📝 SO ERSTELLST DU ES IN GOOGLE SHEETS:

**SCHRITT 1:**
1. Neue Tabelle: "Franken-Entrümpelung - Bewertungen"

**SCHRITT 2:**
1. Überschriften in Zeile 1
2. Formatieren: Fett + Gelb

**SCHRITT 3:**
1. Nach jedem Job: Neue Zeile
2. Ausfüllen: Nr., Datum Job, Name, Telefon

**SCHRITT 4:**
1. Wenn Bewertung angefragt:
   - Datum in Spalte E
   - Methode in Spalte F (meist "WhatsApp")

**SCHRITT 5:**
1. Wenn Bewertung erhalten:
   - "Ja" in Spalte G
   - Datum in Spalte H
   - Plattform in Spalte I (meist "Google")
   - Sterne in Spalte J (⭐⭐⭐⭐⭐)
   - Link kopieren in Spalte K

**SCHRITT 6:**
1. Zeile 50+: Statistiken mit Formeln

**FERTIG!** ✅

---

## 💡 PROFI-TIPPS:

**1. Bedingte Formatierung für "Erhalten?":**
- Markiere G2:G100
- Format → Bedingte Formatierung
- Regel 1: Wenn = "Ja" → Grün
- Regel 2: Wenn = "Nein" → Orange

**2. Follow-up Reminder:**
```
M1: FOLLOW-UP NÖTIG?
M2: =IF(AND(G2="Nein",TODAY()-E2>5),"⚠️ NACHFRAGEN!","")
```
→ Zeigt automatisch an wenn nach 5 Tagen keine Bewertung!

**3. Bewertungs-Link Template:**
```
Spalte N1: WhatsApp-Text
N2: ="Hallo " & C2 & ", vielen Dank für Ihr Vertrauen! Falls Sie 2 Min Zeit haben: [IHR GOOGLE-LINK]"
```
→ Auto-generierter WhatsApp-Text!

**4. Beste Bewertungen markieren:**
- Alle 5-Sterne Bewertungen → Grün Hintergrund
- Diese kannst du auf Website zeigen!

---

## 📊 MONATLICHE AUSWERTUNG:

**Ende des Monats:**
1. Wie viele Bewertungen angefragt? (Spalte B53)
2. Wie viele erhalten? (Spalte B54)
3. Bewertungs-Rate? (Spalte B55)

**Ziele:**
- **Bewertungs-Rate > 70%** = Sehr gut! ✅
- **Bewertungs-Rate 50-70%** = OK ⚠️
- **Bewertungs-Rate < 50%** = Mehr nachhaken! ❌

**Verbesserungen:**
- Niedrige Rate? → Schneller nachfragen (1-2 Tage nach Job!)
- Follow-up bei Nicht-Reagierenden nach 5 Tagen
- Link in WhatsApp leichter machen (direkt anklickbar!)

---

## 🎯 ROUTINE:

**Nach jedem Job (5 Min):**
1. ✅ Neue Zeile in Tabelle
2. ✅ Datum Job, Name, Telefon eintragen
3. ✅ 1-2 Tage warten
4. ✅ WhatsApp mit Bewertungs-Link schicken
5. ✅ Datum "Angefragt am" eintragen
6. ✅ Status: "Nein" (noch nicht erhalten)

**Wenn Bewertung kommt:**
1. ✅ Status ändern: "Ja"
2. ✅ Datum Bewertung eintragen
3. ✅ Sterne eintragen
4. ✅ Link kopieren
5. ✅ Kunde danken per WhatsApp!

**Wöchentlich (10 Min):**
1. ✅ Alle "Nein" älter als 5 Tage checken
2. ✅ Freundlich nochmal nachfragen
3. ✅ Notiz machen: "Follow-up am [Datum]"

---

## 📈 ENTWICKLUNG TRACKEN:

**Beispiel-Entwicklung:**

**Monat 1:**
- Angefragt: 8
- Erhalten: 5
- Rate: 63%

**Monat 2:**
- Angefragt: 12
- Erhalten: 9
- Rate: 75% ✅ (Verbesserung!)

**Monat 3:**
- Angefragt: 18
- Erhalten: 15
- Rate: 83% 🚀 (Exzellent!)

**Nach 3 Monaten:**
- **Gesamt neue Bewertungen: 29** ⭐
- **Von aktuell 25 auf 54 Bewertungen!**
- **= Top-Tier Status!** 🎉

---

**🎯 Diese Tabelle ist dein Bewertungs-Turbo!** ⭐📊

**Ohne Tabelle:** Vergisst du Nachfragen = weniger Bewertungen
**Mit Tabelle:** Systematisch + Follow-up = 70%+ Rate! 🚀
