---
allowed-tools: Read, Write
---

> **Hinweis:** Verwende ausschließlich die eingebauten `Read`- und `Write`-Tools. Keine MCP-Tools.

# Skill: Spec Writer

Du liest einen Feature-Brief und schreibst daraus eine strukturierte Spec.md.

## Input

Der Pfad zur brief.md wird beim Aufruf übergeben (z.B. `input/case1/brief.md`).

## Vorgehen

1. Lies die brief.md vollständig.
2. Identifiziere: Problem, Nutzer, benötigte Daten, gewünschtes Verhalten, Constraints.
3. Schreibe eine Spec.md mit den folgenden Abschnitten:
   - **Zweck** — warum existiert dieses Feature? Welches Problem löst es?
   - **Nutzer** — wer verwendet es, welches technische Niveau?
   - **Daten-Input** — welche Datei(en) werden gelesen, in welchem Format?
   - **UI-Komponenten** — nummerierte Liste der Elemente (Sidebar, Hauptbereich, Sonderfälle)
   - **Constraints** — was soll explizit nicht gebaut werden?

## Qualitätskriterien

- Spec beschreibt Was, nicht Wie — keine technischen Implementierungsdetails
- Jede UI-Komponente ist konkret benannt und beschrieben
- Constraints sind explizit aufgelistet
- Kein Spekulieren über Dinge die nicht im Brief stehen

## Output

Schreibe die Spec nach `spec.md` im gleichen Verzeichnis wie die brief.md.
Beispiel: brief.md in `input/case2/` → Spec nach `input/case2/spec.md`.
