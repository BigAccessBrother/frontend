import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAgentDetail } from '../../store/actions/content';
import OsIcon from '../../components/OsIcon';
import { getTimeAndDate } from '../../utils';
import './style.css';


class AgentItem extends Component {

    getInitials = () => {
        const email = this.props.agent.user.email
        const initials = email.slice(0, email.indexOf('@'))
        const num = this.props.agent.computer_name.slice(-9,-8)
        return `${initials} ${num}`
    }

    handleClick = () => {
        this.props.dispatch(getAgentDetail(this.props.agent))
    }

    render() {
        return(
            <div 
                className={
                    `AgentItem ${this.props.agent.secure ? "AgentItem-secure" : "AgentItem-not-secure"}`
                    + ` ${this.props.agent.is_active ? null : 'AgentItem-disabled'}`
                }
                onClick={this.handleClick}
            >
                <OsIcon type={ this.props.agent.latest_response.os_type } />
                <div className="AgentItem-email">{ this.getInitials() }</div>
                <hr></hr>
                <div>LR: { getTimeAndDate(this.props.agent) }</div>
            </div>
        )
    }
}

export default connect()(AgentItem);