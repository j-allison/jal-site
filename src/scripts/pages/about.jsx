import React from 'react';


class About extends React.Component {

    constructor(){
        super();
        this.state = {
        };
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <div className="about">
                <p>About me</p>
            </div>
        );
    }

}

About.contextTypes = {
    history: React.PropTypes.object,
    location: React.PropTypes.object
}

export default About;

