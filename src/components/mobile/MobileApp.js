import React from "react";

import './Mobile.scss';

import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import JanSieglWeb from '../../images/jansieglweb.png';
import EphiWeb from '../../images/ephiweb.png';
import GamestownWeb from '../../images/gamestownweb.png';
import Col from "react-bootstrap/Col";
import {ReactComponent as Github} from "../../images/github.svg";
import {ReactComponent as Linkedin} from "../../images/linkedin.svg";
import {ReactComponent as Instagram} from "../../images/instagram.svg";

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
                        <div className="strana0__content">
                            <img src="/images/profile_pic.png" alt="Profilová fotka"/>
                            <h1>JAN SIEGL</h1>
                            <p>
                                webdesign <br/>
                                webdevelopment
                            </p>
                        </div>
                        <div className="mobile-navigace">
                            <Dot children={'Jan Siegl'} slide={0} className="tlacitko tlacitko-selected"/>
                            <Dot children={'O mě'} slide={1} className="tlacitko"/>
                            <Dot children={'Dovednosti'} slide={2} className="tlacitko"/>
                            <Dot children={'Projekty'} slide={3} className="tlacitko"/>
                            <Dot children={'Kontakty'} slide={4} className="tlacitko"/>
                        </div>
                    </Slide>
                    <Slide index={1} className="strana strana1">
                        <h3><b>O mně</b></h3>
                        <div className="strana1__content">
                            <p>Jsem osmnáctiletý student střední školy informačních technologií, který letos maturuje.
                                Baví mě vymýšlet a realizovat zajímavé projekty. Ať
                                už <b>weby, mobilní aplikace,</b> či cokoliv kreativního.</p>
                            <p>Snažím se dělat to, co mě baví a neustále se rozvíjet. Nejradši se učím praxí.</p>
                            <p>Mezi mé další oblíbené aktivity patří <b>fotografování, videotvorba</b> a
                                venkovní sporty. V létě najedu spoustu kilometrů na kole a v zimě rád běhám na běžkách.
                            </p>
                        </div>
                        <div className="mobile-navigace">
                            <Dot children={'Jan Siegl'} slide={0} className="tlacitko"/>
                            <Dot children={'O mě'} slide={1} className="tlacitko tlacitko-selected"/>
                            <Dot children={'Dovednosti'} slide={2} className="tlacitko"/>
                            <Dot children={'Projekty'} slide={3} className="tlacitko"/>
                            <Dot children={'Kontakty'} slide={4} className="tlacitko"/>
                        </div>
                    </Slide>
                    <Slide index={2} className="strana strana1">
                        <h3>Mám zkušenosti s</h3>
                        <div className="strana1__content">
                            <p>V páté třídě jsem se na kroužku ve škole seznámil s <b>HTML a CSS</b>, což odstartovalo můj zájem o tovrbu webů. Na základce jsem se sám učil základy <b>JavaScriptu</b></p>
                            <p>Pořádně jsem se tomu začal věnovat tři roky zpět, v prváku na střední. To jsem poprvé objevil <b>React.</b> Na několika prvních projektech jsem se seznámil se <b>SASS</b> postprocesorem.</p>
                            <p>Už skoro půl roku mám stáž v studiu <a href="http://dipozitiv.cz/">Dipozitiv</a>, kde jsem zlepšil svůj kód, naučil se používat BEM, seznámil se se <b>Svelte</b> a jeho použitím se <b>Sapper</b>em a pracoval na mnoho projektech. </p>
                        </div>
                        <div className="mobile-navigace">
                            <Dot children={'Jan Siegl'} slide={0} className="tlacitko "/>
                            <Dot children={'O mě'} slide={1} className="tlacitko"/>
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
                            <Dot children={'O mě'} slide={1} className="tlacitko"/>
                            <Dot children={'Dovednosti'} slide={2} className="tlacitko"/>
                            <Dot children={'Projekty'} slide={3} className="tlacitko tlacitko-selected"/>
                            <Dot children={'Kontakty'} slide={4} className="tlacitko"/>
                        </div>
                    </Slide>
                    <Slide index={4} className="strana strana1">
                        <h3>Kontakty</h3>
                        <div className="strana1__content">
                            <span>jan.siegl@pm.me</span>
                            <span>+420 720 181 778</span>
                            <span><a href="https://github.com/jan-siegl"><Github/></a><a
                            href="https://www.linkedin.com/in/jan-siegl-1ab7b61a7/"><Linkedin/></a><a
                            href="https://www.instagram.com/honza_siegl/"><Instagram/></a></span>
                        </div>

                        <div className="mobile-navigace">
                            <Dot children={'Jan Siegl'} slide={0} className="tlacitko "/>
                            <Dot children={'O mě'} slide={1} className="tlacitko"/>
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
