const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});

// Create client instance for auth
const client = auth.getClient();

// Instance of Google Sheets API
const googleSheets = google.sheets({ version: "v4", auth: client });

const spreadsheetId = "1iRG8gfYh_AwWRrOnQ3DvwuIdBK0KYkBEorwThQ4lqZ4";

// Get metadata about spreadsheet
const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
});

// Read rows from spreadsheet
const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A:A",
});

// Write row(s) to spreadsheet
await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:B",
    valueInputOption: "USER_ENTERED",
    resource: {
        values: [["test", "hello"]],
    },
});

console.log("Successfully submitted! Thank you!");
