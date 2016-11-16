import React from 'react';

import Header from '../components/header.jsx';

class App extends React.Component{

    constructor(){
        super();
        this.state = {
        };
    }

    componentDidMount = () => {
    }

    componentWillUnmount = () => {
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ key: nextProps.routes.reverse()[0].component.name });
    }

    render() {
        var key = this.state.key || this.props.routes.reverse()[0].component.name;

        return (
            <application>
                <Header />
                <div className="content">
                    {React.cloneElement(this.props.children, {key: key})}
                </div>
            </application>
        );
    }

}

App.contextTypes = {
    history: React.PropTypes.object
}

export default App;
