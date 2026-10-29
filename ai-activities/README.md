# AI Activity Diagnostic

A second questionnaire, bilingual EN/FR, for the AI adoption engagements, built
the same way as the Four Quotients page: one file that is both the public
respondent page (this folder, on GitHub Pages) and the facilitator console (a
private Claude artifact holding the same file).

Respondents describe their main activities (time per week, how repetitive,
value, consequence of an error, confidential data, wish to lighten) and answer a
few questions on day-to-day work and attitudes to AI. When they finish they see
their own results right away, then send a response code. No account, no backend.

```
…/ai-activities/?org=Organization&form=team&roles=Role A|Role B&lang=fr        # anonymous team questionnaire
…/ai-activities/?org=Organization&form=direction&lang=fr                       # leadership questionnaire
…/ai-activities/?view=facilitator                                              # links, QR codes + code compiler
```

The organization, role groups and minimum reporting group size travel in the
link, so the page itself names no client.

## Facilitator console (Claude artifact)

The artifact copy embeds `{"v":1,"session":null,"archive":[]}` in the
`aia-data` block instead of `{"standalone":…}` and declares the `artifact` and
`downloads` capabilities. There the facilitator creates a group session, shows
the team and leadership QR codes (full-screen present mode), and opens the live
group results: directions to discuss, where the time goes by role group,
best candidates for AI, what stays human, reinvestment priorities and concerns
(teams vs. leadership), training needs and readiness signals. Codes from the
public link are added there; CSV exports and a PDF report are available; sessions
close and move to the archive.

Team groups under the minimum size are pooled, and activity descriptions are
only shown for groups that reach it. Categories follow the decision tree
(section 6.3) and are proposals to validate.
