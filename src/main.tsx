import { createRoot } from 'react-dom/client';
import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
