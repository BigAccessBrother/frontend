import React from 'react';
import './style.css';

const AgentDetailStatus = (props) => {
  return (
    <div>
      { props.agent.latest_response.report
        ? <div
          className={
            `AgentDetailStatus-${props.agent.latest_response.report.status === 'ok'
              ? 'secure' : 'not-secure'}`
          }
        >
          <h2>
                    status: { props.agent.latest_response.report.status }
          </h2>
          { props.expand && props.agent.latest_response.report.status !== 'ok'
            ? <ul>
              {
                Object.keys(props.agent.latest_response.report).map(key => key === 'status' ? null : (
                  <li key={key}>
                    { key.replace(/_/g, ' ') } { props.agent.latest_response.report[key] }
                  </li>
                )
                )
              }
            </ul>
            : null }
        </div>
        : null }
    </div>
  );
};

export default AgentDetailStatus;
