import React from 'react';
import { withRouter } from 'react-router';
import { animateScroll } from 'react-scroll';

import Menu from './menu.jsx';
import LangSelector from './lang-selector.jsx';

import cx from 'classnames';

class Header extends React.Component{

    constructor(props, context) {
        super(props);

        this.scrollTriggerSmall = 200;
        this.scrollTriggerFixed = 300;

        this.state = {
            smallHeader: false,
            fixedHeader: false
        };
    }

    /*
    setHeaderStateByLocation = (location) => {
        this.setState({
            smallHeader: location.pathname !== '/',
            fixedHeader: location.pathname !== '/'
        });
    }

    componentWillReceiveProps = (nextProps) => {
        this.setHeaderStateByLocation(nextProps.router.getCurrentLocation());
    }
    */

    componentDidMount = () => {
        // this.setHeaderStateByLocation(this.props.router.getCurrentLocation());

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        /*// Do not use minified header unless we're on home page
        if(this.props.router.getCurrentLocation().pathname !== '/')
            return;*/

        if(e.srcElement.body.scrollTop > this.scrollTriggerSmall && !this.state.smallHeader)
            this.setState({smallHeader: true});
        else if(e.srcElement.body.scrollTop < this.scrollTriggerSmall && this.state.smallHeader)
            this.setState({smallHeader: false});

        if(e.srcElement.body.scrollTop > this.scrollTriggerFixed && !this.state.fixedHeader)
            this.setState({fixedHeader: true});
        else if(e.srcElement.body.scrollTop < this.scrollTriggerFixed && this.state.fixedHeader)
            this.setState({fixedHeader: false});
    }

    handleScrollTop = (e) => {
        animateScroll.scrollToTop({duration: 500});
        e.preventDefault();
    }

    render() {
        return (
            <div className={cx('header', {'small': this.state.smallHeader, 'fixed': this.state.fixedHeader})}>
                <h1><a href="#" onClick={this.handleScrollTop}>Just A Llama</a></h1>
                <Menu />
                <div className="logo">
                    <img className="llama" src={'/assets/images/llama-ds.png'} /> {/* GLOBALCONSTANT */}
                    <a href="/assets/pdf/2016-JAllison-CV-FR.pdf" target="#" className="cv"></a>
                </div>
                <LangSelector />
            </div>
        );
    }

}

export default withRouter(Header);