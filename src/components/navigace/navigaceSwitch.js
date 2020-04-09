import React, {Component} from "react";

//komponenty
import NavigaceMobil from "./navigaceMobil";
import Navigace from "./navigace";

export default class NavigaceWrap extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return (
                <NavigaceMobil />
            );
        } else {
            return (
                <Navigace />
            );
        }
    }
}
