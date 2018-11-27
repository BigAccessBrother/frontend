import { combineReducers } from 'redux';
import auth from './auth';
import content from './content';

// const stateSketch = {
//     auth: {
//         token: '',
//         activeUser: {},
//         isLoggedIn: false
//     },
//     content: {
//         // agents: [],
//         // users: [],
//         // responses: []
//     }
// }

export default combineReducers({ auth, content });