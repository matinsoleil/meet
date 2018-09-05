import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import ChatContainer from './containers/ChatContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/chat" component={ChatContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
