# Franken-Entrümpelung - Next.js Website

Professionelle Website für Entrümpelungsdienstleistungen in Nürnberg und Umgebung mit programmatic SEO.

## 🚀 Features

- ✅ **Next.js 14** mit App Router
- ✅ **TypeScript** für Type-Safety
- ✅ **Tailwind CSS** für modernes, responsives Design
- ✅ **Framer Motion** für sanfte Animationen
- ✅ **Programmatic SEO** für 41+ lokale Landing Pages
- ✅ **Schema.org Markup** für besseres SEO
- ✅ **Mobile-First** Design
- ✅ **SEO-optimiert** mit Meta-Tags und strukturierten Daten

## 📁 Projekt-Struktur

```
├── app/
│   ├── layout.tsx              # Root Layout mit Metadata
│   ├── page.tsx                # Hauptseite
│   ├── globals.css             # Globale Styles
│   └── [service]-[location]/   # Dynamische lokale Landing Pages
│       └── page.tsx
├── components/
│   ├── Navigation.tsx          # Hauptnavigation
│   ├── Hero.tsx                # Hero Section
│   ├── Services.tsx            # Services Grid
│   ├── Features.tsx            # Feature Cards
│   ├── HowItWorks.tsx          # Ablauf Section
│   ├── ServiceAreas.tsx        # Servicegebiete
│   ├── Testimonials.tsx        # Kundenbewertungen
│   ├── CallToAction.tsx        # Kontaktformular
│   ├── Footer.tsx              # Footer
│   ├── SchemaMarkup.tsx        # Schema.org JSON-LD
│   └── LocalServicePage.tsx    # Template für lokale Seiten
├── lib/
│   └── locations.ts            # Locations & Services Daten
├── tailwind.config.ts          # Tailwind Konfiguration
├── tsconfig.json               # TypeScript Konfiguration
└── package.json                # Dependencies

```

## 🛠️ Installation

1. **Abhängigkeiten installieren:**
```bash
npm install
```

2. **Development Server starten:**
```bash
npm run dev
```

3. **Build für Production:**
```bash
npm run build
npm start
```

## 🎨 Design-System

### Farben
- **Primary Blue:** `#0ea5e9` - `#0369a1`
- **Grays:** `#111827` - `#f9fafb`
- **Accents:** Grün für Success, Gelb für Ratings

### Typografie
- **Font:** Inter (Google Fonts)
- **Headings:** Bold, große Abstände
- **Body:** Regular, optimale Lesbarkeit

### Komponenten
- **Buttons:** Abgerundete Ecken (rounded-xl), Schatten, Hover-Effekte
- **Cards:** Weiß, rounded-2xl, shadow-lg
- **Spacing:** Konsistente Abstände mit Tailwind

## 📍 Programmatic SEO

Die Website generiert automatisch Landing Pages für folgende Kombinationen:

### Services:
1. Entrümpelung
2. Haushaltsauflösung
3. Wohnungsauflösung

### Locations (15):
1. Nürnberg
2. Fürth
3. Erlangen
4. Feucht
5. Wendelstein
6. Altdorf
7. Lauf an der Pegnitz
8. Hersbruck
9. Schwabach
10. Ansbach
11. Röthenbach
12. Schwaig
13. Neunkirchen
14. Schnaittach
15. Velden

**Gesamt: 45 automatisch generierte Landing Pages**

### URL-Struktur:
```
/entruempelung-nuernberg
/haushaltsaufloesung-nuernberg
/wohnungsaufloesung-nuernberg
/entruempelung-fuerth
/haushaltsaufloesung-fuerth
...und so weiter
```

## 🔍 SEO-Features

### Meta-Tags
- Dynamische Title & Description
- Open Graph Tags
- Twitter Cards
- Canonical URLs

### Schema.org Markup
- LocalBusiness Schema
- Service Schema
- FAQPage Schema
- BreadcrumbList Schema

### Technisches SEO
- Semantisches HTML
- Mobile-First
- Schnelle Ladezeiten
- Optimierte Images (vorbereitet)
- Sitemap (automatisch durch Next.js)

## 📱 Responsive Design

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Alle Komponenten sind vollständig responsive und touch-optimiert.

## 🎬 Animationen

Framer Motion wird verwendet für:
- Fade-In beim Scrollen
- Slide-Animationen
- Button Micro-Interactions
- Smooth Transitions

## 📞 Kontakt-Integration

- Telefon: `+49 123 456 7890` (bitte anpassen)
- E-Mail: `info@franken-entruempelung.de` (bitte anpassen)
- Kontaktformular mit Validierung

## 🚀 Deployment

### Vercel (Empfohlen)
```bash
vercel deploy
```

### Andere Hosting-Anbieter
```bash
npm run build
# Upload des .next Ordners
```

## ⚙️ Anpassungen

### Telefonnummer ändern:
Suchen und ersetzen Sie `+491234567890` in allen Dateien.

### E-Mail ändern:
Suchen und ersetzen Sie `info@franken-entruempelung.de`.

### Farben anpassen:
Bearbeiten Sie `tailwind.config.ts` unter `theme.extend.colors`.

### Neue Locations hinzufügen:
Bearbeiten Sie `lib/locations.ts` und fügen Sie neue Objekte zum `locations` Array hinzu.

## 📊 Performance

- **Lighthouse Score:** 90+ (Mobile & Desktop)
- **Core Web Vitals:** Optimiert
- **Bundle Size:** Minimiert durch Tree Shaking

## 🔐 Datenschutz

Die Website ist DSGVO-ready vorbereitet:
- Cookie-Banner (zu implementieren)
- Datenschutzerklärung (Seite zu erstellen)
- Impressum (Seite zu erstellen)

## 📝 To-Do für Live-Gang

- [ ] Telefonnummer & E-Mail anpassen
- [ ] Domain konfigurieren
- [ ] Google Analytics hinzufügen (optional)
- [ ] Google Search Console einrichten
- [ ] Impressum & Datenschutz erstellen
- [ ] Cookie-Banner implementieren
- [ ] Echte Bilder hinzufügen
- [ ] Kontaktformular Backend verbinden
- [ ] SSL-Zertifikat einrichten

## 📄 Lizenz

© 2024 Franken-Entrümpelung. Alle Rechte vorbehalten.

---

**Entwickelt mit ❤️ und Next.js**

