import React from 'react';

const AgentDetailApps = props => {
  return (
    <li>
      { props.expand === 1
        ? <div>{ props.children }: {props.apps.length} (click again to expand)</div>
        : <div>
          { props.children }: (hover for detail)
          <ul>
            {
              props.apps.map(app => <li key={app.name}>{app.name}</li>)
            }
          </ul>
        </div>
      }
    </li>
  );
};

export default AgentDetailApps;
