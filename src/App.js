import React from "react";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import "./App.css";
import {ThemeProvider} from "@material-ui/core/styles";
import Theme from "./config/Theme";
import {CssBaseline} from "@material-ui/core";
import MainLayout from "./layout/MainLayout";

const theme = Theme;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <MainLayout/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;