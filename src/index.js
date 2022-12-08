import React from 'react'
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from './redux/store.js';
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
  </React.StrictMode>
);