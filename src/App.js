import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import ChatContainer from './containers/ChatContainer';
import { addNotificationError } from './redux/actions/logger'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  componentDidMount() {
    addNotificationError();
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
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
export default App;
