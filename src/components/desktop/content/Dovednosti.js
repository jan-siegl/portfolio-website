import React, {Component} from "react";

import './Content.scss';

function Dovednosti() {
    return (
        <div className="root ome-root" id="3">
            <div className="karticka karticka-ome">
                <p>V páté třídě jsem se na kroužku ve škole seznámil s <b>HTML a CSS</b>, což odstartovalo můj zájem o tovrbu webů. Na základce jsem se sám učil základy <b>JavaScriptu</b>.</p>
                <p>Pořádně jsem se tomu začal věnovat čtyři roky zpět, v prváku na střední. To jsem poprvé objevil <b>React.</b> Na několika prvních projektech jsem se seznámil se <b>SASS</b> postprocesorem. Poslední dobou jsem si na vlastních projektech oblíbil <b>Next.js</b> a <b>TailwindCSS</b>. Na backendu používám <b>Express.js</b> komunikující přes <b>REST</b> API.</p>
                <p>Už skoro rok pracuji jako stážista ve studiu <a href="http://dipozitiv.cz/">Dipozitiv</a>, kde jsem zlepšil svůj kód, naučil se používat BEM, seznámil se se <b>Svelte</b> a jeho použitím se <b>Sapper</b>em a komunikací přes <b>GraphQl</b> API.</p>
            </div>
        </div>
    )
}

export default Dovednosti;
