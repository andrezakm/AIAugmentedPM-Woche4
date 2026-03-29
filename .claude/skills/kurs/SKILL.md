---
disable-model-invocation: true
---

# Kurs: Woche 4 — Spec, Eval & Prototyp

Willkommen in Woche 4. Du lernst heute den PM-Kernskill: ein Feature spezifizieren, Abnahmekriterien definieren, einen Prototypen bauen — und ihn evaluieren. Der Kurs hat 10 Schritte. Du navigierst mit "weiter" (nächster Schritt) oder "Schritt X" (direkt springen).

Dieses mal gibt es zwei Durchläufe:
- **Durchlauf 1 (jetzt)**: geführt, mit Reflexionsfragen. Du schaust zu, prüfst, verstehst.
- **Durchlauf 2 (danach)**: kein Kurs, kein Guide. Du machst so wie du denkst.

---

## Schritt 1: Einführung — Spec, Eval und das Ecosystem

In Woche 3 hast du gelernt: CLAUDE.md, Skills, Agents. Heute kommen zwei neue Konzepte dazu — aber sie sind keine neuen Werkzeuge. Sie sind **Input-Dateien für Skills**.

| Datei | Was es ist | Wer schreibt es | Wer liest es |
|-------|-----------|-----------------|--------------|
| `brief.md` | Feature-Idee, 1 Pager | PM | spec-writer |
| `spec.md` | Was gebaut wird | PM (oder spec-writer) | prototype-builder |
| `eval.md` | Wann es gut ist | PM (oder eval-writer) | eval-runner + Mensch |
| `app.py` | Der Prototyp | prototype-builder | Mensch + eval-runner |

Der Workflow in einem Satz: Brief schreiben → Agent baut Spec, Eval, Prototyp → Mensch prüft manuell → Agent prüft automatisch → Mensch vergleicht.

**Reflexion:** Was prüfst du normalerweise bevor du etwas "annimmst" — einen Bericht, einen Vorschlag, ein Ergebnis? Wann vertraust du, wann schaust du nach?

Sag "weiter" für Schritt 2.

---

## Schritt 2: Brief lesen (Case 1)

Öffne und lies: `input/case1/brief.md`

Das ist der Ausgangspunkt. Ein PM hat beschrieben was er braucht — ohne zu sagen wie es gebaut werden soll.

Fragen beim Lesen:
- Was ist das eigentliche Problem?
- Für wen wird das gebaut?
- Was ist explizit ausgeschlossen?

**Reflexion:** Würdest du diesen Brief so an ein Entwicklerteam schicken? Was würde fehlen — und was ist vielleicht sogar zu viel?

Sag "weiter" für Schritt 3.

---

## Schritt 3: Spec und Eval lesen (Case 1)

Öffne und lies:
- `input/case1/spec.md` — Was wird gebaut?
- `input/case1/eval.md` — Wann ist es gut genug?

Vergleiche Spec mit Brief:
- Was hat die Spec aus dem Brief gemacht?
- Was wurde konkretisiert? Was wurde weggelassen?

Vergleiche Eval mit Spec:
- Sind alle Spec-Punkte in der Eval abgedeckt?
- Welche Kriterien sind eindeutig pass/fail? Welche könnten "UNKLAR" werden?

**Reflexion:** Hättest du die Spec aus dem Brief so abgeleitet? Welchen Punkt hättest du anders formuliert?

Sag "weiter" für Schritt 4.

---

## Schritt 4: spec-writer ausführen

Jetzt führst du den spec-writer selbst aus — auf demselben Brief:

> "Führe /spec-writer aus für input/case1/brief.md"

Der Agent schreibt eine neue Spec. Vergleiche sie mit der vorhandenen `input/case1/spec.md`.

- Was ist gleich?
- Was ist anders?
- Welche Version ist besser — und warum?

**Reflexion:** Würdest du die generierte Spec ohne Änderung nehmen? Wenn nein — was würdest du ändern? Wenn ja — was sagt das darüber aus wie du deine Zeit einsetzen willst?

Sag "weiter" für Schritt 5.

---

## Schritt 5: eval-writer ausführen

> "Führe /eval-writer aus für input/case1/spec.md"

