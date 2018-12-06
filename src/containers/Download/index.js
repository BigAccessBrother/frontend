import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import MainFrame from '../../components/MainFrame';
import OsInstaller from '../OsInstaller';


class Download extends Component {

    render() {
        return (
            <div>
                { this.props.isLoggedIn ? null : <Redirect to="/" /> }
                <MainFrame>
                        <OsInstaller />
                </MainFrame>
            </div>
        )
    }
}

export default connect(
    ({ auth })  => ({ isLoggedIn: auth.isLoggedIn, isAdmin: auth.isAdmin })
)(Download);