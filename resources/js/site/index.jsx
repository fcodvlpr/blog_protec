import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import store from './store';

const root_div = document.getElementById("root");
const root = createRoot(root_div);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);