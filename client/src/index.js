import React, { Provider } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} />
    <App />
  </React.StrictMode>
);
