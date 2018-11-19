import React, { Component } from 'react';
import './App.css';

import { db, auth } from './firebase';
import AuthForm from './components/AuthForm/AuthForm';

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
    // Auth code
// ==================================================
//   const txtEmail = document.getElementById('txtEmail');
//   const txtPassword = document.getElementById('txtPassword');
//   const btnLogin = document.getElementById('btnLogin');
//   const btnSignUp = document.getElementById('btnSignUp');
//   const btnLogout = document.getElementById('btnLogout');

//   btnLogin.addEventListener('click', e => {
//       const email = txtEmail.value;
//       const pass = txtPassword.value;
//       const auth = firebase.auth();

//       // Promise
//       const promise = auth.signInWithEmailAndPassword(email, pass);

//       promise.catch(e => console.log(e.message));

//   });

//   btnSignUp.addEventListener('click', e => {
//       const email = txtEmail.value;
//       const pass = txtPassword.value;
//       const auth = firebase.auth();

//       // Promise
//       const promise = auth.createUserWithEmailAndPassword(email, pass);

//       promise.catch(e => console.log(e.message));

// });

// btnLogout.addEventListener('click', e => {
//     firebase.auth().signOut();
// })

// firebase.auth().onAuthStateChanged(firebaseUser => {
//     if (firebaseUser) {
//         console.log(firebaseUser);
//         btnLogout.classList.remove('hide');
//     } else {
//         console.log('not logged in');
//         btnLogout.classList.add('hide');
//     }
// })
  }

  render() {
    return (
      <div className="App">
        {/* <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )} */}

        {/* <div className="container">
            <input type="email" placeholder="Email" id="txtEmail" />
            <input type="password" placeholder="Password" id="txtPassword" /  >
            <button id="btnLogin" className="btn btn-action">Log in</button>
            <button id="btnSignUp" className="btn btn-action">Sign up</button>
            <button id="btnLogout" className="btn btn-action hide">Log out</button>
        </div> */}
        <div className="container-fluid">
          <AuthForm />
        </div>
      </div>
    );
  }
}

export default App;
