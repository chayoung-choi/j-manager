import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Navigation from "./layout/Navigation";
import Home from "./routes/Home";
import Sheet from "./routes/Sheet";
import "./App.css";
import Navigation2 from "./layout/Navigation2";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Navigation2/>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/sheet" exact={true} component={Sheet}/>
            </HashRouter>
        </div>
    );
}

export default App;