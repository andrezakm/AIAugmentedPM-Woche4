---
name: eval-runner
description: Prüft einen gebauten Prototyp gegen eine Eval.md und liefert PASS/FAIL/UNKLAR pro Kriterium — wenn ein Prototyp gegen seine Abnahmekriterien bewertet werden soll.
allowed-tools: Read, Write, Bash
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
2. **Prüfe, ob die Seite wirklich lädt.** Am zuverlässigsten mit Chrome im Headless-Modus gegen die `file://`-Adresse:

   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
     --headless=new --disable-gpu --dump-dom --virtual-time-budget=2000 \
     "file://$PWD/prototype/case1/app.html" > /tmp/dom.html
   ```

   Dann im Ergebnis nachsehen. Steht im Container echter Inhalt aus `data.js`, ist E1 erfüllt. Steht dort der Hinweis „Diese Ansicht zeigt die Seite ohne Daten", wurde `data.js` nicht geladen — bei einer echten `file://`-Adresse liegt das an den Dateien und nicht an der Umgebung, dann ist E1 FAIL.

   Ist kein Chrome vorhanden, beurteile E1 aus dem Code: Lädt `app.html` die `data.js` per Skript-Tag? Ist `data.js` valides JavaScript? Gibt es den Fallback? Schreib in die Begründung, auf welchem Weg du geprüft hast.

   **Kein gültiger Test ist ein eingebautes Vorschaufenster.** Dort liegt die Seite unter einer `data:`-Adresse, kann keine Nachbardateien laden und zeigt darum den Vorschau-Hinweis. Das prüft die Umgebung und nicht die App — in dem Fall **kein FAIL setzen**, sondern aus dem Code beurteilen und den Weg vermerken.
3. Gehe jeden Eval-Punkt durch.
4. Entscheide für jeden Punkt:
   - **PASS** — aus Code oder angezeigtem Verhalten eindeutig erkennbar dass das Kriterium erfüllt ist
   - **FAIL** — aus Code oder angezeigtem Verhalten erkennbar dass das Kriterium nicht erfüllt ist
   - **UNKLAR** — nicht aus Code oder angezeigtem Verhalten entscheidbar (rein visuelles Layout, subjektive UX)
5. Schreibe eine Begründung pro Punkt.

## Qualitätskriterien

- E1 ("app.html öffnet im Browser ohne Konsolenfehler") wird tatsächlich geprüft — nicht nur angenommen
- E1 wird nie aufgrund eines Vorschaufensters auf FAIL gesetzt; die Begründung sagt immer, wie geprüft wurde
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

Schreibe das Ergebnis nach `output/eval_results_RUN_ID.md` — wobei RUN_ID der aktuelle Timestamp ist (Format: YYYYMMDD_HHMM). Gibt es die Datei schon, weil in derselben Minute bereits ein Lauf stattfand, häng eine Laufnummer an: `output/eval_results_20260921_1430_2.md`. Nie eine vorhandene Ergebnisdatei überschreiben.
