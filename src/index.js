import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import store from './store';
import { blue, amber } from '@material-ui/core/colors'
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { baseAPIUrl } from './constants';
import { checkToken } from './store/actions/auth';
import Home from './containers/Home';
import Panel from './containers/Panel';
import Download from './containers/Download';


const theme = createMuiTheme({
    palette: {
        primary: amber,
        secondary: blue,
        type: 'dark',
    },
})

// default for HTTP requests:
axios.defaults.baseURL = baseAPIUrl;
axios.defaults.headers.common['Content-Type'] = 'application/json';

// get token from local storage if available:
checkToken(store);


ReactDOM.render(
    <MuiThemeProvider theme={ theme }>
        <Provider store={ store }>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/panel/" component={ Panel } />
                    <Route exact path="/download/" component={ Download } />
                    <Route path="/" component={ Home } />
                </Switch>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
