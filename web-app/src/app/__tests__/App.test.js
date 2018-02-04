import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import { createMemoryHistory } from 'history'
import AppState from '../../store/AppState'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App history={createMemoryHistory()} appState={new AppState()} />, div);
});
