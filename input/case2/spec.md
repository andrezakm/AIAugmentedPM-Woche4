# Spec: Feature Backlog Prioritizer

**Datum:** 2026-06-09
**Basis:** input/case2/brief.md

---

## Zweck

Eine lokale Visualisierungs-App für das NeoEmployee Pattern-Team, die Feature-Ideen aus einer CSV-Datei nach einem gewichteten Score berechnet, darstellt und filterbar macht — damit Priorisierungsentscheidungen nachvollziehbar und teilbar werden.

---

## Nutzer

- NeoEmployee Pattern-Team (2 Personen) — primär
- Geschäftsführung — gelegentlich, als Empfänger der Priorisierungsübersicht

---

## Daten-Input

Datei: `input/case2/data/backlog.csv`

Spalten:
- `id` — numerische ID
- `feature` — Name des Features
- `beschreibung` — Kurzbeschreibung
- `kundenwunsche` — Zahl 1–10 (Kundenwunsch-Stärke)
- `strategischer_fit` — Text: `hoch`, `mittel`, `niedrig`
- `aufwand` — T-Shirt-Größe: `S`, `M`, `L`, `XL`
- `status` — Text: `idee`, `backlog`, `geplant`

---

## Score-Berechnung

Der Score wird aus den vorhandenen Feldern berechnet. Keine externen Gewichtungs-Konfiguration — feste Logik:

- `kundenwunsche` (1–10) fließt direkt ein
- `strategischer_fit` wird numerisch übersetzt: `hoch` = 3, `mittel` = 2, `niedrig` = 1
- `aufwand` wird als Divisor übersetzt: `S` = 1, `M` = 2, `L` = 3, `XL` = 4

**Formel:** `score = (kundenwunsche * strategischer_fit_zahl) / aufwand_zahl`

Der Score wird auf eine Nachkommastelle gerundet und als neue Spalte dargestellt.

---

## UI-Komponenten

### 1. Sidebar — Filter

- **Status-Filter:** Multiselect mit allen vorhandenen Status-Werten aus der CSV. Standard: alle ausgewählt.
- **Strategischer-Fit-Filter:** Multiselect mit `hoch`, `mittel`, `niedrig`. Standard: alle ausgewählt.
- **Zähler:** Anzeige „X von 12 Features sichtbar" unterhalb der Filter.

### 2. Hauptbereich — Feature-Tabelle

- Tabelle aller gefilterten Features, sortiert nach Score (absteigend, fest).
- Sichtbare Spalten: `feature`, `kundenwunsche`, `strategischer_fit`, `aufwand`, `status`, `score`.
- `beschreibung` wird nicht in der Tabelle angezeigt.
- Score-Spalte ist die erste Zahlenspalte nach dem Feature-Namen.

### 3. Hauptbereich — Score-Balkendiagramm

- Balkendiagramm unterhalb der Tabelle.
- X-Achse: Feature-Name. Y-Achse: Score.
- Dieselbe Reihenfolge wie die Tabelle (absteigend nach Score).
- Nur gefilterte Features werden dargestellt.

### 4. Hauptbereich — Detail-Ansicht

- Wenn ein Feature aus einer Selectbox (oberhalb der Tabelle) ausgewählt wird, erscheint ein Bereich unterhalb des Diagramms.
- Zeigt: Feature-Name, Beschreibung, alle Rohwerte, berechneter Score.
- Standardmäßig kein Feature ausgewählt — der Bereich ist leer / nicht sichtbar.

---

## Constraints

- Keine Bearbeitung von Daten in der App — CSV wird extern gepflegt, Werte landen in `data.js`.
- Kein User-Management, kein Login.
- Kein Backend, kein Server, keine Datenbank.
- Eine `app.html` + `data.js` in `prototype/case2/` — öffnet per Doppelklick im Browser (`file://`).
- Keine Persistenz — jeder Doppelklick lädt frisch aus `data.js`.
