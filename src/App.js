import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {setRegionConfig} from './../src/redux/actions/general/country';
import {LoaderScreen} from "./components/utils/loaderScreen";
import ErrorHandler from './ErrorHandler';
import ChatContainer from './containers/ChatContainer';
import ModalConfirm from './components/modals/ModalConfirm';
import ModalRadioOptions from './components/modals/ModalRadioOptions';
import Popup from "./components/modals/popup";

import './App.css';
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
                <ErrorHandler>
                    {
                        (this.state.readyToRender) ?
                            <Router>
                                <React.Fragment>
                                    {/*<Route exact path="/" component={LoginContainer}/>*/}
                                    <Route exact path="/" component={ChatContainer}/>
                                </React.Fragment>
                            </Router> :
                            <LoaderScreen/>
                    }
                    <ModalRadioOptions/>
                    <ModalConfirm/>
                    <Popup/>
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
