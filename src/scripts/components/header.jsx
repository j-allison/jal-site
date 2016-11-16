import React from 'react';

import Menu from './menu.jsx';

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

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        if(e.srcElement.body.scrollTop > this.scrollTriggerSmall && !this.state.smallHeader)
            this.setState({smallHeader: true});
        else if(e.srcElement.body.scrollTop < this.scrollTriggerSmall && this.state.smallHeader)
            this.setState({smallHeader: false});

        if(e.srcElement.body.scrollTop > this.scrollTriggerFixed && !this.state.fixedHeader)
            this.setState({fixedHeader: true});
        else if(e.srcElement.body.scrollTop < this.scrollTriggerFixed && this.state.fixedHeader)
            this.setState({fixedHeader: false});
    }

    render() {
        return (
            <div className={cx('header', {'small': this.state.smallHeader, 'fixed': this.state.fixedHeader})}>
                <h1>Just A Llama</h1>
                <Menu />
                <img className="logo" src={window.PATHS.images + '/llama-ds.png'} />
            </div>
        );
    }

}

Header.contextTypes = {
    location: React.PropTypes.object
}


export default Header;


                // <span className="primary">J</span>ust <span className="primary">A</span> <span className="primary">L</span>lama
