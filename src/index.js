import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import * as atatus from 'atatus-spa';

ReactDOM.render(
  <React.StrictMode>
    <h1>Meet App</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
atatus.config('2acc39fb1afe48cea16db5a46310390a').install();
// atatus.notify(new Error('Test Atatus Setup'));
