function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var p = e.parameter;

  var sheet = ss.getSheetByName('Join Us');
  if (!sheet) {
    sheet = ss.insertSheet('Join Us');
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Interest', 'Note']);
  }
  sheet.appendRow([
    new Date(),
    p.name || '',
    p.email || '',
    p.interest || '',
    p.note || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
