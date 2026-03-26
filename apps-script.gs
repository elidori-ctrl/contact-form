// Google Apps Script - הדבק את הקוד הזה ב-Google Apps Script ופרס כ-Web App

const SHEET_NAME = "פרטים";

function doPost(e) {
  const sheet = getOrCreateSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([data.timestamp, data.name, data.phone]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["תאריך ושעה", "שם מלא", "טלפון"]);
    sheet.getRange(1, 1, 1, 3).setFontWeight("bold");
  }

  return sheet;
}
