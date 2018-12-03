import moment from 'moment';

export const getTimeAndDate = (agent) => {
    if (agent.latest_response === 'no responses from this agent') {
        return 'none'
    }
    const DateTime = new Date(agent.last_response_received);
    return moment(agent.last_response_received).format('DD.MM, hh:mm')
}

export const getStringOrBool = (val) => {
    if (typeof val === 'string') {
        return val;
    } else if (val) {
        return 'true';
    } else return 'false';
}