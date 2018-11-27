import axios from "axios";
import { types } from "../../../constants";


export const getContent = (contentType, endpoint) => (dispatch, getState) => {
    
    // this can be used for almost all our GET requests
    // endpoint is the API endpoint that we're sending our request to
    // contenttype is where we store the data in our redux state
    // --> state.content.contenttype
    dispatch({ type: types.LOADING })
    axios.get(endpoint)
    .then(response => {
        console.log('content: ', contentType, response.data)
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
        alert('something went wrong!')
    });
}