---
disable-model-invocation: true
---

# Kurs: Woche 4 — Spec, Eval & Prototyp

Willkommen in Woche 4. Du lernst heute den PM-Kernskill: ein Feature spezifizieren, Abnahmekriterien definieren, einen Prototypen bauen — und ihn evaluieren. Der Kurs hat 10 Schritte. Du navigierst mit "weiter" (nächster Schritt) oder "Schritt X" (direkt springen).

Dieses mal gibt es zwei Durchläufe:
- **Durchlauf 1 (jetzt)**: geführt, mit Reflexionsfragen. Du schaust zu, prüfst, verstehst.
- **Durchlauf 2 (danach)**: kein Kurs, kein Guide. Du machst so wie du denkst.

---

## Lernziele

Nach diesem Kurs kannst du:
- Einen Feature-Brief in eine Spec übersetzen (oder einen Agenten das tun lassen)
- Abnahmekriterien (Eval) formulieren, die eindeutig pass/fail entscheidbar sind
- Einen generierten Prototypen manuell und automatisch evaluieren
- Den Unterschied zwischen Brief-, Spec-, Eval- und Code-Fehlern erkennen
- Das Muster "Brief rein → Artefakte raus → Mensch prüft" auf eigene Agenten anwenden

**Was dieser Kurs nicht ist:** Eine Coding-Ausbildung. Du wirst Codezeilen sehen — das Ziel ist nicht, sie zu schreiben, sondern zu verstehen wo welcher Hebel sitzt. Debug-Momente kommen vor. Einmal anschauen, verstehen, weitermachen.

**Zeitplanung:**
- Schritte 1–9 (Case 1): ca. 45–60 Minuten — Kernkurs, sollte vollständig gemacht werden
- Schritt 10 (Case 2): advanced, ca. 30–45 Minuten extra — kann bei Zeitmangel auf einen späteren Termin verschoben oder ausgelassen werden

---

## Voraussetzungen

Streamlit muss installiert sein. Test:
```
streamlit hello
```

Falls nicht installiert oder Fehler:
```
python -m venv .venv && source .venv/bin/activate && pip install streamlit pandas
```

Danach alle `streamlit run`-Befehle im aktivierten venv ausführen.

---

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

Der Agent schreibt eine neue Spec nach `input/case1/spec_generated.md`. Vergleiche sie mit der vorhandenen `input/case1/spec.md`.

- Was ist gleich?
- Was ist anders?
- Welche Version ist besser — und warum?

> **Wenn du etwas aus der generierten Spec übernehmen willst:** Kopiere den betreffenden Abschnitt manuell in `spec.md`. Die `spec_generated.md` ist nur ein Entwurf — `spec.md` ist das, was der Prototyp-Builder liest.

**Reflexion:** Würdest du die generierte Spec ohne Änderung nehmen? Wenn nein — was würdest du ändern? Wenn ja — was sagt das darüber aus wie du deine Zeit einsetzen willst?

Sag "weiter" für Schritt 5.

---

## Schritt 5: eval-writer ausführen

> "Führe /eval-writer aus für input/case1/spec.md"

Der Agent schreibt eine neue Eval nach `input/case1/eval_generated.md`. Vergleiche sie mit der vorhandenen `input/case1/eval.md`.

- Welche Kriterien hat der Agent gefunden, die du übersehen hättest?
- Welche sind "UNKLAR"-Kandidaten — und warum?
- Sind alle Kriterien wirklich messbar?

> **Wenn du etwas aus der generierten Eval übernehmen willst:** Kopiere den betreffenden Punkt manuell in `eval.md`. Die `eval_generated.md` ist nur ein Entwurf — `eval.md` ist das, was der eval-runner liest.

**Reflexion:** Sind die Kriterien so formuliert, dass ein Fremder sie ohne Rückfragen anwenden kann?

Sag "weiter" für Schritt 6.

---

## Schritt 6: /build-eval ausführen (Case 1)

> "Führe /build-eval aus für input/case1/brief.md"

Der Skill führt alle drei Schritte durch: Spec → Eval → Prototyp.
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

