# 💰 SO SIEHT DIE UMSATZ-TABELLE AUS

## 🎯 KOPIERE DIESE STRUKTUR 1:1 IN GOOGLE SHEETS

---

### ZEILE 1 (ÜBERSCHRIFTEN - FETT + BLAU HINTERLEGT):

```
A1: Monat | B1: Anfragen | C1: Aufträge | D1: Conv.-Rate | E1: Umsatz brutto | F1: Kosten Entsorgung | G1: Kosten Sprit | H1: Kosten Mitarbeiter | I1: Sonstige Kosten | J1: GEWINN | K1: Notizen
```

---

### BEISPIEL-EINTRÄGE (Zeilen 2-7):

**Zeile 2:**
```
Jan 2026 | 15 | 8 | 53% | 9.600 € | 1.200 € | 300 € | 2.400 € | 500 € | 5.200 € | Guter Start ins Jahr
```

**Zeile 3:**
```
Feb 2026 | 25 | 12 | 48% | 14.400 € | 1.800 € | 400 € | 3.000 € | 600 € | 8.600 € | SEO beginnt zu greifen!
```

**Zeile 4:**
```
Mär 2026 | 35 | 18 | 51% | 21.600 € | 2.700 € | 600 € | 4.500 € | 800 € | 13.000 € | Top Monat! Viele Anfragen
```

**Zeile 5:**
```
Apr 2026 | 40 | 22 | 55% | 26.400 € | 3.300 € | 700 € | 5.500 € | 900 € | 16.000 € | Frühling = Hochsaison
```

**Zeile 6:**
```
Mai 2026 | 45 | 25 | 56% | 30.000 € | 3.750 € | 800 € | 6.250 € | 1.000 € | 18.200 € | Sehr gut! Team ausgebaut
```

**Zeile 7:**
```
Jun 2026 | 50 | 28 | 56% | 33.600 € | 4.200 € | 900 € | 7.000 € | 1.100 € | 20.400 € | Halbzeit Q2 - exzellent!
```

---

## 🎨 FORMATIERUNG:

### Zeile 1 (Überschriften):
- **Fett:** Markiere A1:K1 → "Fett"
- **Hintergrund Blau:** Markiere A1:K1 → Füllfarbe → Hellblau
- **Text Weiß:** Markiere A1:K1 → Textfarbe → Weiß
- **Text zentriert:** A1:K1 → Ausrichtung → Mitte

### Spalte J (GEWINN):
- **Fett:** Markiere J2:J20 → "Fett"
- **Hintergrund Hellgrün:** J2:J20 → Füllfarbe → Hellgrün
- **Größer als 10.000€:** Dunkelgrün!

### Spaltenbreiten:
- **A (Monat):** 100 Pixel
- **B-D:** Je 100 Pixel
- **E-I:** Je 150 Pixel
- **J (Gewinn):** 150 Pixel (FETT!)
- **K (Notizen):** 250 Pixel

---

## 🔢 WICHTIGE FORMELN:

### AUTOMATISCHE BERECHNUNG IN ZEILEN:

**Spalte D (Conversion-Rate) - FORMEL:**
```
D2: =C2/B2*100 & "%"
```
→ Ziehe diese Formel nach unten (D2 bis D20)

**Spalte J (Gewinn) - FORMEL:**
```
J2: =E2-F2-G2-H2-I2 & " €"
```
→ Ziehe diese Formel nach unten (J2 bis J20)

---

### GESAMT-STATISTIKEN (Zeile 25):

```
A25: GESAMT JAHR:

B25: =SUM(B2:B13)          (Gesamt Anfragen)
C25: =SUM(C2:C13)          (Gesamt Aufträge)
D25: =C25/B25*100 & "%"    (Durchschnitt Conv.-Rate)
E25: =SUM(E2:E13) & " €"   (Gesamt Umsatz)
J25: =SUM(J2:J13) & " €"   (Gesamt Gewinn)
```

**Formatierung Zeile 25:**
- **Fett + Gelb Hinterlegt**
- **Größere Schrift (14pt)**

---

### DURCHSCHNITTS-ANALYSE (Zeile 27):

