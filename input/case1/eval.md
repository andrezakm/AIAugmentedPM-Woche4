# Eval: Feedback Cluster Viewer

**Version:** 1.0
**Datum:** März 2026
**Basis:** input/case1/spec.md

---

## Anleitung

Für jeden Punkt: PASS, FAIL oder UNKLAR eintragen.

- **PASS** = Kriterium erfüllt, eindeutig nachweisbar
- **FAIL** = Kriterium nicht erfüllt
- **UNKLAR** = nicht eindeutig aus dem Code oder Output entscheidbar (z.B. visuelles Layout, subjektive UX)

---

## Kriterien

| ID | Kriterium | Wie testen | Pass-Bedingung |
|----|-----------|------------|----------------|
| E1 | App startet ohne Fehler | `streamlit run prototype/case1/app.py` ausführen | Kein Python-Fehler, Browser öffnet sich |
| E2 | Alle 4 Cluster werden angezeigt | App öffnen, keinen Filter setzen | 4 Clusterkarten sichtbar |
| E3 | Jede Karte zeigt Cluster-Name | Karten durchsehen | Jede Karte hat eine erkennbare Überschrift mit dem Cluster-Namen |
| E4 | Jede Karte zeigt Häufigkeit | Karten durchsehen | Häufigkeitsangabe pro Karte sichtbar (z.B. "4 von 4 Quellen") |
| E5 | Jede Karte zeigt Zusammenfassung | Karten durchsehen | Kurzer Beschreibungstext pro Cluster vorhanden |
| E6 | Belege sind einsehbar | Auf Beleg-Bereich klicken oder scrollen | Mindestens 1 Zitat mit Quellenangabe pro Cluster sichtbar |
| E7 | Filter nach Quelle reduziert Anzeige | "Slack" auswählen, andere Quellen abwählen | Nur Cluster mit Slack-Belegen sichtbar; Cluster ohne Slack-Beleg verschwindet |
| E8 | Kein-Treffer-Hinweis erscheint | Filter wählen der keine Cluster trifft (z.B. nur "E-Mail" wenn kein Cluster ausschließlich E-Mail hat) | Hinweistext erscheint, keine leere Seite ohne Erklärung |
| E9 | Anzeige der sichtbaren Cluster-Anzahl | Filter setzen | Zahl aktualisiert sich korrekt (z.B. "2 von 4 Clustern") |
| E10 | App liest aus Datei, keine Hardcoded-Daten | Code öffnen und nach hardcodierten Cluster-Inhalten suchen | Cluster-Inhalte kommen aus `data/clusters.md`, nicht aus dem Code |
