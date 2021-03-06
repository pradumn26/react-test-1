import React from 'react';
import '../stylesheets/LoginPage.css';

const LoginPage = () => {
    return (
        <div id="loginPageContainer">
            <div id="loginPageCard">
                <h3>Login</h3>
                <form action="/login" method="post">
                    <input className="loginPageInput" type="text" name="username" placeholder="Enter username"/>
                    <input className="loginPageInput" type="password" name="password" placeholder="Enter password"/>
                    <input className="loginPageButton btn" type="submit"/>
                    <div>New user? <a href="/signUp">Sign up</a></div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;