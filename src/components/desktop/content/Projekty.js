import React, {Component} from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import './Content.scss';
import {ReactComponent as Ephi} from "../../../images/ephi.svg";
import JanSieglWeb from '../../../images/jansieglweb.png';
import EphiWeb from '../../../images/ephiweb.png';
import GamestownWeb from '../../../images/gamestownweb.png';

function Projekty() {
    return (
        <div className="root projekty-root" id="4">
            <div className="karticka <br/>">
                <Carousel arrows className="carousel-own">
                    <div className="panel panel0">
                        <img className="panel-img" src={JanSieglWeb}/><br/><br/>
                        <b>Osobní portfolio</b><br/>
                        <i>Jan Siegl</i><br/>
                        <span className="panel-subinfo">Technologie: React, React Spring</span>
                    </div>
                    <div className="panel panel1">
                        <img className="panel-img" src={EphiWeb}/><br/><br/>
                        <b>Webová prezentace</b><br/>
                        <i>Ephi.cz</i><br/>
                        <span className="panel-subinfo">Technologie: React, Bootstrap</span>
                    </div>
                    <div className="panel panel2">
                        <img className="panel-img" src={GamestownWeb}/><br/><br/>
                        <b>Web pro gaming portál</b><br/>
                        <i>Games-Town</i><br/>
                        <span className="panel-subinfo">Technologie: Node.js, React, Bootstrap<br/><i>Ve vývoji</i></span>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

/*function Projekty() {
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
}*/

export default Projekty;
