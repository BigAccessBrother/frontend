import React, { Component } from 'react';
import { connect } from 'react-redux';
import userIcon from '../../assets/icons/account-b.png';
import { getUserDetail } from '../../store/actions/content';
import './style.css';

class AgentItem extends Component {
    handleClick = () => {
      this.props.dispatch(getUserDetail(this.props.user));
    }

    detail = () => this.props.detail.id
      ? this.props.detail.id === this.props.user.id
        ? 'UserItem-detail' : null : null

    render () {
      return (
        <div
          className={`UserItem ${this.detail()}`}
          onClick={this.handleClick}
        >
          <img src={userIcon} alt='user' />
          <div>{ this.props.user.email.split('@')[0] }</div>
          <hr />
          <div> { this.props.user.is_staff ? 'Admin' : 'User' }</div>
        </div>
      );
    }
}

export default connect(
  state => ({ detail: state.content.userDetail })
)(AgentItem);
