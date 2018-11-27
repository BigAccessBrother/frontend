import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Admin extends Component {

    render() {
        return (
            <div>
            { this.props.isLoggedIn && this.props.isAdmin ? null : <Redirect to="/" /> }
                <h1>So you are the admin user...</h1>
            </div>
        )
    }
}

export default connect(
    ({ auth }) => ({ auth })
)(Admin);