import React from 'react';

import './AuthForm.css';

const AuthForm = props => {
    return (
        <div className="row">
            <div className="col">
                <div className="AuthForm">
                    <input onChange={props.email}
                           required
                           type="email"
                           placeholder="Email"
                           id="txtEmail"
                    />
                    <input onChange={props.password}
                           required type="password"
                           placeholder="Password"
                           id="txtPassword"
                    />
                    <button id="btnLogin"
                            onClick={props.signIn}
                            className="btn btn-action">Log in</button>
                    <button onClick={props.signUp}
                            id="btnSignUp"
                            className="btn btn-action">Sign up</button>
                    <button onClick={props.signOut}
                            id="btnLogout"
                            className="btn btn-action hide">Log out</button>
                </div>
            </div>
        </div>
    )
}

export default AuthForm;