import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import LoginForm from '../LoginForm';
import Header from '../../components/Header';

class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        {
          this.props.isLoggedIn
            ? this.props.isAdmin
              ? <Redirect to='/panel/' />
              : <Redirect to='/download/' />
            : <LoginForm />
        }
      </div>
    );
  }
}

export default connect(
  ({ auth }) => ({ isLoggedIn: auth.isLoggedIn, isAdmin: auth.isAdmin })
)(Home);
