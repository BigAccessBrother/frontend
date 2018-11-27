import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import MainFrame from '../../components/MainFrame';


class Download extends Component {

    render() {
        return (
            <div>
                { this.props.isLoggedIn ? null : <Redirect to="/" /> }
                <MainFrame>
                    <h4>one day you'll be able to download the agent installer from this page</h4>
                </MainFrame>
            </div>
        )
    }
}

export default connect(
    ({ auth })  => ({ isLoggedIn: auth.isLoggedIn, isAdmin: auth.isAdmin })
)(Download);