```
A27: DURCHSCHNITTE:

B27: =AVERAGE(B2:B13)            (Ø Anfragen/Monat)
C27: =AVERAGE(C2:C13)            (Ø Aufträge/Monat)
E27: =AVERAGE(E2:E13) & " €"     (Ø Umsatz/Monat)
J27: =AVERAGE(J2:J13) & " €"     (Ø Gewinn/Monat)
```

---

### PREIS PRO AUFTRAG (Zeile 29):

```
A29: Ø PREIS PRO AUFTRAG:
E29: =E25/C25 & " €"
```

---

### GEWINN-MARGE (Zeile 30):

```
A30: GEWINN-MARGE:
J30: =J25/E25*100 & "%"
```

---

## 📊 ZUSÄTZLICHE TABELLE: HERKUNFT DER AUFTRÄGE

**AB SPALTE M (neue Mini-Tabelle):**

```
M1: QUELLE | N1: Anzahl | O1: Umsatz

M2: Google Organisch | N2: 18 | O2: 21.600 €
M3: Google Ads | N3: 5 | O3: 6.000 €
M4: Empfehlungen | N4: 8 | O4: 9.600 €
M5: Facebook | N5: 3 | N5: 3.600 €
```

**Auswertung:**
```
M7: BESTE QUELLE:
N7: =INDEX(M2:M5,MATCH(MAX(O2:O5),O2:O5,0))
```
→ Zeigt automatisch beste Quelle!

---

## 📝 SO ERSTELLST DU ES IN GOOGLE SHEETS:

**SCHRITT 1:**
1. Gehe zu https://sheets.google.com
2. Klicke "Neue Tabelle"
3. Benenne sie: "Franken-Entrümpelung - Umsatz"

**SCHRITT 2:**
1. Überschriften in Zeile 1 eintragen (A1 bis K1)
2. Formatieren: Fett + Blau + Weiße Schrift

**SCHRITT 3:**
1. Ab Zeile 2: Jeden Monat eine Zeile
2. Jan 2026, Feb 2026, Mär 2026, etc.

**SCHRITT 4:**
1. Formeln eintragen:
   - D2: Conversion-Rate-Formel
   - J2: Gewinn-Formel
   - Nach unten ziehen!

**SCHRITT 5:**
1. Zeile 25: Gesamt-Statistiken
2. Zeile 27: Durchschnitte
3. Zeile 29-30: Weitere KPIs

**SCHRITT 6:**
1. Am Monatsende: Zahlen eintragen
2. Alles andere berechnet sich automatisch!

**FERTIG!** ✅

---

## 💡 PROFI-TIPPS:

**1. Diagramm erstellen:**
- Markiere A1:E13
- Menü: "Einfügen" → "Diagramm"
- Typ: "Liniendiagramm"
- Zeigt Umsatz-Entwicklung!

**2. Bedingte Formatierung für Gewinn:**
- Markiere J2:J13
- Wenn Wert > 10.000 € → Dunkelgrün
- Wenn Wert < 5.000 € → Orange
- Wenn Wert < 0 € → Rot (Verlust!)

**3. Ziele setzen:**
```
A32: JAHRESZIEL UMSATZ:
E32: 250.000 €

A33: NOCH FEHLEN:
E33: =E32-E25
```

**4. Prozent vom Ziel:**
```
A34: % VOM ZIEL:
E34: =E25/E32*100 & "%"
```

---

## 📈 AUSWERTUNG:

**Was du aus dieser Tabelle lernst:**
- ✅ Welcher Monat am besten läuft
- ✅ Wie sich dein Business entwickelt
- ✅ Ob du profitabel bist
- ✅ Wo du Kosten senken kannst
- ✅ Conversion-Rate-Trends
- ✅ Durchschnittspreis pro Auftrag

**Monatliche Routine:**
1. Am Monatsende: Zahlen eintragen (10 Min)
2. Auswertungen anschauen
3. Nächsten Monat planen!

---

**🎯 Mit dieser Tabelle siehst du SOFORT ob dein Business wächst!** 📊💰

**Beispiel-Erfolg:**
- Monat 1: 8 Aufträge, 5.200 € Gewinn
- Monat 6: 28 Aufträge, 20.400 € Gewinn
- **= +250% WACHSTUM!** 🚀
