# Woche 4: Spec, Eval & Prototyp

In dieser Woche lernst du den PM-Kernskill: ein Feature spezifizieren, Abnahmekriterien definieren und einen funktionalen Prototypen bauen — und evaluieren. Du lernst außerdem, einem autonomen System schrittweise mehr Kontrolle zu übergeben.

## So startest du

Kein Python, kein Server, keine Installation. Der Prototyp entsteht als eine einzelne `app.html`, die du per Doppelklick im Browser öffnest.

1. Auf der Repo-Seite auf den grünen **Code**-Button, **Download ZIP**, entpacken
2. Den entstandenen Ordner in **Claude Code Desktop** öffnen — neue Session, Ordner auswählen
3. Kurs starten (siehe unten)

In Cursor oder im Terminal geht es genauso: Ordner öffnen, `claude` starten, Kurs starten.

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
| `.claude/skills/prototype-builder/` | Baut `app.html` + `data.js` aus Spec |
| `.claude/skills/eval-runner/` | Prüft die App gegen die Eval-Kriterien |
| `.claude/skills/build-eval/` | Orchestriert Spec → Eval → Prototyp als `/build-eval` |
| `context/` | NeoEmployee-Kontext (company.md, strategy.md) |
| `input/case1/` | Feedback Cluster Viewer — alles vorgegeben |
| `input/case2/` | Feature Backlog Prioritizer — Brief + Daten vorgegeben |
| `prototype/` | Generierte Prototypen (`app.html` + `data.js`) |
| `output/` | Eval-Ergebnisse (entstehen beim Ausführen) |
| `doc/` | Zusatzmaterial |

## Modell-Empfehlung

Verwende **Claude Sonnet** oder **Claude Opus**. `/build-eval` führt drei Schritte sequenziell aus — ein stärkeres Modell liefert präzisere Specs und lauffähigeren Code.

## Der Prototyp

Jeder Prototyp besteht aus zwei Dateien in `prototype/caseN/`:

- `app.html` — eine einzelne Datei, Style und Skript inline, keine externen Abhängigkeiten
- `data.js` — die Rohdaten als `window.DATA`

Der Umweg über `data.js` hat einen Grund: Der Browser blockiert `fetch()` auf lokale Dateien, ein `<script src="...">`-Tag dagegen nicht. Deshalb kein JSON, sondern eine JS-Datei.
