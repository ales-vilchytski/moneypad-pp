import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import AppState from '../../store/AppState'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App appState={new AppState()} />, div);
});
