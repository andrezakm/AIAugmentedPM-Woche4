---
allowed-tools: Read, Write, Glob
---

# Orchestrator: Spec, Eval & Prototyp bauen

Führe die folgenden drei Schritte sequenziell aus. Schreibe alle drei Dateien wirklich — kein Code nur als Text.

## Vorbereitung

Bestimme den Case aus dem übergebenen Pfad (z.B. "case2" aus `input/case2/brief.md`).
Prüfe mit Glob welche Dateien in `input/[case]/data/` liegen. Wenn keine: stoppe und melde den Fehler.

## Schritt 1: Spec → `input/[case]/spec.md`

Prüfe mit Glob ob `input/[case]/spec.md` bereits existiert.
- **Existiert:** Lies die Datei und melde "spec.md gefunden — wird verwendet." Kein Neuschreiben.
- **Existiert nicht:** Lies Brief und alle Datendateien. Schreibe `input/[case]/spec.md` mit: **Zweck**, **Nutzer**, **Daten-Input**, **UI-Komponenten** (nummeriert), **Constraints**. Was, nicht Wie. Keine Implementierungsdetails.

Verifiziere mit Glob, bevor du weitermachst.

## Schritt 2: Eval → `input/[case]/eval.md`

Prüfe mit Glob ob `input/[case]/eval.md` bereits existiert.
- **Existiert:** Lies die Datei und melde "eval.md gefunden — wird verwendet." Kein Neuschreiben.
- **Existiert nicht:** Lies `input/[case]/spec.md`. Schreibe `input/[case]/eval.md` als Tabelle mit 8–12 Kriterien:

| ID | Kriterium | Wie testen | Pass-Bedingung | Ergebnis |
|----|-----------|------------|----------------|----------|

Jedes Kriterium eindeutig pass/fail entscheidbar. Ergebnis-Spalte wird mit FAIL vorbelegt.

Verifiziere mit Glob, bevor du weitermachst.

## Schritt 3: Prototyp → `prototype/[case]/app.py`

Lies `input/[case]/spec.md`. Schreibe vollständige, lauffähige Streamlit-App:
- Echte Daten aus Datendatei, kein Hardcoding
- Alle UI-Komponenten der Spec implementiert
- Sonderfälle behandelt
- Startbar mit `streamlit run`
- Nur streamlit + pandas. Kein matplotlib, kein plotly, kein altair. Für Diagramme: `st.bar_chart`, `st.line_chart` etc.
- Kein `@st.cache_data` — CSV direkt mit `pd.read_csv()` laden.

Verifiziere mit Glob.

## Abschluss

Alle drei Dateien vorhanden? Dann:
- Pfade ausgeben
- `streamlit run prototype/[case]/app.py`
- "Jetzt bist du dran — öffne die eval.md und gehe jeden Punkt manuell durch, bevor du den eval-runner startest."
