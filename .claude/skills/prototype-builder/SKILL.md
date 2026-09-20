---
name: prototype-builder
description: Baut einen Zero-Install-HTML-Prototyp (app.html + data.js) aus einer Spec.md — wenn eine lauffähige Vorschau des spezifizierten Features gebraucht wird.
allowed-tools: Read, Write
---

> **Hinweis:** Verwende ausschließlich die eingebauten `Read`- und `Write`-Tools. Keine MCP-Tools.

# Referenz: Prototyp bauen

## Was ein Prototyp ist

Eine self-contained `app.html` mit `<style>` und `<script>` inline, die alle UI-Komponenten der Spec implementiert — plus eine `data.js`, die die Rohdaten als `window.DATA` bereitstellt. Kein Server, kein Python, kein Build-Schritt. Öffnet per Doppelklick im Browser (`file://`). Keine Placeholder, keine TODOs.

## Input

- `spec.md` im Case-Verzeichnis
- Datendateien in `input/[case]/data/`

## Der HTML-Vertrag

`prototype/[case]/data.js` übersetzt die Rohdaten aus `input/[case]/data/...` in ein JS-Objekt und setzt eine globale Variable:

```js
// data.js — Beispiel für case1
window.DATA = {
  clusters: [
    {
      name: "Onboarding-Lücke bei neuen Consultants",
      frequency: "4 von 4 analysierten Quellen",
      summary: "Neue Consultants brauchen 3–6 Wochen bis sie eigenständig arbeiten können.",
      evidence: [
        { text: "Der neue Kollege fragt mich täglich nach Dingen...", source: "Slack, @mira.k, 12. März" }
      ]
    }
  ]
};
```

`prototype/[case]/app.html` ist EINE Datei. Sie lädt zuerst `data.js` per Skript-Tag, dann liest sie `window.DATA`:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>...</title>
  <style>
    /* alles inline */
  </style>
</head>
<body>
  <div id="app"></div>
  <script src="data.js"></script>
  <script>
    // liest window.DATA, rendert die UI
  </script>
</body>
</html>
```

Kein `fetch`, kein Netzwerk-Request — der Browser blockiert `fetch()` auf lokale Dateien unter `file://`, ein `<script src="...">`-Tag dagegen nicht. Deshalb der Umweg über `data.js` statt einer JSON-Datei.

## Qualitätskriterien

- `app.html` öffnet per Doppelklick im Browser ohne Konsolenfehler
- Alle UI-Komponenten aus der Spec sind implementiert
- Daten kommen ausschließlich aus `data.js` (`window.DATA`) — keine hardcodierten Inhalte in `app.html`
- Sonderfälle behandelt (z.B. leerer Filter → Hinweis statt leere Ansicht)
- Kein Server, kein Backend, keine externen Abhängigkeiten (kein CDN, kein npm, kein Build-Schritt)
- `data.js` enthält valides JavaScript, das ohne Fehler ausgeführt wird

## Output

- `prototype/[case]/app.html`
- `prototype/[case]/data.js`

Case-Namen aus dem Spec-Pfad ableiten:
- `input/case1/spec.md` → `prototype/case1/app.html` + `prototype/case1/data.js`
- `input/case2/spec.md` → `prototype/case2/app.html` + `prototype/case2/data.js`
