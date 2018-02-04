import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'
import './index.css';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import AppState from './store/AppState'
import { createBrowserHistory } from 'history'

const jss = create(jssPreset());
jss.options.insertionPoint = 'insertion-point-jss';
jss.options.createGenerateClassName = createGenerateClassName;

const appState = new AppState();
const history = createBrowserHistory();

ReactDOM.render(
    <JssProvider jss={jss}>
        <App appState={appState} history={history} location={history.location} />
    </JssProvider>,
    document.getElementById('root'));
registerServiceWorker();
