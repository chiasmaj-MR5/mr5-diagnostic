# MR5 InnovAction — Four Quotients Diagnostic

Public respondent page for the Four Quotients organizational assessment
(P = (IQ + EQ) × (PasQ + CuQ), after Chiasson & Kelly).

Respondents open this page with **no account or login**, answer 24 statements
(EN/FR), and finish with a response code they email back to the facilitator.

Per-engagement links set the organization via URL parameters:

```
https://chiasmaj-mr5.github.io/mr5-diagnostic/?org=Organization%20Name&dept=Sector&lang=fr
```

The facilitator console (sessions, live results, QR presentation mode, reports)
lives in the private Claude artifact; this page is only the questionnaire.

## AI Activity Diagnostic (`ai-activities/`)

A second respondent page, bilingual EN/FR, for the AI adoption engagements: an
inventory of each person's main activities (time per week, how repetitive,
value, consequence of an error, confidential data, wish to lighten), plus a few
questions on day-to-day work and attitudes to AI. No account, no backend;
respondents finish with a response code. The organization, role groups and the
minimum reporting group size travel in the link, so the page itself names no client.

```
…/ai-activities/?org=Organization&form=team&roles=Role A|Role B&lang=fr        # anonymous team questionnaire
…/ai-activities/?org=Organization&form=direction&lang=fr                       # leadership questionnaire
…/ai-activities/?view=facilitator                                              # link builder + code compiler
```

The facilitator view compiles pasted codes in the browser: weekly hours by
proposed category (automatable / augmented / human) per role group, with groups
under the minimum size pooled; leadership vs. team comparison; and CSV exports
(one row per respondent, one row per activity) for the consolidation workbook.
