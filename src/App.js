import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import {setRegionConfig, setTranslator} from './../src/redux/actions/general/country';
import ErrorHandler from './ErrorHandler';
import LoginContainer from './containers/LoginContainer';
import ChatContainer from './containers/ChatContainer';
import './components/claro-connect.scss';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.setRegionConfig();
    }

    render() {
        return (
            <ErrorHandler>
                <Router>
                    <React.Fragment>
                        {/*<Route exact path="/" component={LoginContainer}/>*/}
                        <Route exact path="/" component={ChatContainer}/>
                    </React.Fragment>
                </Router>
            </ErrorHandler>
        );
    }
}

const mapDispatchToProps = () => {
    return {
        setRegionConfig: setRegionConfig
    }
};

export default connect(
    null,
    mapDispatchToProps
)(App);
