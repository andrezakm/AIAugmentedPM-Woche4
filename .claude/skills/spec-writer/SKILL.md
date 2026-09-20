---
name: spec-writer
description: Schreibt eine Spec.md aus einem Brief — wenn ein Feature aus einem Brief heraus spezifiziert werden soll, bevor Eval oder Prototyp entstehen.
allowed-tools: Read, Write, Glob
---

> **Hinweis:** Verwende ausschließlich die eingebauten `Read`-, `Write`- und `Glob`-Tools. Keine MCP-Tools.

# Referenz: Spec schreiben

## Was eine Spec ist

Eine Spec beschreibt **Was** gebaut wird — nicht Wie. Sie ist Input für den Prototype Builder und Grundlage für die Eval.

## Input

- `brief.md` im Case-Verzeichnis
- Alle Datendateien in `input/[case]/data/`

**Wichtig — nicht spicken:** Leite die Spec ausschließlich aus `brief.md` und den Datendateien ab. **Lies KEINE vorhandene `spec.md` oder `eval.md`** im Case-Verzeichnis — das ist die Referenzlösung zum späteren Vergleich. Öffne sie nicht und beziehe dich nicht darauf. Bist du unsicher, was gebaut werden soll, halte dich an den Brief, nicht an eine vorhandene Lösung.

## Struktur einer Spec

```
# Spec: [Feature-Name]

## Zweck
Warum existiert dieses Feature? Welches Problem löst es?

## Nutzer
Wer verwendet es, welches technische Niveau?

## Daten-Input
Welche Datei(en) werden gelesen, in welchem Format?

## UI-Komponenten
1. [Komponente] — [Beschreibung]
2. ...

## Constraints
- Was wird explizit nicht gebaut
```

## Qualitätskriterien

- Beschreibt Was, nicht Wie — keine Implementierungsdetails
- Jede UI-Komponente ist konkret benannt und beschrieben
- Daten-Input benennt konkrete Felder aus den echten Datendateien
- Constraints sind explizit aufgelistet
- Kein Spekulieren über Dinge die nicht im Brief stehen
- Nur aus dem Brief und den Daten abgeleitet — nicht aus einer vorhandenen `spec.md` abgeschrieben

## Output

`input/[case]/spec_generated.md` — ein eigenständiger Entwurf neben der `brief.md`. **Überschreibe niemals eine vorhandene `spec.md`** (das ist die Referenzlösung). Wer etwas übernehmen will, kopiert es von Hand aus `spec_generated.md` in `spec.md`.
