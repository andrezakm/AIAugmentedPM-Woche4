# Eval: Feedback Cluster Viewer

**Datum:** 2026-04-06
**Basis:** input/case1/spec.md

---

## Anleitung

PASS = Bedingung ist erfüllt. FAIL = nicht erfüllt. UNKLAR = nicht aus Code oder Output entscheidbar.

## Kriterien

| ID | Kriterium | Wie testen | Pass-Bedingung | Ergebnis |
|----|-----------|------------|----------------|----------|
| E1 | App startet fehlerfrei | `streamlit run prototype/case1/app.py` ausführen | Kein Fehler im Terminal, Browser öffnet sich | FAIL |
| E2 | Alle 4 Cluster sichtbar (kein Filter) | App öffnen, alle Quellen ausgewählt | Genau 4 Clusterkarten im Hauptbereich sichtbar | FAIL |
| E3 | Jede Karte zeigt Cluster-Name | Karten durchsehen | Jede Karte hat Überschrift mit dem Cluster-Namen | FAIL |
| E4 | Jede Karte zeigt Häufigkeit | Karten durchsehen | Häufigkeitsangabe pro Karte sichtbar | FAIL |
| E5 | Jede Karte zeigt Zusammenfassung | Karten durchsehen | Kurzer Beschreibungstext pro Cluster vorhanden | FAIL |
| E6 | Belege aufklappbar | Auf "Belege" klicken | Bereich klappt auf und zeigt Zitate mit Quellenangabe | FAIL |
| E7 | Quellen-Filter schränkt Anzeige ein | Nur "Slack" auswählen | Nur Cluster mit Slack-Beleg sichtbar; Cluster ohne Slack verschwinden | FAIL |
| E8 | Zähler aktualisiert sich | Filter setzen | Sidebar zeigt korrekte Anzahl sichtbarer Cluster (z.B. "2 von 4 Clustern") | FAIL |
| E9 | Kein-Treffer-Hinweis bei leerem Ergebnis | Alle Quellen abwählen | Hinweistext erscheint, kein leerer Hauptbereich | FAIL |
| E10 | Keine Hardcoded-Daten | Code auf hardcodierte Cluster-Namen prüfen | Cluster-Inhalte werden aus `data/clusters.md` gelesen | FAIL |
