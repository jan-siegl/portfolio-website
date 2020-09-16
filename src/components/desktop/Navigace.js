import React, {Component} from "react";
import { Link, animateScroll } from "react-scroll";

import './Desktop.scss'

export default class Navigace extends Component {
    constructor() {
        super();
        this.state = {
            theposition: window.innerHeight / 2 - 15,
            link1: "black",
            link2: "#707070",
            link3: "#707070",
            link4: "#707070",
            link5: "#707070",
        };
    }

    componentWillMount() {
        window.addEventListener('scroll', this.listenToScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll);
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = winScroll / height;

        const fiftyvh = window.innerHeight / 2;
        const percent = scrolled * 100;
        const thenumber = 3.2 * percent;
        const offset = 15 + thenumber;
        const odsazenitop = fiftyvh - offset;
        const textColorActive = "black";
        const textColorUnactive = "#707070";

        this.setState({
            theposition: scrolled,
            odsazeni: odsazenitop,
        });

        if (percent < 12){
            this.setState({
                link1: textColorActive,
                link2: textColorUnactive,
                link3: textColorUnactive,
                link4: textColorUnactive,
                link5: textColorUnactive,
            });
        } else if (percent >= 12 && percent < 37){
            this.setState({
                link1: textColorUnactive,
                link2: textColorActive,
                link3: textColorUnactive,
                link4: textColorUnactive,
                link5: textColorUnactive,
            });
        } else if (percent >= 37 && percent < 62){
            this.setState({
                link1: textColorUnactive,
                link2: textColorUnactive,
                link3: textColorActive,
                link4: textColorUnactive,
                link5: textColorUnactive,
            });
        } else if (percent >= 62 && percent < 87){
            this.setState({
                link1: textColorUnactive,
                link2: textColorUnactive,
                link3: textColorUnactive,
                link4: textColorActive,
                link5: textColorUnactive,
            });
        } else if (percent >= 87){
            this.setState({
                link1: textColorUnactive,
                link2: textColorUnactive,
                link3: textColorUnactive,
                link4: textColorUnactive,
                link5: textColorActive,
            });
        }
    };

    render() {
        const Pozice = this.state.theposition;
        const OdsazeniTop = this.state.odsazeni + 'px';
        const link1 = this.state.link1;
        const link2 = this.state.link2;
        const link3 = this.state.link3;
        const link4 = this.state.link4;
        const link5 = this.state.link5;
        return (
            <div className="navigace-root" style={{marginTop : OdsazeniTop}}>
                <ul className="navigace-list">
                    <li className="margin-between"><a href="#"><Link to="1" smooth={true} className="navigace-item effect-underline" style={{color : link1}}>Jan Siegl</Link></a></li>
                    <li className="margin-between"><a href="#"><Link to="2" smooth={true} className="navigace-item" style={{color : link2}}>O mně</Link></a></li>
                    <li className="margin-between"><a href="#"><Link to="3" smooth={true} className="navigace-item" style={{color : link3}}>Dovednosti</Link></a></li>
                    <li className="margin-between"><a href="#"><Link to="4" smooth={true} className="navigace-item" style={{color : link4}}>Projekty</Link></a></li>
                    <li className="margin-between"><a href="#"><Link to="5" smooth={true} className="navigace-item" style={{color : link5}}>Kontakty</Link></a></li>
                </ul>
            </div>
        )
    }
}
