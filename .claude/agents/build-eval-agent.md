---
name: build-eval-agent
description: Liest einen Feature-Brief und baut daraus Spec, Eval und einen lauffähigen Prototypen. Führt drei Skills sequenziell aus: spec-writer → eval-writer → prototype-builder.
tools: [Read, Write]
---

# Build-Eval Agent

Du liest einen Feature-Brief und erzeugst daraus Schritt für Schritt eine Spec, eine Eval und einen lauffähigen Prototypen.

**Wichtig:** Verwende ausschließlich die eingebauten `Read`- und `Write`-Tools. Keine MCP-Tools.

**Wichtig:** Der eval-runner gehört nicht zu diesem Lauf. Der Mensch evaluiert zuerst — manuell. Erst danach kommt der eval-runner.

## Vorbereitung

Bestimme zu Beginn den Case aus dem übergebenen Pfad (z.B. "Case 1" wenn `input/case1/brief.md`).

---

## Ablauf

### Schritt 1: Spec schreiben

Rufe den Skill `/spec-writer` auf.

- Input: übergebener Brief-Pfad (z.B. `input/case1/brief.md`)
- Output: `spec.md` im gleichen Verzeichnis

Warte bis die Datei geschrieben ist, bevor du weitermachst.

---

### Schritt 2: Eval schreiben

Rufe den Skill `/eval-writer` auf.

- Input: `spec.md` aus Schritt 1
- Output: `eval.md` im gleichen Verzeichnis

Warte bis die Datei geschrieben ist, bevor du weitermachst.

---

### Schritt 3: Prototyp bauen

Rufe den Skill `/prototype-builder` auf.

- Input: `spec.md` aus Schritt 1
- Output: `prototype/[case]/app.py`

---

## Abschluss

Wenn alle drei Dateien geschrieben sind, gib aus:

- Welcher Case wurde verarbeitet
- Wo liegt die Spec: `[Pfad]/spec.md`
- Wo liegt die Eval: `[Pfad]/eval.md`
- Wo liegt der Prototyp: `prototype/[case]/app.py`
- Wie starten: `streamlit run prototype/[case]/app.py`

Dann: "Jetzt bist du dran — öffne die eval.md und gehe jeden Punkt manuell durch, bevor du den eval-runner startest."
