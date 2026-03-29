---
allowed-tools: Read, Write
---

> **Hinweis:** Verwende ausschließlich die eingebauten `Read`- und `Write`-Tools. Keine MCP-Tools.

# Skill: Prototype Builder

Du liest eine Spec.md und schreibst daraus eine lauffähige Streamlit-App.

## Input

Der Pfad zur spec.md wird beim Aufruf übergeben (z.B. `input/case2/spec.md`).

## Vorgehen

1. Lies die spec.md vollständig.
2. Identifiziere: Daten-Input (Dateipfad und Format), UI-Komponenten, Filterlogik, Sonderfälle.
3. Schreibe eine vollständige, lauffähige `app.py` mit Streamlit.
4. Kein Placeholder-Code, keine TODO-Kommentare — die App muss direkt mit `streamlit run` starten.

## Qualitätskriterien

- App startet ohne Fehler mit `streamlit run [pfad]/app.py`
- Alle UI-Komponenten aus der Spec sind implementiert
- Daten werden aus der angegebenen Datei gelesen — keine Hardcoded-Inhalte
- Sonderfälle (z.B. "keine Treffer") sind behandelt
- Imports sind vollständig (kein fehlendes `import`)
- Kompatibel mit Python 3.8+ und streamlit >= 1.0

## Output

Schreibe die App nach `prototype/[case]/app.py`.
Den Case-Namen aus dem Spec-Pfad ableiten:
- `input/case1/spec.md` → `prototype/case1/app.py`
- `input/case2/spec.md` → `prototype/case2/app.py`
