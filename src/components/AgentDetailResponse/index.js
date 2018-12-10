import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { getTimeAndDate } from '../../utils';
// import AgentDetailApps from '../AgentDetailApps';

const boolStandards = [
  [
    'antivirus_enabled',
    'antispyware_enabled',
    'behavior_monitor_enabled',
    'nis_enabled',
    'on_access_protection_enabled',
    'real_time_protection_enabled'
  ],
  [
    'Antivirus',
    'Antispyware',
    'Behavior Monitor',
    'Network Information Service',
    'On-Access Protection',
    'Real-Time Protection'
  ]
];

const dateStandards = [
  [
    'antispyware_signature_last_updated',
    'antivirus_signature_last_updated',
    'nis_signature_last_updated'
  ],
  [
    'Last antispyware signature update',
    'Last antivirus signature update',
    'Last NIS signature update'
  ]
];

const intStandards = [
  [
    'full_scan_age',
    'quick_scan_age'
  ],
  [
    'Last full scan',
    'Last quick scan'
  ]
];

class AgentDetailResponse extends Component {
  getLine = key => {
    const obj = this.props.agent.latest_response;
    if (boolStandards[0].includes(key)) {
      const i = boolStandards[0].indexOf(key);
      return `${boolStandards[1][i]} ${obj[key] ? 'enabled' : 'disabled'}`;
    } else if (dateStandards[0].includes(key)) {
      const i = dateStandards[0].indexOf(key);
      return `${dateStandards[1][i]}: ${obj[key]}`;
    } else if (intStandards[0].includes(key)) {
      const i = intStandards[0].indexOf(key);
      return `${intStandards[1][i]}: ${obj[key]} days ago`;
    } else {
      return `${key.replace(/_/g, ' ')}: ${obj[key]}`;
    }
  }

  render () {
    return (
      <div>
        <Typography component='p'>
          { this.props.agent.last_response_received
            ? `latest response: ${getTimeAndDate(this.props.agent)} (click to show details)`
            : 'No responses from this agent yet.'
          }
        </Typography>
        { this.props.expand && this.props.agent.last_response_received
          ? <ul>
            { Object.keys(this.props.agent.latest_response).map(key => (
              key === 'id' || key === 'agent' || key === 'report' || key === 'date_created' ? null
                : <li key={key}>
                  { this.getLine(key) }
                </li>
            ))}
            {/* <AgentDetailApps
                    expand={ this.props.expand }
                    apps={ this.props.agent.latest_response.startup_apps }
                  >
                    startup apps
                  </AgentDetailApps>
                  <AgentDetailApps
                    expand={ this.props.expand }
                    apps={ this.props.agent.latest_response.installed_apps }
                  >
                    installed apps
                  </AgentDetailApps> */}
          </ul>
          : null }
      </div>
    );
  }
}

export default AgentDetailResponse;
