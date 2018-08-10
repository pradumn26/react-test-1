import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        if(this.props.authReducer) {
            return (<div>Header</div>)
        } else {
            return null;
        }
    }
}

function mapStateToProps({authReducer}) {
    return {authReducer};
}

export default connect(mapStateToProps)(Header);