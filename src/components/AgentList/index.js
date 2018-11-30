import React from 'react';
import AgentItem from '../../containers/AgentItem';
import AgentFilters from '../../containers/AgentFilters';
import './style.css';
import AgentDetail from '../../containers/AgentDetail';
import { connect } from 'react-redux';


const AgentList = (props) => {
    console.log('agentList', props);
    
    return (
        <div className="AgentList">
            <AgentFilters />
            <div className="AgentList-outer-container">
                { props.content.agentDetail.agent.id ?
                <AgentDetail
                    agent={props.content.agentDetail.agent}
                    responses={props.content.agentDetail.responses}
                /> :
                null }
                <div className="AgentList-container">
                {
                    props.content.agents ?
                        props.content.agents.map(agent => props.content.agentFilter(agent) ?
                                    <AgentItem key={agent.computer_name} agent={agent} /> : 
                                    null 
                        ) :
                    null
                }
            </div>
            </div>
        </div>
    )
}

export default connect(
    ({ content }) => ({ content })
)(AgentList);