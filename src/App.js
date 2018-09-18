import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import {actions} from './../src/flux/actions';



import LoginContainer from './containers/LoginContainer';
import ChatContainer from './containers/ChatContainer';
import MessageError from './components/logerror/MessageError';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }
  render() {
    if (this.state.error) {
      return (<MessageError message={this.state.error.toString()} detail={this.state.errorInfo.componentStack} />)
    } else {
      return (
        <Router>
          <div>
            <Route exact path="/" component={LoginContainer} />
            <Route exact path="/chat" component={ChatContainer} />
          </div>
        </Router>);
    }
  }
}


const mapStateToProps = state => {
  return {
      region: state.general.country.region,
      dialect: state.general.country.dialect,
      languages: state.general.country.languages,
      os: state.general.os,
      countries: state.general.countries,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      setOs: () => {
          dispatch(actions.setOs());
      },
      setTranslator: dialect => {
          dispatch(actions.setTranslator(dialect));
      },
      setCountryConfig: country => {
          dispatch(actions.setCountryConfig(country));
      }
  }
}



export default App;
