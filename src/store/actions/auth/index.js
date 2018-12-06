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
        console.log('something went wrong')
        console.log(error)
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
        dispatch(getActiveUser());
    })
    .catch(error => {
        alert('login failed');
        console.log('login failed');
        console.log(error);
    })
}

export const checkToken = (store) => {
    
    // check if there is an active user
    if (!store.getState().auth.isLoggedIn) {

        // check if there is a token in localstorage
        if (window.localStorage.getItem('BAB-token')) {
            
            // save token to state
            store.dispatch({
                type: types.SET_TOKEN,
                payload: {
                    token: window.localStorage.getItem('BAB-token')
                }
            })
            
            // set active user
            store.dispatch(getActiveUser())

        }
    }
}