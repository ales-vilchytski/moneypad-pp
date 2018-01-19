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

const jss = create(jssPreset());
jss.options.insertionPoint = 'insertion-point-jss';
jss.options.createGenerateClassName = createGenerateClassName;

const appState = new AppState();

ReactDOM.render(
    <JssProvider jss={jss}>
        <App appState={appState} />
    </JssProvider>,
    document.getElementById('root'));
registerServiceWorker();
