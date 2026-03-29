# Kursumgebung: AI-Augmented PM — Woche 4

## Wer wir sind

NeoEmployee baut custom AI Agenten, die Mitarbeiterfähigkeiten in Unternehmen ersetzen. Wir arbeiten als Beratung auf Time-&-Material-Basis. Wir sind bootstrapped — Revenue ist Runway. Unser langfristiges Ziel sind produktisierbare Agenten, die branchenübergreifend einsetzbar sind. Details in `context/company.md` und `context/strategy.md`.

## Pfadkonventionen

- Kontext-Dateien liegen in `context/`
- Feature-Briefs, Specs und Evals liegen in `input/caseN/`
- Rohdaten liegen in `input/caseN/data/`
- Generierte Prototypen landen in `prototype/caseN/`
- Eval-Ergebnisse landen in `output/`
- Skills liegen in `.claude/skills/`, Agents in `.claude/agents/`

## Qualitätsstandard

**Für Specs:** Beschreibe Was, nicht Wie. Keine Implementierungsdetails. Jede UI-Komponente ist konkret benannt.

**Für Evals:** Nur messbare Kriterien. Jeder Punkt ist eindeutig pass/fail entscheidbar. UNKLAR wenn nicht aus Code oder Output entscheidbar.

**Für Prototypen:** Lauffähig mit `streamlit run`. Keine Placeholder. Daten aus Datei, nicht hardcoded.

## Kurs starten

Sobald der Nutzer "starte den Kurs", "los geht's", "weiter" oder ähnliches sagt — führe `/kurs` aus. Starte ohne Vorrede.
