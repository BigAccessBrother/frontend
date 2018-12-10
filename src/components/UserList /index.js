import React from 'react';
import { connect } from 'react-redux';
import UserItem from '../UserItem';
import './style.css';
import UserDetail from '../../containers/UserDetail';

const UserList = props => {
  return (
    <div className='UserList'>
      { props.content.userDetail.id
        ? <UserDetail user={props.content.userDetail} />
        : null }
      <div className={`UserList-container ${props.content.userDetail.id ? 'UserList-with-detail' : null}`}>
        { props.content.users
          ? props.content.users.map(user =>
            <UserItem
              key={user.email}
              user={user}
            />)
          : null
        }
      </div>
    </div>
  );
};

export default connect(
  ({ content }) => ({ content })
)(UserList);
