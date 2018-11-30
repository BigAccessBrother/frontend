export const getTimeAndDate = (agent) => {
    const DateTime = new Date(agent.last_response_received);
    const day = DateTime.getDay();
    const month = DateTime.getMonth() + 1;
    const hour = DateTime.getHours();
    const minutes = DateTime.getMinutes();
    return `${day}.${month}, ${hour}:${minutes > 9 ? minutes : `0${minutes}`}`
}

export const getStringOrBool = (val) => {
    if (typeof val === 'string') {
        return val;
    } else if (val) {
        return 'true';
    } else return 'false';
}