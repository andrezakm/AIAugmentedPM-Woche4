---
allowed-tools: Read, Write, Glob
---

> **Hinweis:** Verwende ausschließlich die eingebauten `Read`-, `Write`- und `Glob`-Tools. Keine MCP-Tools.

# Referenz: Spec schreiben

## Was eine Spec ist

Eine Spec beschreibt **Was** gebaut wird — nicht Wie. Sie ist Input für den Prototype Builder und Grundlage für die Eval.

## Input

- `brief.md` im Case-Verzeichnis
- Alle Datendateien in `input/[case]/data/`

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

## Output

`input/[case]/spec.md` — im gleichen Verzeichnis wie die `brief.md`.
