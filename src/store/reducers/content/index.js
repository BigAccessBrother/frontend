import { types } from '../../../constants';

const initialState = {
  loading: true,
  agentFilter: agent => true,
  agents: [],
  agentDetail: {
    agent: {},
    responses: []
  },
  userDetail: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: true
      };
    case types.SET_CONTENT:
      return {
        ...state,
        loading: false,
        [action.payload.key]: action.payload.value
      };
    case types.SET_AGENT_FILTER:
      return {
        ...state,
        agentFilter: action.payload.filter
      };
    case types.SET_AGENT_DETAIL:
      return {
        ...state,
        loading: false,
        agentDetail: action.payload.data
      };
    case types.SET_USER_DETAIL:
      return {
        ...state,
        loading: false,
        userDetail: { ...action.payload.user }
      };
    case types.ACTIVATE_DEACTIVATE_AGENT:
      const newAgents = state.agents.map(
        agent => agent.id === action.payload.agent.id
          ? { ...agent, is_active: !agent.is_active }
          : agent
      );
      return {
        ...state,
        agents: newAgents,
        agentDetail: {
          ...state.agentDetail,
          agent: {
            ...state.agentDetail.agent,
            is_active: !state.agentDetail.agent.is_active
          }
        }
      };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
