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
        this.state = { readyToRender: false }
    }

    async componentWillMount() {
        await this.props.setRegionConfig();
        await this.setState({ readyToRender: true })
    }

    render() {
        return (
            this.state.readyToRender ?
                <ErrorHandler>
                    <Router>
                        <React.Fragment>
                            {/*<Route exact path="/" component={LoginContainer}/>*/}
                            <Route exact path="/" component={ChatContainer}/>
                        </React.Fragment>
                    </Router>
                </ErrorHandler>
                :
                <div>Loading</div>
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
