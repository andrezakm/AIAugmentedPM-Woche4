# Spec: Feedback Cluster Viewer

**Version:** 1.0
**Datum:** März 2026
**Basis:** input/case1/brief.md

---

## Zweck

NeoEmployee PMs sollen nach einem pattern-agent-Run die identifizierten Feedback-Cluster schnell sichten und nach Quelle filtern können — ohne eine Markdown-Datei manuell zu lesen.

## Nutzer

NeoEmployee PMs und Berater, 1–2 Personen, nach einem Analyse-Run. Technisches Niveau: mittel — können einen Terminalbefehl ausführen, keine Programmierkenntnisse nötig.

## Daten-Input

- Datei: `input/case1/data/clusters.md`
- Format: Markdown mit Struktur aus dem Woche-3-pattern-agent
- Cluster-Struktur: `## Cluster N: [Name]`, darunter Häufigkeit, Zusammenfassung, Belege mit Quellenangabe
- Quellen-Tags in Belegen: slack, email, interview, internal (aus Dateiname oder Absender erkennbar)

## UI-Komponenten

**1. Seitenleiste (Sidebar)**
- Überschrift: "Filter"
- Multiselect: "Nach Quelle filtern" — Optionen: Slack, E-Mail, Interview, Intern, (Alle)
- Standardmäßig: alle Quellen ausgewählt (= alles sichtbar)
- Anzeige: Anzahl sichtbarer Cluster ("3 von 4 Clustern")

**2. Hauptbereich — Clusterkarten**
- Eine Karte pro Cluster
- Karte zeigt: Cluster-Name (als Überschrift), Häufigkeit, Zusammenfassung
- Unter jeder Karte: aufklappbarer Bereich "Belege" mit allen Zitaten und Quellenangaben
- Reihenfolge: wie in der Datei (Cluster 1 zuerst)

**3. Sonderfall: kein Treffer**
- Wenn Filter keine Cluster ergibt: Hinweistext "Keine Cluster für die gewählten Quellen."

## Constraints

- Kein Backend, keine Datenbank, keine API
- Start: `streamlit run prototype/case1/app.py`
- Läuft lokal im Browser (localhost)
- Kein Login, keine Authentifizierung
- Kein Schreiben von Daten — nur Lesen
- Kompatibel mit Python 3.8+, streamlit >= 1.0
