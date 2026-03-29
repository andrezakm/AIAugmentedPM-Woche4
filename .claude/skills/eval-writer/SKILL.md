---
allowed-tools: Read, Write
---

> **Hinweis:** Verwende ausschließlich die eingebauten `Read`- und `Write`-Tools. Keine MCP-Tools.

# Skill: Eval Writer

Du liest eine Spec.md und schreibst daraus eine messbare Eval.md mit Abnahmekriterien.

## Input

Der Pfad zur spec.md wird beim Aufruf übergeben (z.B. `input/case1/spec.md`).

## Vorgehen

1. Lies die spec.md vollständig.
2. Identifiziere für jede beschriebene Funktion: Was genau passiert? Wie kann man es prüfen?
3. Schreibe 8–12 Kriterien als Tabelle.
4. Jedes Kriterium hat: ID, Beschreibung, Wie testen, Pass-Bedingung.

## Qualitätskriterien

- Jedes Kriterium ist pass/fail entscheidbar — kein "sieht gut aus" oder "fühlt sich richtig an"
- "Wie testen" beschreibt eine konkrete Handlung (klicken, ausführen, lesen)
- "Pass-Bedingung" ist eindeutig formuliert (was muss sichtbar/nicht sichtbar sein?)
- UNKLAR-Kandidaten werden als solche markiert wenn das Kriterium visuell/subjektiv ist
- Keine Doppelungen — jedes Kriterium prüft etwas anderes

## Output-Format

```
# Eval: [Feature-Name]

## Anleitung
[Kurze Erklärung PASS / FAIL / UNKLAR]

## Kriterien

| ID | Kriterium | Wie testen | Pass-Bedingung |
|----|-----------|------------|----------------|
| E1 | ... | ... | ... |
...
```

## Output

Schreibe die Eval nach `eval.md` im gleichen Verzeichnis wie die spec.md.
Beispiel: spec.md in `input/case2/` → Eval nach `input/case2/eval.md`.
