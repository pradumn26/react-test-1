import React, {Component} from 'react';
import {connect} from 'react-redux';

import LoginPage from './LoginPage';
import HomePage from './HomePage';

class LandingPage extends Component {
    render() {
        switch (this.props.authReducer) {
            case null:
                return null;
            case false:
                return <LoginPage/>;
            default:
                return <HomePage/>;
        }
    }
}

function mapStateToProps({authReducer}) {
    return {authReducer};
}

export default connect(mapStateToProps)(LandingPage);