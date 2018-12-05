import React from 'react';
import { connect } from 'react-redux';
import UserItem from '../UserItem';
import './style.css';

const UserList = props => {
    return (
        <div className="UserList">
            { props.content.users ?
                props.content.users.map(user => 
                <UserItem
                    key={ user.email }
                    user={ user }
                />) : 
                null
            }
        </div>
    )
}

export default connect(
    ({ content }) => ({ content })
)(UserList);