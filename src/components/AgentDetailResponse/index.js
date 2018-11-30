import React from 'react';
import Typography from '@material-ui/core/Typography';
import { getTimeAndDate, getStringOrBool } from '../../utils';


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
                    <li>{ key.replace(/_/g, ' ') } : { getStringOrBool(props.agent.latest_response[key]) }</li>
                  ))}
                </ul> :
                null } 
        </div>
    )
}

export default AgentDetailResponse;