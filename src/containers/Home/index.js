import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import LoginForm from '../LoginForm';


class Home extends Component {

    render() {
        return (
            <div>
                <h1>Hello BAB from RepRisk</h1>
                { 
                    this.props.isLoggedIn ? 
                        this.props.isAdmin ? 
                            <Redirect to="/admin/" /> : 
                            <Redirect to="/download/" /> :
                        <LoginForm />
                }
            </div>
        )
    }
}

export default connect(
    ({ auth })  => ({ isLoggedIn: auth.isLoggedIn, isAdmin: auth.isAdmin })
)(Home);