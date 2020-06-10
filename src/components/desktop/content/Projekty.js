import React, {Component} from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './Content.scss';
import {ReactComponent as Ephi} from "../../../images/ephi.svg";

function Projekty() {
    return (
        <div className="root projekty-root" id="4">
            <div className="karticka">
                <Row>
                    <Col>
                        <div className="boxik jan-siegl">
                            <h5>Jan Siegl</h5>
                            Osobní portfolio.
                            <br/><i>Jazyk:</i> HTML, CSS, Javascript
                            <br/><i>Framework:</i> React
                            <br/><a href="#">jan-siegl.cz</a>
                        </div>
                    </Col>
                    <Col>
                        <div className=" boxik ephi">
                            <h5>Ephi.cz</h5>
                            Ukázková stránka prezentující společnost tvořící webové stránky.
                            <br/><i>Jazyk:</i> HTML, CSS, Javascript
                            <br/><i>Framework:</i> React
                            <br/><a href="https://ephi.cz/">ephi.cz</a>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Projekty;