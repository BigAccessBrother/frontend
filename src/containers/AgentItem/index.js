import React, { Component } from 'react';
import monitor from '../../assets/icons/monitor.png';
import './style.css';

class AgentItem extends Component {

    getTimeAndDate = () => {
        const DateTime = new Date(this.props.agent.last_response_received);
        const day = DateTime.getDay();
        const month = DateTime.getMonth() + 1;
        const hour = DateTime.getHours();
        const minutes = DateTime.getMinutes();
        return `${day}/${month}, ${hour}:${minutes}`
    }

    render() {
        return(
            <div className={`AgentItem ${this.props.agent.secure ? "AgentItem-secure" : "AgentItem-not-secure"}`}>
                <img 
                    src={ monitor }
                    alt="machine"
                />
                <div className="AgentItem-email">{ this.props.agent.user.email }</div>
                <hr></hr>
                <div>LR: { this.getTimeAndDate() }</div>
            </div>
        )
    }
}

export default AgentItem;