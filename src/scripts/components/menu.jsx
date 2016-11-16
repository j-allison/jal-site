import React from 'react';
import {Link} from 'react-router';

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

    componentDidReceiveProps = (nextProps) => {
        console.dir(nextProps);
    }

    render() {

        return (
            <ul className="menu">
                <li><Link to="/about">About</Link></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        );
    }

}

export default Menu;


                // <span className="primary">J</span>ust <span className="primary">A</span> <span className="primary">L</span>lama
