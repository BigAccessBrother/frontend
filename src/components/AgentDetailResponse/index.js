import React from 'react';
import Typography from '@material-ui/core/Typography';
import { getTimeAndDate, getStringOrBool } from '../../utils';
<<<<<<< HEAD
// import AgentDetailApps from '../AgentDetailApps';
=======
import AgentDetailApps from '../AgentDetailApps';
>>>>>>> 2e381465422222ab642ce86a7bacdcc29c150212


const AgentDetailResponse = (props) => {
    return (
        <div>
            <Typography component="p">
                  { props.agent.last_response_received ?
                    `latest response: ${ getTimeAndDate(props.agent) } (click to show details)` :
                    'No responses from this agent yet.'
                  }
                </Typography>
                { props.expand && props.agent.last_response_received ?
                <ul>
                  { Object.keys(props.agent.latest_response).map(key => (
                    key === 'id' || key === 'agent' ? null :
                    <li key={key}>{ key.replace(/_/g, ' ') } : { getStringOrBool(props.agent.latest_response[key]) }</li>
                  ))}
                  {/* <AgentDetailApps
                    expand={ props.expand }
                    apps={ props.agent.latest_response.startup_apps }
<<<<<<< HEAD
                  >
                    startup apps
                  </AgentDetailApps>
                  <AgentDetailApps
                    expand={ props.expand }
                    apps={ props.agent.latest_response.installed_apps }
                  >
                    installed apps
                  </AgentDetailApps> */}
=======
                  /> */}
>>>>>>> 2e381465422222ab642ce86a7bacdcc29c150212
                </ul> :
                null } 
        </div>
    )
}

export default AgentDetailResponse;