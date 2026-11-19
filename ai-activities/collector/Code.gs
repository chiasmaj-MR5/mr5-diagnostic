/** @OnlyCurrentDoc  Limits the script's access to the Sheet it is bound to. */

// AI Activity Diagnostic — response collector.
//
// A Google Apps Script bound to a Google Sheet. Each finished questionnaire sends its
// response code here, and the code lands as a new row in the "Responses" tab. To add the
// answers to the group results, copy the Code column into the facilitator console
// ("Add response codes"). Setup steps are in ../README.md.

var SHEET = "Responses";

function doPost(e) {
  var d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return reply({ ok: false }); }
  var code = String(d.code || "");
  if (!/^AIA1\.[A-Za-z0-9_-]{20,40000}$/.test(code)) return reply({ ok: false });
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    sheet().appendRow([new Date(), clean(d.org), d.form === "d" ? "leadership" : "team", clean(d.role), clean(d.id), code]);
  } finally {
    lock.releaseLock();
  }
  return reply({ ok: true });
}

// Opening the web app link in a browser shows that the collector is running.
function doGet() {
  return reply({ ok: true, service: "AI Activity Diagnostic collector" });
}

function sheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET);
  if (!sh) {
    sh = ss.insertSheet(SHEET);
    sh.appendRow(["Received", "Organization", "Questionnaire", "Role group", "Response id", "Code"]);
    sh.setFrozenRows(1);
  }
  return sh;
}

// Text from the page is data: cap its length and keep it from being read as a formula.
function clean(v) {
  var s = String(v == null ? "" : v).slice(0, 120);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