Vergleiche mit der vorhandenen `input/case1/eval.md`.

- Welche Kriterien hat der Agent gefunden, die du übersehen hättest?
- Welche sind "UNKLAR"-Kandidaten — und warum?
- Sind alle Kriterien wirklich messbar?

**Reflexion:** Sind die Kriterien so formuliert, dass ein Fremder sie ohne Rückfragen anwenden kann?

Sag "weiter" für Schritt 6.

---

## Schritt 6: build-eval-agent starten (Case 1)

> "Starte den build-eval-agent für input/case1/brief.md"

Der Agent führt alle drei Schritte durch: spec-writer → eval-writer → prototype-builder.
Beobachte was passiert. Schau in die entstehenden Dateien.

Nach dem Lauf: `prototype/case1/app.py` liegt bereit.

**Reflexion:** In welchem der drei Schritte wärst du am ehesten reingegangen — und warum?

Sag "weiter" für Schritt 7.

---

## Schritt 7: Prototyp starten

```
streamlit run prototype/case1/app.py
```

Der Browser öffnet sich. Schau dir die App an. Klicke, filter, explore.

- Entspricht sie dem was du in der Spec gelesen hast?
- Was fällt im ersten Moment auf — positiv und negativ?
- Was fehlt? Was ist überraschend gut?

**Reflexion:** Was siehst du im ersten Moment? Würdest du diese App einem Kunden zeigen?

Sag "weiter" für Schritt 8.

---

## Schritt 8: Manuell evaluieren (Level 2)

Öffne `input/case1/eval.md`. Gehe jeden Punkt durch. Trage für dich ein: PASS, FAIL oder UNKLAR.

Notiere:
- Welche Kriterien waren eindeutig entscheidbar?
- Bei welchen hast du gezögert?
- Gibt es Punkte die in der Eval fehlen aber dir aufgefallen sind?

**Reflexion:** Wie lange hast du gebraucht? Welcher Punkt hat dich am meisten überrascht?

Sag "weiter" für Schritt 9.

---

## Schritt 9: eval-runner ausführen (Level 3)

> "Führe /eval-runner aus für input/case1/eval.md und prototype/case1/app.py"

Das Ergebnis landet in `output/eval_results_[TIMESTAMP].md`.

Vergleiche mit deiner manuellen Bewertung aus Schritt 8:
- Wo stimmt ihr überein?
- Wo weicht der Agent ab?
- Wo sagt er UNKLAR — hast du das auch so gesehen?
- Hat er etwas gesehen, was du übersehen hast?

**Das ist der psychologische Kern dieses Kurses.** Nicht die Technik — sondern die Frage: wem vertraust du, und wann?

**Reflexion:** Würdest du beim nächsten Mal die manuelle Prüfung weglassen und direkt dem eval-runner vertrauen? Was müsste passieren damit du das tust?

Sag "weiter" für Schritt 10.

---

## Schritt 10: Case 2 — selbst machen

Jetzt machst du Case 2 mit denselben Schritten — aber du führst sie selbst durch, ohne Erklärung.

1. Lies `input/case2/brief.md` und `input/case2/data/backlog.csv`
2. Starte den build-eval-agent: > "Starte den build-eval-agent für input/case2/brief.md"
3. Starte den Prototypen: `streamlit run prototype/case2/app.py`
4. Evaluiere manuell (eval.md)
5. Führe den eval-runner aus
6. Vergleiche

**Reflexion:** Was hättest du am Brief anders formuliert? Was hat der Agent besser gemacht als du erwartet hast?

---

**Durchlauf 1 abgeschlossen.**

Du hast jeden Schritt gesehen. Du weißt was passiert — und wo du eingreifen würdest.

Jetzt Durchlauf 2. Kein Kurs, kein Guide.

Starte neu mit: *"Starte build-eval-agent für input/case2/brief.md. Dann eval-runner. Ich will das Ergebnis."*

Lass laufen. Schau auf den Output. Urteile.

---

## Zusatzmaterial

- `doc/SpecEvalDoc.md` — Was ist eine Spec, was ist eine Eval, warum ist das der PM-Skill der Zukunft
