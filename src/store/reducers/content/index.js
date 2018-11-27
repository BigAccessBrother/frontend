import { types } from "../../../constants";

initialState = {
    loading: true,
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
        default:
            return state
    }
}