**Wenn etwas nicht stimmt:**
1. Fehlermeldung im Terminal? → Zeig sie Claude: *"Ich bekomme diesen Fehler: [Fehler]"*
2. App läuft, aber zeigt falsches? → Notiere was du erwartet hast und was du siehst
3. Nicht sicher ob es ein Bug ist? → Prüfe zuerst die Spec — vielleicht ist es korrekt gebaut, aber falsch spezifiziert

Ziel: verstehen auf welcher Ebene das Problem liegt. Nicht tiefer gehen als nötig.

**Reflexion:** Was siehst du im ersten Moment? Würdest du diese App einem Kunden zeigen?

Sag "weiter" für Schritt 8.

---

## Schritt 8: Manuell evaluieren (Level 2)

Öffne `input/case1/eval.md`. Gehe jeden Punkt durch. Trage für dich ein: PASS, FAIL oder UNKLAR.

Notiere:
- Welche Kriterien waren eindeutig entscheidbar?
- Bei welchen hast du gezögert?
- Gibt es Punkte die in der Eval fehlen aber dir aufgefallen sind?

**Wenn ein Kriterium FAIL ist — Vorgehen:**
1. Ist die Pass-Bedingung eindeutig formuliert? → Wenn nein: Eval-Punkt korrigieren, nicht die App
2. Ist die App eindeutig falsch? → Claude fragen: *"E7 ist FAIL — [was du siehst]. Schau dir app.py an."*
3. Ist es ein visuelles Problem (Layout, Farbe)? → UNKLAR setzen, nicht FAIL — das kann der eval-runner nicht beurteilen
4. Ist der Fehler im Brief oder in der Spec entstanden? → Dort ansetzen, nicht im Code

Faustregel: Fix immer so früh wie möglich in der Kette — Brief → Spec → Eval → Code.

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

## Schritt 10: Case 2 — selbst machen *(advanced)*

> **Hinweis:** Dieser Schritt ist anspruchsvoller und braucht 30–45 Minuten extra. Wenn du nicht genug Zeit hast, kannst du hier aufhören — der Kernkurs ist abgeschlossen. Case 2 macht du dann separat, wenn du Zeit hast.

Jetzt machst du Case 2 mit denselben Schritten — aber du führst sie selbst durch, ohne Erklärung.

1. Lies `input/case2/brief.md` und `input/case2/data/backlog.csv`
2. Führe /build-eval aus: > "Führe /build-eval aus für input/case2/brief.md"
3. Starte den Prototypen: `streamlit run prototype/case2/app.py`
4. Evaluiere manuell (eval.md)
5. Führe den eval-runner aus
6. Vergleiche

**Reflexion:** Was hättest du am Brief anders formuliert? Was hat der Agent besser gemacht als du erwartet hast?

**Bonusfrage:** Stell dir vor, die App macht inhaltlich nicht das was du wolltest — nicht weil sie fehlerhaft ist, sondern weil die Spec es falsch beschrieben hat. Wo würdest du anfangen? Spec anpassen, eval-writer neu ausführen, prototype-builder neu? Was ist die kleinste Änderung mit der größten Wirkung?

> **Hinweis zum Debugging:** Wenn etwas nicht stimmt — in der App, in der Eval, im Code — schau kurz rein, versteh das Muster, und mach weiter. Du musst kein Coder werden. Der Punkt ist: du erkennst wo der Fehler liegt (Brief? Spec? Eval? Code?), und du weißt an welchem Hebel du ansetzt. Das ist der PM-Skill. Den Rest macht der Agent.

---

**Durchlauf 1 abgeschlossen.**

Du hast jeden Schritt gesehen. Du weißt was passiert — und wo du eingreifen würdest.

Jetzt Durchlauf 2. Kein Kurs, kein Guide.

Starte neu mit: *"Führe /build-eval aus für input/case2/brief.md. Dann /eval-runner. Ich will das Ergebnis."*

Lass laufen. Schau auf den Output. Urteile.

---

## Zusatzmaterial

- `doc/SpecEvalDoc.md` — Was ist eine Spec, was ist eine Eval, warum ist das der PM-Skill der Zukunft
