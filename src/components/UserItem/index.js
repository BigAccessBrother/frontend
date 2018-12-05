import React, { Component } from 'react';
import { connect } from 'react-redux';
import userIcon from  '../../assets/icons/account.png'
import './style.css';


class AgentItem extends Component {

    // handleClick = () => {
    //     this.props.dispatch(getAgentDetail(this.props.agent))
    // }

    render() {
        return(
            <div 
                className="UserItem"
                onClick={this.handleClick}
            >
                <img src={ userIcon } alt="user"></img>
                <div>{ this.props.user.email.split('@')[0] }</div>
                <hr></hr>
                <div> { this.props.user.is_staff ? 'Admin' : 'Peasant' }</div>
            </div>
        )
    }
}

export default connect(
    // state => ({ detail: state.content.agentDetail.agent })
)(AgentItem);