import React from 'react';

import cx from 'classnames';

const flipDuration = 200;
const trigger = 200;

class UnfoldingPhoto extends React.Component {

    constructor(){
        super();
        this.state = {
            piece2flipped: true,
            piece3flipped: true,
            piece4flipped: true
        };
    }

    componentDidMount = () => {
        /*
        window.hop = function() {
            if(this.state.piece4flipped)
                this.open();
            else
                this.close();
        }.bind(this);
        */

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        if(e.srcElement.body.scrollTop > trigger && this.state.piece2flipped)
            this.open();
        else if(e.srcElement.body.scrollTop < trigger && !this.state.piece4flipped)
            this.close();
    }

    open = () => {
        var self = this;

        self.setState({piece2flipped: false});

        setTimeout(() => {
            self.setState({piece3flipped: false});

            setTimeout(() => {
                self.setState({piece4flipped: false});
            }, flipDuration);

        }, flipDuration);
    }

    close = () => {
        var self = this;

        self.setState({piece4flipped: true});

        setTimeout(() => {
            self.setState({piece3flipped: true});

            setTimeout(() => {
                self.setState({piece2flipped: true});
            }, flipDuration);

        }, flipDuration);
    }

    render() {
        return (
            <div className={cx("test", {open: !this.state.piece2flipped})}>
                <div className="piece piece1">
                    <div className={cx("piece piece2", {flipped: this.state.piece2flipped})}>
                        <figure className="front"></figure>
                        <figure className="back"></figure>
                        <div className={cx("piece piece3", {flipped: this.state.piece3flipped})}>
                            <figure className="front"></figure>
                            <figure className="back"></figure>
                            <div className={cx("piece piece4", {flipped: this.state.piece4flipped})}>
                                <figure className="front"></figure>
                                <figure className="back"></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UnfoldingPhoto;

