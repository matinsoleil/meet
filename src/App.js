import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import ChatContainer from './containers/ChatContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginContainer>
        </LoginContainer>
        <ChatContainer>
        </ChatContainer>
      </div>
    );
  }
}

export default App;
