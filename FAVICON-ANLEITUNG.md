# FAVICON INSTALLATION - SCHRITT FÜR SCHRITT

## SCHRITT 1: Favicon generieren

1. Öffne: https://favicon.io/favicon-converter/
2. Klick "Choose File"
3. Lade dein Logo hoch (das Bild mit LKW + Haus + "FRANKEN ENTRÜMPELUNG")
4. Klick "Download"
5. Entpacke die ZIP-Datei

## SCHRITT 2: Dateien kopieren

Kopiere ALLE Dateien aus dem Download in den `/public/` Ordner:
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png
- android-chrome-192x192.png
- android-chrome-512x512.png
- site.webmanifest

## SCHRITT 3: Code wurde automatisch angepasst!

Die layout.tsx wurde bereits aktualisiert.

## SCHRITT 4: Hochladen

```bash
git add .
git commit -m "Add favicon"
git push
```

## SCHRITT 5: Testen

Nach dem Deploy:
1. Öffne deine Website
2. Drücke STRG + SHIFT + R (Hard Refresh)
3. Logo sollte im Browser-Tab erscheinen!

Für Google: 1-2 Tage warten, dann erscheint es auch in den Suchergebnissen.

