import React from 'react';
import AgentItem from '../../containers/AgentItem';
import './style.css';
import AgentFilters from '../../containers/AgentFilters';

const AgentList = (props) => {
    console.log('agentList', props);
    
    return (
        <div className="AgentList">
            <AgentFilters />
            <div className="AgentList-container">
            {
                props.agents ?
                    props.agents.map(agent => {
                            return props.filter(agent) ? (
                                <AgentItem key={agent.computer_name} agent={agent} />
                            ) : null
                        }
                    )
                : null
            }
            </div>
        </div>
    )
}

export default AgentList;