import React from "react";

import './Mobile.scss';

import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function MobileApp() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    return (
        <CarouselProvider
            naturalSlideWidth={vw}
            naturalSlideHeight={vh}
            totalSlides={5}
        >
            <Slider className="slider-root">
                <b>
                    <Slide index={0} className="strana strana0">
                        I am the first Slide.<br/>
                        <div className="mobile-navigace">
                            <Dot children={'Jan Siegl'} slide={0} className="tlacitko tlacitko-selected"/>
                            <Dot children={'O me'} slide={1} className="tlacitko"/>
                            <Dot children={'Dovednosti'} slide={2} className="tlacitko"/>
                            <Dot children={'Projekty'} slide={3} className="tlacitko"/>
                            <Dot children={'Kontakty'} slide={4} className="tlacitko"/>
                        </div>
                    </Slide>
                    <Slide index={1} className="strana strana1">
                        I am the second Slide.
                        <div className="mobile-navigace">
                            <Dot children={'Jan Siegl'} slide={0} className="tlacitko"/>
                            <Dot children={'O me'} slide={1} className="tlacitko tlacitko-selected"/>
                            <Dot children={'Dovednosti'} slide={2} className="tlacitko"/>
                            <Dot children={'Projekty'} slide={3} className="tlacitko"/>
                            <Dot children={'Kontakty'} slide={4} className="tlacitko"/>
                        </div>
                    </Slide>
                    <Slide index={2} className="strana strana2">
                        I am the third Slide.
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
                            naturalSlideWidth={100}
                            naturalSlideHeight={100}
                            totalSlides={3}
                            orientation={"vertical"}
                            lockOnWindowScroll={true}
                        >
                            <Slider className="slider-root">
                                <Slide index={0}>projekt 1</Slide>
                                <Slide index={1}>projekt 2</Slide>
                                <Slide index={2}>projekt 3</Slide>
                            </Slider>
                            <ButtonBack>▲</ButtonBack>
                            <ButtonNext>▼</ButtonNext>
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
                        jan.siegl@ephi.cz
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