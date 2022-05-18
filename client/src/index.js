// import React, { Provider } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Provider store={store} />
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
