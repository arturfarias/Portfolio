import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "./App.css";
import PageManager from "./routes/PageManager";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <PageManager />
  </React.StrictMode>
);

reportWebVitals();
