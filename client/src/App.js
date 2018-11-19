import React, { Component } from 'react';
import './App.css';

import { db, auth } from './firebase';

class App extends Component {
  state = { 
    users: []
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  onSignIn() {

  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}

        {/* <div className="container">
            <input type="email" placeholder="Email" id="txtEmail" />
            <input type="password" placeholder="Password" id="txtPassword" /  >
            <button id="btnLogin" className="btn btn-action">Log in</button>
            <button id="btnSignUp" className="btn btn-action">Sign up</button>
            <button id="btnLogout" className="btn btn-action hide">Log out</button>
        </div> */}
      </div>
    );
  }
}

export default App;
