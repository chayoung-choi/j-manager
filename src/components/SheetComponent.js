import React, {useEffect, useState} from 'react';
import Spreadsheet from "react-spreadsheet";
import {GoogleSpreadsheet} from "google-spreadsheet";
import {Box, Button, Container} from "@material-ui/core";
import Loading from "../common/Loading";

const config = require('../config/spreadsheet-config.json');
const CLIENT_EMAIL = config.client_email;
const PRIVATE_KEY = config.private_key;
const SPREADSHEET_ID = config.spreadsheet_id;
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export default function SheetComponent() {
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        setLoading(true);
        getSheetData().then(r => console.log("완료"));
        setLoading(false);
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);

    const [sheetData, setSheetData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getSheetData = async () => {
        try {
            await doc.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
            });
            await doc.loadInfo();
            console.log("[doc.title]", doc.title);
            const sheet = doc.sheetsByIndex[0];
            const rows = await sheet.getRows();
            console.log("[rows]", rows);
            setSheetData(rows);

        } catch (e) {
            console.error('Error: ', e);
        }
    };

    return (
        <>
            <Container maxWidth="md">
                <Spreadsheet data={sheetData}/>
            </Container>
            <Loading loading={loading}/>
        </>
    );
}


