import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue, yellow } from '@material-ui/core/colors'
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: yellow,
    },
})

// checkTocken(store)


ReactDOM.render(
    <MuiThemeProvider theme={ theme }>
        <Provider store={ store }>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={ App } />
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
