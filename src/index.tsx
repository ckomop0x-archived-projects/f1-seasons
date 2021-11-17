import React from 'react';
import { render } from 'react-dom';
import App from './App';
const root = document.getElementById('root');

if (root) {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
}
