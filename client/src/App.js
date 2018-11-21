import React, { Component } from 'react';
import './App.css';

import { db, auth } from './firebase';
import AuthForm from './components/AuthForm/AuthForm';

let email;
let password;

class App extends Component {
  
  state = { 
    users: [],
    email: null,
    password: null
  }

  componentWillMount() {
    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
          console.log(firebaseUser);
      } else {
          console.log('not logged in');
      }
    })
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  onSignIn() {
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  }

  onSignUp() {
    // const auth = firebase.auth();
    // Promise
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  }

  onSignOut() {
    auth.signOut();
  }

  onAddCredentials(e) {
    if (e.target.type === 'email') {
      email = e.target.value;
      console.log(`Email: ${email}`)
    } else if (e.target.type === 'password') {
      password = e.target.value;
      console.log(`Password: ${password}`)
    }
  }

  render() {
    return (
      <div className="App">
        {/* <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )} */}
        <div className="container-fluid">
          <AuthForm email={this.onAddCredentials}
                    password={this.onAddCredentials}
                    signUp={this.onSignUp}
                    signIn={this.onSignIn}
                    signOut={this.onSignOut}
          />
        </div>
      </div>
    );
  }
}

export default App;
