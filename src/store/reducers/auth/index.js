import { types } from "../../../constants";
import axios from "axios";


const initialState = {
    token: '',
    activeUser: {},
    isLoggedIn: false,
    isAdmin: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TOKEN:
            const auth = `Bearer ${action.payload.token}`
            axios.defaults.headers.common['Authorization'] = auth
            return {
                ...state,
                token: action.payload.token,
            }
        case types.SET_ACTIVE_USER:
            return {
                ...state,
                activeUser: action.payload.user,
                isLoggedIn: true,
                isAdmin: action.payload.user.is_staff
            }
        case types.LOGOUT:
            window.localStorage.removeItem('BAB-token');
            return initialState
        default:
            return state;
    }
}

