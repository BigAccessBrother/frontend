import axios from "axios";
import { types } from "../../../constants";


export const getContent = (contentType, endpoint) => (dispatch, getState) => {
    
    // this can be used for almost all our GET requests
    // endpoint is the API endpoint that we're sending our request to
    // contenttype is where we store the data in our redux state
    // --> state.content.contenttype
    dispatch({ type: types.LOADING });
    axios.get(endpoint)
    .then(response => {
        dispatch({
            type: types.SET_CONTENT,
            payload: {
                key: contentType,
                value: response.data
            }
        })     
    })  
    .catch(function (error) {
        console.log(error);
    });
}

export const getAgentDetail = agent => (dispatch, getState) => {
    dispatch({ type: types.LOADING });
    axios.get(`response/agent/${agent.id}/`)
    .then(response => {
        dispatch({
            type: types.SET_AGENT_DETAIL,
            payload: {
                data: {
                    agent,
                    responses: response.data
                }
            }
        })
    })  
    .catch(function (error) {
        console.log(error);
    });
}

export const activateDeactivateAgent = agent => (dispatch, getState) => {
    dispatch({
        type: types.ACTIVATE_DEACTIVATE_AGENT,
        payload: { agent }
    })
    axios.patch(`agent/${agent.id}/activate/`, {
        is_active: !agent.is_active,
    });
}