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
`downloads` capabilities. There the facilitator creates a group session, shows the team and leadership QR
codes (full-screen present mode), and opens the live group results. They lead with
the share of the work described that AI agents, AI assistants and people could do,
overall and by role group, then every activity listed under its category, the
directions to discuss, the time AI could free, the invisible coordination work, and
the conditions for success (where freed time should go, concerns, training,
readiness). Codes are added there; CSV exports and a PDF report are available;
sessions close and move to the archive.

Each activity is placed by the respondent's own answer to "What could AI do with
this activity?", except that work with serious consequences or where every case is
different is not handed fully to an agent. Without that answer the criteria decide
(serious consequences: human; done the same way each time: agent; otherwise:
assistant). Confidential data is flagged "approved tools only". Groups under the
minimum size are pooled, and activity descriptions are only shown for groups that
reach it. All figures are proposals to validate.

## Automatic collection (Google Sheet)

Without it, respondents send their response code by email. With it, each finished
questionnaire sends its code to a Google Sheet; the code stays on screen as a backup.

1. In the MR5 Google account, create a Google Sheet (e.g. "AI Activity Diagnostic – responses").
2. In the Sheet: **Extensions → Apps Script**. Replace the code with `collector/Code.gs`, then **Save**.
3. **Deploy → New deployment → Select type: Web app**. Execute as: **Me**. Who has access: **Anyone**. **Deploy**, then authorize.
4. Copy the **Web app URL** (`https://script.google.com/macros/s/…/exec`).
5. In the facilitator console, paste it in **Automatic collection** (new session form or live session card) and save.
   The links and QR codes then carry the collector; share those.
6. To add answers to the results, copy the **Code** column of the "Responses" tab into **Add response codes**.
   Codes already added are skipped, so pasting the whole column again is safe.
