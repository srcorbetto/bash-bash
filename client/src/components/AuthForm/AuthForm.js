import React from 'react';

import './AuthForm.css';

const AuthForm = props => {
    return (
        <div className="row">
            <div className="col">
                <div className="AuthForm">
                    <input type="email" placeholder="Email" id="txtEmail" />
                    <input type="password" placeholder="Password" id="txtPassword" /  >
                    <button id="btnLogin" className="btn btn-action">Log in</button>
                    <button id="btnSignUp" className="btn btn-action">Sign up</button>
                    <button id="btnLogout" className="btn btn-action hide">Log out</button>
                </div>
            </div>
        </div>
    )
}

export default AuthForm;