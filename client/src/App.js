import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchUser} from './actions';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={LandingPage}/>
                        <Route path="/signUp" exact component={SignUpPage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, {fetchUser})(App);