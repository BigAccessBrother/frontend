import { types } from "../../../constants";

const initialState = {
    loading: true,
    agentFilter: agent => true,
    agents: [],
    agentDetail: {
        agent: {},
        responses: []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOADING:
            return {
                ...state,
                loading: true,
            }
        case types.SET_CONTENT:
            return {
                ...state,
                loading: false,
                [action.payload.key]: action.payload.value,
            }
        case types.SET_AGENT_FILTER:
            return {
                ...state,
                agentFilter: action.payload.filter,
            }
        case types.SET_AGENT_DETAIL:
            return {
                ...state,
                loading: false,
                agentDetail: action.payload.data,
            }
        default:
            return state
    }
}