import React from 'react';
import { Typography } from '@material-ui/core';


const AgentDetailStatus = (props) => {
    return (
        <div>
        { props.agent.latest_response.report && props.expand ?
            <div>
                <Typography component="p">
                    status report: { props.agent.latest_response.report.status }
                </Typography>
                <ul>
                    {
                        Object.keys(props.agent.latest_response.report).map(key => (
                            <li key={key}>
                                { key }: { props.agent.latest_response.report[key] }
                            </li>
                            )
                            )
                        }
                </ul>
            </div> :
        null }
        </div>
    )
}

export default AgentDetailStatus;