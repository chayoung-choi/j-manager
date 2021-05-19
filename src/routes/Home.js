import React from "react";
import Spreadsheet from "react-spreadsheet";
import { GoogleSpreadsheet } from "google-spreadsheet";
const config = require('../config/spreadsheet-config.json');
const CLIENT_EMAIL = config.client_email;
const PRIVATE_KEY = config.private_key;
const SPREADSHEET_ID = config.spreadsheet_id;
// const SHEET_ID = process.env.REACT_APP_SHEET_ID;

const RangeView = ({ cell }) => (
    <input
        type="range"
        value={cell.value}
        disabled
        style={{ pointerEvents: "none" }}
    />
);

const RangeEdit = ({ cell, onChange }) => (
    <input
        type="range"
        onChange={(e) => {
            onChange({ ...cell, value: e.target.value });
        }}
        value={cell.value || 0}
        autoFocus
    />
);

const data = [
    [{ t: "Flavors" }, {t: 1} , {}],
    [({ value: "Vanilla" }, { value: "Chocolate" })],
    [{ value: "Strawberry" }, { value: "Cookies" }],
    [
        { value: "How much do you like ice cream?" },
        { value: 100, DataViewer: RangeView, DataEditor: RangeEdit },
    ],
];
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
const SpreadsheetComponent = () => <Spreadsheet data={data}/>;
const appendSpreadsheet = async (row) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();
        console.log(doc.title);
        const sheet = doc.sheetsByIndex[0];
        console.log(sheet.title);
        // const sheet = doc.sheetsById[SHEET_ID];
        // const result = await sheet.addRow(row);
    } catch (e) {
        console.error('Error: ', e);
    }
};

class Home extends React.Component {
    componentDidMount() {
        appendSpreadsheet();
    }
    render() {
        return <SpreadsheetComponent/>
    }
}

export default Home;