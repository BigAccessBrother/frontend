import axios from 'axios';
import { types } from '../../../constants';

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
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

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
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getUserDetail = user => (dispatch, getState) => {
  dispatch({
    type: types.SET_USER_DETAIL,
    payload: { user }
  });
};

export const activateDeactivateAgent = agent => (dispatch, getState) => {
  dispatch({
    type: types.ACTIVATE_DEACTIVATE_AGENT,
    payload: { agent }
  });
  axios.patch(`agent/${agent.id}/activate/`, {
    is_active: !agent.is_active
  });
};

export const add_standard = (data, getBack) => (dispatch, getState) => {
  data.quick_scan_age = parseInt(data.quick_scan_age);
  data.full_scan_age = parseInt(data.full_scan_age);
  data.nis_signature_last_updated = parseInt(data.nis_signature_last_updated);
  data.antivirus_signature_last_updated = parseInt(data.antivirus_signature_last_updated);
  data.antispyware_signature_last_updated = parseInt(data.antispyware_signature_last_updated);

  axios.post('standards/', data)
    .then(response => {
      dispatch(getContent('standards', 'standards/'));
      getBack();
    });
};

export const create_user = (data, getBack) => (dispatch, getState) => {
  axios.post('users/', data)
    .then(response => {
      dispatch(getContent('users', 'users/'));
      getBack();
    });
};
