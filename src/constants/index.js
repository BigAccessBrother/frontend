export const types = {
    SET_TOKEN: 'SET_TOKEN',
    SET_ACTIVE_USER: 'SET_ACTIVE_USER',
    LOGOUT: 'LOGOUT',
    SET_CONTENT: 'SET_CONTENT',
}

export const baseAPIUrl = 'https://accessbrother.propulsion-learn.ch/api/';

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
            // store.dispatch()

        } else {
            console.log('no token in localStorage');
        }
    }
}