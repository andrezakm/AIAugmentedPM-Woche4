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
- Format: Markdown mit Struktur aus dem pattern-agent
- Cluster-Struktur: `## Cluster N: [Name]`, darunter Häufigkeit, Zusammenfassung, Belege mit Quellenangabe
- Quellen-Tags in Belegen: slack, email, interview, internal (aus Absender oder Dateiname erkennbar)

## UI-Komponenten

**1. Seitenleiste (Sidebar)**
- Multiselect: "Nach Quelle filtern" — Optionen: Slack, E-Mail, Interview, Intern
- Standardmäßig: alle Quellen ausgewählt
- Anzeige: Anzahl sichtbarer Cluster ("X von Y Clustern")

**2. Hauptbereich — Clusterkarten**
- Eine Karte pro Cluster
- Karte zeigt: Cluster-Name (Überschrift), Häufigkeit, Zusammenfassung
- Unter jeder Karte: aufklappbarer Bereich "Belege" mit Zitaten und Quellenangaben
- Reihenfolge: wie in der Datei

**3. Sonderfall: kein Treffer**
- Wenn Filter keine Cluster ergibt: Hinweistext "Keine Cluster für die gewählten Quellen."

## Constraints

- Kein Backend, keine Datenbank, keine API
- Start: `streamlit run prototype/case1/app.py`
- Läuft lokal im Browser (localhost)
- Kein Login, keine Authentifizierung
- Kein Schreiben von Daten — nur Lesen
