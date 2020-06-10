import React, {Component} from "react";

import './Content.scss';

function Dovednosti() {
    return (
        <div className="root ome-root" id="3">
            <div className="karticka karticka-dovednosti">
                <p>
                    <h5>Zvládám</h5>
                    <il>
                        <li>HTML, CSS/Sass</li>
                        <li>Javascript, zejména React</li>
                        <li>SQL/MySQL, Firebase</li>
                        <li>Práce v Adobe XD/Figma</li>
                    </il><br/>
                    <h5>Mám základy</h5>
                    <il>
                        <li>node.js</li>
                        <li>PHP</li>
                    </il><br/>
                    <h5>Ostatní</h5>
                    Java, Python
                </p>
            </div>
        </div>
    )
}

export default Dovednosti;