import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import "./App.css";

function App() {
    return (
        <div className="App">
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
        </HashRouter>
        </div>
    );
}

export default App;