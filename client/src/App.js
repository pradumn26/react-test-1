import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchUser} from './actions';
import LandingPage from './components/LandingPage';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" component={LandingPage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, {fetchUser})(App);