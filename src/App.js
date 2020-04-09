import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";


import NavigaceSwitch from "./components/navigace/navigaceSwitch";

function App() {
    return (
        <div className="App">

            <NavigaceSwitch/>
            <Switch>
                <Route exact="true" path="/">

                </Route>
            </Switch>
        </div>
    );
}

export default App;
