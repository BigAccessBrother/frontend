import { types } from "../../../constants";

export default (state = {}, action) => {
    switch (action.type) {
        case types.SET_CONTENT:
            return state
        default:
            return state
    }
}