import React from 'react';

const AgentDetailApps = props => {
    return (
        <li>
            { props.expand === 1 ?
<<<<<<< HEAD
                <div>{ props.children }: {props.apps.length} (click again to expand)</div> : 
                <div>
                    { props.children }: (hover for detail)
                    <ul>
                        {
                            props.apps.map(app => <li key={app.name}>{app.name}</li>)
                        }
                    </ul>
                </div>
=======
                <div>startup apps: {props.apps.length} (click again to expand)</div> : 
                <ul>
                    startup apps: (hover for detail)
                    {
                        props.apps.map(app => <li>{app.name}</li>)
                    }
                </ul>
>>>>>>> 2e381465422222ab642ce86a7bacdcc29c150212
            }
        </li>
    )
}

export default AgentDetailApps;