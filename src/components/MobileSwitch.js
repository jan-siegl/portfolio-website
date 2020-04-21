import React, {Component} from "react";

//komponenty
import MobileApp from "./mobile/MobileApp";
import DesktopApp from "./desktop/DesktopApp";

export default class MobileWrap extends Component {
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
                <MobileApp />
            );
        } else {
            return (
                <DesktopApp />
            );
        }
    }
}
