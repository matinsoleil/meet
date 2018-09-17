import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import ChatContainer from './containers/ChatContainer';
import { addNotificationError } from './redux/actions/logerror'
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
      return (<MessageError message={this.state.error.toString()}  detail={this.state.errorInfo.componentStack}/>)
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
