import React, {Component} from "react";

import Main from "./content/Main";
import Ome from "./content/Ome";
import Projekty from "./content/Projekty";

import './Desktop.scss';

function DesktopApp() {
    return (
        <div className="desktop-root">
            <div className="navigace column">
                <Navigace/>
            </div>
            <div className="content column">
                <Content/>
            </div>
            <div className="right column">
                <Sidebar/>
            </div>

        </div>
    );
}

function Navigace() {
    return (
        <div className="navigace-root">
            <ul className="navigace-list">
                <li><a href="#" className="navigace-item selected">Jan Siegl</a></li>
                <li><a href="#" className="navigace-item">O mě</a></li>
                <li><a href="#" className="navigace-item">Projekty</a></li>
                <li><a href="#" className="navigace-item">Kontakty</a></li>
            </ul>
        </div>
    )
}

function Content() {
    return (
        <div className="content-root">
            <Main/>
            <Ome/>
            <Projekty/>
        </div>
    )
}

function Sidebar() {
    return (
        <div>
            <a href="#">Github</a>
            <a href="#">Linkedin</a>
            <a href="#">Instagram</a>
            <a href="#">Ephi</a>
            cz/en
        </div>
    )
}

export default DesktopApp;