import React from "react";

import './Mobile.scss';

import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import JanSieglWeb from '../../images/jansieglweb.png';
import EphiWeb from '../../images/ephiweb.png';
import GamestownWeb from '../../images/gamestownweb.png';
import Col from "react-bootstrap/Col";

import {ReactComponent as Avatar} from "../../images/avatar.svg";

function MobileApp() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const scndvh = window.innerHeight / 2;
    const scndvw = window.innerWidth / 4 * 3;
    return (
        <CarouselProvider
            naturalSlideWidth={vw}
            naturalSlideHeight={vh}
            totalSlides={5}
        >
            <Slider className="slider-root">
                <b>
                    <Slide index={0} className="strana strana0">
                        <br/>
                            <Avatar/>
                            <br/>
                            <br/>
                        <h1><b>JAN SIEGL</b></h1>
                        <p>
                            webdesign <br/>
                            webdevelopment
                        </p>
                        <div className="mobile-navigace">
                            <Dot children={'Jan Siegl'} slide={0} className="tlacitko tlacitko-selected"/>
                            <Dot children={'O me'} slide={1} className="tlacitko"/>
                            <Dot children={'Dovednosti'} slide={2} className="tlacitko"/>
                            <Dot children={'Projekty'} slide={3} className="tlacitko"/>
                            <Dot children={'Kontakty'} slide={4} className="tlacitko"/>
                        </div>
                    </Slide>
                    <Slide index={1} className="strana strana1">
                        <p>
                            <h3><b>O mě</b></h3><br/><br/><br/><br/>
                            Jsem osmnáctiletý student střední školy informačních technologií, kterého zejména baví
                            tvořit. Ať už <b>weby, webové aplikace,</b> či cokoliv kreativního.<br/><br/>Snažím se dělat to, co
                            mě baví a neustále se rozvíjet.<br/><br/>Mezi mé další oblíbené aktivity patří
                            <b> fotografování, videotvorba</b> a venkovní sporty.
                        </p>
                        <div className="mobile-navigace">
                            <Dot children={'Jan Siegl'} slide={0} className="tlacitko"/>
                            <Dot children={'O me'} slide={1} className="tlacitko tlacitko-selected"/>
                            <Dot children={'Dovednosti'} slide={2} className="tlacitko"/>
                            <Dot children={'Projekty'} slide={3} className="tlacitko"/>
                            <Dot children={'Kontakty'} slide={4} className="tlacitko"/>
                        </div>
                    </Slide>
                    <Slide index={2} className="strana strana2">
                        <p>
                            <h3><b>Mám zkušenosti s</b></h3><br/><br/><br/><br/>
                            <b>Vývojem webů:</b> <br/>HTML, CSS/SCSS, Tailwind/Bootstrap, Javascript - React, PHP -
                            Nette<br/><br/>
                            <b>UI/UX designem:</b> <br/>Adobe XD, Figma, Photoshop<br/><br/>
                            <b>Programováním:</b> <br/>Java - JavaFX, Python, React Native<br/><br/>
                            <b>Angličtinou na úrovni rodilého mluvčí (C2)</b>
                        </p>
                        <div className="mobile-navigace">
                            <Dot children={'Jan Siegl'} slide={0} className="tlacitko "/>
                            <Dot children={'O me'} slide={1} className="tlacitko"/>
                            <Dot children={'Dovednosti'} slide={2} className="tlacitko tlacitko-selected"/>
                            <Dot children={'Projekty'} slide={3} className="tlacitko"/>
                            <Dot children={'Kontakty'} slide={4} className="tlacitko"/>
                        </div>
                    </Slide>
                    <Slide index={3} className="strana strana3">
                        <h3><b>Projekty</b></h3>
                        <CarouselProvider
                            naturalSlideWidth={scndvw}
                            naturalSlideHeight={scndvh}
                            totalSlides={3}
                            orientation={"vertical"}
                            lockOnWindowScroll={true}
                        >
                            <Slider className="slider-root">
                                <Slide index={0} className="projects-stranky">
                                    <img className="panel-img  projects-img" src={JanSieglWeb}/><br/><br/>
                                    <b>Osobní portfolio</b><br/>
                                    <i>Jan Siegl</i><br/>
                                    <span className="panel-subinfo  mobile-panel-subinfo">Technologie: React, React Spring, TailwindCSS</span>
                                </Slide>
                                <Slide index={1} className="projects-stranky">
                                    <img className="panel-img  projects-img" src={EphiWeb}/><br/><br/>
                                    <b>Webová prezentace</b><br/>
                                    <i>Ephi.cz</i><br/>
                                    <span
                                        className="panel-subinfo  mobile-panel-subinfo">Technologie: React, Bootstrap</span>
                                </Slide>
                                <Slide index={2} className="projects-stranky">
                                    <img className="panel-img projects-img" src={GamestownWeb}/><br/><br/>
                                    <b>Web pro gaming portál</b><br/>
                                    <i>Games-Town</i><br/>
                                    <span className="panel-subinfo mobile-panel-subinfo">Technologie: Node.js, React, Bootstrap<br/><i>Ve vývoji</i></span>
                                </Slide>
                            </Slider>
                            <ButtonBack className="projects-control">▲</ButtonBack>
                            <ButtonNext className="projects-control">▼</ButtonNext>
                        </CarouselProvider>
                        <div className="mobile-navigace">
                            <Dot children={'Jan Siegl'} slide={0} className="tlacitko "/>
                            <Dot children={'O me'} slide={1} className="tlacitko"/>
                            <Dot children={'Dovednosti'} slide={2} className="tlacitko"/>
                            <Dot children={'Projekty'} slide={3} className="tlacitko tlacitko-selected"/>
                            <Dot children={'Kontakty'} slide={4} className="tlacitko"/>
                        </div>
                    </Slide>
                    <Slide index={4} className="strana strana4">
                        <h3><b>Kontakty</b></h3>
                        <br/><br/><br/>
                        jan.siegl@pm.me
                        <br/><br/><br/>
                        +420 720 181 778
                        <div className="mobile-navigace">
                            <Dot children={'Jan Siegl'} slide={0} className="tlacitko "/>
                            <Dot children={'O me'} slide={1} className="tlacitko"/>
                            <Dot children={'Dovednosti'} slide={2} className="tlacitko"/>
                            <Dot children={'Projekty'} slide={3} className="tlacitko"/>
                            <Dot children={'Kontakty'} slide={4} className="tlacitko tlacitko-selected"/>
                        </div>
                    </Slide>
                </b>
            </Slider>
        </CarouselProvider>
    )
}

export default MobileApp;