import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";


import AppSwitch from "./components/MobileSwitch";

function App() {
    return (
        <div className="App">

            <AppSwitch/>
        </div>
    );
}

export default App;
