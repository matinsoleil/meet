import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { setCountryConfig, setTranslator } from './../src/redux/actions/general/country'
import { setOs } from './../src/redux/actions/general/os'
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
  componentWillMount() {
    // 17 Estados unidos
    // 0 México
    this.props.setCountryConfig(this.props.countries[0]);
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
    region: state.country.region,
    dialect: state.country.dialect,
    languages: state.country.languages,
    os: state.os,
    countries: state.countries,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setOs: () => {
      dispatch(setOs());
    },
    setTranslator: dialect => {
      dispatch(setTranslator(dialect));
    },
    setCountryConfig: country => {
      dispatch(setCountryConfig(country));
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
