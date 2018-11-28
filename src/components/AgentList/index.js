import React from 'react';
import AgentItem from '../../containers/AgentItem';
import AgentFilters from '../../containers/AgentFilters';
import './style.css';
import AgentDetail from '../../containers/AgentDetail';


const AgentList = (props) => {
    console.log('agentList', props);
    
    return (
        <div className="AgentList">
            <AgentFilters />
            <AgentDetail />
            {}
            <div className="AgentList-container">
            {
                props.agents ?
                    props.agents.map(agent => props.filter(agent) ?
                                <AgentItem key={agent.computer_name} agent={agent} /> : 
                                null 
                    ) :
                null
            }
            </div>
        </div>
    )
}

export default AgentList;