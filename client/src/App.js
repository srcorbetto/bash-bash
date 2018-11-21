import React, { Component } from 'react';
import './App.css';

import { db, auth } from './firebase';
import AuthForm from './components/AuthForm/AuthForm';

class App extends Component {

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <AuthForm />
        </div>
      </div>
    );
  }
}

export default App;
