import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './Content.scss';

import { ReactComponent as Avatar } from "../../../images/avatar.svg";

function Main() {
    return (
        <div className="root main-root" id="1">
            <div className="karticka karticka-main font2">
                <Row className="main-row">
                <Col className="main-headshot">
                    <Avatar/>
                </Col>
                <Col className="main-text">
                    <h1>JAN SIEGL</h1>
                    <p>
                        webdesign <br/>
                        webdevelopment
                    </p>
                </Col>
                </Row>
            </div>
        </div>
    )
}

export default Main;