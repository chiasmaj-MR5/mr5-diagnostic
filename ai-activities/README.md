# AI Activity Diagnostic

A second respondent page, bilingual EN/FR, for the AI adoption engagements: an
inventory of each person's main activities (time per week, how repetitive,
value, consequence of an error, confidential data, wish to lighten), plus a few
questions on day-to-day work and attitudes to AI. No account, no backend;
respondents finish with a response code. The organization, role groups and the
minimum reporting group size travel in the link, so the page itself names no client.

```
…/ai-activities/?org=Organization&form=team&roles=Role A|Role B&lang=fr        # anonymous team questionnaire
…/ai-activities/?org=Organization&form=direction&lang=fr                       # leadership questionnaire
…/ai-activities/?view=facilitator                                              # links, QR codes + code compiler
```

The facilitator view shows each link with a QR code (copy, download, or
present full screen), and compiles pasted codes in the browser: weekly hours by
proposed category (automatable / augmented / human) per role group, with groups
under the minimum size pooled; leadership vs. team comparison; and CSV exports
(one row per respondent, one row per activity) for the consolidation workbook.
