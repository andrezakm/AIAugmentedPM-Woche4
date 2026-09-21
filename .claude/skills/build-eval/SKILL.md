---
name: build-eval
description: Orchestriert Spec, Eval und Prototyp in einem Lauf aus einem Brief — wenn alle drei Artefakte in einem Schritt aus einem Feature-Brief erzeugt werden sollen.
allowed-tools: Read, Write, Glob
---

# Orchestrator: Spec, Eval & Prototyp bauen

Führe die folgenden drei Schritte sequenziell aus. Schreibe alle drei Dateien wirklich — kein Code nur als Text.

## Vorbereitung

Bestimme den Case aus dem übergebenen Pfad (z.B. "case2" aus `input/case2/brief.md`).
Prüfe mit Glob welche Dateien in `input/[case]/data/` liegen. Wenn keine: stoppe und melde den Fehler.

## Schritt 1: Spec → `input/[case]/spec.md`

Prüfe mit Glob ob `input/[case]/spec.md` bereits existiert.
- **Existiert:** Lies die Datei und melde "spec.md gefunden — wird verwendet." Kein Neuschreiben.
- **Existiert nicht:** Lies Brief und alle Datendateien. Schreibe `input/[case]/spec.md` mit: **Zweck**, **Nutzer**, **Daten-Input**, **UI-Komponenten** (nummeriert), **Constraints**. Was, nicht Wie. Keine Implementierungsdetails.

Verifiziere mit Glob, bevor du weitermachst.

## Schritt 2: Eval → `input/[case]/eval.md`

Prüfe mit Glob ob `input/[case]/eval.md` bereits existiert.
- **Existiert:** Lies die Datei und melde "eval.md gefunden — wird verwendet." Kein Neuschreiben.
- **Existiert nicht:** Lies `input/[case]/spec.md`. Schreibe `input/[case]/eval.md` als Tabelle mit 8–12 Kriterien:

| ID | Kriterium | Wie testen | Pass-Bedingung | Ergebnis |
|----|-----------|------------|----------------|----------|

Jedes Kriterium eindeutig pass/fail entscheidbar. Ergebnis-Spalte wird mit FAIL vorbelegt — nichts gilt als bestanden, bis es geprüft ist.

Verifiziere mit Glob, bevor du weitermachst.

## Schritt 3: Prototyp → `prototype/[case]/app.html` + `prototype/[case]/data.js`

Lies `input/[case]/spec.md` und die Datendateien in `input/[case]/data/`. Schreibe:
- `prototype/[case]/data.js` — übersetzt die Rohdaten in `window.DATA = { ... }`
- `prototype/[case]/app.html` — EINE Datei, `<style>` und `<script>` inline, lädt `data.js` per `<script src="data.js"></script>` und liest dann `window.DATA`. Kein `fetch`, kein Netzwerk, kein Server.

Anforderungen:
- Echte Daten aus `data.js`, kein Hardcoding in `app.html`
- Beim Übersetzen einer CSV: Felder können in Anführungszeichen stehen und Kommas enthalten (bei `backlog.csv` betrifft das die meisten Zeilen). Nicht naiv am Komma trennen
- Alle UI-Komponenten der Spec implementiert
- Sonderfälle behandelt
- Öffnet per Doppelklick im Browser (`file://`), keine externen Abhängigkeiten (kein CDN, kein npm)
- Enthält den Vorschau-Fallback aus dem prototype-builder: Fehlt `window.DATA`, erscheint eine Anleitung („Öffne app.html per Doppelklick im Finder"), keine Fehlermeldung

Verifiziere mit Glob.

## Abschluss

Alle Dateien vorhanden (`spec.md`, `eval.md`, `app.html`, `data.js`)? Dann:
- Pfade ausgeben
- Hinweis: `prototype/[case]/app.html` per Doppelklick im Browser öffnen
- "Jetzt bist du dran — öffne die eval.md und gehe jeden Punkt manuell durch, bevor du den eval-runner startest."
