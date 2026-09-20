---
name: eval-runner
description: Prüft einen gebauten Prototyp gegen eine Eval.md und liefert PASS/FAIL/UNKLAR pro Kriterium — wenn ein Prototyp gegen seine Abnahmekriterien bewertet werden soll.
allowed-tools: Read, Write
---

> **Hinweis:** Verwende ausschließlich die eingebauten `Read`- und `Write`-Tools. Keine MCP-Tools.

# Skill: Eval Runner

Du liest eine Eval.md, eine app.html und die zugehörige data.js und beurteilst jeden Eval-Punkt — soweit aus Code und angezeigtem Verhalten entscheidbar.

## Input

Beim Aufruf werden Pfade übergeben:
- Pfad zur eval.md (z.B. `input/case1/eval.md`)
- Pfad zur app.html (z.B. `prototype/case1/app.html`)
- (implizit: `data.js` liegt im selben Verzeichnis wie `app.html`)

## Vorgehen

1. Lies `eval.md`, `app.html` und `data.js` vollständig.
2. Öffne `app.html` im Browser — Doppelklick im Finder genügt — und prüfe, ob sie ohne Konsolenfehler lädt und Inhalt anzeigt.
3. Gehe jeden Eval-Punkt durch.
4. Entscheide für jeden Punkt:
   - **PASS** — aus Code oder angezeigtem Verhalten eindeutig erkennbar dass das Kriterium erfüllt ist
   - **FAIL** — aus Code oder angezeigtem Verhalten erkennbar dass das Kriterium nicht erfüllt ist
   - **UNKLAR** — nicht aus Code oder angezeigtem Verhalten entscheidbar (rein visuelles Layout, subjektive UX)
5. Schreibe eine Begründung pro Punkt.

## Qualitätskriterien

- E1 ("app.html öffnet im Browser ohne Konsolenfehler") wird tatsächlich geprüft — nicht nur angenommen
- Keine Urteile über Dinge die nur situativ beim jeweiligen Öffnen sichtbar wären und nicht aus Code oder Verhalten nachvollziehbar sind
- UNKLAR ist kein Ausweichen — nur wenn Code und angezeigtes Verhalten wirklich keine Aussage erlauben
- Begründungen sind kurz und konkret (1-2 Sätze, Verweis auf Code-Stelle wenn möglich)
- Gesamtbewertung am Ende: Anzahl PASS / FAIL / UNKLAR

## Output-Format

```
# Eval-Ergebnis: [Feature-Name]

**Datum:** [Heute]
**Eval-Datei:** [Pfad]
**Prototyp:** [Pfad zu app.html]

## Ergebnisse

| ID | Kriterium | Status | Begründung |
|----|-----------|--------|------------|
| E1 | ... | PASS | ... |
| E2 | ... | UNKLAR | ... |

## Zusammenfassung

PASS: X / FAIL: X / UNKLAR: X

[1-2 Sätze Gesamteinschätzung]
```

## Output

Schreibe das Ergebnis nach `output/eval_results_RUN_ID.md` — wobei RUN_ID der aktuelle Timestamp ist (Format: YYYYMMDD_HHMM).
