import React from 'react';
import {Link} from 'react-scroll';

import {isMobile} from '../libraries/helpers';

class Menu extends React.Component{

    constructor(props, context) {
        super(props);

        this.state = {
        };
    }

    componentDidMount = () => {
    }

    componentWillUnmount = () => {
    }

    render() {
        var offset = isMobile() ? -80 : -140;

        return (
            <ul className="menu">
                <li><Link activeClass="active" spy={true} smooth={true} offset={offset} duration={700} to="about">About</Link></li>
                <li><Link activeClass="active" spy={true} smooth={true} offset={offset} duration={700} to="portfolio">Portfolio</Link></li>
                <li><Link activeClass="active" spy={true} smooth={true} offset={offset} duration={700} to="contact">Contact</Link></li>
            </ul>
        );
    }

}

export default Menu;