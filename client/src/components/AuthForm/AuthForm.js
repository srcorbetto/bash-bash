import React, { Component } from 'react';

import { db, auth } from '../../firebase';

import './AuthForm.css';

class AuthForm extends Component {

    state = {
        email: null,
        password: null
    }

    constructor(props) {
        super(props);
        this.onAddCredentials = this.onAddCredentials.bind(this);
    } 

      onSignIn = () => {
        const emailFromState = this.state.email;
        const passwordFromState = this.state.password;
        const promise = auth.signInWithEmailAndPassword(emailFromState, passwordFromState);
        promise.catch(e => console.log(e.message));
      }
    
      onSignUp = () => {
        const promise = auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
        promise.catch(e => console.log(e.message));
      }
    
      onSignOut() {
        auth.signOut();
      }
    
      onAddCredentials(e) {
          const userValue = e.target.value;
        if (e.target.type === 'email') {
            this.setState({
                email: userValue
            })
          console.log(`Email: ${this.state.email}`)
        } else if (e.target.type === 'password') {
            this.setState({
                password: userValue
            })
            console.log(`Password: ${this.state.password}`)
        }
      }

      render() {
          return (
            <div className="row">
                <div className="col">
                    <div className="AuthForm">
                        <input onChange={this.onAddCredentials}
                            required
                            type="email"
                            placeholder="Email"
                            id="txtEmail"
                        />
                        <input onChange={this.onAddCredentials}
                            required type="password"
                            placeholder="Password"
                            id="txtPassword"
                        />
                        <button id="btnLogin"
                                onClick={this.onSignIn}
                                className="btn btn-action">Log in</button>
                        <button onClick={this.onSignUp}
                                id="btnSignUp"
                                className="btn btn-action">Sign up</button>
                        <button onClick={this.onSignOut}
                                id="btnLogout"
                                className="btn btn-action hide">Log out</button>
                    </div>
                </div>
            </div>  
          )
      }

}

export default AuthForm;