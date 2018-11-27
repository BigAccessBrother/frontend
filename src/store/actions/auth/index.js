import axios from "axios";
import { types } from "../../../constants";

export const getActiveUser = () => (dispatch, getState) => {
    
    // get user profile of active user
    axios.get('users/me/')
    .then(response => {
        dispatch({
            type: types.SET_ACTIVE_USER,
            payload: {
                user: response.data
            }
        })
    })
    .catch(error => {
        console.log(error)
        alert('something went wrong')
    })
}

export const login = (username, password) => (dispatch, getState) => {
    axios.post('auth/token/', { username, password })
    .then(response => {

        // store token in localStorage and state
        window.localStorage.setItem('BAB-token', response.data.access)
        dispatch({
            type: types.SET_TOKEN,
            payload: {
                token: response.data.access
            }
        })
        
        // get user profile
        dispatch(setActiveUser());
    })
    .catch(error => {
        console.log(error)
        alert('something went wrong')
    })
}