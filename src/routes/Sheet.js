import React from "react";
import Spreadsheet from "react-spreadsheet";
import {GoogleSpreadsheet} from "google-spreadsheet";
import {Box, Button, Container} from "@material-ui/core";
import SheetComponent from "../components/SheetComponent";

const config = require('../config/spreadsheet-config.json');
const CLIENT_EMAIL = config.client_email;
const PRIVATE_KEY = config.private_key;
const SPREADSHEET_ID = config.spreadsheet_id;

class Sheet extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Container maxWidth="md">
            <SheetComponent/>
        </Container>
    }
}

export default Sheet;