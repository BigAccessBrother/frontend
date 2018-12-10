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
//         loading: true
//         agentfilter: null
//         // agents: [],
//         // users: [],
//         // responses: []
//     }
// }

export default combineReducers({ auth, content });
