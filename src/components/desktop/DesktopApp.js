import React, {Component} from "react";

import Main from "./content/Main";
import Ome from "./content/Ome";
import Projekty from "./content/Projekty";
import Kontakty from "./content/Kontakty";
import Navigace from "./Navigace";

import './Desktop.scss';

import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";

function DesktopApp() {
    return (
        <div className="desktop-root">
            <div className="navigace column">
                <div className="navigace-wrap">
                    <div className="navigace-status">
                    _
                    </div>
                    <Navigace/>
                </div>
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

/*function Navigace() {
    return (
        <div className="navigace-root">
            <ul className="navigace-list">
                <li className="margin-between"><a href="#1" className="navigace-item selected">Jan Siegl</a></li>
                <li className="margin-between"><a href="#2" className="navigace-item">O mě</a></li>
                <li className="margin-between"><a href="#3" className="navigace-item">Projekty</a></li>
                <li className="margin-between"><a href="#" className="navigace-item">Kontakty</a></li>
            </ul>
        </div>
    )
}*/

function Content() {
    return (
        <div className="content-root">
            <Main/>
            <Ome/>
            <Projekty/>
            <Kontakty/>
        </div>
    )
}

function Sidebar() {
    return (
        <div className="sidebar-root">
            <div className="sidebar-link">
                <a href="https://github.com/jan-siegl" target="_blank"><Github/><span className="sidebar-link-text">Github</span></a><br/>
            </div>
            <div className="sidebar-link">
                <a href="https://www.linkedin.com/in/jan-siegl-1ab7b61a7/" target="_blank"><Linkedin/><span className="sidebar-link-text">Linkedin</span></a><br/>
            </div>
            <div className="sidebar-link">
                <a href="#"><Instagram/><span className="sidebar-link-text">Instagram</span></a><br/>
            </div>
            <div className="lang-switch">
            </div>
        </div>
    )
}

export default DesktopApp;