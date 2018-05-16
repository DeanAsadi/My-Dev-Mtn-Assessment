import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <FirstNameComponent />
        <LastNameComponent />
        <EmailComponent />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class FirstNameComponent extends Component {
  render() {
    return <h1>First name: Dean</h1>
  }
}

class LastNameComponent extends Component {
  render() {
    return <h1>Last name: Eseddi</h1>
  }
}

class EmailComponent extends Component {
  render() {
    return <h1>Email: mjalasadi1@gmail.com</h1>
  }
}

export default App;
