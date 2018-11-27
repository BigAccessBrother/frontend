import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import MainFrame from '../../components/MainFrame';

class Admin extends Component {

    render() {
        return (
            <div>
            { this.props.auth.isLoggedIn && this.props.auth.isAdmin ? null : <Redirect to="/" /> }
                <MainFrame>
                    <h1>So you are the admin user...</h1>
                </MainFrame>
            </div>
        )
    }
}

export default connect(
    state => ({ ...state })
)(Admin);