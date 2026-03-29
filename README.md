# Woche 4: Spec, Eval & Prototyp

In dieser Woche lernst du den PM-Kernskill: ein Feature spezifizieren, Abnahmekriterien definieren und einen funktionalen Prototypen bauen — und evaluieren. Du lernst außerdem, einem autonomen System schrittweise mehr Kontrolle zu übergeben.

## Voraussetzungen

- Claude Code installiert (`npm install -g @anthropic-ai/claude-code`)
- Claude über Anthropic-Login authentifiziert
- Python 3.8+ installiert
- Streamlit installiert: `pip install streamlit`

## Installation

1. Dieses Repository klonen oder als ZIP herunterladen
2. In das Verzeichnis wechseln: `cd Woche4SpecEval/`
3. Claude Code starten: `claude`

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
| `.claude/agents/build-eval-agent.md` | Orchestriert spec-writer → eval-writer → prototype-builder |
| `context/` | NeoEmployee-Kontext (company.md, strategy.md) |
| `input/case1/` | Feedback Cluster Viewer — alles vorgegeben |
| `input/case2/` | Feature Backlog Prioritizer — Brief + Daten vorgegeben |
| `prototype/` | Generierte Streamlit-Apps |
| `output/` | Eval-Ergebnisse (entstehen beim Ausführen) |
| `doc/` | Zusatzmaterial |

## Modell-Empfehlung

Verwende **Claude Sonnet** oder **Claude Opus**. Der build-eval-agent führt drei Skills sequenziell aus — ein stärkeres Modell liefert präzisere Specs und lauffähigeren Code.
