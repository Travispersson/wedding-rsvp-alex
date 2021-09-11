const { google } = require("googleapis");
require('dotenv').config();
const postSheets = async (email, name, attendees, code) => {
    // auth
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets'] })
    const sheets = google.sheets({ version: 'v4', auth });
    const sheetID = process.env.SHEET_ID
    // post

    const response = await sheets.spreadsheets.values.append({
        auth,
        spreadsheetId: sheetID,
        range: "A:Z",
        insertDataOption: 'INSERT_ROWS',
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [
                [email, name, attendees, code, new Date().toISOString().slice(0, 10)]
            ]
        }
    })
    return response;
}


module.exports = postSheets