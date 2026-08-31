/**
 * Tiffin Developments — website lead capture
 *
 * Receives POSTs from the landing page's email form and appends
 * each submission as a new row in this spreadsheet.
 *
 * Setup:
 * 1. Open the "Tiffin Developments — Website Leads" Google Sheet.
 * 2. Extensions > Apps Script.
 * 3. Delete anything in the editor and paste this whole file in.
 * 4. Deploy > New deployment > gear icon > Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Click Deploy, authorize it, then copy the "Web app URL".
 * 6. Send that URL back — it gets pasted into index.html in place of
 *    WEBAPP_URL and the site redeploys.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.email || '',
    data.source || '',
    data.page || '',
    data.userAgent || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
