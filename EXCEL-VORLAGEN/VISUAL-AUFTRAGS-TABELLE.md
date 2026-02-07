# 📋 SO SIEHT DIE AUFTRAGS-TABELLE AUS

## 🎯 KOPIERE DIESE STRUKTUR 1:1 IN GOOGLE SHEETS

---

### ZEILE 1 (ÜBERSCHRIFTEN - FETT + GRAU HINTERLEGT):

```
A1: Lfd.Nr | B1: Datum | C1: Name | D1: Telefon | E1: Ort | F1: Art | G1: Besichtigung | H1: Angebot | I1: Preis | J1: Auftrag? | K1: Termin Job | L1: Status | M1: Bezahlt | N1: Notizen
```

---

### BEISPIEL-EINTRÄGE (Zeilen 2-6):

**Zeile 2:**
```
1 | 03.02.2026 | Max Mustermann | 0911 123456 | Nürnberg | Wohnung | 05.02.2026 | 05.02.2026 | 1.200 € | Ja | 10.02.2026 | Abgeschlossen | Ja | Alles super gelaufen, sehr netter Kunde
```

**Zeile 3:**
```
2 | 04.02.2026 | Anna Schmidt | 0170 987654 | Feucht | Keller | 06.02.2026 | 06.02.2026 | 800 € | Ja | 12.02.2026 | Geplant | - | Messie-Keller, viel Arbeit
```

**Zeile 4:**
```
3 | 05.02.2026 | Peter Müller | 0911 555333 | Lauf | Haushaltsauflösung | 08.02.2026 | - | - | Nein | - | Angebot wartet | - | Noch keine Rückmeldung nach 3 Tagen
```

**Zeile 5:**
```
4 | 06.02.2026 | Lisa Wagner | 0170 111222 | Altdorf | Wohnung | 09.02.2026 | - | - | - | - | Besichtigung geplant | - | Dringend! Will schnell räumen
```

**Zeile 6:**
```
5 | 07.02.2026 | Thomas Klein | 0911 444555 | Hersbruck | Gewerbe | - | - | - | - | - | Anfrage erhalten | - | Großes Büro, Angebot per Mail gewünscht
```

---

## 🎨 FORMATIERUNG:

### Zeile 1 (Überschriften):
- **Fett:** Markiere A1:N1 → Klicke "Fett" (B-Symbol)
- **Hintergrund Grau:** Markiere A1:N1 → Füllfarbe → Hellgrau
- **Text zentriert:** Markiere A1:N1 → Ausrichtung → Mitte

### Spaltenbreiten anpassen:
- **A (Lfd.Nr):** 60 Pixel
- **B (Datum):** 100 Pixel
- **C (Name):** 150 Pixel
- **D (Telefon):** 120 Pixel
- **E (Ort):** 100 Pixel
- **F (Art):** 150 Pixel
- **G-K:** Je 120 Pixel
- **L (Status):** 150 Pixel
- **M (Bezahlt):** 80 Pixel
- **N (Notizen):** 300 Pixel

### Farb-Codes für Status (Spalte L):
- **"Abgeschlossen"** → Grün hinterlegen
- **"Geplant"** → Gelb hinterlegen
- **"Angebot wartet"** → Orange hinterlegen
- **"Anfrage erhalten"** → Blau hinterlegen

---

## 🔢 NÜTZLICHE FORMELN (UNTEN IN DIE TABELLE):

**Zeile 50 (Statistiken):**

```
A50: GESAMT ANFRAGEN:
B50: =COUNTA(B2:B100)

A51: GESAMT AUFTRÄGE:
B51: =COUNTIF(J2:J100;"Ja")

A52: CONVERSION-RATE:
B52: =B51/B50*100 & "%"

A53: GESAMT UMSATZ:
B53: =SUM(I2:I100) & " €"
```

---

## 📝 SO ERSTELLST DU ES IN GOOGLE SHEETS:

**SCHRITT 1:**
1. Gehe zu https://sheets.google.com
2. Klicke "Neue Tabelle"
3. Benenne sie: "Franken-Entrümpelung - Aufträge"

**SCHRITT 2:**
1. Klicke in Zelle A1
2. Tippe: "Lfd.Nr"
3. Tab → nächste Zelle
4. Tippe: "Datum"
5. Tab → nächste Zelle
6. usw. bis alle Überschriften drin sind

**SCHRITT 3:**
1. Markiere Zeile 1 (A1:N1)
2. Klicke oben "Fett" (B)
3. Klicke "Füllfarbe" → Grau
4. Klicke "Ausrichtung" → Mitte

**SCHRITT 4:**
1. Ab Zeile 2: Erste Beispiel-Daten eintragen
2. Jeder neue Kunde = neue Zeile

**SCHRITT 5:**
1. Ganz unten (Zeile 50): Formeln für Statistiken eintragen

**FERTIG!** ✅

---

## 💡 PROFI-TIPPS:

**1. Zeile 1 einfrieren:**
- Klicke auf Zeile 1
- Menü: "Ansicht" → "Zeilen einfrieren" → "1 Zeile"
- Jetzt scrollt Überschrift immer mit!

**2. Filter hinzufügen:**
- Markiere A1:N1
- Menü: "Daten" → "Filter erstellen"
- Jetzt kannst du nach Status, Ort, etc. filtern!

**3. Bedingte Formatierung (Farben automatisch):**
- Markiere L2:L100
- Menü: "Format" → "Bedingte Formatierung"
- Regel 1: Wenn Text = "Abgeschlossen" → Grün
- Regel 2: Wenn Text = "Geplant" → Gelb
- Regel 3: Wenn Text = "Angebot wartet" → Orange

---

## 📱 HANDY-VERSION:

**Google Sheets App:**
- Installiere App (kostenlos)
- Öffne deine Tabelle
- Kannst unterwegs neue Einträge machen!
- Nach Job direkt ins Auto eintragen!

---

**🎯 Mit dieser Tabelle behältst du ALLES im Blick!** 📊
