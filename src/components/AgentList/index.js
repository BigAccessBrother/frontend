import React from 'react';
import AgentItem from '../AgentItem';
import './style.css';

const AgentList = (props) => {
    console.log('agentList', props);
    
    return (
        <div className="AgentList">
            {
                props.agents ?
                    props.agents.map(agent => {
                            return (
                                <AgentItem key={agent.computer_name} agent={agent} />
                            )
                        }
                    )
                : null
            }
        </div>
    )
}

export default AgentList;