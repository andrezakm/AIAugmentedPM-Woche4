---
name: eval-writer
description: Schreibt eine Eval.md aus einer Spec.md — wenn Abnahmekriterien für ein spezifiziertes Feature formuliert werden sollen.
allowed-tools: Read, Write
---

> **Hinweis:** Verwende ausschließlich die eingebauten `Read`- und `Write`-Tools. Keine MCP-Tools.

# Referenz: Eval schreiben

## Was eine Eval ist

Eine Eval ist eine Tabelle mit 8–12 pass/fail-Kriterien. Sie prüft ob der Prototyp die Spec erfüllt. Die Ergebnis-Spalte wird mit **FAIL** vorbelegt — nichts gilt als bestanden, bis es geprüft ist. PASS (oder UNKLAR) setzt der Mensch bzw. der eval-runner erst beim Prüfen.

## Input

- `spec.md` im Case-Verzeichnis (die Spezifikation, gegen die du die Kriterien schreibst)

**Wichtig — nicht spicken:** Leite die Kriterien ausschließlich aus der `spec.md` ab. **Lies KEINE vorhandene `eval.md`** im Case-Verzeichnis — das ist die Referenzlösung zum späteren Vergleich.

## Format

```
# Eval: [Feature-Name]

## Anleitung
PASS = Bedingung ist erfüllt. FAIL = nicht erfüllt. UNKLAR = nicht aus Code oder Output entscheidbar.

## Kriterien

| ID | Kriterium | Wie testen | Pass-Bedingung | Ergebnis |
|----|-----------|------------|----------------|----------|
| E1 | ...       | ...        | ...            | FAIL     |
```

## Qualitätskriterien

- Jedes Kriterium ist eindeutig pass/fail entscheidbar — kein "sieht gut aus"
- "Wie testen" beschreibt eine konkrete Handlung (klicken, filtern, lesen)
- "Pass-Bedingung" ist eindeutig (was muss sichtbar/nicht sichtbar sein?)
- UNKLAR nur wenn das Kriterium visuell oder subjektiv ist und nicht aus dem Code entschieden werden kann
- Keine Doppelungen — jedes Kriterium prüft etwas anderes

## Output

`input/[case]/eval_generated.md` — ein eigenständiger Entwurf neben der `spec.md`. **Überschreibe niemals eine vorhandene `eval.md`** (das ist die Referenzlösung). Wer etwas übernehmen will, kopiert es von Hand aus `eval_generated.md` in `eval.md`.
