# Woche 4: Spec, Eval & Prototyp

In dieser Woche lernst du den PM-Kernskill: ein Feature spezifizieren, Abnahmekriterien definieren und einen funktionalen Prototypen bauen — und evaluieren. Du lernst außerdem, einem autonomen System schrittweise mehr Kontrolle zu übergeben.

## Voraussetzungen

- Claude Code installiert (`npm install -g @anthropic-ai/claude-code`)
- Claude über Anthropic-Login authentifiziert
- Python 3.8+ installiert
- Streamlit installiert (siehe unten)

## Installation

1. Dieses Repository klonen oder als ZIP herunterladen
2. In das Verzeichnis wechseln: `cd Woche4SpecEval/`
3. Streamlit installieren:
   ```
   python -m venv .venv && source .venv/bin/activate && pip install streamlit pandas
   ```
4. Claude Code starten: `claude`

> **Hinweis:** Alle `streamlit run`-Befehle im aktivierten venv ausführen (`source .venv/bin/activate`). Test: `streamlit hello`

## Kurs starten

```
/kurs
```

Oder einfach sagen: "starte den Kurs"

## Dateistruktur

| Pfad | Rolle |
|------|-------|
| `CLAUDE.md` | Projekt-Prinzipien, immer aktiv |
| `.claude/skills/kurs/` | Interaktiver Kurspfad (`/kurs`) |
| `.claude/skills/spec-writer/` | Schreibt Spec aus Brief |
| `.claude/skills/eval-writer/` | Schreibt Eval aus Spec |
| `.claude/skills/prototype-builder/` | Baut Streamlit-App aus Spec |
| `.claude/skills/eval-runner/` | Prüft App gegen Eval-Kriterien |
| `.claude/skills/build-eval/` | Orchestriert Spec → Eval → Prototyp als `/build-eval` |
| `context/` | NeoEmployee-Kontext (company.md, strategy.md) |
| `input/case1/` | Feedback Cluster Viewer — alles vorgegeben |
| `input/case2/` | Feature Backlog Prioritizer — Brief + Daten vorgegeben |
| `prototype/` | Generierte Streamlit-Apps |
| `output/` | Eval-Ergebnisse (entstehen beim Ausführen) |
| `doc/` | Zusatzmaterial |

## Modell-Empfehlung

Verwende **Claude Sonnet** oder **Claude Opus**. `/build-eval` führt drei Schritte sequenziell aus — ein stärkeres Modell liefert präzisere Specs und lauffähigeren Code.
