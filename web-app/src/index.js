import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AppState from './state/AppState'

const appState = new AppState();


ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
registerServiceWorker();
