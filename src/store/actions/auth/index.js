import axios from "axios";
import { types } from "../../../constants";

export const getActiveUser = () => (dispatch, getState) => {
    
    // get user profile of active user
    axios.get('users/me/')
    .then(response => {
        dispatch({
            type: types.SET_ACTIVE_USER,
            payload: {
                user: response.data[0] // this needs to be changed once back-end is up to date
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
        dispatch(getActiveUser());
    })
    .catch(error => {
        console.log(error)
        alert('something went wrong')
    })
}

export const checkToken = (store) => {
    
    // check if there is am active user
    if (!store.getState().auth.isLoggedIn) {

        // check if there is a token in localstorage
        if (window.localStorage.getItem('BAB-token')) {
            
            // save token to state
            console.log('getting token from localStorage')
            store.dispatch({
                type: types.SET_TOKEN,
                payload: {
                    token: window.localStorage.getItem('BAB-token')
                }
            })
            
            // set active user
            store.dispatch(getActiveUser())

        } else {
            console.log('no token in localStorage');
        }
    }
}