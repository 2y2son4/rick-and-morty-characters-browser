// React
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

// components
import App from './components/App';

// stylesheets
import './stylesheets/index.scss';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
