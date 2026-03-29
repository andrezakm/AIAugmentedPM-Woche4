# Brief: Feedback Cluster Viewer

**Datum:** März 2026
**Autor:** NeoEmployee PM-Team

---

## Das Problem

Nach einem Analyse-Run mit dem pattern-agent entstehen 3 Output-Dateien in `output/`. Die wichtigste: `01_clusters.md` — eine Markdown-Datei mit allen identifizierten Feedback-Clustern.

Das Problem: ab 4 Clustern wird die Datei unübersichtlich. Wir scrollen, suchen, verlieren den Überblick. Es gibt keine Möglichkeit zu filtern — zum Beispiel "zeig mir nur Cluster die auf Slack-Nachrichten basieren" oder "welche Cluster kommen aus Kundeninterviews?".

Heute öffnen wir die Datei im Editor und lesen von oben nach unten. Das kostet Zeit und macht Vergleiche schwer.

## Die Nutzer

NeoEmployee PMs und Berater nach einem Analyse-Run. Typisch: 1-2 Personen, die einen Kunden-Briefing vorbereiten oder eine Produktentscheidung treffen wollen.

## Was wir brauchen

Eine einfache lokale App die `01_clusters.md` einliest und die Cluster übersichtlich darstellt. Filterbar nach Quelle. Keine Datenbank, kein Login, kein Deployment — läuft lokal, gestartet mit einem Befehl.

## Was wir nicht brauchen

- Kein Backend, keine API
- Keine Benutzerkonten
- Kein schickes Design — Funktion vor Form
- Keine Bearbeitung der Daten — nur Lesen und Anzeigen
