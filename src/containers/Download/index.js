import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


class Download extends Component {

    render() {
        return (
            <div>
                { this.props.isLoggedIn ? null : <Redirect to="/" /> }
                <h1>one day you'll be able to download the agent installer from this page</h1>
            </div>
        )
    }
}

export default connect(
    ({ auth }) => ({ auth })
)(Download);