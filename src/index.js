import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
