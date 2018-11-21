import React, { Component } from 'react';
import { db, auth } from './firebase';
import AframeView from './components/AframeView/AframeView';
import AuthForm from './components/AuthForm/AuthForm';
import { Link, Route } from 'react-router-dom';

import './App.css';

class App extends Component {

  state = {
    firebaseUser: null
  }

  componentWillMount() {
    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
          console.log(firebaseUser);
          this.setState({
            firebaseUser: firebaseUser.email
          })
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

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <AuthForm />
          <div className="link">
            <Link to="/user">Generate Aframe</Link>
          </div>
          <Route path="/user" component={AframeView}/>
        </div>
      </div>
    );
  }
}

export default App;
