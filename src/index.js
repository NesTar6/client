import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept();

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
