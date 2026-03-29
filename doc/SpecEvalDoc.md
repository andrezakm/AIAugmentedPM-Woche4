# Spec, Eval & Prototyp — der PM-Skill der Zukunft

Zusatzmaterial zu Woche 4 — AI-Augmented PM

---

## Was ist eine Spec.md?

Eine Spec beschreibt **was gebaut wird** — nicht wie. Sie ist das Dokument das zwischen "Idee" und "Umsetzung" steht.

Eine gute Spec beantwortet:
- Welches Problem wird gelöst? Für wen?
- Was sind die Daten-Inputs? In welchem Format?
- Welche UI-Komponenten gibt es? Was tun sie?
- Was ist explizit ausgeschlossen?

Eine schlechte Spec sagt: "Das System soll eine Datenbank verwenden und die Daten in React rendern." Das ist Wie, nicht Was.

**Faustformel:** Wenn ein Designer die Spec lesen und ein UI skizzieren kann — ohne Rückfragen — dann ist sie gut.

---

## Was ist eine Eval.md?

Eine Eval definiert **wann das Feature gut genug ist**. Sie ist die Operationalisierung der Spec als testbare Kriterien.

Jedes Kriterium hat:
- Eine Beschreibung (was wird geprüft?)
- Eine Testanleitung (wie konkret prüfen?)
- Eine Pass-Bedingung (was muss sichtbar/passieren?)

**Drei Statuse:**
- **PASS** — eindeutig erfüllt, nachweisbar
- **FAIL** — eindeutig nicht erfüllt
- **UNKLAR** — nicht aus Code oder Output entscheidbar (visuelles Layout, Gefühl, Laufzeitverhalten)

**Faustformel:** Wenn eine fremde Person die Eval lesen und ohne Rückfragen prüfen kann — dann ist sie gut.

---

## Wo leben Spec und Eval im Ecosystem?

Sie sind **Input-Dateien für Skills** — genauso wie `brief.md` oder `clusters.md`:

```
input/caseN/
  brief.md        ← Ausgangspunkt, PM schreibt
  spec.md         ← Input für prototype-builder
  eval.md         ← Input für eval-runner + Mensch
```

Der Unterschied zu anderen Input-Dateien: Spec und Eval sind normative Dokumente — sie beschreiben nicht was ist, sondern was sein soll.

---

## Level 2 vs. Level 3: wann prüfe ich, wann vertraue ich?

**Level 2 — prüfen:**
Du weißt noch nicht ob dem System zu vertrauen ist. Du prüfst jeden Schritt. Du liest die Spec, öffnest den Code, gehst die Eval-Kriterien manuell durch. Das kostet Zeit, gibt aber Sicherheit.

**Level 3 — vertrauen:**
Du hast genug Erfahrung mit dem System gesammelt. Du beurteilst am Output — nicht am Prozess. Läuft die App? Ist das Eval-Ergebnis plausibel? Dann weiter.

Der Übergang ist keine Entscheidung — er passiert durch Erfahrung. Du machst Level 2 so lange, bis Level 3 sich sicher anfühlt.

**Wichtig:** Level 3 bedeutet nicht blind vertrauen. Es bedeutet: du weißt was du prüfst und was du delegierst.

---

## Der Entstehungsweg

```
Idee
  ↓
Brief (simple .md — 1 Pager, Problem + Nutzer + Constraints)
  ↓
Spec (spec-writer oder manuell — Was wird gebaut?)
  ↓
Eval (eval-writer oder manuell — Wann ist es gut?)
  ↓
Prototyp (prototype-builder — lauffähige App)
  ↓
Manuelle Prüfung (Level 2)
  ↓
Automatische Prüfung (eval-runner — Level 3)
  ↓
Vergleich + Entscheidung: gut genug? Iteration? Weiterbauen?
```

---

## Verbindung zur PM-Praxis

Was hier "Spec.md" heißt, kennt die PM-Welt unter verschiedenen Namen:

| Name | Kontext | Ähnlichkeit |
|------|---------|-------------|
| RFC (Request for Comments) | Software-Entwicklung | Hoch — beschreibt was, diskutiert warum |
| PRFAQ | Amazon-Produktentwicklung | Mittel — beginnt beim Nutzer, endet bei Requirements |
| PRD (Product Requirements Document) | Klassisches PM | Hoch — strukturierter als brief.md, ähnlich wie spec.md |
| Acceptance Criteria | Agile/Scrum | Direkte Entsprechung zu eval.md |
| Definition of Done | Scrum | Ähnlich zu eval.md, aber auf Team-Prozess fokussiert |

Der Unterschied: Spec.md + Eval.md sind leichtgewichtiger, maschinenlesbar und direkt in den Claude Code Workflow eingebettet.

---

## Spec + Eval als Übergabedokument

Das ist der unterschätzte Wert dieser Methode: Spec + Eval ist ein vollständiges Handoff-Dokument ans Entwicklerteam.

Der Entwickler bekommt:
- Was gebaut werden soll (Spec)
- Wann es fertig ist (Eval)
- Einen lauffähigen Prototypen als Referenz

Kein Raten. Keine langen Meetings. Kein "ich dachte du meintest..."

---

## Der Merksatz

> Brief beschreibt das Problem. Spec beschreibt die Lösung. Eval beschreibt den Erfolg.
> Alles drei zusammen ist ein vollständiges Handoff.
