// data.js — Feedback Cluster Viewer (case1)
// Übersetzt aus input/case1/data/clusters.md (Feedback-Cluster, erstellt 2026-03-15).
//
// sourceType pro Beleg (slack | email | interview | internal) ist aus der Quellenangabe
// abgeleitet, nicht aus dem Zitattext: Zitate erwähnen "Slack", ohne aus Slack zu stammen
// (Cluster 1: E-Mail, Cluster 2: Interview). Der Filter arbeitet nur mit sourceType.
//
// Der Abschnitt "Sonstiges / Einzelfälle" aus clusters.md ist bewusst nicht enthalten:
// die Spec definiert nur "## Cluster N:"-Abschnitte als Daten.
window.DATA = {
  meta: {
    title: "Feedback-Cluster",
    created: "2026-03-15"
  },

  sources: [
    { id: "slack", label: "Slack" },
    { id: "email", label: "E-Mail" },
    { id: "interview", label: "Interview" },
    { id: "internal", label: "Intern" }
  ],

  clusters: [
    {
      name: "Onboarding-Lücke bei neuen Consultants",
      frequency: "4 von 4 analysierten Quellen — slack, email, interview, internal",
      summary: "Neue Consultants brauchen 3–6 Wochen bis sie eigenständig arbeiten können. Es gibt keine strukturierte Einarbeitung — Wissen wird mündlich weitergegeben, Dokumente sind veraltet oder fehlen ganz.",
      evidence: [
        {
          text: "Der neue Kollege fragt mich täglich nach Dingen die irgendwo stehen müssten, aber niemand weiß wo.",
          source: "@mira.k, #projektteam, Slack, 12. März",
          sourceType: "slack"
        },
        {
          text: "Onboarding dauert bei uns immer noch viel zu lang. Wir verlieren die ersten Wochen mit Wissensvermittlung die eigentlich dokumentiert sein sollte.",
          source: "Interview, Kunde Hartmann GmbH, Projektleiterin, 8. März",
          sourceType: "interview"
        },
        {
          text: "START: Onboarding-Dokument aktualisieren. Schon das dritte Mal auf unserer Retro-Liste.",
          source: "Retro Sprint 12, internal_docs.md",
          sourceType: "internal"
        },
        {
          text: "Ich habe dem neuen Consultant vier verschiedene Slack-Kanäle erklärt die er kennen muss. Das ist kein Prozess.",
          source: "E-Mail, Thomas R. an PM-Team, 10. März",
          sourceType: "email"
        }
      ]
    },
    {
      name: "Reporting-Aufwand für Statusberichte",
      frequency: "3 von 4 Quellen — email, interview, internal",
      summary: "PMs verbringen 4–6 Stunden pro Woche mit dem manuellen Zusammenstellen von Statusberichten. Die Daten liegen verteilt in Slack, Jira und persönlichen Notizen — es gibt keinen automatisierten Weg.",
      evidence: [
        {
          text: "Ich sitze jeden Freitagnachmittag 2 Stunden am Statusbericht. Daten aus Jira, Slack und meinen Notizen zusammenkopieren. Das kann nicht der beste Weg sein.",
          source: "Interview, Kunde Bergmann AG, Senior PM, 5. März",
          sourceType: "interview"
        },
        {
          text: "STOP: Statusberichte manuell schreiben. Jemand muss das automatisieren.",
          source: "Retro Sprint 11, internal_docs.md",
          sourceType: "internal"
        },
        {
          text: "Habt ihr eine Lösung für den Weekly-Report? Ich brauche dafür immer einen halben Tag und das nervt.",
          source: "E-Mail, Sandra M. an Consulting-Team, 7. März",
          sourceType: "email"
        }
      ]
    },
    {
      name: "Wissenstransfer beim Projektabschluss",
      frequency: "3 von 4 Quellen — slack, interview, internal",
      summary: "Wenn ein Projekt endet, bleibt das aufgebaute Wissen bei den beteiligten Personen — nicht im System. Nachfolgeprojekte beginnen von vorne. Lessons Learned werden selten dokumentiert.",
      evidence: [
        {
          text: "Nach dem Projektabschluss bei Müller & Co. haben wir drei Monate später dasselbe Problem bei einem neuen Kunden neu analysiert. Das Wissen war weg.",
          source: "@jan.h, #strategie, Slack, 14. März",
          sourceType: "slack"
        },
        {
          text: "Wir haben keine systematische Art Projekterfahrungen festzuhalten. Jeder hat seine eigenen Notizen, aber nichts ist teilbar.",
          source: "Interview, Kunde Richter Tech, CTO, 11. März",
          sourceType: "interview"
        },
        {
          text: "CONTINUE: Projektabschluss-Template nutzen — aber keiner füllt es aus.",
          source: "Retro Sprint 12, internal_docs.md",
          sourceType: "internal"
        }
      ]
    },
    {
      name: "Priorisierung im Sprint-Backlog",
      frequency: "2 von 4 Quellen — slack, email",
      summary: "PMs verbringen unverhältnismäßig viel Zeit in Backlog-Meetings. Tickets werden nach Gefühl priorisiert, nicht nach Kriterien. Das führt zu Diskussionen die sich wiederholen.",
      evidence: [
        {
          text: "Unser letztes Backlog-Grooming hat 2,5 Stunden gedauert. Wir haben 8 Tickets priorisiert. Das ist nicht skalierbar.",
          source: "@lea.b, #projektteam, Slack, 11. März",
          sourceType: "slack"
        },
        {
          text: "Gibt es bei euch ein System für Backlog-Priorisierung? Bei uns ist es immer noch 'wer am lautesten ruft'.",
          source: "E-Mail, Marco F. an PM-Team, 9. März",
          sourceType: "email"
        }
      ]
    }
  ]
};
