import moment from 'moment';

export const getTimeAndDate = (agent) => {
  if (agent.latest_response === 'no responses from this agent') {
    return 'none';
  }
  return moment(agent.last_response_received).format('DD.MM, hh:mm');
};
