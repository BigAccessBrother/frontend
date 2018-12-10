import React from 'react';
import AgentItem from '../../containers/AgentItem';
import AgentFilters from '../../containers/AgentFilters';
import AgentDetail from '../../containers/AgentDetail';
import { connect } from 'react-redux';
import './style.css';

const AgentList = (props) => {
  return (
    <div className='AgentList'>
      <AgentFilters />
      <div>
        { props.content.agentDetail.agent.id
          ? <AgentDetail
            agent={props.content.agentDetail.agent}
            responses={props.content.agentDetail.responses}
          />
          : null }
        <div className={`AgentList-container ${props.content.agentDetail.agent.id ? 'AgentList-with-detail' : null}`}>
          {
            props.content.agents
              ? props.content.agents.map(agent => props.content.agentFilter(agent)
                ? <AgentItem key={agent.computer_name} agent={agent} />
                : null
              )
              : null
          }
        </div>
      </div>
    </div>
  );
};

export default connect(
  ({ content }) => ({ content })
)(AgentList);
