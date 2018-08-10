import React from 'react';
import '../stylesheets/LoginPage.css';

const SignUpPage = () => {
    return (
        <div id="loginPageContainer">
            <div id="loginPageCard">
                <h3>Sign up</h3>
                <form action="/signUp" method="post">
                    <input className="loginPageInput" type="text" name="username" placeholder="Enter username"/>
                    <input className="loginPageInput" type="password" name="password" placeholder="Enter password"/>
                    <input className="loginPageInput" type="password" name="rePassword" placeholder="Re-enter above password"/>
                    <input className="loginPageButton btn" type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;