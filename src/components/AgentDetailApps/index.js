import React from 'react';

const AgentDetailApps = props => {
    return (
        <li>
            { props.expand === 1 ?
                <div>startup apps: {props.apps.length} (click again to expand)</div> : 
                <ul>
                    startup apps: (hover for detail)
                    {
                        props.apps.map(app => <li>{app.name}</li>)
                    }
                </ul>
            }
        </li>
    )
}

export default AgentDetailApps;